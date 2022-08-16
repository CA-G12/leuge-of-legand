const {home,getData, data} = require('./controllers');
const router = require('express').Router();


router.post('/search',getData)
router.get('/home', home)
router.get('/data',data)


module.exports = router;
