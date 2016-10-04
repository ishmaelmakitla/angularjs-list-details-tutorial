/*
This is where we would use $http or $resource to do our API calls to the
Node backend from your Angular frontend.
*/
angular.module('ItemsService', []).factory('ItemsService', ['$http', function($http) {
  //this is the variable that is accessible across controllers through this service.
  var selectedItem = {};
  return {
        getAll : function() {
          //this is where we make a call to our server app to get list of all items
          console.log("ItemsService.getAll :: ");
          return $http.get('/api/ishlema/items');
        },
        //Of course you could add more methods for the CRUD operations and others - but for
        //our purpose, we only have one route in our server -
        //This is how you could make a post-request for example
        //  create : function(itemData) { return $http.post('/api/ishlema/items', itemData); }


        /*
          Here Comes The Business of this tutorial...data sharing between controllers.
          These are the utility methods...
        */
        //the set/get SelectedItem methods are used to pass the variable/data between controllers
        //the controller that shows a list of items and the controller that shows item-details
        setSelectedItem: function (item){
          console.log("Setting selectedItem to ", item);
          selectedItem = item;
          //Really not necessary - but it's fun to return something...
          return {'itemName':item.name, 'message':'Selected Successfully'};
        },
        getSelectedItem: function (){
          return selectedItem;
        }
    }

}]);
