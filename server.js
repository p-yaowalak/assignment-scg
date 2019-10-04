const express = require('express')
const bodyParser = require('body-parser')
// const session = require('express-session')
const cors = require('cors')
const scgRouter = require('./routes/index')

// Create global app object
const app = express();

app.use(cors());

// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/', scgRouter)


// finally, let's start our server...
var server = app.listen( process.env.PORT || 5000, function(){
  console.log('Listening on port ' + server.address().port);
});