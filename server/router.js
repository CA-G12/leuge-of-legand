const {home} = require('./controllers');

const router = require('express').Router();

router.get('/', home)

module.exports = router;
