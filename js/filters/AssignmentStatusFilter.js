/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.AssignmentStatusFilter = function($filter)
    {
        return function(input)
        {
            if (angular.isArray(input) && input.length > 0)
            {
                var latestStatus = input[0].status;
                return $filter('translate')(awaxa.sentinel.models.AssignmentStatus.getLabelByValue(latestStatus));
            }
            else
            {
                return $filter('translate')('ASSIGNMENT_STATUS_UNASSIGNED');
            }
        };
    }

}());