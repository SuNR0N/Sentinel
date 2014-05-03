/**
 * Created by NiGhTy on 2014.04.30..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.CalendarController = function($scope, queryService)
    {
        $scope.calendar = {};
        $scope.calendar.timeEntries = [];
        $scope.calendar.selectedUser = null;

        $scope.calendar.getCalendarForUser = function(username)
        {
            queryService.getCalendarForUser(username, getCalendarForUser_onResult, getCalendarForUser_onError);
        };

        function getCalendarForUser_onResult(result)
        {
            if (angular.isArray(result))
            {
                $scope.calendar.timeEntries = result;
                $scope.calendar.initCalendar();
            }
        }

        function getCalendarForUser_onError(error)
        {
            $scope.calendar.timeEntries = [];
        }

        $scope.calendar.initCalendar = function()
        {
            var options = {
                events_source: $scope.calendar.timeEntries,
                view: 'month',
                first_day: 1,
                tmpl_path: 'pages/tmpls/',
                tmpl_cache: false,
                day: new Date().format("yyyy-mm-dd"),
                onAfterEventsLoad: function(events) {
                    if(!events) {
                        return;
                    }
                    var list = $('#eventlist');
                    list.html('');

                    $.each(events, function(key, val) {
                        $(document.createElement('li'))
                            .html('<a href="' + val.url + '">' + val.title + '</a>')
                            .appendTo(list);
                    });
                },
                onAfterViewLoad: function(view) {
                    $('.page-header h3').text(this.getTitle());
                    $('.btn-group button').removeClass('active');
                    $('button[data-calendar-view="' + view + '"]').addClass('active');
                },
                classes: {
                    months: {
                        general: 'label'
                    }
                }
            };

            var calendar = $('#calendar').calendar(options);

            $('.btn-group button[data-calendar-nav]').each(function() {
                var $this = $(this);
                $this.click(function() {
                    calendar.navigate($this.data('calendar-nav'));
                });
            });

            $('.btn-group button[data-calendar-view]').each(function() {
                var $this = $(this);
                $this.click(function() {
                    calendar.view($this.data('calendar-view'));
                });
            });
        };

        $scope.calendar.initCalendar();
        $scope.calendar.getCalendarForUser($scope.currentUser.getUserName());

    }

}());