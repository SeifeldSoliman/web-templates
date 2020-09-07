/*global $, alert, console*/

$(function (){
   'use strict'; 
    var winh = $(window).height(),
        navh = $('.upperbar').innerHeight();
    $('header, .my-carousel-image').height(winh - navh);
});