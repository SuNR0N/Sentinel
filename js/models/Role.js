/**
 * Created by NiGhTy on 2014.04.20..
 */
(function() {

    "use strict";

    awaxa.sentinel.models.Role = awaxa.sentinel.models.Role ||
    {
        GUEST : {
            label : 'ROLE_GUEST',
            value : 0
        },
        ASSISTANT : {
            label : 'ROLE_ASSISTANT',
            value : 1
        },
        AGENT : {
            label : 'ROLE_AGENT',
            value : 2
        },
        ADMIN : {
            label : 'ROLE_ADMIN',
            value : 8
        },
        SUPERUSER : {
            label : 'ROLE_SUPERUSER',
            value : 9
        }
    };

}());