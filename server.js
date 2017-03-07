var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'pug');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// connect to mongoDB
mongoose.connect('mongodb://localhost/mealify');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB is connected...');
});
var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log(fluffy, 'is saved');
});
var cat;
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  cat = kittens;
});

// routes
app.get('/partials/:partial', function(req, res) {
  res.render('partials/' + req.params.partial);
});

app.get('*', function(req, res) {
  res.render('index', {
    cat: cat
  }); 
});



var port = 1337;

app.listen(port, function(err) {
  if (err) { console.log(err); } 
  console.log('Server.js is now listening on port: ' + port + '!');
});
