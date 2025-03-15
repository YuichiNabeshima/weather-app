export const checkWeather = (weatherData: any) => {
  const temperature = weatherData.temperature;
  const precipitation = weatherData.weathercode;
  
  if (temperature >= 35 || precipitation === 95) {
      return true;
  }
  return false;
};
