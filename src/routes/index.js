const express = require('express');
const path = require('path')

const mainController = require('../controllers/main');

const router = app => {

    app.get('/', mainController.home);

    app.get('/services', mainController.services);

    app.get('/services/:id', mainController.servicesInfo)

    app.get('/about', mainController.about);

    app.get('/about/personal', mainController.personal);

    app.get('/about/central', mainController.central);



    app.use(express.static(path.join('src', 'public')));

    app.get('*', mainController.error404);
}
module.exports = router;