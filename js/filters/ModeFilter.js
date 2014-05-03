/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.filters.ModeFilter = function()
    {
        return function(input)
        {
            switch (input)
            {
                case awaxa.sentinel.models.Mode.BEGINNER.value:
                    return awaxa.sentinel.models.Mode.BEGINNER.label;
                    break;
                case awaxa.sentinel.models.Mode.EXPERT.value:
                    return awaxa.sentinel.models.Mode.EXPERT.label;
                    break;
            }
        };
    }

}());