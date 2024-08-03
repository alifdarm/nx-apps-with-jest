export async function fetchData() {
  const url = import.meta.env.VITE_API_URL;

  if (!url) {
    throw new Error('API URL is not defined in environment variables');
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Could not fetch data: ', error);
    throw error;
  }
}
