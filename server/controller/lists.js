var mongoose = require('mongoose');
var List = mongoose.model('List');
var User = mongoose.model('User');

module.exports = (function(){
  return {
    add: function (req, res){
      var new_list = new List(req.body);
      new_list.save(function(err, data){
        if(err){
          console.log(err);
          console.log('\nError saving new customer!');
        } else {
          res.json(data);
        }
      })

    },
    show: function (req, res){
      User.find({_id:req.body.id}, function(err, user){
        var x= user[0].name;
        console.log("current_user is", x);

      List.find({_user:x}, function(err, lists){
        var y = lists;
      List.find({tagged_user:x}, function(err, lists1){
        y.push(lists1[0]);
        console.log("lists from list show", y)
        if(err){
          console.log(err);
          console.log('\nError getting all lists!');
        } else {
          console.log("combined, lists", y)
          res.json(y);
        }
      })
     })
    })
    },

    show_clicked_user: function (req, res){
      User.find({_id:req.body.id}, function(err, user){
        console.log("stupid error2", req.body.id)
        if(user.length==0){
          console.log(err);
          res.redirect('/users')
        }
        else{
          console.log("stupid error ", user)
            var x= user;
            console.log("current_user is", x);

              List.find({_user:x[0].name}, function(err, lists){
                var y = lists;
              List.find({tagged_user:x[0].name}, function(err, lists1){
                for (index in lists1){
                  y.push(lists1[index]);
                }
                
                console.log("lists from list show", y)
                if(err){
                  console.log(err);
                  console.log('\nError getting all lists!');
                } else {
                  console.log("combined, lists", y)
                  res.json(y);
                }
              })
             })
        } 
    })
    },

  }
})();