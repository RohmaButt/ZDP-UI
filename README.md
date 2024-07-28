# ZDP UI Service

## Setup the project:

1. Clone UI service repo with `git clone https://ZDP-DEV@dev.azure.com/ZDP-DEV/ZDP-PIM/_git/ZDP-UI`.
2. Create a `.npmrc` file at the root directory of your project
3. Paste the following in the `.npmrc` file:

```
registry=https://pkgs.dev.azure.com/ZDP-DEV/_packaging/ZDP-UI/npm/registry/
always-auth=true
```

4. Run in the terminal `npm i -g vsts-npm-auth`
5. Now, run in the terminal `vsts-npm-auth -config .npmrc`
6. If you get any error about command not found or recognizable then please troubleshoot npm setup in your environment by going through [Troubleshoot](https://learn.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops&tabs=windows%2Cclassic#troubleshoot) Or you can also try with `npx vsts-npm-auth -config .npmrc`
7. On success, it will display the path where .npmrc was created and if it does not display the path then it would be `C:\Users\<user-name>\.npmrc` (Replace <user-name> with your actual username)
8. Go to the path where `.npmrc` was created and open the file. The path will look like C:\Users\<user-name>\.npmrc
9. This step is optional if you want to keep the token global rather than local to the project directory. Copy the content of file generated in previous steps to this file.
10. This step is also optional if you choose to keep the token global. Open a terminal or command prompt and run the following command to set the token as an export variable:

For Linux/macOS:
`export NPM_TOKEN=YOUR_AUTH_TOKEN`

For Windows (Command Prompt):
`set NPM_TOKEN=YOUR_AUTH_TOKEN`

For Windows (PowerShell):
`$env:NPM_TOKEN="YOUR_AUTH_TOKEN"`

Replace `YOUR_AUTH_TOKEN` with the actual value of your authentication token.

11. This step is also option if you want to keep the token global. Add the above command to ~/.bashrc, ~/.zshrc or add Path Environment variable according to the respective Operating System
12. Run `npm install`

## Using the service (Installing module from registery):

1. Clone your repo where you want to import (install) ZDP UI module
2. Repeat the steps 2, 3 from setup guideline to create .npmrc file at the root directory of your repo (this time your own repo, not the UI service module clone).
3. Generate npmrc token specifications using steps 4, 5, 6, 7 if you haven't generated token previously
4. Now you can run `npm install @zdp-pim/zdp-ui` in the root dir of your project where zdp-ui is needed to be installed

## Publishing Zdp Ui:

1. To publish a new version of zdp-ui, you will need to have `.npmrc` generated from the above steps
2. Commit the changes with commit message of pattern "perf: <your-message>", "feat: <your-message>" or "fix: <your-message>". Note that semantic-release needs the feat or fix prefix in the latest commit to calculate the next version of the package. More on versioning with semantic-release is available at [Semantic Release versioning](https://medium.com/agoda-engineering/automating-versioning-and-releases-using-semantic-release-6ed355ede742)
3. Now release using command: `npm run release`
4. Confirm if the output confirms the successful publish of the package
