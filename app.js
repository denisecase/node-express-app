const express = require('express')
const config = require('config')

// create an Express app
const app = express()

// Use hosting values if available, otherwise default 
const environment = process.env.NODE_ENV || 'development'
const hostname = process.env.HOSTNAME || config.get("hostname")
const port = process.env.PORT || config.get("port");

// Use Express app.get() methods to configure endpoints

// declare your callback function the old way
app.get('/', function (req, res) {
  res.send('Welcome home!')
})

// or use the new arrow function syntax
// respond with text
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

// or respond with html
app.get('/big', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// or respond with JSON
app.get('/json', (req, res) => {
  res.send('{"name" : "Nandini"}')
})

// :name indicates a parameter at this location in the URI
app.get('/greeting/:id', (req, res) => {
  res.send(`Hello! The id was ${req.params.id}`)
})

// combine your skills and get creative
app.get('/yo/:buddy', (req, res) => {
  res.send(`<h1>Yo, ${req.params.buddy}!</h1>`)
})

// Use middleware to handle all non-managed routes (e.g. /xyz)
// https://expressjs.com/en/api.html#req.originalUrl
app.use((req, res, next) => {
  res.status(404).send(`status 404 - ${req.originalUrl} was not found`);
})

// start listening
app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}/`)
  console.log(`Try going to different URIs:`)
  console.log(`  Try /hello`)
  console.log(`  Try /big`)
  console.log(`  Try /greeting/yourname`)
  console.log(`  Try /yo/Dr.Rogers`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

