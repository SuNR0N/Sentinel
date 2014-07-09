(function(){

    "use strict";

    awaxa.sentinel.filters.TechnologyFilter = function($filter)
    {
        return function(input)
        {
            var ret = [];

            if (input.hasOwnProperty('market') && input.market === true) {
                ret.push($filter('translate')('CLIENT_POPUP_TECHNOLOGY_MARKET'));
            }
            if (input.hasOwnProperty('lion') && input.lion === true) {
                ret.push($filter('translate')('CLIENT_POPUP_TECHNOLOGY_LION'));
            }
            if (input.hasOwnProperty('hyena') && input.mhyena === true) {
                ret.push($filter('translate')('CLIENT_POPUP_TECHNOLOGY_HYENA'));
            }
            if (input.hasOwnProperty('hyena24') && input.hyena24 === true) {
                ret.push($filter('translate')('CLIENT_POPUP_TECHNOLOGY_HYENA_24'));
            }
            if (input.hasOwnProperty('ed3') && input.ed3 === true) {
                ret.push($filter('translate')('CLIENT_POPUP_TECHNOLOGY_ED3'));
            }
            if (input.hasOwnProperty('pstn') && input.pstn === true) {
                ret.push($filter('translate')('CLIENT_POPUP_TECHNOLOGY_PSTN'));
            }
            if (input.hasOwnProperty('optical') && input.optical === true) {
                ret.push($filter('translate')('CLIENT_POPUP_TECHNOLOGY_OPTICAL'));
            }

            return ret.join();
        };
    }

}());