/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.AssignmentStatusFilter = function()
    {
        return function(input)
        {
            if (angular.isArray(input) && input.length > 0)
            {
                var latestStatus = input[0].status;
                return awaxa.sentinel.models.AssignmentStatus.getLabelByValue(latestStatus);
            }
            else
            {
                return 'Unassigned';
            }
        };
    }

}());