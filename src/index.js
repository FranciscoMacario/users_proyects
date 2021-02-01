const express = require('express');
const app = express();

//midleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));

app.listen(4000);
console.log('server on port 4000');

