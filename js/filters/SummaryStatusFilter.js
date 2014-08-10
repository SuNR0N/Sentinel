(function() {

    "use strict";

    awaxa.sentinel.filters.SummaryStatusFilter = function($filter)
    {
        return function(input)
        {
            return $filter('translate')(awaxa.sentinel.models.SummaryStatus.getLabelByValue(input));
        };
    }

}());