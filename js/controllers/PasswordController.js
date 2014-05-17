/**
 * Created by NiGhTy on 2014.05.04..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.PasswordController = function($scope, $filter, entitlementService)
    {
        $scope.password = {};
        $scope.password.passwords = {};
        $scope.password.message = null;
        $scope.password.success = null;

        $scope.password.changePassword = function()
        {
            $scope.password.message = null;
            entitlementService.changePassword($scope.currentUser.getUserName(), $scope.password.passwords, changePassword_onResult, changePassword_onError);
        };

        function changePassword_onResult(result)
        {
            if (result && result.hasOwnProperty('code') && result.code != -1 && result.hasOwnProperty('success'))
            {
                $scope.password.message = $filter('translate')(result.code.toString());
                $scope.password.success = result.success;
            }
            else
            {
                $scope.password.message = $filter('translate')('MSG_PASSWORD_CHANGE_FAILED');
                $scope.password.success = false;
            }
        }

        function changePassword_onError(error)
        {
            $scope.password.message = $filter('translate')('MSG_PASSWORD_CHANGE_FAILED');
            $scope.password.success = false;
        }
    }

}());