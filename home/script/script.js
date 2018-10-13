var currentPage = 1;

var max = 7;

$(window).click(function (e) {
	if (e.target.id != 'liApps' && e.target.id!='btnToApps') {
		$('.app-option').hide();
	}
	if(e.target.className=="app-option-menu")
	{
		$('.app-option-menu').removeClass('selected-app-option');
		$(e.target).addClass('selected-app-option');
	}
})


function scrolltoSkill()

{

	$('html,body').animate({
		scrollTop: $("#pnlSkill").offset().top - 60
	}, 800);

	$('.navBar-content').css('border-top', '3px solid #01579B');

}


function scrolltoHome()

{

	$('html,body').animate({
		scrollTop: 0
	}, 800);

	$('.navBar-content').css('border-top', '3px solid gray');

}


function scrolltoContact()

{

	$('html,body').animate({
		scrollTop: $("#pnlContact").offset().top
	}, 800);

	$('.navBar-content').css('border-top', '3px solid rgba(100,100,100,0.75)');

}


function scrolltoApps()

{

	$('html,body').animate({
		scrollTop: $("#mainPnlApp").offset().top - 60
	}, 800);
	$('.app-option').show();
	$('.navBar-content').css('border-top', '3px solid #2196f3');

}


function clickMiniPreview(id, frame)

{

	$keyword = 'miniPreview-' + id + '-';

	$("div[id*=" + $keyword + "]").css('border', 'none');


	$secondaryColor = $('#linkSite-' + id).css('background-color');

	$('#miniPreview-' + id + '-' + frame).css('border', '3px solid ' + $secondaryColor);


	$selectedPreview = $('#miniPreview-' + id + '-' + frame).css('background-image');

	$('#mainPreview-' + id).css('background-image', $selectedPreview);

}


function showAppDetail(id)

{

	if (id > max || id < 1) return;

	$page = ((id - currentPage + 1) * 101) - 101;


	$('#mainPnlApp').animate({
		'margin-left': '-=' + $page + 'vw'
	}, 1000);

	currentPage = id;

}


function closeDimDetail()

{

	document.getElementById('dimDetail').style.visibility = "hidden";

}


function showScreenshotDetail(id)

{

	var url = document.getElementById("ss" + id).style.backgroundImage;

	if (url != "")

	{

		ssDetail.style.backgroundImage = url;

		dimDetail.style.visibility = "visible";

	}

}

scrolltoHome();

showAppDetail(1);

$('html,body').animate({
	scrollLeft: 0
}, 500);


$('#lblIntro').animate({
	"margin-top": "+=45vh"
}, 700, function () {

	setTimeout(function () {

		$('#lblIntro').fadeOut(function () {

			$('#lblIntro').html("Welcome!");

			$('#lblIntro').fadeIn(1000, function () {

				$('#lblIntroInstruction').fadeIn();

				$('#introBg').click(function () {

					$('#introBg').animate({
						"margin-top": "-=100vh"
					}, 1000, function () {

						$('#introBg').hide();

						$("#lblName").fadeIn(3000);

						$("#wrapDetail").fadeIn(3000, function () {

							$('body').css('overflow-y', 'auto');

						});

					});

				});

			});

		});

	}, 2000);

});