myapp.controller('detailList-ctr', ['$scope','$http', function($scope,$http){
	$http({
		url:'json/detail.json'
	}).success(function(res){
		$scope.show = res.show;
		$scope.sort = res.sort;
		$scope.a = '';
		$scope.index=-1;
		$scope.clickFn=function(index,sort){
			$scope.index=index;
			$scope.a = sort;
		}
		$scope.sortFn=function(item){
			if($scope.a==''){return true;}
			return item.sort == $scope.a;
		}
	})
}]) 