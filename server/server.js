const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/database.js');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3004;


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/listings/:id', express.static(path.join(__dirname, '../client/dist')));


app.get('/listings/:id/reviews', cors(), (request, response) => {
  const listId = request.params.id;
  // console.log('this works', listId);
  db.findReviews(listId, (error, results) => {
    if (error) {
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
      response.status(500).send(error);
    } else {
      response.status(200).send(results);
    }
  });
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
