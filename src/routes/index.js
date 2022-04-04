const express = require('express');
const path = require('path')

const mainController = require('../controllers/main');
const servicesController = require('../controllers/services');

const router = app => {

    app.get('/', mainController.home);

    app.get('/services', servicesController.services);

    app.get('/services/:id', servicesController.servicesInfo);

    app.get('/about', mainController.about);

    app.get('/about/personal', mainController.personal);

    app.get('/about/central', mainController.central);


    app.use(express.static(path.join('src', 'public')));

    app.get('*', mainController.error404);
}
module.exports = router;