var myapp = angular.module('app',['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
			$stateProvider
			.state('buy-record',{
				url:'/buy-record',
				templateUrl:'view/buy-record.html',
				controller:'buy-record-ctr'
			}).state('login',{
				url:'/login', 
				templateUrl:'view/login.html',
				controller:'login-ctr'
			}).state('register',{
				url:'/register',
				templateUrl:'view/register.html',
				controller:'register-ctr'
			}).state('homepage',{
				url:'/homepage',
				templateUrl:'view/homepage.html',
				controller:'homepage-ctr'
			}).state('detailList',{
				url:'/detailList',
				templateUrl:'view/detailList.html',
				controller:'detailList-ctr'
			}).state('findPassword',{
				url:'/findPassword',
				templateUrl:'view/findPassword.html',
				controller:'findPassword-ctr'
			}).state('detail',{
				url:'/detail/:id',
				templateUrl:'view/detail.html',
				controller:'detail-ctr'
			}).state('fillIn',{
				url:'/fillIn/:id',
				templateUrl:'view/fillIn.html',
				controller:'fillIn-ctr'
			}).state('payPage',{
				url:'/payPage/:id',
				templateUrl:'view/payPage.html',
				controller:'payPage-ctr'
			}).state('payComplate',{
				url:'/payComplate/:id',
				templateUrl:'view/payComplate.html',
				controller:'payComplate-ctr'
			}).state('personCenter',{
				url:'/personCenter',
				templateUrl:'view/personCenter.html',
				controller:'personCenter-ctr'
			}).state('personCenter.personHomepage',{
				url:'/personHomepage',
				templateUrl:'view/personHomepage.html',
				controller:'personHomepage-ctr'
			}).state('personCenter.personMessage',{
				url:'/personMessage',
				templateUrl:'view/personMessage.html',
				controller:'personMessage-ctr'
			}).state('personCenter.personSafe',{
				url:'/personSafe',
				templateUrl:'view/personSafe.html',
				controller:'personSafe-ctr'
			}).state('personCenter.personBuy',{
				url:'/personBuy',
				templateUrl:'view/personBuy.html',
				controller:'personBuy-ctr'
			}).state('personCenter.personCircle',{
				url:'/personCircle',
				templateUrl:'view/personCircle.html',
			})
			$urlRouterProvider.otherwise('/homepage');
		}]);