const data = require('../names.json')

const saerchByLitters = (req, res) => {

            let felteredData = data.filter(e => e.toLowerCase().includes(req.body.name.toLowerCase().trim())).slice(0, 5);
 res.json(JSON.stringify(felteredData));
};
module.exports = saerchByLitters;
