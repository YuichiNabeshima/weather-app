# weather-app

## Set up
### Clone repository
```sh
git clone 
```

### Install Node.js for local environment
#### 1. Verify nvm Installation

Open **Command Prompt (cmd)** or **PowerShell** and run:

```sh
nvm version
```

#### 2. Installing nvm-windows

If you don't have `nvm-windows` installed, follow these steps:

##### 1. Download nvm-windows
- Visit the [nvm-windows GitHub Releases page](https://github.com/coreybutler/nvm-windows/releases).
- Download the latest installer (`nvm-setup.zip`).

##### 2. Install nvm-windows
- Extract the `nvm-setup.zip` file and run the installer (`nvm-setup.exe`).
- Follow the installation wizard and choose your installation directory.

##### 3. Verify the Installation
- After installation, restart your Command Prompt or PowerShell.
- Run the following command to verify the installation:
  ```bash
  nvm version
  ```


#### 3. Install and Use Node.js 22
Run the following commands:

```
nvm install 22
nvm use 22
```

To verify the installation:

```
node -v
```

### Init npm
```bash
npm install
```

### Install AWS CLI

1. Download the AWS CLI installer from the official AWS website:  
   [AWS CLI Download](https://aws.amazon.com/cli/)
   
2. Run the installer and follow the prompts to complete the installation.

3. Once installed, open Command Prompt and run the following command to verify the installation:
```bash
aws --version
```
```bash
aws configure
```

You will need:

- AWS Access Key ID
- AWS Secret Access Key
- Default region name
- Default output format

### Install AWS SAM CLI
1. Download the AWS SAM CLI installer for Windows from the official website:  
   [AWS SAM CLI Download](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-windows.html)

2. Run the installer and follow the instructions to complete the installation.

3. After installation, verify the SAM CLI is installed by running the following command:
```bash
sam --version
```

```bash
sam build
```

```bash
sam deploy --guided
```