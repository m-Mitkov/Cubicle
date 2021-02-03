const config = {
    production: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/cubicle'
    },

    development: {
        PORT: 8080,
        DB_CONNECTION: '...........' // use loud atlas
    },
}

module.exports = config[process.env.NODE_ENV.trim()];