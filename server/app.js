
const express = require('express')
const app = express()
const path=require('path')
const router = require('./router')
const fetch = require('node-fetch');


app.set('port', process.env.PORT || 3000); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'client'))
);

app.use(router)

app.use((req,res)=>{
  res.send('404')
})
app.use((err,req,res,next)=>{
  res.send('500')
})

module.exports = app;