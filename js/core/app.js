/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    angular.module('sentinel.filters', [])
        .filter('roleFilter', ['$filter', awaxa.sentinel.filters.RoleFilter])
        .filter('modeFilter', ['$filter', awaxa.sentinel.filters.ModeFilter])
        .filter('statusFilter', ['$filter', awaxa.sentinel.filters.StatusFilter])
        .filter('assignmentStatusFilter', ['$filter', awaxa.sentinel.filters.AssignmentStatusFilter])
        .filter('appointmentFilter', awaxa.sentinel.filters.AppointmentFilter)
        .filter('dateFilter', awaxa.sentinel.filters.DateFilter)
        .filter('selectableAssignmentStatusFilter', awaxa.sentinel.filters.SelectableAssignmentStatusFilter)
        .filter('tasksFilter', awaxa.sentinel.filters.TasksFilter)
        .filter('selectableRoleFilter', awaxa.sentinel.filters.SelectableRoleFilter)
        .filter('accessFilter', awaxa.sentinel.filters.AccessFilter)
        .filter('selectableOwnerFilter', awaxa.sentinel.filters.SelectableOwnerFilter);

    angular.module('sentinel.directives',[])
        .directive('strMatch', awaxa.sentinel.directives.StringMatch)
        .directive('fileModel', ['$parse', awaxa.sentinel.directives.FileModel]);


    angular.module('sentinel.services', ['base64'])
        .constant('serviceConfig', awaxa.sentinel.configs.ServiceConfig)
        .service('queryService', ['$http', '$log', '$base64', 'serviceConfig', awaxa.sentinel.services.QueryService])
        .service('updateService', ['$http', '$log', '$base64', 'serviceConfig', awaxa.sentinel.services.UpdateService])
        .service('utilityService', ['$http', '$log', '$base64', 'serviceConfig', awaxa.sentinel.services.UtilityService])
        .service('entitlementService', ['$http', '$log', '$base64', 'serviceConfig', awaxa.sentinel.services.EntitlementService]);

    angular.module('sentinel', ['ngRoute', 'pascalprecht.translate', 'sentinel.services', 'sentinel.directives', 'sentinel.filters'])
        .config(['$locationProvider', '$routeProvider', awaxa.sentinel.configs.ApplicationConfig])
        .config(['$translateProvider', awaxa.sentinel.configs.LanguageConfig])
        .controller('SentinelController', ['$scope', '$location', 'queryService', 'updateService', awaxa.sentinel.controllers.SentinelController])
        .controller('LoginController', ['$scope', '$location', '$filter', 'entitlementService', awaxa.sentinel.controllers.LoginController])
        .controller('PasswordController', ['$scope', '$filter', 'entitlementService', awaxa.sentinel.controllers.PasswordController])
        .controller('RegisterController', ['$scope', '$location', '$filter', 'entitlementService', awaxa.sentinel.controllers.RegisterController])
        .controller('UploadController', ['$scope', '$filter', 'utilityService', awaxa.sentinel.controllers.UploadController])
        .controller('ManageController', ['$scope', '$filter', 'queryService', 'updateService', awaxa.sentinel.controllers.ManageController])
        .controller('MessagesController', ['$scope', 'queryService', awaxa.sentinel.controllers.MessagesController])
        .controller('CalendarController', ['$scope', 'queryService', awaxa.sentinel.controllers.CalendarController])
        .controller('StatisticsController', ['$scope', '$filter', 'queryService', awaxa.sentinel.controllers.StatisticsController])
        .controller('TasksController', ['$scope', '$filter', 'queryService', 'updateService', 'utilityService', awaxa.sentinel.controllers.TasksController]);

}());