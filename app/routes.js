var User = require('./models/user'); //資料庫USER的shema
var Topic = require('./models/topic'); //資料庫TOPIC的shema
module.exports = function(app, passport) {
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  app.get('/topicList', isLoggedIn, function(req, res){
    Topic.find({}, function(err, data){
      if(err) throw err;
      if(data){
        res.render('topicList.ejs', {
          user: req.user,
          topics: data
        });
      }
    });
  });

  app.get('/hot', isLoggedIn, function(req, res){
    Topic.find({}).sort('-commentsCount').limit(3).exec(function(err, data){
      if(err) throw err;
      if(data){
        res.render('hot.ejs', {
          user: req.user,
          topics: data
        });
      }
    });
  });

  app.get('/search', isLoggedIn, function(req, res){
    Topic.find({ name: { "$regex": req.query.text, "$options": "i" } }).exec(function(err, data){
      if(err) throw err;
      var searchResult = {
        text: req.query.text,
        result: data
      };
      res.render('search.ejs', {
        user: req.user,
        search: searchResult
      });
    });
  });

  //遞迴 為了解決非同步問題zzz
  var idToNickname = function(topic, i, done){
    //i是主題留言數的變數
    if(topic.comments.length > i){
      User.findOne({ _id: topic.comments[i].uid }, function(err, user){
        if(err) throw err;
        if(user){
          topic.comments[i].name = user.nickname;
          //往下一則留言前進
          idToNickname(topic, i + 1, done);
        }
      });
    }
    else{
      //結束後call這個把網頁給使用者
      done();
    }
  };

  app.get('/topic', isLoggedIn, function(req, res){
    Topic.findOne({ name: req.query.title }, function(err, topic){
      if(err) throw err;
      if(topic){
        idToNickname(topic, 0, function(){
          res.render('topic.ejs', {
            user: req.user,
            topic: topic
          });
        });
      }
      else{
        res.redirect('/404');
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
        newTopic.commentsCount = 0;
        newTopic.startedBy = req.user._id;
        newTopic.save(function(err) {
          if (err) throw err;
          console.log(newTopic.name + " created!");
        });
      }
      else{
        console.log("話題重複!");
      }
      res.redirect('/topicList');
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
        topic.commentsCount = topic.commentsCount + 1;
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
          res.render('admin.ejs', {
            user: req.user,
            topics: data
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
              topic.commentsCount = topic.commentsCount - 1;
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
      successRedirect: '/topicList',
      failureRedirect: '/'
    }));

  // route for logging out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/404', function(req, res) {
    res.render('404.ejs');
  });

  app.get('*', function(req, res) {
    res.redirect('/404');
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