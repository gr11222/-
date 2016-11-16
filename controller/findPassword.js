myapp.controller('findPassword-ctr', ['$scope','$http','$interval',function($scope,$http,$interval){
	$scope.count='获取验证码';
	$scope.disabled=false;
	$scope.code = function(){
			$scope.count=4;
			$scope.disabled=true;
		var timer=$interval(function(){
			$scope.count--;
			
		},1000,5)
		timer.then(function(){
			$scope.disabled=false;
			$scope.count='获取验证码';
			
		})
	}
	
	
}]);