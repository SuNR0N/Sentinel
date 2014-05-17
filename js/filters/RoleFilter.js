/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.RoleFilter = function($filter)
    {
        return function(input)
        {
            switch (input)
            {
                case awaxa.sentinel.models.Role.ADMIN.value:
                    return $filter('translate')(awaxa.sentinel.models.Role.ADMIN.label);
                    break;
                case awaxa.sentinel.models.Role.AGENT.value:
                    return $filter('translate')(awaxa.sentinel.models.Role.AGENT.label);
                    break;
                case awaxa.sentinel.models.Role.ASSISTANT.value:
                    return $filter('translate')(awaxa.sentinel.models.Role.ASSISTANT.label);
                    break;
                case awaxa.sentinel.models.Role.GUEST.value:
                    return $filter('translate')(awaxa.sentinel.models.Role.GUEST.label);
                    break;
                case awaxa.sentinel.models.Role.SUPERUSER.value:
                    return $filter('translate')(awaxa.sentinel.models.Role.SUPERUSER.label);
                    break;
            }
        };
    }

}());