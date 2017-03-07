var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'pug');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partial', function(req, res) {
  res.render('partials/' + req.params.partial);
});

app.get('*', function(req, res) {
  res.render('index'); 
});


var port = 1337;

app.listen(port, function(err) {
  if (err) console.log(err); 
  console.log('Server.js is now listening on port: ' + port + '!');
});
