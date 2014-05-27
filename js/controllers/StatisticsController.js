/**
 * Created by NiGhTy on 2014.05.01..
 */
(function() {

    "use strict";

    awaxa.sentinel.controllers.StatisticsController = function($scope, $filter, queryService)
    {
        $scope.statistics = {};
        $scope.statistics.currentStatistics = null;
        $scope.statistics.currentPlanStatistics = null;
        $scope.statistics.startDate = null;
        $scope.statistics.endDate = null;
        $scope.statistics.startDateDisplay = null;
        $scope.statistics.endDateDisplay = null;
        $scope.statistics.errorMessage = null;
        $scope.statistics.errorMessageVisible = false;
        $scope.statistics.selectedUser = $scope.currentUser.getUserName();

        $scope.statistics.getStatisticsForUser = function()
        {
            queryService.getStatistics($scope.statistics.selectedUser,
                $scope.statistics.startDate,
                $scope.statistics.endDate,
                getStatisticsForUser_onResult, getStatisticsForUser_onError);
        };

        function getStatisticsForUser_onResult(result)
        {
            if (result != null)
            {
                $scope.statistics.currentStatistics = [];
                $scope.statistics.currentPlanStatistics = [];
                if (result.hasOwnProperty('totalAssignments') && result.totalAssignments > 0)
                {
                    $scope.statistics.errorMessageVisible = false;

                    if (result.hasOwnProperty('completedAssignments') && result.completedAssignments > 0)
                    {
                        $scope.statistics.currentStatistics.push(
                            {"label":$filter('translate')('STATISTICS_COMPLETED'), "value": result.completedAssignments, "color" : "#00FF7F"}
                        )
                    }
                    if (result.hasOwnProperty('failedAssignments') && result.failedAssignments > 0)
                    {
                        $scope.statistics.currentStatistics.push(
                            {"label":$filter('translate')('STATISTICS_FAILED'), "value": result.failedAssignments, "color" : "#DC143C"}
                        )
                    }
                    if (result.hasOwnProperty('pendingAssignments') && result.pendingAssignments > 0)
                    {
                        $scope.statistics.currentStatistics.push(
                            {"label":$filter('translate')('STATISTICS_PENDING'), "value": result.pendingAssignments, "color" : "#FFEBCD"}
                        )
                    }
                    $scope.statistics.createPieChart();

                    if (result.hasOwnProperty('newPhonePlans'))
                    {
                        $scope.statistics.currentPlanStatistics.push(
                            {"label": $filter('translate')('STATISTICS_NEW_PHONE_PLANS'), "value": result.newPhonePlans, "color": "#C0C0C0"}
                        );
                    }
                    if (result.hasOwnProperty('newInternetPlans'))
                    {
                        $scope.statistics.currentPlanStatistics.push(
                            {"label": $filter('translate')('STATISTICS_NEW_INTERNET_PLANS'), "value": result.newInternetPlans, "color": "#A9A9A9"}
                        );
                    }
                    if (result.hasOwnProperty('newTVPlans'))
                    {
                        $scope.statistics.currentPlanStatistics.push(
                            {"label": $filter('translate')('STATISTICS_NEW_TV_PLANS'), "value": result.newTVPlans, "color": "#808080"}
                        );
                    }
                    $scope.statistics.createBarChart();
                }
                else if (result.hasOwnProperty('code') && result.code != -1)
                {
                    $scope.statistics.errorMessageVisible = true;
                    $scope.statistics.errorMessage = $filter('translate')(result.code.toString());
                    $('#pieChartContainer').empty();
                    $('#barChartContainer').empty();
                }
            }
        }

        function getStatisticsForUser_onError(error)
        {
            $scope.statistics.currentStatistics = null;
            $scope.statistics.errorMessageVisible = false;
        }

        $scope.statistics.init = function()
        {
            $('#startDate').datetimepicker({
                format: "yyyy.mm.dd.",
                language: 'hu',
                autoclose: true,
                todayBtn: true,
                minView: 2
            }).on("changeDate",function (e) {
                $('#endDate').datetimepicker('setStartDate', e.date);
                $scope.statistics.startDate = (e.date != null ? e.date.format("isoDateTime") : null);
            });
            $('#endDate').datetimepicker({
                format: "yyyy.mm.dd.",
                language: 'hu',
                autoclose: true,
                todayBtn: true,
                minView: 2
            }).on("changeDate",function (e) {
                $('#startDate').datetimepicker('setEndDate', e.date);
                $scope.statistics.endDate = (e.date != null ? e.date.format("isoDateTime") : null);
            });
        };

        $scope.statistics.createBarChart = function()
        {
            var w = 500;
            var h = 500;

            var xScale = d3.scale.ordinal()
                .domain(d3.range($scope.statistics.currentPlanStatistics.length))
                .rangeRoundBands([0, w], 0.1);

            var yScale = d3.scale.linear()
                .domain([0, d3.max($scope.statistics.currentPlanStatistics, function(d) {return d.value;})])
                .range([0, h]);

            var label = function(d) {
                return d.label;
            };

            $('#barChartContainer').empty();

            //Create SVG element
            var svg = d3.select("#barChartContainer")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            //Create bars
            svg.selectAll("rect")
                .data($scope.statistics.currentPlanStatistics, label)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                    return xScale(i);
                })
                .attr("y", function(d) {
                    return h - yScale(d.value);
                })
                .attr("width", xScale.rangeBand())
                .attr("height", function(d) {
                    return yScale(d.value);
                })
                .attr("fill", function(d) {
                    return d.color;
                });

            //Create labels
            svg.selectAll("text")
                .data($scope.statistics.currentPlanStatistics, label)
                .enter()
                .append("text")
                .text(function(d) {
                    return d.label + " (" + d.value + ")";
                })
                .attr("text-anchor", "middle")
                .attr("x", function(d, i) {
                    return xScale(i) + xScale.rangeBand() / 2;
                })
                .attr("y", function(d) {
                    return h - yScale(d.value) + 14;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "11px")
                .attr("fill", "white");
        };

        $scope.statistics.createPieChart = function()
        {
            var w = 500,                        //width
                h = 500,                            //height
                r = 250;                            //radius

            $('#pieChartContainer').empty();

            var vis = d3.select("#pieChartContainer")
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