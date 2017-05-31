/**
 * Created by Stephanie on 5/31/2017.
 */

var myapp = angular.module('myapp', []);
myapp.controller('myappCtrl', ['$scope',
    function($scope) {
        $scope.title = "welcome";
    }]);

