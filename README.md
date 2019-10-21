# node-express-app

> A super simple web app with Node.js and the Express web framework

## Links

- [Demo](https://node-express-app-563.herokuapp.com/)
- [Source](https://github.com/denisecase/node-express-app)

## Requirements

- A browser (e.g., Chrome)
- A text editor (e.g., VS Code, or Notepad++, or Chrome)

## Benefits

- Node.js non-blocking event loop supports many concurrent requests
- Express framework for web apps offers concise, easy-to-use API
- Built-in objects for application, request, response, with HTTP verb methods

## Prerequisites

1. Node.js installed
2. npm Node Package Manager (comes with Node.js)

## Keep Some Files out of the Repo

We added a .gitignore file to list files and folders we don't want to commit to the repo (e.g., the very large node_modules folder and our personal settings for VS Code).

## Make Use of Free Packages

In addition to Node.js, we use additional free software packages.
These are listed in package.json:

- [Express web framework](https://expressjs.com/)
- [Config](https://www.npmjs.com/package/config)
- [Nodemon - live updates](https://nodemon.io/)

Development dependencies are listed separately in package.json as these aren't needed in production (e.g. when hosting your live app with a cloud provider).

## Keep Dependencies Current

We use the "latest" version to keep current. In production, you'll choose a version to avoid breaking changes. Specific version numbers for all packages are kept in the auto-generated package-lock.json file.

## Install Dependencies Locally

It's easy to install the dependencies so you can run and test your app locally. Open PowerShell here as Administrator, and run: `npm install`. Explore the new node_modules folder.

```PowerShell
npm install
```

## Start App

"Open PowerShell Here as Admin" and start your app with the node command.

```PowerShell
node app.js
```

## Open a Browser Client

Open a web browser. Try these URLs:

1. <http://127.0.0.1:3002/> or <http://localhost:3002/>.
1. <http://localhost:3002/hello>
1. <http://localhost:3002/big>
1. <http://localhost:3002/greeting/42>
1. <http://localhost:3002/yo/Lohita>
1. <http://localhost:3002/yo/Rahul>
1. <http://localhost:3002/yo/Teja>
1. <http://localhost:3002/fortune>

## Modify and Restart Your Node Server

After updating code, use hit CTRL-C CTRL-C to stop your Node server. Restart the server to see your changes.

## OR Use Nodemon

See package.json "scripts" and explore the "run dev" entry. This script starts the server with nodemon ("node monitor") instead of node. Nodemon listens for code changes and restarts automatically. Run a script by calling it with npm:

```PowerShell
npm run dev
```

## Find Your IP address

Open PowerShell as Admin, run ipconfig. Locate your IPv4 address. Invite others on your network to interact with your server-side app.

```PowerShell
ipconfig
```

## Troubleshooting

If you get:

`Error: listen EADDRINUSE: address already in use 127.0.0.1:3002`

There is already an app running on the port. Hit CTRL+ALT+DELETE to see the tasks, and find the running app and Right-click / End Task to kill the current version. Then restart the app.

## Terms

- [Node.js platform](https://nodejs.org/en/)
- [Express web framework API](https://expressjs.com/en/api.html)
- npm (Node package manager)
- npx (npm package runner; npm + execute)
- nodemon
- npm install {packagename}
- npm install -g {packagename}
- npm start
- package.json
- .gitignore
- localhost (127.0.0.1)
- host
- port
- URI
- URL
- route
- web server
- web service
- web client
- web request
- web response
- web security & [Helmet](https://helmetjs.github.io/)

## Optional: Create an Express app from scratch

1. Create a folder for the app (use lower-case-kebob-case).
1. Add app.js, README.md, and .gitignore.
1. Open PowerShell and run `npm init` to generate package.json.

```PowerShell
npm install
node app.js
```

## Optional: Creating files

In PowerShell, use New-Item:

```PowerShell
ni .gitignore
```

OR in Bash, use touch:

```Bash
touch .gitignore
```

## Optional: Deployment

Heroku will host a server-side app for free. Install the Heroku command line interface (CLI).
On Windows, use Git Bash to execute the commands - NOT PowerShell. Add an alias for 'heroku' in addition to 'origin'.

- [Heroku hosting](https://devcenter.heroku.com)
- [Git Bash Shell for Heroku CLI](https://devcenter.heroku.com/articles/git)

## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)
