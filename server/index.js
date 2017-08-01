//REQUIREMENTS
//=============
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const yelp = require('../yelp/yelp.js');
const Business = require('../database');
// const dummyData = require('../test-data.json');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//INIT DATABASE
//==============
require('../database');

// DEFINE ROUTES
//==============
app.get('/api/recents', (req, res) => {
  console.log('grabbing data from db!');
  Business.find({}, (err, data) => {
    console.log('data retrieved! Sending to client>>>', data);
    res.send(data);
  })
});

app.post('/api/search', (req, res) => {
  yelp.searchBusiness({ 
    term: req.body.term,
    location: req.body.location
  })
  .then(result => { res.send(result.businesses) })
  .catch(err => { console.error(err) });
})

// START SERVER
//==============
var port = 3000;
app.listen(3000, () => {
    console.log('3000, locked and loaded');
})