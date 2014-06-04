(function(){

    "use strict";

    awaxa.sentinel.filters.AppointmentFilter = function()
    {
        return function(input)
        {
            if (angular.isArray(input) && input.length > 0)
            {
                var appointment = input[0].appointment;
                return (appointment != null) ? dateFormat(appointment, 'UTC:yyyy.mm.dd. - HH:MM') : '';
            }
            else
            {
                return '';
            }
        };
    }

}());