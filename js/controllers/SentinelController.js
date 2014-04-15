/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.SentinelController = function($scope, config, queryService, updateService, entitlementService)
    {
        $scope.sentinelModel =
        {
            isSuperUser : false,
            isAdmin : false,
            isAgent : false,
            isAssistant : false
        }

        $scope.init = function()
        {

        }
    }

}());