/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.ManageController = function($scope, queryService, updateService)
    {
        $scope.manage = {};
        $scope.manage.users = [];
        $scope.manage.selectedUser = {};
        $scope.manage.roleOptions =
            [
                awaxa.sentinel.models.Role.GUEST,
                awaxa.sentinel.models.Role.ASSISTANT,
                awaxa.sentinel.models.Role.AGENT,
                awaxa.sentinel.models.Role.ADMIN,
                awaxa.sentinel.models.Role.SUPERUSER
            ];

        $scope.manage.statusOptions =
            [
                awaxa.sentinel.models.Status.ACTIVE,
                awaxa.sentinel.models.Status.INACTIVE,
                awaxa.sentinel.models.Status.TERMINATED
            ];

        $scope.manage.modeOptions =
            [
                awaxa.sentinel.models.Mode.BEGINNER,
                awaxa.sentinel.models.Mode.EXPERT
            ];

        $scope.manage.saveUserErrorMessage = null;

        $scope.manage.getUsers = function()
        {
            queryService.getUsers(getUsers_onResult, getUsers_onError);
        };

        $scope.manage.showUserDetails = function(user)
        {
            $scope.manage.selectedUser = angular.copy(user);
            $('#userDetailsModal').modal('show');
        };

        function getUsers_onResult(result)
        {
            if (result)
            {
                $scope.manage.users = result;
            }
        }

        function getUsers_onError(error)
        {

        }

        $scope.manage.saveUser = function()
        {
            updateService.saveUser($scope.manage.selectedUser, updateUser_onResult, updateUser_onError);
        };

        function updateUser_onResult(result)
        {
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.manage.saveUserErrorMessage = null;
                $('#userDetailsModal').modal('hide');
                $scope.manage.getUsers();

            }
            else if (result.hasOwnProperty('message'))
            {
                $scope.manage.saveUserErrorMessage = result.message;
            }
        }

        function updateUser_onError(error)
        {

        }

        $scope.manage.getUsers();
    }
}());