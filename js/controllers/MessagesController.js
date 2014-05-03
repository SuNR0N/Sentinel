/**
 * Created by NiGhTy on 2014.04.29..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.MessagesController = function($scope, queryService)
    {
        $scope.messages = {};
        $scope.messages.mails = [];
        $scope.messages.errorMessage = null;

        $scope.messages.getMails = function()
        {
            queryService.getMails($scope.currentUser, getMails_onResult, getMails_onError);
        };

        function getMails_onResult(result)
        {
            if (angular.isArray(result))
            {
                $scope.messages.mails = result;
            }
        }

        function getMails_onError(error)
        {
            if (error.hasOwnProperty('error'))
            {
                $scope.messages.errorMessage = error.error;
            }

            $scope.messages.mails = [];
        }

        $scope.messages.getMails();
    }

}());