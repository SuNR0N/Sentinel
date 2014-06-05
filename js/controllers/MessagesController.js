/**
 * Created by NiGhTy on 2014.04.29..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.MessagesController = function($scope, queryService)
    {
        $scope.messages = {};
        $scope.messages.isLoaded = false;
        $scope.messages.mails = [];
        $scope.messages.errorMessage = null;

        $scope.messages.getMails = function()
        {
            $scope.messages.isLoaded = false;
            queryService.getMails($scope.currentUser, getMails_onResult, getMails_onError);
        };

        $scope.messages.orderBySentDate = function(mail)
        {
            if (mail.hasOwnProperty('sentDate'))
            {
                var d = mail.sentDate;
                return new Date(d).getTime();
            }
            else
            {
                return -1;
            }
        };

        function getMails_onResult(result)
        {
            if (angular.isArray(result))
            {
                $scope.messages.mails = result;
            }
            $scope.messages.isLoaded = true;
        }

        function getMails_onError(error)
        {
            if (error.hasOwnProperty('error'))
            {
                $scope.messages.errorMessage = error.error;
            }

            $scope.messages.mails = [];
            $scope.messages.isLoaded = true;
        }

        $scope.messages.getMails();
    }

}());