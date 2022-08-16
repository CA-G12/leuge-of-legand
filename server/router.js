const {home,getData} = require('./controllers');

const router = require('express').Router();

router.get('/home', home)
router.post('/home',getData
)

module.exports = router;
