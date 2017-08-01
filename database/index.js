const seedData = require('../test-data.json');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/silverpancake');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongo');


  //OPTIONAL DATA SEEDING SCRIPT BELOW
  //===================================================//
  // var businessSchema = mongoose.Schema({
  //   name: String,
  //   image_url: String,
  //   is_closed: Boolean,
  //   url: String,
  //   review_count: Number,
  //   rating: Number
  // })
  //
  // var Business = mongoose.model('Business', businessSchema);
  //
  // Business.collection.drop();
  // console.log('****SEEDING DATA****');
  // seedData.forEach(item => {
  //   var business = new Business({
  //     name: item.name,
  //     image_url: item.image_url,
  //     is_closed: item.is_closed,
  //     url: item.url,
  //     review_count: item.review_count,
  //     rating: item.rating
  //   })
  //   business.save(err => {
  //     if (err) { console.error(err) }
  //     console.log('Seed complete! Confirm in business collection')
  //   })
  // })
  //===================================================//

})

var businessSchema = mongoose.Schema({
    name: String,
    image_url: String,
    is_closed: Boolean,
    url: String,
    review_count: Number,
    rating: Number
  })

var Business = mongoose.model('Business', businessSchema);

module.exports = Business;