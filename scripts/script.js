
$(document).ready(function(){
	$page=1;

	$('.dismiss').click(function(){
		$(this).closest('.dim').fadeToggle();
	});
	function scrollToPage()
	{
		$('html,body').animate({
			scrollTop: $('.section-'+$page).offset().top
		}, 800);
	}
	$('#fab').click(function(){
		$page=parseInt($page)+1;
		if($page>5) $page=1;
		scrollToPage($page);
	});
	$('.scroll-to').click(function(){
		$page=parseInt($(this).attr('data-page'));
		scrollToPage();
		$(this).closest('.dim').fadeToggle();
	})
	$('.trigger-dim').click(function(e){
		if($(e.target).hasClass('trigger-dim'))
			$(this).find('.dim').fadeToggle();
	})
	$('.small-app-photo').click(function(){
		$('.small-app-photo').css('border','none');
		$(this).css('border','2px solid salmon');

		$selected_image=$(this).css('background-image');
		$(this).closest('.dim').find('.large-app-photo').css('background-image',$selected_image);
	});

	$(document).on('scroll',function(){
		if($(this).scrollTop()>=$('.section-5').position().top)
		{
	        $('#fab').html("<i class='fa fa-arrow-up'></i>");
			$page=0;
	    }
	    else
	    {
			$('#fab').html("<i class='fa fa-arrow-down'></i>");
	    }
	});
});