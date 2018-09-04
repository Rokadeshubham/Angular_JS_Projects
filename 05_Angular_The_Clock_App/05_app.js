//Create a module
var app = angular.module('ClockApp',[]);

//Create a controller
app.controller('ClockAppCtrl',function ($scope,$interval) {
    //Create a Indian Clock Function
    $scope.indianClock = function () {
        var today = new Date() ;
        var options = {timeZone :'Asia/kolkata'};
        $scope.indianTime = today.toLocaleTimeString('en-US',options);
        $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    // setInterval() like java Script
    //Call the function
    $interval($scope.indianClock,1000);




    //Create a USA Clock Function
    $scope.USAClock = function () {
        var today = new Date() ;
        var options = {timeZone :'America/New_York'};
        $scope.USATime = today.toLocaleTimeString('en-US',options);
        $scope.USADate = today.toLocaleDateString('en-US',options);
    };
    // setInterval() like java Script
    //Call the function
    $interval($scope.USAClock,1000);




    //Create a USA Clock Function
    $scope.chinaClock = function () {
        var today = new Date() ;
        var options = {timeZone :'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    // setInterval() like java Script
    //Call the function
    $interval($scope.chinaClock,1000);

});