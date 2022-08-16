const path = require('path');

const home = (req, res) => {
    res.sendFile(path.join(__dirname,"..","..","client","html","home.html"))
}
const getData=(req,res)=>{
    console.log(req.body);
    res.redirect('/home')

}
module.exports = {home,getData}