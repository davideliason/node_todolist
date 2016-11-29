var express = require('express');
var session = require('cookie-session'); // we will need this to set sessions
var bodyParser = require('body-parser'); // avail. under req.body, we need this module in order to grab 'post' data
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var morgan = require('morgan');

var app = express();

var tasks = []; // global


// set the view engine to ejs
app.set('view engine','ejs');

app.use(morgan('combined'))
.use(express.static(__dirname + '/public'))
.use(bodyParser()) 
.use(session({secret : 'todotopsecret'}));

app.get('/about',function(req,res){
	res.render('pages/about');
});

app.get('/todo',function(req,res){

  //  var html = '<a href="/about">About</a><hr><form action="/todo/add" method="post">' +
  //                'Add a task:' +
  //                '<input type="text" name="task" placeholder=" feed the fish.." />' +
  //                '<br>' +
  //                '<button style="background-color: blue" type="submit">Confirm</button>' +
  //             '</form>';
               
  // res.send(html);
   res.render('pages/todo.ejs',{tasks : tasks} );
});

app.post('/todo/add',function(req, res){
     var task = req.body.task;
     tasks.push(task);
 
  // add the new task to the array
  console.log(tasks.length + " is the task list length");
  res.render('pages/todo.ejs',{ task :req.body.task, tasks : tasks });
});

app.get('/delete/:id',function(req,res){
  tasks.splice(req.params.id,1);
  res.render('pages/todo.ejs',{tasks: tasks});
});

app.listen(8080);
