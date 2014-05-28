/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.TasksFilter = function()
    {
        return function(input, userId, userRole, mode)
        {
            if (angular.isArray(input) && angular.isString(mode))
            {
                var ret = [];
                var index;
                for (index = 0; index < input.length; ++index)
                {
                    if (mode == 'all')
                    {
                        ret.push(input[index]);
                        continue;
                    }
                    var lastAssignment = (input[index].hasOwnProperty('assignments') && angular.isArray(input[index].assignments) && input[index].assignments.length > 0) ? input[index].assignments[0] : null;
                    if (mode == 'processing' &&
                        ((userRole == awaxa.sentinel.models.Role.ADMIN.value && lastAssignment == null) ||
                        (userRole == awaxa.sentinel.models.Role.AGENT.value && lastAssignment != null && lastAssignment.status == awaxa.sentinel.models.AssignmentStatus.ARRANGED.value) ||
                        (userRole == awaxa.sentinel.models.Role.ASSISTANT.value && (lastAssignment == null || (lastAssignment.assignee == userId && (lastAssignment.status == awaxa.sentinel.models.AssignmentStatus.NEW.value || lastAssignment.status == awaxa.sentinel.models.AssignmentStatus.RECALL.value))))))
                    {
                        ret.push(input[index]);
                        continue;
                    }
                    if (lastAssignment != null && lastAssignment.assignee == userId && mode == 'user')
                    {
                        ret.push(input[index]);
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