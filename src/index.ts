import { fetchWeather } from "./handlers/fetchWeather";
import { checkWeather } from "./handlers/checkWeather";
import { sendAlert } from "./handlers/sendAlert";
import { saveRecord } from "./handlers/saveRecord";

const LATITUDE = 49.2827;
const LONGITUDE = -123.1207;
const ALERT_EMAIL = process.env.ALERT_EMAIL_TO as string;

export const handler = async () => {
    const weatherData = await fetchWeather(LATITUDE, LONGITUDE);
    await saveRecord(weatherData);

    if (!checkWeather(weatherData)) {
        await sendAlert(ALERT_EMAIL, weatherData);
    }
};
