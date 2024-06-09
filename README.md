
-- INSTALLATION INSTRUCTIONS
To set up the framework:

    Install NodeJS:
        Use version 20.14.0 LTS.
        Download: NodeJS official website.

    Clone the Repository:
        Name: renfe.
        Clone command: git clone https://github.com/jbeltran-it/renfe.git

    Install Dependencies:
        Command: npm install

    Install Playwright and Browsers:
        Command: npx playwright install

    Set Environment Variables:
        PowerShell: $env:TESTENV = "prod"
        CMD: set TESTENV=prod

    Run the Tests:
        Command: npx playwright test --headed
