var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('combined'))


app.listen(8080);
