/**
 * Created by NiGhTy on 2014.04.15..
 */
(function(){

    "use strict";

    awaxa.sentinel.configs.ApplicationConfig = function($locationProvider, $routeProvider)
    {
        //$locationProvider.html5Mode(true);
        $routeProvider
            .when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'LoginController'
            })
            .when('/password', {
                templateUrl: 'pages/password.html',
                controller: 'PasswordController'
            })
            .when('/register', {
                templateUrl: 'pages/register.html',
                controller:  'RegisterController'
            })
            .when('/calendar', {
                templateUrl: 'pages/calendar.html',
                controller:  'CalendarController'
            })
            .when('/manage', {
                templateUrl: 'pages/manage.html',
                controller:  'ManageController'
            })
            .when('/messages', {
                templateUrl: 'pages/messages.html',
                controller:  'MessagesController'
            })
            .when('/statistics', {
                templateUrl: 'pages/statistics.html',
                controller:  'StatisticsController'
            })
            .when('/tasks', {
                templateUrl: 'pages/tasks.html',
                controller:  'TasksController'
            })
            .when('/upload', {
                templateUrl: 'pages/upload.html',
                controller:  'UploadController'
            })
            .when('/summary', {
                templateUrl: 'pages/summary.html',
                controller: 'SummaryController'
            })
            .when('/premium', {
                templateUrl: 'pages/premium.html',
                controller: 'PremiumController'
            })
            .otherwise({ redirectTo: '/' });

    };

}());