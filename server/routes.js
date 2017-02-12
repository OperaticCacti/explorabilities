const express = require('express');
const bodyParser = require('body-parser');
const userCtrl = require('./db/users/usersController.js');
const itineraryCtrl = require('./db/itinerary/itineraryController.js');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const routes = express();

routes.use(express.static(__dirname + '/../public'));
routes.use(cookieParser());
routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());
routes.use(session({
  secret: 'mark',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
routes.use(passport.initialize());
routes.use(passport.session());

//Parse incoming body

routes.get('/users/signin', userCtrl.signin);
routes.post('/users/create', userCtrl.create);
routes.get('/users/auth', userCtrl.authenticate);

//facebook login
routes.get('/auth/facebook', userCtrl.facebook);

routes.get('/auth/facebook/callback', 
  userCtrl.facebookCallback, 
  userCtrl.facebookCallback2);

routes.get('/itinerary', itineraryCtrl.retreive);
routes.post('/itinerary', itineraryCtrl.save);
routes.post('/itinerary/mail', itineraryCtrl.sendMail);

routes.get('/*', function(req, res) {
  res.redirect('/');
});

module.exports = routes;


