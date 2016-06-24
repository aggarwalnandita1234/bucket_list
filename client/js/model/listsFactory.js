bucket_list.factory('ListFactory', function($http) {
			var factory = {};
			var lists = [];

			// factory.index = function( callback) {
			// 	// console.log("i am in listfactory index method", info)
			// 	$http.post('/lists').success(function(output){
			// 		callback(output);
			// 	});

			// }
			factory.index = function(id, callback) {

					console.log("i am in listfactory", id)
				$http.post('/lists', {id:id}).success(function(output){

						callback(output)	
						});	

			}
			factory.index_clicked_user = function(id, callback) {

					console.log("i am in listfactory", id)
				$http.post('/lists_clicked_user', {id:id}).success(function(output){

						callback(output)	
						});	

			}

			factory.create = function(info) {
				$http.post('/addList', info).success(function(){			
							// callback(output);
						});	
				}

				return factory;
		});