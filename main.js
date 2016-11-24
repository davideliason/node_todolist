var express = require('express');
var app = express();

app.get('/',function(req,res){
	var list = [];
	res.render('todo.ejs',{list:list});
});

app.listen(8080);