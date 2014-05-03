/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.SelectableRoleFilter = function()
    {
        return function(input, userRole)
        {
            if (Array.isArray(input) && userRole != null)
            {
                var ret = [];
                var index;
                for (index = 0; index < input.length; ++index)
                {
                    if (input[index].hasOwnProperty('value') && input[index].value <= userRole) {
                        ret.push(input[index]);
                    }
                }

                return ret;
            }
            else
            {
                return input;
            }
        };
    }

}());