const fetch = require('node-fetch');

const data = ((req, res) => {
  fetch('https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json').then((rese) => rese.json()).then((rese) => res.json(rese)).catch(() => res.json({ massage: 'no resalt' }));
});

module.exports = data;
