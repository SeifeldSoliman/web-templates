/*global $, window*/

$(function () {
    'use strict';
    /*start global*/
    $("a").on("click", function (event) {
        event.preventDefault();
    });
    /*end global*/
    
    /*start header*/
    var bodyp = parseInt($("body").css("padding-top"), '10');
    
    $("header").height($(window).height() - bodyp - bodyp);
    $(".header-content").height($("header").height() - $("nav").innerHeight());
    
    $(window).on("resize", function () {
        var bodyp = parseInt($("body").css("padding-top"), '10');
        
        $("header").height($(window).height() - bodyp - bodyp);
        $(".header-content").height($("header").height() - $("nav").innerHeight());
    });
    /*end header*/
    
    /*start ft-nav*/
    if ($(window).scrollTop() > 1) {
        $(".normal-nav").addClass("ft-nav");
    } else {
        $(".normal-nav").removeClass("ft-nav");
    }
    
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 1) {
            $(".normal-nav").addClass("ft-nav");
        } else {
            $(".normal-nav").removeClass("ft-nav");
        }
    });
    /*end ft-nav*/
    
    /*start res-nav*/
    $(".res-nav .navbar-icon i").on("click", function () {
        if ($(this).hasClass("fa-bars")) {
            
            $(this).removeClass("fa-bars").addClass("fa-times");
            $(".res-nav .navbar-icons").animate({
                width: "120px"
            }, 400, function () {
                $(".res-nav .navbar-icons .u-and-e").show(0);
            });
            $(".res-nav .logo").fadeOut();
            $(".res-nav .res-navbar").slideDown();
        } else {
            
            $(this).removeClass("fa-times").addClass("fa-bars");
            $(".res-nav .navbar-icons .u-and-e").hide(0, function () {
                $(".res-nav .navbar-icons").animate({
                    width: "23px"
                }, 400);
            });
            $(".res-nav .logo").fadeIn();
            $(".res-nav .res-navbar").slideUp();
        }
    });
    
    //drop-menu in res-navbar
    $(".res-navbar .drop-menu > a").click(function () {
        if ($(this).hasClass("hidee")) {
            $(this).removeClass("hidee");
            $(this).children("i").css({
                transform: "rotate(-180deg)",
                transition: "0.4s"
            });
            $(this).siblings(".menu").slideDown();
        } else {
            $(this).addClass("hidee");
            $(this).children("i").css({
                transform: "rotate(0deg)",
                transition: "0.4s"
            });
            $(this).siblings(".menu").slideUp();
        }
        
    });
    
    //responsive nav
    if ($(window).width() < 768) {
        $(".normal-nav").css("display", "none");
        $(".res-nav").css("display", "flex");
    } else {
        $(".normal-nav").css("display", "flex");
        $(".res-nav").css("display", "none");
    }
    $(window).on("resize", function () {
        if ($(window).width() < 768) {
            $(".normal-nav").css("display", "none");
            $(".res-nav").css("display", "flex");
        } else {
            $(".normal-nav").css("display", "flex");
            $(".res-nav").css("display", "none");
        }
    });
    /*end res-nav*/
    
    /*start learn-more*/
    $(".header-content .learn-more").on("click", function () {
        $("html, body").animate({
            scrollTop: $(".special").offset().top - 55
        }, 800);
    });
    /*end learn-more*/
    
    /*start footer*/
    if ($(window).width() < 976) {
        $(".footer-cont .footer-links h6").addClass("clickme");
        $(".footer-cont .footer-links .links").hide();
    } else {
        $(".footer-cont .footer-links h6").removeClass("clickme");
        $(".footer-cont .footer-links .links").show();
    }
    
    $(window).on("resize", function () {
        if ($(window).width() < 976) {
            $(".footer-cont .footer-links h6").addClass("clickme");
            $(".footer-cont .footer-links .links").hide();
            $(".footer-cont .footer-links h6").children("i").css({
                transform: "rotate(0deg)",
                transition: "0.2s"
            });
        } else {
            $(".footer-cont .footer-links h6").removeClass("clickme");
            $(".footer-cont .footer-links .links").show();
        }
        $(".footer-cont .footer-links h6").children("i").css({
            transform: "rotate(0deg)",
            transition: "0.2s"
        });
    });
    
    $(".footer-cont .footer-links").on("click", ".clickme", function () {
        if (!$(this).hasClass("shown")) {
            $(this).addClass("shown").siblings(".links").slideDown();
            $(this).children("i").css({
                transform: "rotate(-180deg)",
                transition: "0.4s"
            });
        } else {
            $(this).removeClass("shown").siblings(".links").slideUp();
            $(this).children("i").css({
                transform: "rotate(0deg)",
                transition: "0.4s"
            });
        }
    });
    
    /*end footer*/
});