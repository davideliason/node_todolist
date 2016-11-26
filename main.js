var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser'); // avail. under req.body
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var morgan = require('morgan');

var app = express();

// set the view engine to ejs
app.set('view engine','ejs');

app.use(morgan('combined'))
.use(express.static(__dirname + '/public'))
.use(bodyParser());

app.get('/about',function(req,res){
	res.render('pages/about');
});

app.get('/',function(req,res){
  var html = '<a href="/about">About</a><hr><form action="/" method="post">' +
	               'Add a task:' +
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
  } 
  // add the new task to the array
  console.log(tasks.length + " is the task list length");
  res.render('pages/todo.ejs',{ task :req.body.task, tasks : tasks });
});

app.listen(8080);
