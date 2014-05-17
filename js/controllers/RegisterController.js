/**
 * Created by NiGhTy on 2014.04.20..
 */
(function(){

    "use strict";

    awaxa.sentinel.controllers.RegisterController = function($scope, $location, $filter, entitlementService)
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
                    $scope.getUsers();
                    $location.path('/manage');
                }
            }
            if (result.hasOwnProperty('code') && result.code != -1)
            {
                $scope.register.errorMessage = $filter('translate')(result.code.toString());
            }
            else
            {
                $scope.register.errorMessage = null;
            }
        }

        function registerUser_onError(error)
        {
            $scope.register.errorMessage = $filter('translate')('MSG_REGISTRATION_FAILED');
        }
    }

}());