var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('combined'))
.use(express.static(__dirname + '/public'));

app.listen(8080);
