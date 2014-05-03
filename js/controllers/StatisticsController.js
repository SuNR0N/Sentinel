/**
 * Created by NiGhTy on 2014.05.01..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.StatisticsController = function($scope, queryService)
    {
        $scope.statistics = {};
        $scope.statistics.currentStatistics = null;
        $scope.statistics.startDate = null;
        $scope.statistics.endDate = null;
        $scope.statistics.errorMessage = null;
        $scope.statistics.errorMessageVisible = false;
        $scope.statistics.selectedUser = $scope.currentUser.getUserName();

        $scope.statistics.getStatisticsForUser = function()
        {
            queryService.getStatistics($scope.statistics.selectedUser, $scope.statistics.startDate, $scope.statistics.endDate, getStatisticsForUser_onResult, getStatisticsForUser_onError);
        };

        function getStatisticsForUser_onResult(result)
        {
            if (result != null)
            {
                $scope.statistics.currentStatistics = [];
                if (result.hasOwnProperty('totalAssignments') && result.totalAssignments > 0)
                {
                    $scope.statistics.errorMessageVisible = false;
                    $scope.statistics.createChart();
                    if (result.hasOwnProperty('completedAssignments') && result.completedAssignments > 0)
                    {
                        $scope.statistics.currentStatistics.push(
                            {"label":"COMPLETED", "value": result.completedAssignments, "color" : "#00FF7F"}
                        )
                    }
                    if (result.hasOwnProperty('failedAssignments') && result.failedAssignments > 0)
                    {
                        $scope.statistics.currentStatistics.push(
                            {"label":"FAILED", "value": result.failedAssignments, "color" : "#DC143C"}
                        )
                    }
                    if (result.hasOwnProperty('pendingAssignments') && result.pendingAssignments > 0)
                    {
                        $scope.statistics.currentStatistics.push(
                            {"label":"PENDING", "value": result.pendingAssignments, "color" : "#FFEBCD"}
                        )
                    }

                    $scope.statistics.createChart();
                }
                else if (result.hasOwnProperty('message'))
                {
                    $scope.statistics.errorMessageVisible = true;
                    $scope.statistics.errorMessage = result.message;
                    $('#chartContainer').empty();
                }
            }
        }

        function getStatisticsForUser_onError(error)
        {
            $scope.statistics.currentStatistics = null;
            $scope.statistics.errorMessageVisible = false;
        }

        $scope.statistics.clear = function()
        {
            $('#startDateInput').val("");
            $scope.statistics.startDate = null;
            $('#endDateInput').val("");
            $scope.statistics.endDate = null;
        };

        $scope.statistics.init = function()
        {
            $('#startDate').datetimepicker({
                clearBtn : true
            });
            $('#endDate').datetimepicker();
            $("#startDate").on("dp.change",function (e) {
                $scope.statistics.startDate = e.date._d.format("isoDateTime");
                $('#endDate').data("DateTimePicker").setMinDate(e.date);
            });
            $("#endDate").on("dp.change",function (e) {
                $scope.statistics.endDate = e.date._d.format("isoDateTime");
                $('#startDate').data("DateTimePicker").setMaxDate(e.date);
            });
        };

        $scope.statistics.createChart = function()
        {
            var w = 500,                        //width
                h = 500,                            //height
                r = 250;                            //radius

            $('#chartContainer').empty();

            var vis = d3.select("#chartContainer")
                .append("svg:svg")              //create the SVG element inside the <body>
                .data([$scope.statistics.currentStatistics])                   //associate our data with the document
                .attr("style", "display: block; margin: 0 auto;" )
                .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
                .attr("height", h)
                .append("svg:g")                //make a group to hold our pie chart
                .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

            var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
                .outerRadius(r);

            var pie = d3.layout.pie()           //this will create arc data for us given a list of values
                .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

            var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
                .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
                .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
                .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice");    //allow us to style things in the slices (like text)

            arcs.append("svg:path")
                .attr("fill", function(d, i) { return $scope.statistics.currentStatistics[i].color; } ) //set the color for each slice to be chosen from the color function defined above
                .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

            arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                    //we have to make sure to set these before calling arc.centroid
                    d.innerRadius = 0;
                    d.outerRadius = r;
                    return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
                })
                .attr("text-anchor", "middle")                          //center the text on it's origin
                .text(function(d, i) { return ($scope.statistics.currentStatistics[i].label + " (" + $scope.statistics.currentStatistics[i].value + ")");  });        //get the label from our original data array

        };

        $scope.statistics.init();
        $scope.statistics.getStatisticsForUser();
    }

}());