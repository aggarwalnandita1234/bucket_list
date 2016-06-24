
bucket_list.controller('usersController', function($scope, $location, $routeParams, UserFactory, $localStorage, $routeParams, ListFactory){
 
		  	UserFactory.index(function(data){
		  		// console.log('We are using users controller', data);
		  		$scope.users = data;
		  	});

		  	
		  	console.log("clicked user id is:", $routeParams.id)
		
			  	UserFactory.get_clicked_user($routeParams.id, function(data){
			  			$scope.user= data;
			  			console.log("Is this clicked user data", $scope.user)
			  	});


		  	ListFactory.index_clicked_user($routeParams.id, function(data){
		  		$scope.lists = data;
		  	 	console.log("list for clicked user in user ctrlr", data);
		  	})


		  	$scope.enterUser = function(){
		  		UserFactory.create($scope.new_user, function(current_user){
		  			console.log(current_user);
			 		$scope.user=current_user;
			 		console.log("$scope.user will be", $scope.user)
			 		$localStorage = $scope.user
			 		$location.url('/dashboard/'+$scope.user._id)
		  		});


		  		
		  			$scope.new_user="";
		  		}	
		 })

	

