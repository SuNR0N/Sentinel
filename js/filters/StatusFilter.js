/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.StatusFilter = function($filter)
    {
        return function(input)
        {
            switch (input)
            {
                case awaxa.sentinel.models.Status.ACTIVE.value:
                    return $filter('translate')(awaxa.sentinel.models.Status.ACTIVE.label);
                    break;
                case awaxa.sentinel.models.Status.INACTIVE.value:
                    return $filter('translate')(awaxa.sentinel.models.Status.INACTIVE.label);
                    break;
                case awaxa.sentinel.models.Status.TERMINATED.value:
                    return $filter('translate')(awaxa.sentinel.models.Status.TERMINATED.label);
                    break;
                default :
                    return input;
            }
        };
    }

}());