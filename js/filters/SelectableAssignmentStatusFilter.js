/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.SelectableAssignmentStatusFilter = function()
    {
        return function(input, user, assignments)
        {
            if (angular.isArray(input) && angular.isArray(assignments) && user != null)
            {
                var ret = [];
                var lastAssignmentStatus = assignments.length > 0 ? assignments[0].status : null;
                var index;
                for (index = 0; index < input.length; ++index)
                {
                    // Client has assignments
                    if (lastAssignmentStatus != null)
                    {
                        // Admin can select all statuses
                        if (user.isAdmin())
                        {
                            ret.push(input[index]);
                        }
                        // Assistant can select NEW, RECALL, ARRANGED, REJECTED statuses only
                        if (user.isAssistant() &&
                            (input[index].value === awaxa.sentinel.models.AssignmentStatus.NEW.value ||
                            input[index].value === awaxa.sentinel.models.AssignmentStatus.RECALL.value ||
                            input[index].value === awaxa.sentinel.models.AssignmentStatus.ARRANGED.value ||
                            input[index].value === awaxa.sentinel.models.AssignmentStatus.REJECTED.value  ))
                        {
                            ret.push(input[index]);
                        }
                        // Agent can select WRONG_ADDRESS, REJECTED, UPLOADED statuses only
                        else if (user.isAgent() && (input[index].value === awaxa.sentinel.models.AssignmentStatus.WRONG_ADDRESS.value ||
                            input[index].value === awaxa.sentinel.models.AssignmentStatus.REJECTED.value ||
                            input[index].value === awaxa.sentinel.models.AssignmentStatus.UPLOADED.value))
                        {
                            ret.push(input[index]);
                        }
                    }
                    else
                    {
                        if (user.isAdmin())
                        {
                            ret.push(input[index]);
                        }
                        else if (input[index].value === awaxa.sentinel.models.AssignmentStatus.NEW.value && user.isAssistant())
                        {
                            ret.push(input[index]);
                        }
                    }
                }

                return ret;
            }
            else
            {
                return [];
            }
        };
    }

}());