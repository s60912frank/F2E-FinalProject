// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
var User = require('../app/models/user');

// load the auth variables
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  //本地資料庫註冊
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email', //使用者輸入的暱稱
    passwordField: 'password' //這個使用unity提供的deviceID
  }, function(name, token, done) {
    //搜尋這個使用者是否在資料庫內
    User.findOne({
      'token': token
    }, function(err, user) {
      // if there are any errors, return the error
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, "You already have an account!");
      } else {
        var newUser = new User();
        newUser.name = name;
        newUser.token = token;
        // save the user
        newUser.save(function(err) {
          if (err)
            throw err;
          console.log(newUser.name + "created!");
          return done(null, newUser);
        });
      }
    });
  }));

  //本地資料庫登入
  passport.use('local-login', new LocalStrategy({
      usernameField: 'name',
      passwordField: 'token'
    },
    function(name, token, done) {
      // asynchronous
      process.nextTick(function() {
        //同上搜尋資料庫
        User.findOne({
          'token': token
        }, function(err, user) {
          // if there are any errors, return the error
          if (err)
            return done(err);
          // check to see if theres already a user with that email
          if (user) {
            console.log(user.name + " logged in!");
            return done(null, user);
          } else {
            return done(null, false, "Account not found");
          }
        });

      });

    }));


  passport.use(new FacebookStrategy({
      // pull in our app id and secret from our auth.js file
      clientID: configAuth.facebookAuth.clientID,
      clientSecret: configAuth.facebookAuth.clientSecret,
      callbackURL: configAuth.facebookAuth.callbackURL
    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

      // asynchronous
      process.nextTick(function() {
        console.log(profile);
        // find the user in the database based on their facebook id
        User.findOne({
          'facebook.id': profile.id
        }, function(err, user) {

          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err)
            return done(err);

          // if the user is found, then log them in
          if (user) {
            return done(null, user); // user found, return that user
          } else {
            // if there is no user found with that facebook id, create them
            var newUser = new User();

            // set all of the facebook information in our user model
            newUser.facebook.id = profile.id; // set the users facebook id
            newUser.facebook.token = token; // we will save the token that facebook provides to the user
            newUser.facebook.name = profile.displayName; // look at the passport user profile to see how names are returned
            //newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

            // save our user to the database
            newUser.save(function(err) {
              if (err)
                throw err;

              // if successful, return the new user
              return done(null, newUser);
            });
          }

        });
      });

    }));
};
