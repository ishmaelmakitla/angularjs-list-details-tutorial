/*
Here we define all our Angular routes - using the $routeProvider
*/
angular.module('appRoutes', [])
       .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
         $routeProvider
            // home page
            .when('/', {
                redirectTo: '/items'
            }).
            //Items Routes
            when('/items', {
                templateUrl: 'views/items.html',
                controller: 'ItemsListController'
            }).
            when('/view-item', {
                templateUrl: 'views/itemDetails.html',
                controller: 'ItemDetailsController'
            }).
            //for any other route - redirect-to home
            otherwise({
               redirectTo: '/'
            });
          //needed for pretty urls
          $locationProvider.html5Mode(true);
       }]);
