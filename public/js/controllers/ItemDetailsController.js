angular.module('ItemDetailsCtrl', [])
  .controller('ItemDetailsController',
  ['$scope','$location', 'ItemsService',function($scope, $location, ItemsService) {
      $scope.item = {};

      $scope.itemType = "text";

      var selectedItem = ItemsService.getSelectedItem();
      console.log("Got Item Selected From List :: ", selectedItem, "");
      //this is how we load it on the "details form"
      $scope.item = selectedItem;

      $scope.returnToList = function (){
        console.log("Going to the list from details...");
        //just load the items-list view
        $location.path("/items");
      };

      $scope.toggleType = function(){
       console.log("About to toggle type");
       $scope.itemType = ($scope.itemType === 'text'? 'password':'text');
     };
}]);
