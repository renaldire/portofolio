$(document).ready(function(){
	function scrollToPage($target)
	{
		$('html,body').animate({
			scrollTop: $($target).offset().top-38.67
		}, 1000);
	}
	$('.scroll-to').click(function(){
		$target=$(this).attr('data-element');
		scrollToPage($target);
	})
});