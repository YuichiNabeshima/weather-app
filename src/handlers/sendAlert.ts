import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-west-2" });

export const sendAlert = async (email: string, weatherData: any) => {
    const params = {
        Destination: { ToAddresses: [email] },
        Message: {
            Body: { Text: { Data: `⚠️ Weather Alert: ${JSON.stringify(weatherData)}` }},
            Subject: { Data: "⚠️ Severe Weather Alert!" },
        },
        Source: "yuichi.nabeshima0243@mycanctb.ca",
    };

    await ses.send(new SendEmailCommand(params));
};
