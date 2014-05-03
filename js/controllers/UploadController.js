/**
 * Created by NiGhTy on 2014.04.22..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.UploadController = function($scope, utilityService)
    {
        $scope.upload = {};
        $scope.upload.csvFile = null;
        $scope.upload.message = null;
        $scope.upload.result = null;

        $scope.upload.uploadCSV = function()
        {
            if ($scope.upload.csvFile != null)
            {
                $scope.upload.clear();
                utilityService.uploadCSV($scope.upload.csvFile, uploadCSV_onResult, uploadCSV_onError);
            }
        };

        function uploadCSV_onResult(result)
        {
            if (result.hasOwnProperty('success'))
            {
                $scope.upload.result = result.success;
            }
            if (result.hasOwnProperty('message'))
            {
                $scope.upload.message = result.message;
            }
        }

        function uploadCSV_onError(error)
        {
            if (error.hasOwnProperty('error'))
            {
                $scope.upload.message = error.error;
                $scope.upload.result = false;
            }
        }

        $scope.upload.clear = function()
        {
            $scope.upload.message = null;
            $scope.upload.result = null;
        };

        $scope.upload.init = function()
        {
            $(document)
                .on('change', '.btn-file :file', function() {
                    var input = $(this),
                        numFiles = input.get(0).files ? input.get(0).files.length : 1,
                        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
                    input.trigger('fileselect', [numFiles, label]);
                });

            $(document).ready( function() {
                $('.btn-file :file').on('fileselect', function(event, numFiles, label) {

                    var input = $(this).parents('.input-group').find(':text'),
                        log = numFiles > 1 ? numFiles + ' files selected' : label;

                    if( input.length ) {
                        input.val(log);
                    } else {
                        if( log ) alert(log);
                    }

                });
            });
        };

        $scope.upload.init();
        $scope.upload.clear();
    }

}());