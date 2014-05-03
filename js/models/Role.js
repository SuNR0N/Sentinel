/**
 * Created by NiGhTy on 2014.04.20..
 */
(function() {

    "use strict";

    awaxa.sentinel.models.Role = awaxa.sentinel.models.Role ||
    {
        GUEST : {
            label : 'Guest',
            value : 0
        },
        ASSISTANT : {
            label : 'Assistant',
            value : 1
        },
        AGENT : {
            label : 'Agent',
            value : 2
        },
        ADMIN : {
            label : 'Administrator',
            value : 8
        },
        SUPERUSER : {
            label : 'SuperUser',
            value : 9
        }
    };

}());