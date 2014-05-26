/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.SentinelController = function($scope, $location, queryService, updateService)
    {
        $scope.currentUser = new awaxa.sentinel.models.User();
        $scope.users = [];
        $scope.isClearingDatabase = false;

        $scope.$watch(function() {
            return $location.path();
        }, function(newValue, oldValue)
        {
            if (($scope.currentUser == null || $scope.currentUser == undefined || !$scope.currentUser.getIsLogged()) && newValue != '/login')
            {
                $location.path('/login');
            }
            if ($scope.currentUser != null && $scope.currentUser != undefined && $scope.currentUser.getIsLogged() && !$scope.currentUser.isAdmin()
                && (newValue == '/manage' || newValue == '/upload' || newValue == '/register'))
            {
                $location.path(oldValue);
            }
        });

        $scope.getUsers = function()
        {
            queryService.getUsersWithNames(getUsersWithNames_onResult, getUsersWithNames_onError);
        };

        $scope.clearDatabase = function()
        {
            if ($scope.currentUser.getIsLogged() && $scope.currentUser.isSuperUser())
            {
                $scope.isClearingDatabase = true;
                updateService.clearDatabase($scope.currentUser, clearDatabase_onResult, clearDatabase_onError);
            }
        };

        function clearDatabase_onResult(result)
        {
            $scope.isClearingDatabase = false;
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $('#dbClearModal').modal('hide');
            }
        }

        function clearDatabase_onError(error)
        {
            $scope.isClearingDatabase = false;
        }

        function getUsersWithNames_onResult(result)
        {
            if (angular.isArray(result))
            {
                $scope.users = result;
            }
        }

        function getUsersWithNames_onError(error)
        {
            $scope.users = [];
        }
    }

}());