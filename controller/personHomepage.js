myapp.controller('personHomepage-ctr', ['$scope','$http','$timeout',function($scope,$http,$timeout){
	$http({
		url:'json/person.json'
	}).success(function(res){
		$scope.message=res.message;
		$scope.myAttentionShow=res.myAttentionShow;
		$scope.myshow = res.myshow;
	})
}]);