/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.SentinelController = function($scope, config, queryService, updateService, entitlementService)
    {
        $scope.currentUser = new awaxa.sentinel.models.User();

        $scope.sentinelModel =
        {
            isSuperUser : false,
            isAdmin : false,
            isAgent : false,
            isAssistant : false,
            userName : null,
            isLoggedIn : false
        };

        $scope.init = function()
        {

        };
    }

}());