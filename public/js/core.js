//Here I am injecting all the controllers and services ...
var appComponents = [ 'ngRoute','appRoutes','MainCtrl','ui.bootstrap',
                      'ngTable','ItemsListCtrl','ItemDetailsCtrl','ItemsService'
                    ];

/*
Here we set up our Angular app to use all of our components (see appComponents).
We will use dependency injection and set up our Angular application.
*/
angular.module('mainListDetailsApp', appComponents);
//Like that, and we are done here...
