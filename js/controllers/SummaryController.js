(function() {

    "use strict";

    awaxa.sentinel.controllers.SummaryController = function($scope, $filter, queryService, updateService)
    {
        $scope.summary = {};
        $scope.summary.isSavingClient = false;
        $scope.summary.isSavingMonthlyPlan = false;
        $scope.summary.saveClientErrorMessage = null;
        $scope.summary.saveMonthlyPlanErrorMessage = null;
        $scope.summary.availableOwners = [];
        $scope.summary.netIncome = null;
        $scope.summary.grossIncome = null;
        $scope.summary.selectedOwner = null;
        $scope.summary.selectedMonth = null;
        $scope.summary.monthlyPlan = null;
        $scope.summary.monthlyPlanEditable = null;
        $scope.summary.monthlyProgress = null;
        $scope.summary.monthlyDetails = null;
        $scope.summary.selectedClient = null;
        $scope.summary.errorCorrectionOptions = [1, 2, 3];
        $scope.summary.statusOptions = [
                awaxa.sentinel.models.SummaryStatus.UNDER_ESTABLISHMENT,
                awaxa.sentinel.models.SummaryStatus.CANCELED,
                awaxa.sentinel.models.SummaryStatus.TIMED_ACTIVATION,
                awaxa.sentinel.models.SummaryStatus.ESTABLISHED
            ];

        $scope.summary.getAvailableOwners = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                queryService.getAvailableOwners(getAvailableOwners_onResult, getAvailableOwners_onError);
            }
        };

        $scope.summary.setCurrentMonth = function()
        {
            var d = new Date();
            $scope.summary.selectedMonth = d.format("yyyy-mm");
        };

        $scope.summary.getSummary = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                if ($scope.summary.selectedOwner != null && $scope.summary.selectedMonth != null && $scope.summary.selectedMonth.match(/\d{4}-\d{2}/g) != null)
                {
                    var yearMonth = $scope.summary.selectedMonth.split('-');
                    var year = parseInt(yearMonth[0]);
                    var month = parseInt(yearMonth[1]);
                    $scope.summary.clearSummary();
                    queryService.getSummary($scope.summary.selectedOwner, year, month, getSummary_onResult, getSummary_onError);
                }
                else
                {
                    $scope.summary.clearSummary();
                }
            }
        };

        $scope.summary.saveClient = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                $scope.summary.isSavingClient = true;
                $scope.summary.saveClientErrorMessage = null;
                updateService.saveClientSummary($scope.summary.selectedClient, $scope.currentUser, saveClientSummary_onResult, saveClientSummary_onError);
            }
        };

        $scope.summary.saveMonthlyPlan = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                $scope.summary.isSavingMonthlyPlan = true;
                $scope.summary.saveMonthlyPlanErrorMessage = null;
                var yearMonth = $scope.summary.selectedMonth.split('-');
                var year = parseInt(yearMonth[0]);
                var month = parseInt(yearMonth[1]);
                updateService.saveMonthlyPlan($scope.summary.monthlyPlanEditable, year, month, $scope.currentUser, saveMonthlyPlan_onResult, saveMonthlyPlan_onError);
            }
        };

        $scope.summary.clearSummary = function()
        {
            $scope.summary.netIncome = null;
            $scope.summary.grossIncome = null;
            $scope.summary.monthlyPlan = null;
            $scope.summary.monthlyProgress = null;
            $scope.summary.monthlyDetails = null;
        };

        $scope.summary.editPlan = function()
        {
            $scope.summary.monthlyPlanEditable = angular.copy($scope.summary.monthlyPlan);
            $('#monthlyPlanModal').modal('show');
        };

        $scope.summary.onRowClick = function($event, item)
        {
            $scope.summary.selectedClient = angular.copy(item);
            $('#clientSummaryModal').modal('show');
        };

        $scope.summary.hideClientSummary = function()
        {
            $scope.summary.selectedClient = {};
            $('#clientSummaryModal').modal('hide');
        };

        $scope.summary.hideMonthlyPlan = function()
        {
            $scope.summary.monthlyPlanEditable = null;
            $('#monthlyPlanModal').modal('hide');
        };

        $scope.summary.refreshPlan = function(plan)
        {
            $scope.summary.monthlyPlan = plan;
        };

        $scope.summary.refreshClient = function(client)
        {
            for (var i = 0, max = $scope.summary.monthlyDetails.length; i < max; i += 1)
            {
                if ($scope.summary.monthlyDetails[i].hasOwnProperty('mtId') && client.hasOwnProperty('mtId') && $scope.summary.monthlyDetails[i].mtId === client.mtId)
                {
                    $scope.summary.monthlyDetails[i] = client;
                    break;
                }
            }
        };

        $scope.summary.getCellClass = function(item)
        {
            return {
                underEstablishmentStyle : item === awaxa.sentinel.models.SummaryStatus.UNDER_ESTABLISHMENT.value,
                timedActivationStyle : item === awaxa.sentinel.models.SummaryStatus.TIMED_ACTIVATION.value,
                canceledStyle : item === awaxa.sentinel.models.SummaryStatus.CANCELED.value,
                establishedStyle : item === awaxa.sentinel.models.SummaryStatus.ESTABLISHED.value
            };
        };

        function getAvailableOwners_onResult(result)
        {
            if (result && angular.isArray(result))
            {
                $scope.summary.availableOwners = result;
                if ($scope.summary.availableOwners.length > 0 && $scope.summary.availableOwners[0].hasOwnProperty('userName'))
                {
                    $scope.summary.selectedOwner = $scope.summary.availableOwners[0].userName;
                    $scope.summary.getSummary();
                }
            }
            else
            {
                $scope.summary.availableOwners = [];
            }
        }

        function getAvailableOwners_onError(error)
        {
            $scope.summary.availableOwners = [];
        }

        function getSummary_onResult(result)
        {
            if (result.hasOwnProperty('clients') && result.clients !== null)
            {
                $scope.summary.monthlyDetails = result.clients;
            }
            if (result.hasOwnProperty('info') && result.info !== null)
            {
                if (result.info.hasOwnProperty('grossIncome')) {
                    $scope.summary.grossIncome = result.info.grossIncome;
                }
                if (result.info.hasOwnProperty('netIncome')) {
                    $scope.summary.netIncome = result.info.netIncome;
                }
                if (result.info.hasOwnProperty('monthlyProgress') && result.info.monthlyProgress !== null)
                {
                    $scope.summary.monthlyProgress = result.info.monthlyProgress;
                }
                if (result.info.hasOwnProperty('monthlyPlan') && result.info.monthlyPlan !== null)
                {
                    $scope.summary.monthlyPlan = result.info.monthlyPlan;
                }
            }
        }

        function getSummary_onError(error)
        {
            $scope.summary.clearSummary();
        }

        function saveClientSummary_onResult(result)
        {
            $scope.summary.isSavingClient = false;
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.summary.hideClientSummary();
                if (result.hasOwnProperty('client'))
                {
                    $scope.summary.refreshClient(result.client);
                }
            }
            else if (result.hasOwnProperty('code') && result.code != -1)
            {
                $scope.summary.saveClientErrorMessage = $filter('translate')(result.code.toString());
            }
        }

        function saveClientSummary_onError(error)
        {
            $scope.summary.isSavingClient = false;
            if (error.hasOwnProperty('code') && error.code != -1)
            {
                $scope.summary.saveClientErrorMessage = $filter('translate')(error.code.toString());
            }
            else if (error.hasOwnProperty('error'))
            {
                $scope.summary.saveClientErrorMessage = error.error;
            }
        }

        function saveMonthlyPlan_onResult(result)
        {
            $scope.summary.isSavingMonthlyPlan = false;
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.summary.hideMonthlyPlan();
                if (result.hasOwnProperty('plan'))
                {
                    $scope.summary.refreshPlan(result.plan);
                }
            }
            else if (result.hasOwnProperty('code') && result.code != -1)
            {
                $scope.summary.saveMonthlyPlanErrorMessage = $filter('translate')(result.code.toString());
            }
        }

        function saveMonthlyPlan_onError(error)
        {
            $scope.summary.isSavingMonthlyPlan = false;
            if (error.hasOwnProperty('code') && error.code != -1)
            {
                $scope.summary.saveMonthlyPlanErrorMessage = $filter('translate')(error.code.toString());
            }
            else if (error.hasOwnProperty('error'))
            {
                $scope.summary.saveMonthlyPlanErrorMessage = error.error;
            }
        }

        $scope.summary.setCurrentMonth();
        $scope.summary.getAvailableOwners();
    }

}());