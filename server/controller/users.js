var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
  return {
    add: function (req, res){

      console.log(req.body.name)
      User.findOne({name:req.body.name}, function(err, user){
        if(user){
          res.json(user);
        } else {
            var new_user = new User(req.body);
            new_user.save(function(err, data){
              if(err){
                console.log(err);
                console.log('\nError saving new customer!');
              } else {
                console.log("not sure")
              }
              console.log(data)
            res.json(data);
            })
        }
      })
    },
    get_current_user: function (req, res){
      User.findOne({_id:req.body.id}, function(err, user){
        // console.log("Users are", users)
        if(err){
          console.log(err);
          console.log('\nError getting all users!');
        } else {
          res.json(user);
        }
      })
    },
    get_clicked_user: function (req, res){
      User.findOne({_id:req.body.id}, function(err, user){
        // console.log("Users are", users)
        if(err){
          console.log(err);
          console.log('\nError getting all users!');
        } else {
          res.json(user);
        }
      })
    },
    show: function (req, res){
      User.find({}, function(err, users){
        // console.log("Users are", users)
        if(err){
          console.log(err);
          console.log('\nError getting all users!');
        } else {
          res.json(users);
        }
      })
    },

  }
})();