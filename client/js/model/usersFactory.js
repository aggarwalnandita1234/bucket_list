bucket_list.factory('UserFactory', function($http,$localStorage) {
			var factory = {};
			var users = [];

			factory.index = function(callback) {

				$http.get('/users').success(function(output){

					users = output;
					// console.log("i am in userfactory", users)
					callback(users);
				});

			}
			factory.get_current_user = function(id, callback){
				$http.post('/get_current_user', {id:id}).success(function(output){

						callback(output)	
						});	
			}

			factory.get_clicked_user = function(id, callback){
				$http.post('/get_clicked_user', {id:id}).success(function(output){

						callback(output)	
						});	
			}

			 				

			factory.create = function(info, callback) {
				
				$http.post('/addUser', info).success(function(output){

						callback(output)	
						});	
				}

				return factory;
		});


