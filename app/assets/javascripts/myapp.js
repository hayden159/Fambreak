/**
 * Created by Stephanie on 5/31/2017.
 */
(function() {

var myApp = angular.module('myApp', []);
myApp.controller('MyAppController', function(){
    this.title = "Welcome";
});


var creatorApp = angular.module('creatorApp', []);
creatorApp.controller('CreatorController', function($scope, creatorAppInitializer){
    $scope.members = initializer;
});


})();