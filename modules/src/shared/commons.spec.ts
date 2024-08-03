// commons.test.ts
import { getEnvTest } from './commons';

describe('get environment variable test', () => {
  beforeEach(() => {
    // Clear the environment variables before each test
    delete process.env.VITE_ENV_1;
    delete process.env.VITE_ENV_2;
  });

  it('value ENV_1 & ENV_2 should be exist and concatenated', () => {
    // Set the environment variables for this test
    process.env.VITE_ENV_1 = 'ping';
    process.env.VITE_ENV_2 = 'pong';

    const value = getEnvTest();
    expect(value).toEqual('pingpong');
  });

  it('should return empty string if environment variables are not set', () => {
    const value = getEnvTest();
    expect(value).toEqual('');
  });

  it('should handle one environment variable being set', () => {
    process.env.VITE_ENV_1 = 'ping';

    const value = getEnvTest();
    expect(value).toEqual('ping');
  });
});