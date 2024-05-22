const fetchData = async () => {
  try {
    // Fetch data from API
    const response = await fetch('api_endpoint_here');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { fetchData };