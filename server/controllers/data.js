const fetch = require('node-fetch');


const data=(async(req,res)=>{
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json')
    const body = await response.json();
    res.json(body)
})

module.exports =data;