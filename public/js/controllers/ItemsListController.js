angular.module('ItemsListCtrl', [])
  .controller('ItemsListController', ['$scope', '$location','ItemsService','NgTableParams', function($scope,$location, ItemsService, NgTableParams) {

	//$scope.items = [];

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

      //Here we add an item
      $scope.addItem = function (){
	var dummyExtraItem = {'name':'Extra-Item',
                      'description':'Extra-Instructor is very nice',
                      'itemCode': 'Extra-IT-',
                      'information':' Extra-This is information about the item your are looking at'};
	console.log("About to add New Item:: ", dummyExtraItem);

	$scope.items.push(dummyExtraItem);

      };

     $scope.addItemToServer = function (){
	var dummyExtraItem = {'name':'Extra-Item',
                      'description':'Extra-Instructor is very nice',
                      'itemCode': 'Extra-IT-',
                      'information':' Extra-This is information about the item your are looking at'};
	console.log("About to add New Item:: ", dummyExtraItem);
	ItemsService.addItemToServer(dummyExtraItem).success(function (result){
	  //refresh list of items with new ones...
          console.log("Results of Adding New Item:: ", result);
          $scope.items = result;
	});
  
      };

     
}]);
