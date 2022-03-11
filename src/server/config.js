const hbs = require('express-handlebars');
const path = require('path');

module.exports = app => {

    app.set('views', path.join(__dirname, '../views'));
    app.engine('hbs', hbs.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs',
        helpers: require('./helpers')

    }));
    app.set('view engine', 'hbs');

}