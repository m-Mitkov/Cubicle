const mongoose = require('mongoose');
const config = require('./config');

const config = require('./config');

module.exports = (app) => {
    mongoose.connect(config.DB_CONECTION, {useNewUrlParser: true});

    const db = mongoose.connection;

    db.on('error', () => console.log.bind(console, 'MogoDB could not conect successfully'));
    db.on('open', () => console.log.bind(console, 'DB successfully conected!'))
};