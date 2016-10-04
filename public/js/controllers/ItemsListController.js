angular.module('ItemsListCtrl', [])
  .controller('ItemsListController', ['$scope', '$location','ItemsService','NgTableParams', function($scope,$location, ItemsService, NgTableParams) {

       ItemsService.getAll().success(function(itemsList) {
         console.log("Items-List-Controller:: Returning All-Items From ItemsService. 0th Item ::", itemsList[0]);
          $scope.message = "List of Items On Our System :: "+(itemsList? itemsList.length : 0);
          //ideally, you would want to get the table params from config table...
          var numberOfItemsPerPage = 10;
          $scope.items = itemsList;
          //the items table binds to the name of the table in our template (the name MUST match)
          $scope.itemsTable = new NgTableParams({page: 1, count: numberOfItemsPerPage},
                                                    { total:1,
                                                      dataset: $scope.items
                                                    });

      });
      //methods invoked from within the HTML page when clicking icon on item-row
      $scope.selectItem = function (item){
        console.log("Selected Item Of NAME :: ", item.name);
        //we indicate to our ItemsService that this is the current item
        var feedback = ItemsService.setSelectedItem(item);
        console.log("Item Selection Set :: ", feedback);
        //switch to item-view page (which will then use the ItemsService to get the selected item)
        $location.path("/view-item");
      };
}]);
