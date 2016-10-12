(function () {
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope) {	
		$scope.menuItems = "";
		
		$scope.checkList = function () {
			var listItems = [];
			var listString = "";
			
			listString = $scope.menuItems.toString();
			
			if (listString == "") {
				$scope.message = "Please enter some data!";
			} else {
				listItems = listString.split(',');
				console.log(listItems);
				
				if (listItems.length>3) {
					$scope.message = "Too much!";
				} else {
					$scope.message = "Enjoy!"
				}
			}
		};
	}
})();
