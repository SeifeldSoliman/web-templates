/*global $, window*/

$(function () {
  
    'use strict';
    
    $('header').height($(window).height());
    
    $(".scroll").click(function () {
        var page = $(this).attr("href"),
            speed = 1200;
        $("html, body").animate({ scrollTop: $(page).offset().top }, speed);
        return false;
  
    });

});