/**
 * Created by NiGhTy on 2014.04.23..
 */
(function() {

    "use strict";

    awaxa.sentinel.models.AssignmentStatus = awaxa.sentinel.models.AssignmentStatus ||
    {
        NEW : {
            label : 'ASSIGNMENT_STATUS_NEW',
            value : 0
        },
        RECALL : {
            label : 'ASSIGNMENT_STATUS_RECALL',
            value : 1
        },
        ARRANGED : {
            label : 'ASSIGNMENT_STATUS_ARRANGED',
            value : 2
        },
        WRONG_ADDRESS : {
            label : 'ASSIGNMENT_STATUS_WRONG_ADDRESS',
            value : 3
        },
        REJECTED : {
            label : 'ASSIGNMENT_STATUS_REJECTED',
            value : 4
        },
        SENT : {
            label : 'ASSIGNMENT_STATUS_SENT',
            value : 5
        },
        PROCESSED : {
            label : 'ASSIGNMENT_STATUS_PROCESSED',
            value : 6
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