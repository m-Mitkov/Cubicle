const { urlencoded } = require('express');
const express = require('express');
const handlebars = require('express-handlebars');

function setUpExpress(app){

    app.engine('hbs', handlebars({
        extname: 'hbs',
    }));
            // SET UP HANDLEBARS TO BE MY VIEW ENGINE
    app.set('view engine', 'hbs');

    app.use(express.static('public')); // public folder for client

    app.use(express.urlencoded({
        extended: true,
    }));
}

module.exports = setUpExpress;