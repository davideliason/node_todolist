var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.render('todo.ejs');
});

app.listen(8080);