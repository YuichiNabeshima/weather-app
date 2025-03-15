import axios from "axios";

export const fetchWeather = async (latitude: number, longitude: number) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    
    const response = await axios.get(url);
    return response.data.current_weather;
};
