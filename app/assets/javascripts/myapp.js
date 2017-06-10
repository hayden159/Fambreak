/**
 * Created by Stephanie on 5/31/2017.
 */
(function() {

var myApp = angular.module('myApp', []);
console.log("myApp defined")

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.html.erb"
            controller : MyAppController
        })
        .when("/fambuilder", {
            templateUrl : "edit_fam_app.html.erb"
            controller : CreatorController
        })
});

myApp.controller('MyAppController', function(){

});
myApp.controller('CreatorController', function(){
    this.name="Choose name";
});

})();