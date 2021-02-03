const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/products');
    // res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;