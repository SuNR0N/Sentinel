/**
 * Created by NiGhTy on 2014.04.20..
 */
(function(){

    "use strict";

    awaxa.sentinel.controllers.LoginController = function($scope, $location, config, entitlementService)
    {
        $scope.user = {};
        $scope.isInvalidUser = false;
        $scope.loginErrorMessage = null;

        $scope.logIn = function()
        {
            var user = $scope.user;
            entitlementService.logInUser(user, logInUser_onResult, logInUser_onError);
        };

        function logInUser_onResult(result)
        {
            if (result.hasOwnProperty('isValidUser') && result.isValidUser == true )
            {
                if (result.hasOwnProperty('currentUser'))
                {
                    $scope.currentUser.setUserName(result.currentUser.userName);
                    $scope.currentUser.setFirstName(result.currentUser.firstName);
                    $scope.currentUser.setLastName(result.currentUser.lastName);
                    $scope.currentUser.setRole(result.currentUser.role);
                    $scope.currentUser.setIsLogged(true);
                    $scope.isInvalidUser = false;
                    $location.path('/tasks');
                }
            }
            else
            {
                $scope.isInvalidUser = true;
            }
            if (result.hasOwnProperty('message'))
            {
                $scope.loginErrorMessage = result.message;
            }
            else
            {
                $scope.loginErrorMessage = null;
            }
        }

        function logInUser_onError(error)
        {
            $scope.loginErrorMessage = 'Login failed';
            $scope.isInvalidUser = true;
        }

        $scope.logOut = function()
        {
            $scope.currentUser.clear();
            $location.path('/login');
        };

    }

}());