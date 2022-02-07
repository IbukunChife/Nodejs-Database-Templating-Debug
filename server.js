var express = require('express');
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
logLib = require('./lib/log');
exphbs = require('express-handlebars');

app = express();

var hbs = exphbs.create({
    helpers: {
        renderName: function (user) {
            return 'Nom : ' + user.name;
        },
        renderLastName: function (user) {
            return 'Prénom : ' + user.lastname;
        }
    },
    defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// config
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/book_phone');

// import models
models = require('./models');

// import routing
require('./routing/callback');
require('./routing/users');

app.listen(8080);