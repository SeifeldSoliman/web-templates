$(function (){
   'use strict'; 
    var winh = $(window).height(),
        navh = $('.navbar').innerHeight();
    $('.our-header').height(winh - navh);
});