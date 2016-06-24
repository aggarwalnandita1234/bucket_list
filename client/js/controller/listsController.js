
bucket_list.controller('listsController', function($scope, $location, $routeParams, UserFactory ,ListFactory, $localStorage){
 			// console.log("url id is", $routeParams.id)

 			UserFactory.get_current_user($routeParams.id, function(data){
		  		$scope.current_user= data;
		  	});

		  	ListFactory.index($routeParams.id, function(data){
		  		console.log('current_user', $scope.current_user);
		  		$scope.lists = data;
		  	 	console.log("data after index list is", data);
		  	});




		  	UserFactory.index(function(data){
		  		// console.log('We are using users controller', data);
		  		$scope.users = data;
		  	});



		  	$scope.addList = function(current_user_name){
		  		$scope.new_list._user = current_user_name;

		  		ListFactory.create($scope.new_list, function(data){
		  			
		  		});
			  	console.log("fist console:", $scope.new_list);
		  			$scope.new_list="";
		  		}	

		 })