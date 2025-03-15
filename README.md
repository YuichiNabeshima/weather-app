# weather-app

# Deployment Guide

## Step 1: Copy Files to Lambda
Copy the files from the `dist` directory to your AWS Lambda function.

## Step 2: Set Environment Variables
Set the following environment variables for the Lambda function:

- `ALERT_EMAIL_TO`: The email address to receive alerts.
- `SES_EMAIL`: The sender email address.
- `FORCE_SEND_EMAIL`: If set to `true`, emails will be sent regardless of conditions.

## Step 3: Update Lambda Policy
Add the necessary permissions to the Lambda execution role:

- Full access to DynamoDB
- Full access to Amazon SES

## Step 4: Verify Email Addresses
Verify both the sender and recipient email addresses in Amazon SES (you can use the same email address for both).

Amazon SES will send a confirmation email. Click the link in the email to complete the verification.

## Step 5: Create a DynamoDB Table
Create a new DynamoDB table with the following settings:

- **Table Name**: `weatherHistory`

## Step 6: Deploy and Test
Deploy the Lambda function and run a test. If the data is successfully stored in DynamoDB, the setup is complete.
