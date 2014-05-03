/**
 * Created by NiGhTy on 2014.04.25..
 */
(function() {

    "use strict";

    awaxa.sentinel.directives.FileModel = function($parse)
    {
        return {
            restrict : 'A',
            link: function(scope, element, attrs)
            {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function()
                {
                    scope.$apply(function()
                    {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }

}());