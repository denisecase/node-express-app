# node-express-app

> A super simple web app with Node.js and the Express web framework

## Links

- [Demo](https://denisecase.github.io/node-express-app/)
- [Source](https://github.com/denisecase/node-express-app)

## Requirements

- A browser (e.g., Chrome)
- A text editor (e.g., VS Code, or Notepad++, or Chrome)

## Benefits

- Folder-based
- Easy to write
- Node.js non-blocking event loop supports many concurrent requests
- Express framework for web apps offers concise, easy-to-use API
- Built-in objects for application, request, response, with HTTP verb methods

## Prerequisites

1. Node.js
2. npm Node Package Manager

## Add Express

Note that a dependency on Express.js has been added to package.json.

Install the dependencies listed in package.json:

1. Open PowerShell here as admin and run: `npm install`.
2. Verify node_modules was created.
3. Review the contents of node_modules.

## Start App

Open PowerShell here as admin and start your app with node: `node app.js`

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

## Install Nodemon to enable live updates

1. Install nodemon globally - this is one of the rare packages to install globally.
1. In your folder, open PowerShell here as Administrator, install and check the version. Then start the app with nodemon (now we don't have to restart after code changes.)

```PowerShell
npm install nodemon -g
nodemon -v
nodemon app.js
```

## Use PowerShell and ipconfig to get your IP address

1. Open PowerShell as Admin, run ipconfig.
1. Find your IPv4 address.
1. Invite others to interact with your server-side app.

## DO NOT COMMIT node_modules to the Repo

We don't want to commit the auto-generated node_modules - and other things like developer-specific contents, local history, etc.

List all files and folders for git to ignore (not commit and push to the repo) to a file in the root folder named: .gitignore

## Optional: Create an Express app from scratch

1. Create a folder for the app.
1. In the folder, create a file named app.js.
1. In the folder, open PowerShell and run `npm init` to generate a package.json with app information.
1. Add README.md.
1. Add .gitignore.

## Optional: Create .gitignore (file with no name - just an extension)

To create a file without a name, there are 3 common options:

1. In Windows File Explorer, create ".gitignore." (Type a dot at beginning and at the end. It will drop the second dot.
2. In Git Bash: `touch .gitignore`
3. In PowerShell:  `ni .gitignore`

## Errors and Trouble Shooting

If you get:

`Error: listen EADDRINUSE: address already in use 127.0.0.1:3002`

There is already an app running on the port. Hit CTRL+ALT+DELETE to see the tasks, and find the running app and Right-click / End Task to kill the current version.

Then restart the app as explained above.

## Terms

- Node.js platform
- npm (Node package manager)
- nodemon
- npm install {packagename}
- npm install -g {packagename}
- npm start
- package.json
- .gitignore
- localhost (127.0.0.1)
- host
- port
- URL
- route
- web server
- web service
- web client
- web request
- web response

## Reference

- [Express.js](https://expressjs.com/)

## Resources

- [Bootstrap Material Design CDN](https://mdbootstrap.com/md-bootstrap-cdn/)
- [HTML Validator](https://validator.w3.org/)
- [JavaScript Standard Style Validator](https://standardjs.com/demo.html)

## See Also

- [js-console](https://github.com/profcase/js-console)
- [js-gui](https://github.com/profcase/js-gui)
- [js-gui-vue](https://github.com/denisecase/js-gui-vue)
- [js-gui-storage](https://github.com/profcase/js-gui-storage)
- [node-server](https://github.com/denisecase/node-server)
- [node-express-app](https://github.com/denisecase/node-express-app)
- [node-express-chat](https://github.com/denisecase/node-express-chat)
- [node-express-mvc](https://github.com/denisecase/node-express-mvc)