/**
 * Created by Stephanie on 5/31/2017.
 */


    var $j = $.noConflict(); // $j instead of $ for jquery

    var myApp = angular.module('myApp', []);
    console.log("myApp defined")


    myApp.controller('CreatorController', function () {

        this.ready = false;
        this.fams = ["Haydens", "The Adams"]
        this.activeMenu = '';

        this.init = function () {
            console.log("ready");

            this.name_index = 0;
            this.ready = true;


            return true;
        }

        this.advance = function(menuItem) {
            console.log(menuItem);
            this.activeMenu = menuItem;
        }
    });

