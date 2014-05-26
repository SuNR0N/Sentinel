/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    awaxa.sentinel.services.UpdateService = function($http, $log, $base64, config)
    {
        function defaultSuccessHandler(data, status, headers, config)
        {
            $log.log("Service call has finished successfully", arguments);
        }

        function defaultErrorHandler(data, status, headers, config)
        {
            $log.error("Service call failed", arguments);
        }

        this.assignTasks = function(tasks, assignee, success, error)
        {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var param =
            {
                tasks : tasks,
                assignee : assignee
            };
            $http.post(config.rootURL + '/update/assignTasks', param)
                .success(success)
                .error(error);
        };

        this.deleteTasks = function(tasks, success, error)
        {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var param =
            {
                tasks : tasks
            };
            $http.post(config.rootURL + '/update/deleteTasks', param)
                .success(success)
                .error(error);
        };

        this.clearDatabase = function(user, success, error)
        {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.getUserName() + ':' + user.getPassword());
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $http.get(config.rootURL + '/update/clearDatabase')
                .success(success)
                .error(error);
        };

        this.saveUser = function(user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var param =
            {
                user : {
                    firstName : user.firstName,
                    lastName : user.lastName,
                    userId: user.userId,
                    role : angular.isString(user.role) ? parseInt(user.role) : user.role,
                    status : angular.isString(user.status) ? user.status.charAt(0) : user.status,
                    mode : angular.isString(user.mode) ? parseInt(user.mode) : user.mode,
                    clientCode : angular.isString(user.clientCode) ? parseInt(user.clientCode) : user.clientCode,
                    owner : user.owner
                },
                assignments : user.assignments
            };
            $http.post(config.rootURL + '/update/saveUser', param)
                .success(success)
                .error(error);
        };

        this.resend = function(client, user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.getUserName() + ':' + user.getPassword());
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            var param = {
                client : {
                    mtId : client.mtId,
                    contracts: client.contracts
                }
            };
            $http.post(config.rootURL + '/update/resendUpdatedContracts', param)
                .success(success)
                .error(error);
        };

        this.saveClient = function(client, user, success, error) {
            success = success || defaultSuccessHandler;
            error = error || defaultErrorHandler;
            var encoded = $base64.encode(user.getUserName() + ':' + user.getPassword());
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            var param =
            {
                client : {
                    mtId : client.mtId,
                    servicePhoneName : client.servicePhoneName,
                    servicePhoneNew : client.servicePhoneNew,
                    serviceTVName: client.serviceTVName,
                    serviceTVNew : client.serviceTVNew,
                    serviceInternetName : client.serviceInternetName,
                    serviceInternetNew : client.serviceInternetNew,
                    comment : client.comment,
                    comment1 : client.comment1,
                    comment2 : client.comment2,
                    phone : client.phone,
                    mobile : client.mobile,
                    contracts: client.contracts
                },
                appointment : client.appointment != null ? client.appointment.format("isoDateTime") : null,
                currentStatus : client.currentStatus,
                lastAssignmentId : client.lastAssignmentId
            };
            $http.post(config.rootURL + '/update/saveClient', param)
                .success(success)
                .error(error);
        };
    }

}());