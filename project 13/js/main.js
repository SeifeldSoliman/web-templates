/*global $, window*/

$(function () {
  
    'use strict';
    
    $("a").on("click", function (e) {
        
        e.preventDefault();
    });
    
    /*start upperbar*/
    
    $(".mya1").on("click", function () {
        
        $(this).addClass("active").parent().addClass("bac");
        
        $(".mya2").removeClass("active").parent().removeClass("bac");
    });
    
    $(".mya2").on("click", function () {
        
        $(this).addClass("active").parent().addClass("bac");
        
        $(".mya1").removeClass("active").parent().removeClass("bac");
    });
    
    /*end upperbar*/
    
    /*start navbar*/
    
    $("nav .mynav ul li a").mouseenter(function () {
        
        $(this).css("opacity", "1");
        
        $(this).siblings().css("opacity", "1");
        
    });
    
    $("nav .mynav ul li a").mouseleave(function () {
        
        $(this).css("opacity", "0.9");
        
        $(this).siblings().css("opacity", "0.7");
        
    });
    
    /*end navbar*/
    
    /*start res-nav*/
    
    $(".fa-align-justify").on("click", function () {
        $(this).fadeOut();
        $(".fa-align-center").fadeIn();
        $("nav .res-nav ul li, nav .res-nav button").slideDown();
    });
        
    $(".fa-align-center").on("click", function () {
        $(this).fadeOut();
        $(".fa-align-justify").fadeIn();
        $("nav .res-nav ul li, nav .res-nav button").slideUp();
    });
    
    
    if ($(window).width() <= "800") {
        
        $(".navsection a").css("font-size", "13px");
        $("nav .container").css("align-items", "end");
        $("nav .mynav").addClass("res-nav");
        $(".res-icon").fadeIn(0);
            
    } else {
        
        $(".navsection a").css("font-size", "16px");
        $("nav .container").css("align-items", "center");
        $("nav .mynav").removeClass("res-nav");
        $(".res-icon").fadeOut(0);
    }
    
    
    
    $(window).on("resize", function () {
        
        if ($(window).width() <= "800") {
            
            $(".fa-align-justify").fadeIn(0);
            $(".navsection a").css("font-size", "13px");
            $("nav .container").css("align-items", "end");
            $("nav .mynav").addClass("res-nav");
            $(".res-icon").fadeIn(0);
            $("nav .mynav ul li, nav .mynav .log").css("display", "none");
            
        } else {
            
            $(".navsection a").css("font-size", "16px");
            $("nav .container").css("align-items", "center");
            $("nav .mynav").removeClass("res-nav");
            $(".res-icon").fadeOut(0);
            $("nav .mynav ul li, nav .mynav .log").css("display", "block");
        }
        
    });
    

    /*end res-nav*/
     
});
