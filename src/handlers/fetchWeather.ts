export const fetchWeather = async (latitude: number, longitude: number) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const response = await fetch(url);

  if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
  }

  const data = await response.json();
  return data.current_weather;
};
