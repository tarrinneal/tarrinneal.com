const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
require('dotenv').config();
const db = require('../database');

// app.use(express.static('public'));

app.get('/', (req, res) => {
  debugger;
  res.sendFile('index.html', { root: __dirname + '/../public/' }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('sent');
    }
  });
});

app.get('/styles.css', (req, res) => {
  res.sendFile('styles.css', { root: __dirname + '/../public/' }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('sent');
    }
  });
});

app.get('/app/bundle.js', (req, res) => {
  res.sendFile('bundle.js', { root: __dirname + '/../public/app/' }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('sent');
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../public/' }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('sent');
    }
  });
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
