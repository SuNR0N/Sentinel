/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.ManageController = function($scope, $filter, queryService, updateService)
    {
        $scope.manage = {};
        $scope.manage.users = [];
        $scope.manage.assignments = [];
        $scope.manage.selectedUser = {};
        $scope.manage.roleOptions =
            [
                awaxa.sentinel.models.Role.GUEST,
                awaxa.sentinel.models.Role.ASSISTANT,
                awaxa.sentinel.models.Role.AGENT,
                awaxa.sentinel.models.Role.AUDITOR,
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
            var assignments = [];
            for (var i = 0; i < user.assignments.length; ++i)
            {
                assignments.push(user.assignments[i].assigneeUserId);
            }
            $scope.manage.selectedUser = angular.copy(user);
            $scope.manage.selectedUser.assignments = assignments;
            $('#userDetailsModal').modal('show');
            loadSelectedAssignmentsForUser(user);
        };

        function loadSelectedAssignmentsForUser(user)
        {
            $('option', $('#assignmentsSelector')).each(function(element) { $('#assignmentsSelector').multiselect('deselect', $(this).val()) });
            var selectedUserIds = [];
            for (var i = 0; i < user.assignments.length; ++i)
            {
                selectedUserIds.push(user.assignments[i].assigneeUserId);
            }
            $('#assignmentsSelector').multiselect('select', selectedUserIds);
        }

        function getUsers_onResult(result)
        {
            if (result)
            {
                $scope.manage.users = result;
                $scope.manage.assignments = [];
                for (var i = 0; i < $scope.manage.users.length; ++i)
                {
                    $scope.manage.assignments.push({
                        value : $scope.manage.users[i].userId,
                        label : $scope.manage.users[i].fullName
                    });
                }
                $("#assignmentsSelector").multiselect('dataprovider', $scope.manage.assignments);
            }
        }

        function getUsers_onError(error)
        {

        }

        $scope.manage.init = function()
        {
            $(document).ready(function() {
                $('.multiselect').multiselect({
                    buttonWidth: '485px'
                });
                });
        };

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
            else if (result.hasOwnProperty('code') && result.code != -1)
            {
                $scope.manage.saveUserErrorMessage = $filter('translate')(result.code.toString());
            }
        }

        function updateUser_onError(error)
        {

        }

        $scope.manage.getUsers();
        $scope.manage.init();
    }
}());