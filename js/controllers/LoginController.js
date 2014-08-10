/**
 * Created by NiGhTy on 2014.04.20..
 */
(function(){

    "use strict";

    awaxa.sentinel.controllers.LoginController = function($scope, $location, $filter, entitlementService)
    {
        $scope.login = {};
        $scope.login.user = {};
        $scope.login.isInvalidUser = false;
        $scope.login.errorMessage = null;

        $scope.login.logIn = function()
        {
            entitlementService.logInUser($scope.login.user, logInUser_onResult, logInUser_onError);
        };

        function logInUser_onResult(result)
        {
            if (result.hasOwnProperty('isValidUser') && result.isValidUser == true )
            {
                if (result.hasOwnProperty('currentUser'))
                {
                    $scope.currentUser.setUserName(result.currentUser.userName);
                    $scope.currentUser.setPassword($scope.login.user.password);
                    $scope.currentUser.setFirstName(result.currentUser.firstName);
                    $scope.currentUser.setLastName(result.currentUser.lastName);
                    $scope.currentUser.setRole(result.currentUser.role);
                    $scope.currentUser.setIsLogged(true);
                    $scope.login.isInvalidUser = false;
                    if ($scope.currentUser.isEmployee()) {
                        $scope.getUsers();
                        $location.path('/tasks');
                    } else  if ($scope.currentUser.isAuditor()) {
                        $location.path('/summary');
                    } else {
                        $location.path('/password');
                    }
                }
            }
            else
            {
                $scope.login.isInvalidUser = true;
            }
            if (result.hasOwnProperty('code') && result.code != -1)
            {
                $scope.login.errorMessage = $filter('translate')(result.code.toString());
            }
            else
            {
                $scope.login.errorMessage = null;
            }
        }

        function logInUser_onError(error)
        {
            $scope.login.errorMessage = $filter('translate')('MSG_LOGIN_FAILED');
            $scope.login.isInvalidUser = true;
        }

        $scope.login.logOut = function()
        {
            $scope.currentUser.clear();
            $location.path('/login');
        };

    }

}());