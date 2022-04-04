const path = require('path');
const fs = require('fs');

const controller = {};

controller.services = (req, res) => {
    fs.readFile(path.join(__dirname, '../json/services.json'), 'utf8', (e, data) => {
        data = JSON.parse(data)
        res.render('services', { data })
    });
}

controller.servicesInfo = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) res.redirect('/services');
    else {
        fs.readFile(path.join(__dirname, '../json/services.info.json'), 'utf8', (e, data) => {
            data = JSON.parse(data);

            if (id >= data.length) res.redirect('/services');
            else {
                for (const key of data) {
                    if (key.id == id) {
                        res.render('servicesInfo', { data: key });
                        break;
                    }
                }
            }

        });
    }
}

module.exports = controller;