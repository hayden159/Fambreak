/**
 * Created by Stephanie on 5/31/2017.
 */
(function() {

var myApp = angular.module('myApp', []);
console.log("myApp defined")
myApp.controller('MyAppController', function(){
    this.title=function() {
        var page =  location.href.split("/").slice(-1);
        if(page=="" || page=="#") {
            return "Welcome";
        }
        if(page=="fambuild") {
            return "New fam"
        }
        return "Fambreak";
    }
});
myApp.controller('CreatorController', function(){
    this.name="Choose name"
});

})();