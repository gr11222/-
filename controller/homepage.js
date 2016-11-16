myapp.controller('homepage-ctr', ['$scope','$http','$interval', function($scope,$http,$interval){
	$http({
		url:'json/detail.json'
	}).success(function(res){
		$scope.show = res.show;
		$scope.sort = res.sort;
		$scope.showSort='微电影';
		$scope.index = 0;
		$scope.clickFn = function(sort,num){
			$scope.showSort = sort;
			$scope.index = num;
		};
		$scope.filterFn = function(item){
			return item.sort == $scope.showSort;
		};
	});
					$scope.showIndex=0;
					$scope.imgArr=[
			       		'img/homepage-banner1.png',
			       		'img/homepage-banner2.jpg'
			       ];
			       var timer =function(){
			       	if ($scope.showIndex>=1) {
			       		$scope.showIndex=0;
			       		return;
			       	}
			       	$scope.showIndex++;
			       };
			      var inter = $interval(timer,3000);
			      $scope.prev=function(){
			      	$interval.cancel(inter);
			       	$scope.showIndex--;
			       	if ($scope.showIndex<0) {
			       		$scope.showIndex=1;
			       	}
			       	inter = $interval(timer,3000);
			       };
			       $scope.next=function(){
			       	$interval.cancel(inter);
			       	$scope.showIndex++;
			       	if ($scope.showIndex>1) {
			       		$scope.showIndex=0;
			       	}
			       	inter = $interval(timer,3000);
			       };
			       $scope.stop=function(index){
			       	$interval.cancel(inter);
			       	$scope.showIndex=index;
			       };
			       $scope.start=function(){
			       		inter = $interval(timer,3000);
			       };
			      

}])