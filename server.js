var express = require('express');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var mongoose = require('mongoose');
var passport = require('passport');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var passportSocketIo = require("passport.socketio");
var io = require("socket.io")(app.server);

var configDB = require('./config/database.js'); //db位置

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
var msInstance = new mongoStore({ mongooseConnection: mongoose.connection }); //save session in mongo

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })); //讀取請求的body資料
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'gminissosmart', //???
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified
    store: msInstance
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//socket.io and passport authenticate
io.use(passportSocketIo.authorize({
  cookieParser: cookieParser,       // the same middleware you registrer in express
  key: 'connect.sid',       // the name of the cookie where express/connect stores its session_id
  secret: 'gminissosmart',    // the session_secret to parse the cookie
  store: msInstance,        // we NEED to use a sessionstore. no memorystore please
  success: function (data, accept){ accept() },  // *optional* callback on success - read more below
  fail: function (data, message, error, accept){ accept() }     // *optional* callback on fail/error - read more below
}));

//socket.io operations
var ioop = require('./app/realtime.js')(io);

// routes ======================================================================
require('./app/routes.js')(app, passport, ioop); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
io.listen(app.listen(port, ip_address, function(){
  console.log('The magic happens on port ' + port);
}));
