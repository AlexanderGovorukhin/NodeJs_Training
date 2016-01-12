var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);

var app = express();
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.use(express.favicon()); // /favicon.ico
if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());  // req.body....

app.use(express.cookieParser('your secret here'));  // req.cookies

app.use(app.router);

app.get('/', function(req, res, next){
  res.render("index",{
    title:'Test Title',
    body:'<b>Hello</b>'
  });
});

app.use(express.static(path.join(__dirname, 'public')));


//Middleware
app.use(function(req, res, next){
  if (req.url == '/'){
    res.end("Hello");
  } else {
    next();
  }
});

app.use(function(req, res, next){
  if (req.url == '/forbidden'){
    next(new Error("wops, denied"));
  } else {
    next();
  }
});

app.use(function(req, res, next){
  if (req.url == '/test'){
    res.end("Test");
  } else {
    next();
  }
});

app.use(function(req,res){
  res.send(404, "Page Not Found Sorry");
});

app.use(function(err, req, res, next){
  // NODE_ENV = 'producation'
  if ('development' == app.get('env')) {
    var errorHandler = express.errorHandler();
    errorHandler(err, req, res, next);
  } else {
    res.send(500);
  }
});

//
//var routes = require('./routes');
//var user = require('./routes/user');
//
//// all environments
//
//app.get('/', routes.index);
//app.get('/users', user.list);


http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

