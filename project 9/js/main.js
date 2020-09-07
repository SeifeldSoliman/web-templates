$(document).ready(function() {
  $(".scroll").click(function() {
    var page = $(this).attr("href");
    var speed = 1200;
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed);
    return false;
  });
});


$(function() {
  
  'use strict';
  
  $('header, .overlay').height($(window).height());
  
});