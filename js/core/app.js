/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    angular.module('sentinel.filters', [])
        .filter('roleFilter', awaxa.sentinel.filters.RoleFilter)
        .filter('modeFilter', awaxa.sentinel.filters.ModeFilter)
        .filter('statusFilter', awaxa.sentinel.filters.StatusFilter)
        .filter('assignmentStatusFilter', awaxa.sentinel.filters.AssignmentStatusFilter)
        .filter('selectableAssignmentStatusFilter', awaxa.sentinel.filters.SelectableAssignmentStatusFilter)
        .filter('tasksFilter', awaxa.sentinel.filters.TasksFilter)
        .filter('selectableRoleFilter', awaxa.sentinel.filters.SelectableRoleFilter)
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

    angular.module('sentinel', ['ngRoute', 'sentinel.services', 'sentinel.directives', 'sentinel.filters'])
        .config(['$locationProvider', '$routeProvider', awaxa.sentinel.configs.ApplicationConfig])
        .controller('SentinelController', ['$scope', '$location', 'queryService', awaxa.sentinel.controllers.SentinelController])
        .controller('LoginController', ['$scope', '$location', 'entitlementService', awaxa.sentinel.controllers.LoginController])
        .controller('RegisterController', ['$scope', '$location', 'entitlementService', awaxa.sentinel.controllers.RegisterController])
        .controller('UploadController', ['$scope', 'utilityService', awaxa.sentinel.controllers.UploadController])
        .controller('ManageController', ['$scope', 'queryService', 'updateService', awaxa.sentinel.controllers.ManageController])
        .controller('MessagesController', ['$scope', 'queryService', awaxa.sentinel.controllers.MessagesController])
        .controller('CalendarController', ['$scope', 'queryService', awaxa.sentinel.controllers.CalendarController])
        .controller('StatisticsController', ['$scope', 'queryService', awaxa.sentinel.controllers.StatisticsController])
        .controller('TasksController', ['$scope', 'queryService', 'updateService', 'utilityService', awaxa.sentinel.controllers.TasksController]);

}());