/**
 * Created by NiGhTy on 2014.04.22..
 */
(function() {

    "use strict";

    awaxa.sentinel.services.UtilityService = function($http, $log, $base64, config)
    {
        function defaultSuccessHandler(data, status, headers, config)
        {
            $log.log("Service call has finished successfully", arguments);
        }

        function defaultErrorHandler(data, status, headers, config)
        {
            $log.error("Service call failed", arguments);
        }

        this.uploadCSV = function(csvFile, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var fd = new FormData();
            fd.append('file', csvFile);
            $http.post(config.rootURL + '/utility/uploadCSV', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                .success(success)
                .error(error);
        };

        this.uploadContract = function(contractFile, mtId, user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.getUserName() + ':' + user.getPassword());
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            var fd = new FormData();
            fd.append('file', contractFile);
            $http.post(config.rootURL + '/utility/uploadContract/' + mtId, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                .success(success)
                .error(error);
        };

        this.getGeneratedContractURL = function(mtId, username)
        {
            return config.rootURL + '/utility/generateContract/' + mtId + '/' + username;
        };

        this.getContractURL = function(id)
        {
            return config.rootURL + '/utility/getContract/' + id;
        };
    }

}());