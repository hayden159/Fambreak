/**
 * Created by Stephanie on 5/31/2017.
 */


    var $j = $.noConflict(); // $j instead of $ for jquery

    var myApp = angular.module('myApp', []);
    console.log("myApp defined")


    myApp.controller('CreatorController', function () {

        this.ready = false;
        this.fams = ["Haydens"]

        this.init = function () {
            console.log("ready")

            this.name_index = 0;
            this.name_options = ["Name", "Setup", "Accept", "Add members"];
            this.ready = true;


            return true;
        }

        this.advance = function() {
            this.name_index = (this.name_index+1) % this.name_options.length;
            console.log(this.name_index);
        }
        this.goback = function() {
            this.name_index = (this.name_index-1) % this.name_options.length;
        }
    });

