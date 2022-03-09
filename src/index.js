const express = require('express');
const path = require('path');
const routes = require('./routes/index')
const hbs = require('express-handlebars');
const config = require('./server/config')

const app = express();

config(app)

routes(app)

app.listen(3000, () => {
    'Server run in port 3000'
})