const express = require('express');
const bodyParser = require('express')
const db = require('./db')
const Team = require('./team/model')
const teamRouter = require('./team/router')
const app = express();
const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(teamRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on :${port}`))