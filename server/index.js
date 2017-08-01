//REQUIREMENTS
//=============
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const yelp = require('../yelp/yelp.js');
const db = require('../database');
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
  db.find({}, (err, data) => {
    console.log('data retrieved! Sending to client>>>', data);
    res.send(data);
  })
});

app.post('/api/search', (req, res) => {
  console.log('POST invoked! Check out the body below:')
  console.log('body is >>>', req.body);
  // yelp.searchBusiness({ 
  //   term: req.body.term,
  //   location: req.body.location
  // })
  //   .then(result => { res.send(result) }) // send one random business, or top rated
  //   .catch(err => { console.error(err) });
  res.send('OH WE GOOD');
})

// START SERVER
//==============
var port = 3000;
app.listen(3000, () => {
    console.log('3000, locked and loaded');
})