$(document).ready(function(){
	$('.large-photo').hover(function(){
		$(this).find('.opacity').css('opacity',0.5);
	});
	$('.large-photo').mouseleave(function(){
		$(this).find('.opacity').css('opacity',0);
	});
})