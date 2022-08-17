const data = require('../names.json');

const saerchByLitters = (req, res) => {
// eslint-disable-next-line max-len
  const felteredData = data.filter((e) => e.toLowerCase().includes(req.body.name.toLowerCase().trim())).slice(0, 5);
  res.json(felteredData);
};
module.exports = saerchByLitters;
