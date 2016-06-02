var User = require('./models/user'); //資料庫USER的shema
var Topic = require('./models/topic'); //資料庫TOPIC的shema
module.exports = function(app, passport) {
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  app.get('/discuss', isLoggedIn, function(req, res){
    //var dataFound;
    //可能會有點問題?
    Topic.find({},function(err, data){
      if(err) throw err;
      if(data){
        //this.dataFound = data;
        res.render('discuss.ejs', {
          user: req.user,
          topics: data
        });
      }
    });

    //console.log("DATA FOUND!" + dataFound);
  });

  //增加主題
  app.post('/addTopic', isLoggedIn, function(req, res){
    Topic.findOne({ name: req.body.name }, function(err, topic){
      if(err) throw err;
      if(!topic){
        var newTopic = new Topic();
        newTopic.name = req.body.name;
        newTopic.time = new Date();
        newTopic.comments = undefined;
        newTopic.save(function(err) {
          if (err) throw err;
          console.log(newTopic.name + " created!");
        });
      }
      res.redirect('./discuss');
    });
  });

  //回應
  app.post('/comment', isLoggedIn, function(req, res){
    Topic.findOne({ name: req.body.topic }, function(err, topic){
      if(err) throw err;
      if(topic){
        topic.comments.push({
          who: req.user.facebook.name,
          comment: req.body.comment,
          time: new Date()
        });
        //console.log("成功回應!");
        topic.save(function(err) {
          if (err) throw err;
          console.log(topic.comment + " added!");
        });
      }
      res.redirect('./discuss');
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
