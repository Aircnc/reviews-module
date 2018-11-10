const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const db = require('../database/database.js');

const app = express();
const port = process.env.PORT || 3004;
const host = '0.0.0.0';


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/listings/:id', express.static(path.join(__dirname, '../client/dist')));


app.get('/listings/:id/reviews', cors(), (request, response) => {
  const listId = request.params.id;
  // console.log('this works', listId);
  db.findReviews(listId, (error, results) => {
    if (error) {
      console.error(error);
      response.status(500).send(error);
    } else {
      response.status(200).send(results);
    }
  });
});


app.get('/listings/:id/listings', cors(), (request, response) => {
  const listId = request.params.id;
  db.findListing(listId, (error, results) => {
    if (error) {
      console.error(error);
      response.status(500).send(error);
    } else {
      response.status(200).send(results);
    }
  });
});


app.listen(port, host);
console.log(`server running at: http://${host}:${port}`);
