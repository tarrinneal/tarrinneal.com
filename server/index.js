const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
require('dotenv').config();
const db = require('../database');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('');
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
