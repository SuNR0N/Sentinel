/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.TasksFilter = function()
    {
        return function(input, user, mode)
        {
            if (angular.isArray(input) && angular.isString(mode) && user != null)
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
                    if (lastAssignment == null && mode == 'unassigned')
                    {
                        ret.push(input[index]);
                        continue;
                    }
                    if (lastAssignment != null && lastAssignment.assignee == user.getUserName() && mode == 'my')
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