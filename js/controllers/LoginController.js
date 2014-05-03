/**
 * Created by NiGhTy on 2014.04.20..
 */
(function(){

    "use strict";

    awaxa.sentinel.controllers.LoginController = function($scope, $location, entitlementService)
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
                    $scope.getUsers();
                    $location.path('/tasks');
                }
            }
            else
            {
                $scope.login.isInvalidUser = true;
            }
            if (result.hasOwnProperty('message'))
            {
                $scope.login.errorMessage = result.message;
            }
            else
            {
                $scope.login.errorMessage = null;
            }
        }

        function logInUser_onError(error)
        {
            $scope.login.errorMessage = 'Login failed';
            $scope.login.isInvalidUser = true;
        }

        $scope.login.logOut = function()
        {
            $scope.currentUser.clear();
            $location.path('/login');
        };

    }

}());