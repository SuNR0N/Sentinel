(function(){

    "use strict";

    awaxa.sentinel.filters.DateFilter = function()
    {
        return function(input)
        {
            return input != null ? dateFormat(input, 'UTC:yyyy.mm.dd. - HH:MM:ss') : '';
        };
    }

}());