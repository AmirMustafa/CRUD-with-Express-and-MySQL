var express = require('express');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var router = express.Router();
var mysql = require('mysql');
//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'testExpress'
});
const opts = {}

connection.connect(function(err) {
    if (err) throw err;
    console.log('OK');
});

// ========================= added package for the jwt auth: start ============================
// added packaged for jwt and passport auth

// fetch list of users from the sql db
var signupusers = connection.query('SELECT * FROM user', (err, result, field) => {
    if(err) throw err;
    signupusers = JSON.parse(JSON.stringify(result)); 
});
  console.log(signupusers);


/*// array for data login
var signupusers = [
    {
        id: 1,
        name: 'amir',
        email: 'amirengg15@gmail.com',
        password: '1234'
    },
    {
        id: 2,
        name: 'dharmendra',
        email: 'dharmendra@gmail.com',
        password: '1111'
    }
];
console.log(signupusers);*/
/*var signupusers = [ { id: 1,
    name: 'Aamir',
    email: 'user1@gmail.com',
    password: '123456' },
  { id: 3,
    name: 'User 2',
    email: 'user2@gmail.com',
    password: '12345678' },
  { id: 4,
    name: 'User 3',
    email: 'user3@gmail.com',
    password: '12345678' },
  { id: 5,
    name: 'User 3',
    email: 'user3@gmail.com',
    password: '12345678' } ];*/


// strategy for using web token authentication
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    // usually this would be a database call:
    var user = signupusers[_.findIndex(signupusers, {id: jwt_payload.id})];
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});
passport.use(strategy);
// ========================= added package for the jwt auth: end ============================



/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// CREATE
router.post('/add', passport.authenticate('jwt', { session: false }), function(req, res) {
  var params = req.body;
  connection.query("INSERT INTO user SET ?", params, (err, result, field) => {
    if (err) throw err;
    res.json(result);
  });
});




// READ -  get all data

router.get('/getusers',passport.authenticate('jwt', { session: false }) , (req, res) => {
  connection.query('SELECT * FROM user', (err, result, field) => {
    if(err) throw err;
    res.json(result);
  });
});

// READ -  get specific id data
router.get('/getusers/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  var params = req.params.id  // receiving from url
  connection.query('SELECT * FROM user WHERE id = ?', params, (err, result, field) => {
    if(err) throw err;
    res.json(result);
  });
});

// UPDATE - update specific data
router.put('/update/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  var params = req.params.id;
  var data = req.body;
  connection.query('UPDATE user SET ? WHERE id = ?', [data, params], (err, result, field) => {
    if(err) throw err;
    res.json(result);
  });
});

// DELETE - delete specific route
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  var params = req.params.id;
  connection.query('DELETE FROM user WHERE id = ?', params, (err, result, field) => {
    if(err) throw err;
    res.json(result);
  });
});


/*router.post("/login", (req, res) => {
  var email=req.body.email;
   var password=req.body.password;
   //This lookup would normally be done using a database
   if (email === "paul@nanosoft.co.za") {
       if (password === "pass") { //the password compare would normally be done using bcrypt.
          opts.expiresIn = 120;  //token expires in 2min
           const secret = "SECRET_KEY" //normally stored in process.env.secret
           const token = jwt.sign({ email }, secret,opts );
           return res.status(200).json({
               message: "Auth Passed",
               token
           })
       }
   }
   return res.status(401).json({ message: "Auth Failed" })
});*/

router.post("/login", function(req, res) {
  if(req.body.email && req.body.password){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
  }
  // usually this would be a database call:
  var user = signupusers[_.findIndex(signupusers, {email: email})];
  if( ! user ){
    res.status(401).json({message:"no such user found"});
  }

  if(user.password === req.body.password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = {id: user.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"passwords did not match"});
  }
});

router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json("Success! You can not see this without a token");
});
module.exports = router;
