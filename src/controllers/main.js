const path = require('path');
const fs = require('fs');
// const path = require('path');

const controller = {}

controller.home = (req, res) => {
    res.render('home')
}
controller.services = (req, res) => {
    fs.readFile(path.join(__dirname, '../json/services.json'), 'utf8', (e, data) => {
        data = JSON.parse(data)
        res.render('services', { data })
    });
}
controller.servicesInfo = (req, res) => {
    const id = parseInt(req.params.id);

    if (id == NaN) res.redirect('/services');

    fs.readFile(path.join(__dirname, '../json/services.info.json'), 'utf8', (e, data) => {
        data = JSON.parse(data);

        if (id >= data.length) res.redirect('/services');
        else {
            for (const key of data) {
                if (key.id == id) {
                    res.render('servicesInfo', { data: key });
                    break
                }
            }
        }

    });
}
controller.about = (req, res) => {
    res.render('about')
}
controller.personal = (req, res) => {
    res.render('about_personal')
}
controller.central = (req, res) => {
    res.render('about_central')
}
controller.error404 = (req, res) => {
    res.render('404')
}
module.exports = controller;