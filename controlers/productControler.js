const {Router} = require('express');

const productService = require('../services/productService');
const validateCube = require('./helpers/validateProduct');


const router = Router();
router.get('/', (req, res) => {
    const cubes = productService.getAll(req.query);
    res.render('home', {cubes});
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', validateCube, (req, res) => {
    productService.create(req.body)
    .then(() => res.redirect('/products'))
    .catch(() => res.status(500).end())
});

router.get('/details/:id', (req, res) => {
    let cube = productService.getByID(req.params.id);
    res.render('details', {...cube})
});

// router.get('/search', (req, res) => {
//    let cubes = productService.getAll(req.query);
//    res.render('home', {cubes})
// });

module.exports = router;