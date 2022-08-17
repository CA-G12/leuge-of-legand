const {
  home, getData, data, saerchByLitters,
} = require('./controllers');
// eslint-disable-next-line import/order
const router = require('express').Router();

router.post('/search', getData);
router.get('/home', home);
router.get('/data', data);

router.post('/Inputsearch', saerchByLitters);

module.exports = router;
