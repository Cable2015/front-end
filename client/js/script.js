//  inject the ngRoute dependency in the module.
    var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/profile',{
            templateUrl: 'partials/customers.html',
        })
        .when('/wall',{
            templateUrl: 'partials/orders.html'
        })
        .when('/about',{
            templateUrl: 'partials/about.html'
        })
        .when('/signup_login',{
            templateUrl: 'partials/signup_login.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
