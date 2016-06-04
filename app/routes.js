var User = require('./models/user'); //資料庫USER的shema
var Topic = require('./models/topic'); //資料庫TOPIC的shema
module.exports = function(app, passport) {
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  //這是一個雙層迴圈的遞迴版 為了解決非同步問題zzz
  var idToNickname = function(data, i, j, done){
    //i是主題數的變數 j是第i主題留言數的變數
    if(data.length > i && data[i].comments.length > j){
      User.findOne({ _id: data[i].comments[j].uid }, function(err, user){
        if(err) throw err;
        if(user){
          data[i].comments[j].uid;
          data[i].comments[j].name = user.nickname;
          //往下一則留言前進
          idToNickname(data, i, j + 1, done);
        }
      });
    }
    else if(data.length > i && data[i].comments.length == j){
      //往下個主題前進
      idToNickname(data, i + 1, 0, done);
    }
    else{
      //結束後call這個把網頁給使用者
      done();
    }
  };

  app.get('/discuss', isLoggedIn, function(req, res){
    //可能會有點問題?
    Topic.find({}, function(err, data){
      if(err) throw err;
      if(data){
        idToNickname(data, 0, 0, function(){
          res.render('discuss.ejs', {
            user: req.user,
            topics: data
          });
        });
      }
    });
  });

  //更改暱稱
  app.post('/changeNickname', isLoggedIn, function(req, res){
    User.findOne({ _id: req.user._id }, function(err, user){
      if(err) throw err;
      if(user){
        user.nickname = req.body.nickname;
        user.save(function(err){
          if (err) throw err;
          console.log(user.name + " > " + user.nickname);
        });
      }
    });
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
        newTopic.startedBy = req.user._id;
        newTopic.save(function(err) {
          if (err) throw err;
          console.log(newTopic.name + " created!");
        });
      }
      else{
        console.log("話題重複!");
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
          uid: req.user._id,
          comment: req.body.comment,
          time: new Date()
        });
        //console.log("成功回應!");
        topic.save(function(err) {
          if (err) throw err;
          console.log(req.body.comment + " added!");
        });
      }
      //res.redirect('./discuss');
    });
  });

  //-----------ADMIN AREA---------------
  app.get('/admin', isLoggedIn, function(req, res){
    if(req.user.isAdmin){
      Topic.find({}, function(err, data){
        if(err) throw err;
        if(data){
          idToNickname(data, 0, 0, function(){
            res.render('admin.ejs', {
              user: req.user,
              topics: data
            });
          });
        }
      });
    }
    else{
      res.redirect('/discuss');
    }
  });

  app.post('/deleteTopic', isLoggedIn, function(req, res){
    if(req.user.isAdmin){
      Topic.remove({ name: req.body.topic }, function(err){
        if(err) throw err;
        console.log("Topic " + req.body.topic + " removed!");
      });
    }
    else{
      res.redirect('/discuss');
    }
  });

  app.post('/deleteComment', isLoggedIn, function(req, res){
    if(req.user.isAdmin){
      Topic.findOne({ name: req.body.topic }, function(err, topic){
        if(err) throw err;
        if(topic){
          //笨方法
          for(var i = 0;i < topic.comments.length; i++){
            if(topic.comments[i].uid == req.body.uid && topic.comments[i].comment == req.body.comment){
              topic.comments.splice(i, 1);
            }
          }
          //改完存回去
          topic.save(function(err) {
            if (err) throw err;
            console.log("Comment " + req.body.comment + " removed!");
          });
        }
      });
    }
    else{
      res.redirect('/discuss');
    }
  });
  //-----------ADMIN AREA---------------

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
