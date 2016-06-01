var User = require('./models/user'); //資料庫USER的shema
module.exports = function(app, passport) {
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  app.get('/discuss', isLoggedIn, function(req, res){
    res.render('discuss.ejs', {
      user: req.user
    });
  });

  //登入
  app.post('/login', passport.authenticate('local-login'), function(req, res) {
    if (req.user) {
      res.send(req.user); //登入成功
    } else {
      res.send("Account not found"); //你誰
    }
  });
  //註冊
  app.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    if (req.user) {
      res.send(req.user); //註冊成功
    } else {
      res.send("Account already exists"); //你已經註冊過了!
    }
  });
  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: 'email'
  }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/discuss',
      failureRedirect: '/'
    }));

  // route for logging out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated());
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/');
}
