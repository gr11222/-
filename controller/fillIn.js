myapp.controller('fillIn-ctr', ['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$scope.id = $stateParams.id;
	$http({
		url:'json/detail.json'
	}).success(function(res){
		$scope.show = res.show[$scope.id];
		$scope.sort = res.sort;
	})
}]);