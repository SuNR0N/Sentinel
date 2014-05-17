/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    awaxa.sentinel.services.EntitlementService = function($http, $log, $base64, config)
    {
        function defaultSuccessHandler(data, status, headers, config)
        {
            $log.log("Service call has finished successfully", arguments);
        }

        function defaultErrorHandler(data, status, headers, config)
        {
            $log.error("Service call failed", arguments);
        }

        this.logInUser = function(user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.userName + ':' + user.password);
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $http.get(config.rootURL + '/entitlement/initUser')
                .success(success)
                .error(error);
        };

        this.registerUser = function(user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.userName + ':' + user.password);
            var name = {
                firstName : user.firstName,
                lastName : user.lastName,
                clientCode : user.clientCode
            };
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $http.post(config.rootURL + '/entitlement/registerUser', name)
                .success(success)
                .error(error);
        };

        this.changePassword = function(username, passwords, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(username + ':' + passwords.old + ':' + passwords.new);
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $http.get(config.rootURL + '/entitlement/changePassword')
                .success(success)
                .error(error);
        };
    }

}());