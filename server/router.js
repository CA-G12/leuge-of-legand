/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable key-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable padded-blocks */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable arrow-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable quotes */
const {
home, getData, data, saerchByLitters,
} = require('./controllers');
const router = require('express').Router();


router.post('/search', getData)
router.get('/home', home)
router.get('/data', data)

router.post('/Inputsearch', saerchByLitters)


module.exports = router;
