/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    awaxa.sentinel.services.QueryService = function($http, $log, $base64, config)
    {
        function defaultSuccessHandler(data, status, headers, config)
        {
            $log.log("Service call has finished successfully", arguments);
        }

        function defaultErrorHandler(data, status, headers, config)
        {
            $log.error("Service call failed", arguments);
        }

        this.getUsers = function(success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            $http.get(config.rootURL + '/query/getUsers')
                .success(success)
                .error(error);
        };

        this.getUsersWithNames = function(success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            $http.get(config.rootURL + '/query/getUsersWithNames')
                .success(success)
                .error(error);
        };

        this.getClients = function(user, showArchivedItems, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.getUserName() + ':' + user.getPassword());
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            var params = {
                showArchivedItems : showArchivedItems
            };
            $http.post(config.rootURL + '/query/getClients', params)
                .success(success)
                .error(error);
        };

        this.getPlans = function(success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            $http.get(config.rootURL + '/query/getPlans')
                .success(success)
                .error(error);
        };

        this.getAvailableUsers = function(user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            $http.get(config.rootURL + '/query/getAvailableUsers/' + user.getUserName())
                .success(success)
                .error(error);
        };

        this.getAvailableAssignees = function(user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.getUserName() + ':' + user.getPassword());
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $http.get(config.rootURL + '/query/getAvailableAssignees')
                .success(success)
                .error(error);
        };

        this.getMails = function(user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.getUserName() + ':' + user.getPassword());
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $http.get(config.rootURL + '/query/getMails')
                .success(success)
                .error(error);
        };

        this.getCalendarForUser = function(username, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            $http.get(config.rootURL + '/query/getCalendarForUser/' + username)
                .success(success)
                .error(error);
        };

        this.getStatistics = function(username, startDate, endDate, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var params = {
                username : username,
                startDate : startDate,
                endDate : endDate
            };
            $http.post(config.rootURL + '/query/getStatistics', params)
                .success(success)
                .error(error);
        }
    }

}());