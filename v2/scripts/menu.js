$(document).ready(function(){
	$('.hamburger-menu').click(function(){
		$('.hamburger-menu-content').slideToggle();
	});

	$('.mobile-menu').click(function(){
		$('.hamburger-menu-content').slideUp();
	});
})