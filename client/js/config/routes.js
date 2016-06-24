bucket_list.config(function ($routeProvider){

      
      $routeProvider

            .when('/',{
                templateUrl: './../partials/view1.html',
                controller: "usersController"
            })
            .when('/dashboard/:id',{
                templateUrl: './../partials/dashboard.html',
                controller: "usersController"
            })
            .when('/user/:id',{
                templateUrl: './../partials/users.html',

            })
            .otherwise({
              redirectTo: '/'
            });
    });