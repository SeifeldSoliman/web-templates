$(function(){
  
    'use strict';
    
    $('header').height($(window).height());
    
    $('.carousel').height($(window).height() - 100);
    
    $(window).on("resize", function(){
        
        $('header').height($(window).height());
        
        $('.carousel').height($(window).height() - 100);
        
    });
    
});
