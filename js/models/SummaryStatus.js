(function() {

    "use strict";

    awaxa.sentinel.models.SummaryStatus = awaxa.sentinel.models.SummaryStatus ||
    {
        UNDER_ESTABLISHMENT : {
            label : 'SUMMARY_STATUS_UNDER_ESTABLISHMENT',
            value : 0
        },
        CANCELED : {
            label : 'SUMMARY_STATUS_CANCELED',
            value : 1
        },
        TIMED_ACTIVATION : {
            label : 'SUMMARY_STATUS_TIMED_ACTIVATION',
            value : 2
        },
        ESTABLISHED : {
            label : 'SUMMARY_STATUS_ESTABLISHED',
            value : 3
        },

        getLabelByValue : function(val)
        {
            var as = this.getSummaryStatusByValue(val);
            return as != null ? as.label : null;
        },

        getSummaryStatusByValue : function(val)
        {
            for (var prop in this)
            {
                if (this[prop].hasOwnProperty('value') && this[prop].hasOwnProperty('label') && this[prop].value == val)
                {
                    return this[prop];
                }
            }

            return null;
        }
    };

}());