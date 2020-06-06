const express = require('express');
const morgan = require('morgan');
const port = 3000;
const passport = require('passport');
const methodOverride = require('method-override');

// We'll need to load the env vars
require('dotenv').config();

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
const indexRoutes = require('./routes/index');


// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
// TODO Add session middleware here
const session = require('express-session');
app.use(session({
  secret: 'Cyberpunks', 
  resave: false,
  saveUninitialized: true
}))

// TODO Add passport middleware here
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRoutes);




app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
