$(function(){
  
  'use strict';
  
  $('.headinfo').height($('header').height());
    
  $('.scroll').click(function(){
		$("html,body").animate({
			scrollTop : 0
		},1000);
	});  
    
});
