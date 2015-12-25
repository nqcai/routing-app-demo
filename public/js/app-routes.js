// inject ngRoute for all routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
	$routeProvider

		// route for home page
		.when('/', {
			templateUrl : 'views/pages/home.html',
			controller	: 'homeController',
			controllerAs: 'home'
		})

		// route for about pg
		.when('/about', {
			templateUrl : 'views/pages/about.html',
			controller	: 'aboutController',
			controllerAs: 'about'
		})

		// route for contact page
		.when('/contact', {
			templateUrl : 'views/pages/contact.html',
			controller	: 'contactController',
			controllerAs: 'contact'
		});

	// set our app to have pretty URLs
	$locationProvider.html5Mode(true);
});