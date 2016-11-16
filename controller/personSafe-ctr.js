myapp.controller('personSafe-ctr',['$scope','$http',function($scope,$http){
		$http({
			url:'json/person.json',

		}).success(function(res){
			$scope.message=res.message;
			$scope.myAttentionShow=res.myAttentionShow;
			$scope.myshow = res.myShow;
		});	
		  $scope.stateId=0;
		  $scope.myFilter="";
		$scope.stateClick=function(index){
			$scope.stateId=index;
		}
}]);