var User = require('./models/user'); //資料庫USER的shema
var Topic = require('./models/topic'); //資料庫TOPIC的shema
module.exports = function(app, passport, ioop) {
  app.get('/', function(req, res){
    res.render('index.ejs', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
  });

  app.get('/post',isLoggedIn, function(req, res){
    res.render('post.ejs', {
      isAuthenticated: req.user ? req.isAuthenticated():false,
      isAdmin: req.user ? req.user.isAdmin:false,
      user: req.user
    });
  });

  app.get('/mypage',isLoggedIn, function(req, res){
    Topic.find({ startedBy: req.user._id }, function(err, data){
      res.render('mypage.ejs', {
        isAuthenticated: req.user ? req.isAuthenticated():false,
        isAdmin: req.user ? req.user.isAdmin:false,
        user: req.user,
        issue: data
      });
    });
  });

  app.get('/aboutus', function(req, res){
    res.render('aboutus.ejs', {
      isAuthenticated: req.user ? req.isAuthenticated():false,
      isAdmin: req.user ? req.user.isAdmin:false,
      user: req.user
    });
  });

  app.get('/issueList', function(req, res){
    Topic.find({}).sort('-commentsCount').limit(5).exec(function(err, hot){
      if(err) throw err;
      if(hot){
        var hotTopics = hot;
        Topic.find({}).sort('-_id').limit(5).exec(function(err, latestTopics){
          if(err) throw err;
          if(latestTopics){
            res.render('issueList.ejs', {
              user: req.user,
              hot: hotTopics,
              latest: latestTopics,
              isAuthenticated: req.isAuthenticated()
            });
          }
        });
      }
    });
  });

  app.get('/allIssue', function(req, res){
    Topic.find({}, function(err, data){
      if(err) throw err;
      if(data){
        console.log(data.startedBy);
        res.render('allIssue.ejs', {
          user: req.user,
          issue: data,
          isAuthenticated: req.isAuthenticated()
        });
      }
    });
  });

  app.get('/hotTopics', function(req, res){
    Topic.find({}).limit(20).exec(function(err, data){
      if(err) throw err;
      if(data){
        var dataToSend = [];
        data.forEach(function(d){
          dataToSend.push({
            title: d.name,
            link: "/issue?title=" + d.name,
            value: d.commentsCount
          });
        });
        res.json(dataToSend);
      }
    });
  });

  app.get('/search', function(req, res){
    Topic.find({ name: { "$regex": req.query.text, "$options": "i" } }).exec(function(err, data){
      if(err) throw err;
      var searchResult = {
        text: req.query.text,
        result: data,
        isAuthenticated: req.isAuthenticated(),
        user: req.user
      };
      res.render('search.ejs', { search: searchResult });
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

  app.get('/issue', function(req, res){
    Topic.findOne({ name: req.query.title }, function(err, topic){
      if(err) throw err;
      if(topic){
        idToNickname(topic, 0, function(){
          User.findOne({ _id: topic.startedBy }, function(err, user){
            if(err) throw err;
            if(user){
              console.log("幹");
              topic.startedBy = user.nickname;
              res.render('issue.ejs', {
                user: req.user,
                issue: topic,
                isAuthenticated: req.isAuthenticated()
              });
            }
          });
        });
      }
      else{
        res.redirect('/404.html');
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
          res.end();
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
        newTopic.category = req.body.category;
        newTopic.desc = req.body.desc;
        newTopic.opinion = req.body.opinion;
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
      res.end();
    });
  });

  //回應
  app.post('/comment', isLoggedIn, function(req, res){
    console.log("HHHHHHHHHHHH   " + req.body.topic);
    Topic.findOne({ name: req.body.topic }, function(err, topic){
      if(err) throw err;
      if(topic){
        topic.comments.push({
          uid: req.user._id,
          comment: req.body.comment,
          time: new Date()
        });
        topic.commentsCount = topic.comments.length;
        //console.log("成功回應!");
        topic.save(function(err) {
          if (err) throw err;
          console.log(req.body.comment + " added!");
        });
      }
      //res.redirect('./discuss');
      res.end();
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
            topics: data,
            isAuthenticated: req.user.isAdmin
          });
        }
      });
    }
    else{
      res.redirect('/issueList');
    }
  });

  app.get('/getComments', function(req, res){
    Topic.findOne({ name: req.query.title }, function(err, topic){
      if(err) throw err;
      if(topic){
        res.send(topic.comments);
      }
    });
  });

  app.post('/deleteTopic', isLoggedIn, function(req, res){
    if(req.user.isAdmin){
      Topic.remove({ name: req.body.topic }, function(err){
        if(err) throw err;
        console.log("Topic " + req.body.topic + " removed!");
        res.end();
      });
    }
    else{
      res.redirect('/discuss');
    }
  });

  app.post('/deleteComment', isLoggedIn, function(req, res){
    if(req.user.isAdmin){
      console.log(req.body);
      Topic.findOne({ name: req.body.topic }, function(err, topic){
        if(err) throw err;
        if(topic){
          //笨方法
          for(var i = 0;i < topic.comments.length; i++){
            if(topic.comments[i].uid == req.body.uid && topic.comments[i].comment == req.body.comment){
              topic.comments.splice(i, 1);
            }
          }
          topic.commentsCount = topic.comments.length
          //改完存回去
          topic.save(function(err) {
            if (err) throw err;
            console.log("Comment " + req.body.comment + " removed!");
          });
        }
        res.end();
      });
    }
    else{
      res.redirect('/discuss');
    }
  });
  //-----------ADMIN AREA---------------

  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: 'email'
  }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/issueList',
      failureRedirect: '/'
    }));

  // route for logging out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('*', function(req, res) {
    res.redirect('/404.html');
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
