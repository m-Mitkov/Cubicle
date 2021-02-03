const express = require('express');

const config = require('./config/config');
const port = config.PORT;
const routes = require('./routes');

const app = express();
require('./config/express')(app); // run the express config directly after requiring it
require('./config/mongoose')(app); // runs directly and connects with the db

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));