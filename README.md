# node-express-app

> A super simple web app with Node.js and the Express web framework

## Links

- [Demo](https://denisecase.github.io/node-express-app/)
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

## .gitignore

We added a .gitignore file to list files and folders we don't want to commit to the repo (e.g., the very large node_modules folder and our personal settings for VS Code).

## Dependencies

In addition to Node.js, we use additional free software packages.
These are listed in package.json:

- [Express web framework](https://expressjs.com/)
- [Config](https://www.npmjs.com/package/config)
- [Nodemon - live updates](https://nodemon.io/) - only needed during development

Development dependencies are listed separately in package.json as these aren't needed in production (e.g. when hosting your live app with a cloud provider).

## Dependency Versions

For example apps, we use version "latest" to stay current. Choosing a version is better for production apps. Current versions of all packages are listed in the auto-generated package-lock.json.

## Install Dependencies locally

Install the dependencies listed in package.json locally:

1. Open PowerShell here as admin and run: `npm install`.
2. Verify node_modules was created.
3. Review the contents of node_modules.

```PowerShell
npm install
```

## Start App

"Open PowerShell Here as Admin" and start your app with node: 

```PowerShell
node app.js
```

## Open a Browser Client

1. Open a web browser. Try these URLs
1. <http://127.0.0.1:3002/> or <http://localhost:3002/>.
1. <http://localhost:3002/hello>
1. <http://localhost:3002/big>
1. <http://localhost:3002/greeting/42>
1. <http://localhost:3002/yo/Lohita>
1. <http://localhost:3002/yo/Rahul>
1. <http://localhost:3002/yo/Teja>

## Modify and Restart

1. Make changes to the server logic.
1. Use CTRL-C, CTRL-C to stop your server.
1. Restart the server to see your changes.

## Use Nodemon to listen for changes and restart automatically

We can also use the scripts provided in package.json by prefacing them with npm:

```PowerShell
npm run dev
```

See package.json to see how 'run dev' uses nodemon instead - a live monitor that listens for changes and restarts automatatically.

## Use PowerShell and ipconfig to get your IP address

1. Open PowerShell as Admin, run ipconfig.
1. Find your IPv4 address.
1. Invite others to interact with your server-side app.

## Optional: Create an Express app from scratch

1. Create a folder for the app.
1. In the folder, create a file named app.js.
1. In the folder, open PowerShell and run `npm init` to generate a package.json with app information.
1. Add README.md.
1. Add .gitignore.

## Optional: Create .gitignore (file with no name - just an extension)

There are many ways to create a file without a name (e.g., .gitignore)

1. In Windows File Explorer, create ".gitignore." (Type a dot at beginning and at the end. It will drop the second dot.
2. In Git Bash: `touch .gitignore`
3. In PowerShell:  `ni .gitignore`
4. In VS Code: simply right-click and add new file named .gitignore

## Troubleshooting

If you get:

`Error: listen EADDRINUSE: address already in use 127.0.0.1:3002`

There is already an app running on the port. Hit CTRL+ALT+DELETE to see the tasks, and find the running app and Right-click / End Task to kill the current version.

Then restart the app as explained above.

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
- [Heroku hosting](https://devcenter.heroku.com/articles/deploying-nodejs)

## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)
- [npx fixpack (to auto-organize package.json)](https://www.npmjs.com/package/fixpack)
