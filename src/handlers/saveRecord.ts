import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const dbClient = new DynamoDBClient({ region: "us-west-2" });

export const saveRecord = async (weatherData: any) => {
  const params = {
      TableName: "WeatherHistory",
      Item: {
        id: { S: new Date().toISOString() },
        time: { S: weatherData.time.toString() },
        interval: { N: weatherData.interval.toString() },
        temperature: { N: weatherData.temperature.toString() },
        windspeed: { N: weatherData.windspeed.toString() },
        winddirection: { N: weatherData.winddirection.toString() },
        is_day: { N: weatherData.is_day.toString() },
        weathercode: { N: weatherData.weathercode.toString() }
      },
  };

  await dbClient.send(new PutItemCommand(params));
};
