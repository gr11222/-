myapp.controller('personCenter-ctr', ['$scope','$http', function($scope,$http){
    $http({
		url:'json/person.json'
	}).success(function(res){
		$scope.message=res.message;
		$scope.myAttentionShow=res.myAttentionShow;
		$scope.myshow = res.myshow;
	})
}])