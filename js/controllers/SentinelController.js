/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.SentinelController = function($scope, $location, queryService)
    {
        $scope.currentUser = new awaxa.sentinel.models.User();
        $scope.users = [];

        $scope.$watch(function() {
            return $location.path();
        }, function(newValue, oldValue)
        {
            if (($scope.currentUser == null || $scope.currentUser == undefined || !$scope.currentUser.getIsLogged()) && (newValue != '/login' && newValue != '/register'))
            {
                $location.path('/login');
            }
            if ($scope.currentUser != null && $scope.currentUser != undefined && $scope.currentUser.getIsLogged() && !$scope.currentUser.isAdmin()
                && (newValue == '/manage' || newValue == '/upload'))
            {
                $location.path(oldValue);
            }
        });

        $scope.getUsers = function()
        {
            queryService.getUsersWithNames(getUsersWithNames_onResult, getUsersWithNames_onError);
        };

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