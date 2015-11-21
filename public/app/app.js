var App = angular.module("hyperDrive", [
	'ngRoute',
	'hyperDrive.home',
	'hyperDrive.plans'
]);

App.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		controller: 'homeCtrl',
		templateUrl: '/app/home/view.html'
	}).when('/plans', {
		controller: 'plansCtrl',
		templateUrl: '/app/plans/view.html'
	}).otherwise({ redirectTo: '/' });

}]);