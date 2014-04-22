/**
 * Created by NiGhTy on 2014.04.20..
 */
(function(){

    "use strict";

    awaxa.sentinel.controllers.RegisterController = function($scope, $location, config, entitlementService)
    {
        $scope.newUser = {};
        $scope.registrationErrorMessage = null;
        $scope.onlyNumbers = /^\d+$/;

        $scope.register = function()
        {
            var user = $scope.newUser;
            entitlementService.registerUser(user, registerUser_onResult, registerUser_onError);
        };

        function registerUser_onResult(result)
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
                    $location.path('/tasks');
                }
            }
            if (result.hasOwnProperty('message'))
            {
                $scope.registrationErrorMessage = result.message;
            }
            else
            {
                $scope.registrationErrorMessage = null;
            }
        }

        function registerUser_onError(error)
        {
            $scope.registrationErrorMessage = 'Registration failed'
        }
    }

}());