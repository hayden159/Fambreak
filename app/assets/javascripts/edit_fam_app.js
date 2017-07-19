/**
 * Created by Stephanie on 5/31/2017.
 */


    var $j = $.noConflict(); // $j instead of $ for jquery

    var myApp = angular.module('myApp', []);
    console.log("myApp defined")


    myApp.controller('CreatorController', ['$scope',function($scope) {



        $scope.init = function () {
            console.log("ready");
            $scope.activeMenu = 'all_fams'
            $scope.fams = ["Haydens", "The Adams"];

            $j('#loading').hide();
            $j('.fill-screen').show();
            return true;
        }

        $scope.advance = function(menuItem) {
            console.log(menuItem);
            $scope.activeMenu = menuItem;
        }
    }]);

