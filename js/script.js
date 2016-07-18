/*global $, alert, console*/

$(function () {
    
    'use strict';

    $('header').height($(window).height());
    $(window).resize(function() {
    	$('header').height($(window).height());
    });

    $('.site-nav-list li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //$('.site-nav-list a').click(function(){
    	//$('html, body').animate({
    	//	scrollTop: $('#' $(this).data('value') ).offset().top
    	//}, 1000);
   // });    
});


$('.handle').on('hover', function(){
    $('.site-nav-list').toggleClass('showing');
});

$('.gellary-img img').on('click', function(){
    $('.img-overlay').toggleClass('showing');
});



