const path = require('path');
const fetch = require('node-fetch');


const home = (req,res) => {
    res.sendFile(path.join(__dirname,"..","..","client","html","home.html"));
}

const getData = (req,res)=>{
    fetch(`https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${req.body.name}.json`).then(rese=>rese.json()).then(rese=>res.json(rese)).catch(err=>res.json({"massage":"no resalt"}))

    }

module.exports = {home, getData}
