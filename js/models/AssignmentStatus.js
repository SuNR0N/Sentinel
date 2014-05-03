/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.models.AssignmentStatus = awaxa.sentinel.models.AssignmentStatus ||
    {
        NEW : {
            label : 'New',
            value : 0
        },
        RECALL : {
            label : 'Recall',
            value : 1
        },
        ARRANGED : {
            label : 'Arranged',
            value : 2
        },
        WRONG_ADDRESS : {
            label : 'Wrong Address',
            value : 3
        },
        REJECTED : {
            label : 'Rejected',
            value : 4
        },
        UPLOADED : {
            label : 'Uploaded',
            value : 5
        },
        SENT : {
            label : 'Sent',
            value : 6
        },
        PROCESSED : {
            label : 'Processed',
            value : 7
        },

        getLabelByValue : function(val)
        {
            var as = this.getAssignmentStatusByValue(val);
            return as != null ? as.label : null;
        },

        getAssignmentStatusByValue : function(val)
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