/**
 * Created by NiGhTy on 2014.04.20..
 */
(function(){

    "use strict";

    awaxa.sentinel.controllers.RegisterController = function($scope, $location, entitlementService)
    {
        $scope.register = {};
        $scope.register.user = {};
        $scope.register.errorMessage = null;

        $scope.register.registerUser = function()
        {
            entitlementService.registerUser($scope.register.user, registerUser_onResult, registerUser_onError);
        };

        function registerUser_onResult(result)
        {
            if (result.hasOwnProperty('isValidUser') && result.isValidUser == true )
            {
                if (result.hasOwnProperty('currentUser'))
                {
                    $scope.currentUser.setUserName(result.currentUser.userName);
                    $scope.currentUser.setPassword($scope.register.user.password);
                    $scope.currentUser.setFirstName(result.currentUser.firstName);
                    $scope.currentUser.setLastName(result.currentUser.lastName);
                    $scope.currentUser.setRole(result.currentUser.role);
                    $scope.currentUser.setIsLogged(true);
                    $scope.getUsers();
                    $location.path('/tasks');
                }
            }
            if (result.hasOwnProperty('message'))
            {
                $scope.register.errorMessage = result.message;
            }
            else
            {
                $scope.register.errorMessage = null;
            }
        }

        function registerUser_onError(error)
        {
            $scope.register.errorMessage = 'Registration failed'
        }
    }

}());