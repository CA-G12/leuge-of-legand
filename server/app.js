const express = require('express');

const app = express();
const path = require('path');
const router = require('./router');

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'client')),
);

app.use(router);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'client', 'error404.html'));
 }
);

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', 'client', 'error500.html'));
  next();
});

module.exports = app;
