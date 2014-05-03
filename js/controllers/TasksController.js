/**
 * Created by NiGhTy on 2014.04.26..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.TasksController = function($scope, queryService, updateService, utilityService)
    {
        $scope.tasks = {};
        $scope.tasks.clients = [];
        $scope.tasks.selectedClient = {};
        $scope.tasks.contractFile = null;
        $scope.tasks.internetPlans = [];
        $scope.tasks.tvPlans = [];
        $scope.tasks.phonePlans = [];
        $scope.tasks.currentFilter = 'my';
        $scope.tasks.availableAssignees = [];
        $scope.tasks.saveClientErrorMessage = null;
        $scope.tasks.assignmentStatusOptions =
            [
                awaxa.sentinel.models.AssignmentStatus.NEW,
                awaxa.sentinel.models.AssignmentStatus.RECALL,
                awaxa.sentinel.models.AssignmentStatus.ARRANGED,
                awaxa.sentinel.models.AssignmentStatus.WRONG_ADDRESS,
                awaxa.sentinel.models.AssignmentStatus.REJECTED,
                awaxa.sentinel.models.AssignmentStatus.UPLOADED,
                awaxa.sentinel.models.AssignmentStatus.SENT,
                awaxa.sentinel.models.AssignmentStatus.PROCESSED
            ];

        $scope.tasks.getClients = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                queryService.getClients($scope.currentUser, getClients_onResult, getClients_onError);
            }
        };

        $scope.tasks.getPlans = function()
        {
            queryService.getPlans(getPlans_onResult, getPlans_onError);
        };

        $scope.tasks.getAvailableAssignees = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                queryService.getAvailableAssignees($scope.currentUser, getAvailableAssignees_onResult, getAvailableAssignees_onError);
            }
        };

        $scope.tasks.showClientDetails = function(client)
        {
            $scope.tasks.selectedClient = angular.copy(client);
            var lastAssignment = (angular.isArray(client.assignments) && client.assignments.length > 0) ? client.assignments[0] : null;
            $scope.tasks.selectedClient.currentStatus = awaxa.sentinel.models.AssignmentStatus.getAssignmentStatusByValue(lastAssignment != null ? lastAssignment.status : null);
            $scope.tasks.selectedClient.currentAssignee = (lastAssignment != null ? lastAssignment.assignee : null);
            $scope.tasks.selectedClient.appointment = (lastAssignment != null ? lastAssignment.appointment : null);
            $scope.tasks.selectedClient.lastAssignmentId = (lastAssignment != null ? lastAssignment.id : null);
            $('#clientDetailsModal').modal('show');
        };

        $scope.tasks.applyTasksFilter = function(type)
        {
            $scope.tasks.currentFilter = type;
        };

        $scope.tasks.hideClientDetails = function()
        {
            $scope.tasks.selectedClient = {};
            $('#clientDetailsModal').modal('hide');
        };

        $scope.tasks.uploadContract = function()
        {
            if ($scope.tasks.contractFile != null)
            {
                utilityService.uploadContract($scope.tasks.contractFile, $scope.tasks.selectedClient.mtId, $scope.currentUser, uploadContract_onResult, uploadContract_onError);
            }
        };

        $scope.tasks.saveClient = function()
        {
            updateService.saveClient($scope.tasks.selectedClient, $scope.currentUser, updateClient_onResult, updateClient_onError);
        };

        $scope.tasks.generateContract = function()
        {
            if ($scope.tasks.selectedClient.mtId != null && $scope.tasks.selectedClient.currentAssignee != null)
            {
                return utilityService.getGeneratedContractURL($scope.tasks.selectedClient.mtId, $scope.tasks.selectedClient.currentAssignee);
            }
        };

        $scope.tasks.getContract = function(id)
        {
            return utilityService.getContractURL(id);
        };

        $scope.tasks.changeAppointmentDate = function(e)
        {
            $scope.tasks.selectedClient.appointment = e.date._d.format("isoDateTime");
        };

        function updateClient_onResult(result)
        {
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.tasks.hideClientDetails();
                $scope.tasks.getClients();

            }
            else if (result.hasOwnProperty('message'))
            {
                $scope.tasks.saveClientErrorMessage = result.message;
            }
        }

        function uploadContract_onResult(result)
        {

        }

        function uploadContract_onError(error)
        {

        }

        function updateClient_onError(error)
        {
            if (error.hasOwnProperty('error'))
            {
                $scope.tasks.saveClientErrorMessage = error.error;
            }
        }

        function getAvailableAssignees_onResult(result)
        {
            if (result && angular.isArray(result))
            {
                $scope.tasks.availableAssignees = result;
            }
            else
            {
                $scope.tasks.availableAssignees = [];
            }
        }

        function getAvailableAssignees_onError(result)
        {
            $scope.tasks.availableAssignees = [];
        }

        function getClients_onResult(result)
        {
            if (result)
            {
                $scope.tasks.clients = result;
            }
        }

        function getClients_onError(error)
        {
            $scope.tasks.clients = [];
        }

        function getPlans_onResult(result)
        {
            if (result)
            {
                if (result.hasOwnProperty('internetPlans'))
                {
                    $scope.tasks.internetPlans = result.internetPlans;
                }
                if (result.hasOwnProperty('phonePlans'))
                {
                    $scope.tasks.phonePlans = result.phonePlans;
                }
                if (result.hasOwnProperty('tvPlans'))
                {
                    $scope.tasks.tvPlans = result.tvPlans;
                }
            }
        }

        function getPlans_onError(error)
        {
            $scope.tasks.internetPlans = [];
            $scope.tasks.phonePlans = [];
            $scope.tasks.tvPlans = [];
        }

        $scope.tasks.isAssignmentStatusEditable = function(assignments)
        {
            if ($scope.currentUser.isAdmin())
            {
                return true;
            }
            else
            {
                if (angular.isArray(assignments) && assignments.length > 0)
                {
                    var lastAssignmentStatus = assignments[0].status;
                    if (lastAssignmentStatus <= awaxa.sentinel.models.AssignmentStatus.ARRANGED.value &&
                        $scope.currentUser.isAssistant())
                    {
                        return true;
                    }
                    else if (lastAssignmentStatus >= awaxa.sentinel.models.AssignmentStatus.ARRANGED.value &&
                        lastAssignmentStatus < awaxa.sentinel.models.AssignmentStatus.SENT.value &&
                        $scope.currentUser.isAgent())
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return $scope.currentUser.isAssistant() ? true : false;
                }
            }
        };

        $scope.tasks.isAssigneeEditable = function()
        {
            if ($scope.currentUser.isAdmin())
            {
                return true;
            }
            else
            {
                if ($scope.tasks.selectedClient.hasOwnProperty('currentStatus') &&
                    ($scope.tasks.selectedClient.currentStatus == null && $scope.currentUser.isAssistant()) ||
                    ($scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.ARRANGED.value && $scope.currentUser.isAssistant))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        };

        $scope.tasks.init = function()
        {
            $('#clientDetailsTab a').click(function (e) {
                e.preventDefault();
                $(this).tab('show')
            });
            $(function () {
                $('#datetimepicker1').datetimepicker();
                $("#datetimepicker1").on("dp.change",function (e) {
                    $('#clientDetailsModal').scope().changeAppointmentDate(e);
                });
            });
        };

        $scope.tasks.initUploader = function()
        {
            $(document)
                .on('change', '.btn-file :file', function() {
                    var input = $(this),
                        numFiles = input.get(0).files ? input.get(0).files.length : 1,
                        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
                    $scope.tasks.contracts = input.get(0).files;
                    input.trigger('fileselect', [numFiles, label]);
                });

            $(document).ready( function() {
                $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

                    var input = $(this).parents('.input-group').find(':text'),
                        log = numFiles > 1 ? numFiles + ' files selected' : label;

                    if( input.length ) {
                        input.val(log);
                    } else {
                        if( log ) alert(log);
                    }

                });
            });
        };

        $scope.tasks.init();
        $scope.tasks.initUploader();
        $scope.tasks.getClients();
        $scope.tasks.getPlans();
        $scope.tasks.getAvailableAssignees();
    }

}());