/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.SelectableOwnerFilter = function()
    {
        return function(input)
        {
            if (Array.isArray(input))
            {
                var ret = [];
                var index;
                for (index = 0; index < input.length; ++index)
                {
                    if (input[index].hasOwnProperty('role') &&
                        (input[index].role === awaxa.sentinel.models.Role.ADMIN.value ||
                         input[index].role === awaxa.sentinel.models.Role.SUPERUSER.value)) {
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