/**
 * Created by NiGhTy on 2014.05.11..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.AccessFilter = function()
    {
        return function(input)
        {
            if (angular.isArray(input) && input.length > 0)
            {
                var ret = '';
                for (var i = 0; i < input.length; ++i)
                {
                    ret += input[i].assigneeUserId;
                    if (i < input.length - 1)
                    {
                        ret += ', ';
                    }
                }
                return ret;
            }
            else
            {
                return '';
            }
        };
    }

}());