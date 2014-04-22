/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    angular.module('sentinel.directives',[])
        .directive('strMatch', awaxa.sentinel.directives.StringMatch);

    angular.module('sentinel.services', ['base64'])
        .constant('serviceConfig', awaxa.sentinel.configs.ServiceConfig)
        .service('queryService', ['$http', '$log', 'serviceConfig', awaxa.sentinel.services.QueryService])
        .service('updateService', ['$http', '$log', 'serviceConfig', awaxa.sentinel.services.UpdateService])
        .service('entitlementService', ['$http', '$log', '$base64', 'serviceConfig', awaxa.sentinel.services.EntitlementService]);

    angular.module('sentinel', ['ngRoute', 'sentinel.services', 'sentinel.directives'])
        .config(function($locationProvider, $routeProvider) {
            //$locationProvider.html5Mode(true);
            $routeProvider
            .when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'pages/register.html',
                controller:  'RegisterController'
            })
            .when('/calendar', {
                templateUrl: 'pages/calendar.html',
                controller:  'SentinelController'
            })
            .when('/manage', {
                templateUrl: 'pages/manage.html',
                controller:  'SentinelController'
            })
            .when('/messages', {
                templateUrl: 'pages/messages.html',
                controller:  'SentinelController'
            })
            .when('/statistics', {
                templateUrl: 'pages/statistics.html',
                controller:  'SentinelController'
            })
            .when('/tasks', {
                templateUrl: 'pages/tasks.html',
                controller:  'SentinelController'
            })
            .when('/upload', {
                templateUrl: 'pages/upload.html',
                controller:  'SentinelController'
            })
            .when('/error', {
                templateUrl: 'pages/error.html',
                controller:  'SentinelController'
            })
            .otherwise({ redirectTo: '/' });
         })
        .constant('applicationConfig', awaxa.sentinel.configs.ApplicationConfig)
        .controller('SentinelController', ['$scope', 'applicationConfig', 'queryService', 'updateService', 'entitlementService', awaxa.sentinel.controllers.SentinelController])
        .controller('LoginController', ['$scope', '$location', 'applicationConfig', 'entitlementService', awaxa.sentinel.controllers.LoginController])
        .controller('RegisterController', ['$scope', '$location', 'applicationConfig', 'entitlementService', awaxa.sentinel.controllers.RegisterController]);

}());