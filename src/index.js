const express = require('express');
const routes = require('./routes/index');
const config = require('./server/config');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// Config
config(app)

// Routes
routes(app)

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})