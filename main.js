var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('combined'))
.use(express.static(__dirname + '/public'))
.use(bodyParser());

app.get('/',function(req,res){
  var html = '<form action="/" method="post">' +
	               'Enter your name:' +
	               '<input type="text" name="task" placeholder=" feed the fish.." />' +
	               '<br>' +
	               '<button style="background-color: blue" type="submit">Confirm</button>' +
              '</form>';
               
  res.send(html);
});

app.post('/', function(req, res){
  // var userName = req.body.userName;
  // var html = 'Hello: ' + userName + '.<br>' +
  //            '<a href="/">Try again.</a>';
  var tasks = [];
  var task = req.body.task;
  for(var key in task){
  	if(task.hasOwnProperty(key)){
  		tasks.push(task[key]);
  	}
  } // add the new task to the array
  console.log(tasks.length + " is the task list length");
  res.render('todo.ejs',{ task :req.body.task  });
});

app.listen(8080);
