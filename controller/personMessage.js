myapp.controller('personMessage-ctr', ['$scope','$http', function($scope,$http){
    $http({
		url:'json/person.json'
	}).success(function(res){
		$scope.message=res.message;
		$scope.myAttentionShow=res.myAttentionShow;
		$scope.myshow = res.myshow;
		$scope.sort = res.sort;
	});
	$scope.arr = [];
	$scope.checkFn=function(index){
		$scope.arr[index]=!$scope.arr[index];
	};
}])