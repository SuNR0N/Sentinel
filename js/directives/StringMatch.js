/**
 * Created by NiGhTy on 2014.04.21..
 */
(function() {

    "use strict";

    awaxa.sentinel.directives.StringMatch = function()
    {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var firstString = '#' + attrs.strMatch;
                elem.add(firstString).on('keyup', function () {
                    scope.$apply(function () {
                        var v = elem.val() === $(firstString).val();
                        ctrl.$setValidity('strmatch', v);
                    });
                });
            }
        }
    }

}());