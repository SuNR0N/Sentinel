/**
 * Created by NiGhTy on 2014.04.15..
 */
(function() {

    "use strict";

    angular.module('sentinel.services', [])
        .contant('serviceConfig', awaxa.sentinel.configs.ServiceConfig)
        .service('queryService', ['$http', '$log', 'serviceConfig', awaxa.sentinel.services.QueryService])
        .service('updateService', ['$http', '$log', 'serviceConfig', awaxa.sentinel.services.UpdateService])
        .service('entitlementService', ['$http', '$log', 'serviceConfig', awaxa.sentinel.services.EntitlementService])

    angular.module('sentinel', ['sentinel.services'])
        .constant('applicationConfig', awaxa.sentinel.configs.ApplicationConfig)
        .controller('SentinelController', ['$scope', 'applicationConfig', 'queryService', 'updateService', 'entitlementService', awaxa.sentinel.controllers.SentinelController]);

}());