//Require modules
const express = require('express');
const morgan = require('morgan');
const port = 3000;
//const passport = require('passport');
const methodOverride = require('method-override');

// We'll need to load the env var
//require('dotenv').config();

// Setup the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
//require('./config/passport');

// configure app w/ app.set()
app.set('view engine', 'ejs');

// require our routes
const indexRoutes = require('./routes/index');


//Mount middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

// Mount middleware here
//const session = require('express-session');
//app.use(session({
// secret: 'Cyberpunks', 
//  resave: false,
//  saveUninitialized: true
//}))

// Add passport middleware here
//app.use(passport.initialize());
//app.use(passport.session());

//mount routes w/ app
app.use('/', indexRoutes);



//tell app to listen
app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
