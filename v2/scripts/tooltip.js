$(document).ready(function(){
	$('.has-tooltip').hover(function(e){
		$text = $(this).attr('data-tooltip');
		$('#tooltip').css('top', e.pageY);
    	$('#tooltip').css('left', e.pageX);
		$('#tooltip').html($text);
		$('#tooltip').fadeIn();
	});
	$('.has-tooltip').mouseleave(function(e){
		$text = $(this).attr('data-tooltip');
		$('#tooltip').hide();
	});
});