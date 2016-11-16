myapp.controller('personBuy-ctr',['$scope','$http',function($scope,$http){
		$http({
			url:'json/person.json',

		}).success(function(res){
			$scope.message=res.message;
			$scope.myAttentionShow=res.myAttentionShow;
			$scope.myshow = res.myShow;
			console.log($scope.myshow)
		});
		
		  $scope.stateId=2;
		  $scope.myFilter="";
		$scope.stateClick=function(index){
			$scope.stateId=index;
			$scope.myFilter=["0","1",""][index];
		}
		$scope.filterFn=function(item){
			if($scope.myFilter==''){return true;}
			return item.payState == $scope.myFilter;
		}

}]);