/**
 * Created by NiGhTy on 2014.04.26..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.TasksController = function($scope, $filter, queryService, updateService, utilityService)
    {
        $scope.tasks = {};
        $scope.tasks.clients = [];
        $scope.tasks.selectedClient = {};
        $scope.tasks.contractFile = null;
        $scope.tasks.internetPlans = [];
        $scope.tasks.tvPlans = [];
        $scope.tasks.phonePlans = [];
        $scope.tasks.currentFilter = 'all';
        $scope.tasks.searchText = '';
        $scope.tasks.availableUsers = [];
        $scope.tasks.availableAssignees = [];
        $scope.tasks.selectedUser = null;
        $scope.tasks.selectedAssignee = null;
        $scope.tasks.saveClientErrorMessage = null;
        $scope.tasks.resendErrorMessage = null;
        $scope.tasks.isSendingMail = false;
        $scope.tasks.isSavingClient = false;
        $scope.tasks.assignmentStatusOptions =
            [
                awaxa.sentinel.models.AssignmentStatus.NEW,
                awaxa.sentinel.models.AssignmentStatus.RECALL,
                awaxa.sentinel.models.AssignmentStatus.ARRANGED,
                awaxa.sentinel.models.AssignmentStatus.WRONG_ADDRESS,
                awaxa.sentinel.models.AssignmentStatus.REJECTED,
                awaxa.sentinel.models.AssignmentStatus.SENT,
                awaxa.sentinel.models.AssignmentStatus.PROCESSED
            ];


        $scope.tasks.getRowClass = function (assignments) {
            return {
                recallStyle : angular.isArray(assignments) && assignments.length > 0 && assignments[0].status === awaxa.sentinel.models.AssignmentStatus.RECALL.value,
                arrangedStyle : angular.isArray(assignments) && assignments.length > 0 && assignments[0].status === awaxa.sentinel.models.AssignmentStatus.ARRANGED.value,
                wrongAddressStyle : angular.isArray(assignments) && assignments.length > 0 && assignments[0].status === awaxa.sentinel.models.AssignmentStatus.WRONG_ADDRESS.value,
                rejectedStyle : angular.isArray(assignments) && assignments.length > 0 && assignments[0].status === awaxa.sentinel.models.AssignmentStatus.REJECTED.value,
                sentStyle : angular.isArray(assignments) && assignments.length > 0 && assignments[0].status === awaxa.sentinel.models.AssignmentStatus.SENT.value,
                processedStyle : angular.isArray(assignments) && assignments.length > 0 && assignments[0].status === awaxa.sentinel.models.AssignmentStatus.PROCESSED.value
            };
        };

        $scope.tasks.isGenerateContractButtonVisible = function()
        {
            if ($scope.currentUser.isAdmin())
            {
                return true;
            }
            else if ($scope.tasks.selectedClient != null &&
                        angular.isArray($scope.tasks.selectedClient.assignments) &&
                        $scope.tasks.selectedClient.assignments.length > 0 &&
                        $scope.tasks.selectedClient.assignments[0].status >= awaxa.sentinel.models.AssignmentStatus.ARRANGED.value)
            {
                return true;
            }
            else
            {
                return false;
            }
        };

        $scope.tasks.orderByStatusFilter = function(client)
        {
            if (angular.isArray(client.assignments) && client.assignments.length > 0)
            {
                return client.assignments[0].status;
            }
            else
            {
                return -1;
            }
        };

        $scope.tasks.getClients = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                queryService.getClients($scope.currentUser, getClients_onResult, getClients_onError);
            }
        };

        $scope.tasks.resend = function()
        {
            if ($scope.currentUser.getIsLogged() && $scope.currentUser.isAdmin())
            {
                $scope.tasks.isSendingMail = true;
                $scope.tasks.resendErrorMessage = null;
                updateService.resend($scope.tasks.selectedClient, $scope.currentUser, resend_onResult, resend_onError);
            }
        };

        $scope.tasks.deleteTasks = function()
        {
            var tasks = [];
            for (var i = 0; i < $scope.tasks.clients.length; ++i)
            {
                if ($scope.tasks.clients[i].selected)
                {
                    tasks.push($scope.tasks.clients[i].mtId);
                }
            }
            if ($scope.currentUser.getIsLogged())
            {
                updateService.deleteTasks(tasks, deleteTasks_onResult, deleteTasks_onError);
            }
        };

        $scope.tasks.assignTasks = function()
        {
            var tasks = [];
            for (var i = 0; i < $scope.tasks.clients.length; ++i)
            {
                if ($scope.tasks.clients[i].selected)
                {
                    tasks.push($scope.tasks.clients[i].mtId);
                }
            }
            if ($scope.currentUser.getIsLogged())
            {
                updateService.assignTasks(tasks, $scope.tasks.selectedAssignee, assignTasks_onResult, assignTasks_onError);
            }
        };

        $scope.tasks.getPlans = function()
        {
            queryService.getPlans(getPlans_onResult, getPlans_onError);
        };

        $scope.tasks.getAvailableUsers = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                queryService.getAvailableUsers($scope.currentUser, getAvailableUsers_onResult, getAvailableUsers_onError);
            }
        };

        $scope.tasks.getAvailableAssignees = function()
        {
            if ($scope.currentUser.getIsLogged())
            {
                queryService.getAvailableAssignees($scope.currentUser, getAvailableAssignees_onResult, getAvailableAssignees_onError);
            }
        };

        $scope.tasks.selectAll = function()
        {
            var filteredTasks = $filter('filter')($filter('tasksFilter')($scope.tasks.clients, $scope.tasks.selectedUser, $scope.currentUser.getRole(), $scope.tasks.currentFilter), $scope.tasks.searchText);
            if (angular.isArray(filteredTasks))
            {
                for (var i = 0; i < filteredTasks.length; ++i)
                {
                    filteredTasks[i].selected = $('#selectAllCheckbox')[0].checked;
                }
            }
        };

        $scope.tasks.onRowClick = function($event, client)
        {
            if ($event.target.hasOwnProperty('type') && $event.target.type === 'checkbox')
            {

            }
            else
            {
                $scope.tasks.selectedClient = angular.copy(client);
                var lastAssignment = (angular.isArray(client.assignments) && client.assignments.length > 0) ? client.assignments[0] : null;
                $scope.tasks.selectedClient.currentStatus = lastAssignment != null ? lastAssignment.status : null;
                $scope.tasks.selectedClient.currentAssignee = (lastAssignment != null ? lastAssignment.assignee : null);
                $scope.tasks.selectedClient.appointment = ((lastAssignment != null && lastAssignment.appointment != null) ? lastAssignment.appointment  : null);
                $scope.tasks.selectedClient.appointmentDisplay = $scope.tasks.selectedClient.appointment != null ? dateFormat($scope.tasks.selectedClient.appointment, 'UTC:yyyy.mm.dd. - HH:MM') : null;
                $scope.tasks.selectedClient.lastAssignmentId = (lastAssignment != null ? lastAssignment.id : null);
                $scope.tasks.saveClientErrorMessage = null;
                $scope.tasks.resendErrorMessage = null;
                $('#clientDetailsModal').modal('show');
            }
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
            $scope.tasks.isSavingClient = true;
            $scope.tasks.saveClientErrorMessage = null;
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
            $scope.tasks.selectedClient.appointment = (e.date != null ? dateFormat(e.date.getTime() + e.date.getTimezoneOffset()*60000, "isoDateTime") : null);
        };

        function resend_onResult(result)
        {
            $scope.tasks.isSendingMail = false;
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.tasks.hideClientDetails();
                $scope.tasks.getClients();
            }
            else if (result.hasOwnProperty('code') && result.code != -1)
            {
                $scope.tasks.resendErrorMessage = $filter('translate')(result.code.toString());
            }
        }

        function resend_onError(error)
        {
            $scope.tasks.isSendingMail = false;
            if (error.hasOwnProperty('code') && error.code != -1)
            {
                $scope.tasks.resendErrorMessage = $filter('translate')(error.code.toString());
            }
            else if (error.hasOwnProperty('error'))
            {
                $scope.tasks.resendErrorMessage = error.error;
            }
        }

        function updateClient_onResult(result)
        {
            $scope.tasks.isSavingClient = false;
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.tasks.hideClientDetails();
                $scope.tasks.getClients();

            }
            else if (result.hasOwnProperty('code') && result.code != -1)
            {
                $scope.tasks.saveClientErrorMessage = $filter('translate')(result.code.toString());
            }
        }

        function uploadContract_onResult(result)
        {
            if (result.hasOwnProperty('success') && result.success == true && result.hasOwnProperty('contract'))
            {
                if (angular.isArray($scope.tasks.selectedClient.contracts))
                {
                    $scope.tasks.selectedClient.contracts.push(result.contract);
                }
                $scope.tasks.getClients();
            }
        }

        function uploadContract_onError(error)
        {

        }

        function assignTasks_onResult(result)
        {
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.tasks.getClients();
            }
        }

        function assignTasks_onError(error)
        {

        }

        function deleteTasks_onResult(result)
        {
            if (result.hasOwnProperty('success') && result.success == true)
            {
                $scope.tasks.getClients();
            }
        }

        function deleteTasks_onError(error)
        {

        }

        function updateClient_onError(error)
        {
            $scope.tasks.isSavingClient = false;
            if (error.hasOwnProperty('code') && error.code != -1)
            {
                $scope.tasks.saveClientErrorMessage = $filter('translate')(error.code.toString());
            }
            else if (error.hasOwnProperty('error'))
            {
                $scope.tasks.saveClientErrorMessage = error.error;
            }
        }

        function getAvailableUsers_onResult(result)
        {
            if (result && angular.isArray(result))
            {
                $scope.tasks.availableUsers = result;
            }
            else
            {
                $scope.tasks.availableUsers = [];
            }
        }

        function getAvailableUsers_onError(result)
        {
            $scope.tasks.availableUsers = [];
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
                $scope.currentUser.isAssistant() ? $scope.tasks.applyTasksFilter('processing') : $scope.tasks.applyTasksFilter('all');
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

        $scope.tasks.isValidMobileRequired = function()
        {
            return ($scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.ARRANGED.value &&
                    $scope.tasks.selectedClient.mobile != null && $scope.tasks.selectedClient.mobile.trim() != '' &&
                    !$scope.tasks.selectedClient.mobile.match(/^\d{11}$/g));
        };

        $scope.tasks.isAppointmentRequired = function()
        {
            return ($scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.ARRANGED.value ||
                    $scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.RECALL.value) &&
                    $scope.tasks.selectedClient.appointment == null;
        };

        $scope.tasks.isComment1Required = function()
        {
            return (($scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.WRONG_ADDRESS.value ||
                $scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.REJECTED.value) && $scope.currentUser.isAssistant()) &&
                ($scope.tasks.selectedClient.comment1 == null || $scope.tasks.selectedClient.comment1.trim() == '');
        };

        $scope.tasks.isComment2Required = function()
        {
            return $scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.REJECTED.value &&
                    $scope.currentUser.isAgent() &&
                    ($scope.tasks.selectedClient.comment2 == null || $scope.tasks.selectedClient.comment2.trim() == '');
        };

        $scope.tasks.isSelectedPlanRequired = function(selector)
        {
            return $(selector).val() === "?" && $scope.currentUser.isAgent() &&
                ($scope.tasks.selectedClient.currentStatus == awaxa.sentinel.models.AssignmentStatus.SENT.value);

        };

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

        $scope.tasks.init = function()
        {
            $('#clientDetailsTab a').click(function (e) {
                e.preventDefault();
                $(this).tab('show')
            });
            $(function () {
                $("#appointmentPicker").datetimepicker({
                    format: "yyyy.mm.dd. - hh:ii",
                    language: 'hu',
                    autoclose: true,
                    todayBtn: true,
                    minuteStep: 5
                })
                .on("changeDate",function (e) {
                    $('#clientDetailsModal').scope().tasks.changeAppointmentDate(e);
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
        $scope.tasks.getAvailableUsers();
        $scope.tasks.getAvailableAssignees();
    }

}());