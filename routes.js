const {Router} = require('express');

const homeControler = require('./controlers/homeControler');
const produtControler = require('./controlers/productControler');

const router = Router();

router.use('/', homeControler);
router.use('/products', produtControler);
// router.

module.exports = router;