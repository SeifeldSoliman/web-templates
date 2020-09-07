/*global $, window*/

$(function () {
    'use strict';
    /*start global*/
    $("a").on("click", function (e) {
        e.preventDefault();
    });
    /*start global*/
    
    /*start responsive navbar*/
    $("nav i").on("click", function () {
        if ($(this).hasClass("fa-book-open")) {
            $(this).removeClass("fa-book-open").addClass("fa-book-reader");
            $(".mynavbar-nav").addClass("res-nav").slideDown();
            
        } else {
            $(this).removeClass("fa-book-reader").addClass("fa-book-open");
            $(".mynavbar-nav").removeClass("res-nav").slideUp();
        }
    });
    
    $(window).on("resize", function () {
        
        if ($(window).width() < 768) {
            $("nav i").removeClass("fa-book-reader").addClass("fa-book-open");
            $(".mynavbar-nav").removeClass("res-nav");
            $(".mynavbar-nav").fadeOut(0);
        }
        
        if ($(window).width() > 768) {
            $(".mynavbar-nav").fadeIn(0);
            $(".mynavbar-nav").removeClass("res-nav");
        }
        
    });
    
    /*end responsive navbar*/
    
    /*start header*/
    var navh = $(".navbar").innerHeight(),
        winh = $(window).height();
    
    $("header").height(winh - navh);
    
    $(window).on("resize", function () {
        var navh = $(".navbar").innerHeight(),
            winh = $(window).height();
        $("header").height(winh - navh);
        
    });
    
    $("header .headings h2").next("span").animate({
        width: "212px"
    }, 1500);
    /*end header*/
    
    /*start s-and-f*/
    $(".myplus i").on("click", function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("fa-plus")) {
            $(this).removeClass("fa-plus").addClass("fa-minus").siblings("p").slideDown().siblings("span").css("opacity", "1");
        } else {
            $(this).removeClass("fa-minus").addClass("fa-plus").siblings("p").slideUp().siblings("span").css("opacity", "0.5");
        }
    });
    /*end s-and-f*/
    
    /*start portfolio*/
    $(".portfolio .img-holder").height($(".portfolio .img-holder").width() - 50);
    
    $(window).on("resize", function () {
        $(".portfolio .img-holder").height($(".portfolio .img-holder").width() - 50);
    });
    
    $(".portfolio .img-holder").hover(function () {
        $(this).children(".portfolio .overlay-button").css("display", "flex");
    }, function () {
        $(this).children(".portfolio .overlay-button").fadeOut(100);
    });
    /*end portfolio*/
    
    /*start our-media*/
    $(".our-media div").width($(window).width() / 8);
    $(".our-media div").height($(".our-media div").width());
    
    $(window).on("resize", function () {
        $(".our-media div").height($(".our-media div").width());
    });
    /*end our-media*/
    
    /*start nice-scroll*/
    $(".mynavbar-nav a, .footer-nav a").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        }, 800);
    });
    /*end nice-scroll*/
    
});