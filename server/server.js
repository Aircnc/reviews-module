const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/database.js');

const app = express();
const port = process.env.PORT || 3004;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
