/**
 * Created by Stephanie on 5/31/2017.
 */
    var myApp = angular.module('myApp', []);
    console.log("myApp defined")


    myApp.controller('CreatorController', function () {
        this.name_index = 0;
        this.name_options = ["Choose name", "Setup", "Accept", "Add members"];
        this.advance = function() {
            this.name_index = (this.name_index+1) % this.name_options.length;
            console.log(this.name_index);
        }
        this.goback = function() {
            this.name_index = (this.name_index-1) % this.name_options.length;
        }
    });
