(function() {

    "use strict";

    awaxa.sentinel.controllers.PremiumController = function($scope, $filter, queryService, updateService)
    {
        $scope.premium = {};
        $scope.premium.resultSaved = null;
        $scope.premium.internetPlans = [];
        $scope.premium.phonePlans = [];
        $scope.premium.tvPlans = [];
        $scope.premium.extraPlans = [];

        $scope.premium.save = function()
        {
            updateService.savePremium($scope.premium.internetPlans,
                                        $scope.premium.phonePlans,
                                        $scope.premium.tvPlans,
                                        $scope.premium.extraPlans,
                                        savePremium_onResult, savePremium_onError);
        };

        $scope.premium.getPlans = function()
        {
            queryService.getPlans(getPlans_onResult, getPlans_onError);
        };

        function savePremium_onResult(result)
        {
            if (result.hasOwnProperty('success') && result.success === true)
            {
                $scope.premium.resultSaved = true;
            }
            else
            {
                $scope.premium.resultSaved = false;
            }
        }

        function savePremium_onError(error)
        {
            $scope.premium.resultSaved = false;
        }

        function getPlans_onResult(result)
        {
            if (result)
            {
                if (result.hasOwnProperty('internetPlans'))
                {
                    $scope.premium.internetPlans = result.internetPlans;
                }
                if (result.hasOwnProperty('phonePlans'))
                {
                    $scope.premium.phonePlans = result.phonePlans;
                }
                if (result.hasOwnProperty('tvPlans'))
                {
                    $scope.premium.tvPlans = result.tvPlans;
                }
                if (result.hasOwnProperty('extraPlans'))
                {
                    $scope.premium.extraPlans = result.extraPlans;
                }
            }
        }

        function getPlans_onError(error)
        {
            $scope.premium.internetPlans = [];
            $scope.premium.phonePlans = [];
            $scope.premium.tvPlans = [];
            $scope.premium.extraPlans = [];
        }

        $scope.premium.getPlans();
    }

}());