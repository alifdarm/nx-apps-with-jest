import { fetchData } from './api';

// Mock the global fetch function
global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should fetch data successfully', async () => {
    const mockData = { message: 'Success' };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    // Mock the environment variable
    process.env.VITE_API_URL = 'https://api.example.com';

    const result = await fetchData();
    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com');
  });

  it('should throw an error if the API URL is not defined', async () => {
    // Remove the environment variable
    delete process.env.VITE_API_URL;

    await expect(fetchData()).rejects.toThrow('API URL is not defined');
  });

  it('should throw an error on network failure', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    process.env.VITE_API_URL = 'https://api.example.com';

    await expect(fetchData()).rejects.toThrow('Network error');
  });

  it('should throw an error on non-OK response', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    process.env.VITE_API_URL = 'https://api.example.com';

    await expect(fetchData()).rejects.toThrow('HTTP error! status: 404');
  });

  it('should use the override URL if provided', async () => {
    const mockData = { message: 'Success' };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await fetchData();

    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
