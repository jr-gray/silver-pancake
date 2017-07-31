const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DEFINE ROUTES
//==============
app.get('/api', (req, res) => {
    res.send('Hello World');
});



// START SERVER
//=============
var port = 3000;
app.listen(3000, () => {
    console.log('3000, locked and loaded');
})