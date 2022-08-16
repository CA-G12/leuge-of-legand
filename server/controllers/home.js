const path = require('path');
const fetch = require('node-fetch');


const home = (req,res) => {
    res.sendFile(path.join(__dirname,"..","..","client","html","home.html"));
}

const getData = async(req,res)=>{

try{
    const response = await fetch(`https://ddragon.legagueoflegends.com/cdn/12.5.1/data/en_US/champion/${req.body.name}.json`)
    const body = await response.json();
        res.json(body)
}catch(err){
console.log(err);
}
    
  
    

    }

module.exports = {home, getData}