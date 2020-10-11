$(document).ready(function(){
	$('.has-tooltip').each(function(e){
		$text = $(this).attr('data-tooltip');
		$tooltip="<div class='tooltip'>"+$text+"</div>"
		$(this).html($tooltip);
	});
});