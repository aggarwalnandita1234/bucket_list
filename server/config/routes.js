  // var posts = require('./../controllers/posts.js');
  var lists = require('./../controller/lists.js');
  var users = require('./../controller/users.js');
  
  module.exports = function(app) {
    
  	app.get('/users', function(req, res){
  		users.show(req, res);
    });

  	app.post('/addUser', function(req, res){ 
      users.add(req, res);
  	});

    app.post('/get_current_user', function(req, res){
      users.get_current_user(req, res);
    });

    app.post('/get_clicked_user', function(req, res){
      users.get_clicked_user(req, res);
    })

    app.post('/lists', function(req, res){
      // console.log("I am in routes", req.body)
      lists.show(req, res);
    });

    app.post('/lists_clicked_user',function(req, res){
      lists.show_clicked_user(req, res);
    });
    
    app.post('/addList', function(req, res){ 
      lists.add(req, res);
    });
}
