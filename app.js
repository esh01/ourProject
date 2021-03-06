/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , main = require('./routes/main')
  , http = require('http')
  , path = require('path')
  
  ;
	

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'resources')));
	

app.use(express.static(path.join(__dirname, 'resources')));

//var client = mysql.createConnection({
//	host : 'localhost',
//	user : 'root',
//	password : '1234',
//	database : 'test'
//});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/main', main.index);
app.post('/reg', main.reg);
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/main', main.index);

app.post('/reg', main.reg);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
