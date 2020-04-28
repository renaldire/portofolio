$(document).ready(function(){
	$('.hamburger-menu').click(function(){
		$('.hamburger-menu-content').slideToggle();
	});

	$('body').click(function(e){
		$isClickedOnHamburgerMenu = $(e.target).hasClass('hamburger-menu') || $(e.target).hasClass('fa-bars');
		
		if($isClickedOnHamburgerMenu==false){
			$('.hamburger-menu-content').slideUp();
		}
	});
})