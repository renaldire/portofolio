<?php
	include "profile/app.php";
	include "profile/skill.php";
	include "profile/experience.php";
?>

<!DOCTYPE html>
<html>
<head>
	<title>Renaldi</title>
    <meta name="viewport" content="target-densitydpi=device-dpi, initial-scale=1.0, user-scalable=no"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
</head>
<body id="home">
	<div class="nav-wrapper">
		<div class="nav primary text-secondary">
			<div class="logo scroll-to" data-element="#home">
				<b class="text-tertiary">Re</b>naldi
			</div>
			<div class="menu">
				<span class="web-menu scroll-to" data-element="#about"><span>About</span></span>
				<span class="web-menu scroll-to" data-element="#skill"><span>Skill</span></span>
				<span class="web-menu scroll-to" data-element="#portofolio"><span>Portofolio</span></span>
				<span class="web-menu scroll-to" data-element="#contact"><span>Contact</span></span>
				<span class="hamburger-menu hovered-text"><i class="fa fa-bars"></i></span>
			</div>
		</div>
		<div class="hamburger-menu-content secondary text-primary align-center">
			<div class="mobile-menu hovered scroll-to" data-element="#about"><span class="hovered">About</span></div>
			<div class="mobile-menu hovered scroll-to" data-element="#skill"><span>Skill</span></div>
			<div class="mobile-menu hovered scroll-to" data-element="#portofolio"><span>Portofolio</span></div>
			<div class="mobile-menu hovered scroll-to" data-element="#contact"><span>Contact</span></div>
		</div>
	</div>
	<div class="nav-r"></div>
	<div class="banner">
		<center>
		<div class="home-wrapper align-center">
			<p class="label"><i class="fa fa-code"></i> Back-End Engineer at Tunaiku</p>
			<p class="label"><i class="fa fa-graduation-cap"></i> Bina Nusantara University</p>
			<p class="label"><i class="fa fa-map-pin"></i> Jakarta, Indonesia</p>
			<button class="primary text-secondary hovered scroll-to" data-element="#about">More About Me</button>
		</div>
		</center>
	</div>
	<div id="about" class="segment segment-odd align-center">
		<p class="label">I'd do bunch of code</p>
		<br>
		<div class="box secondary inline hovered">
			<i class="fa fa-mobile-alt"></i><br>
			Mobile Application
		</div>
		<div class="box secondary inline hovered">
			<i class="fa fa-desktop"></i><br>
			Desktop Application
		</div>
		<div class="box secondary inline hovered">
			<i class="fa fa-laptop"></i><br>
			Web Application
		</div>
		<br><br>
		<p class="label">My Experience</p>
		<br>
		<div class="box-wide secondary center">
			<b>1997</b><br>
			printf("Hello World");
		</div>
		<div class="box-wide center large-text">
			...
		</div>
		<?php
			foreach($experiences as $experience){
		?>
			<div class="box-wide secondary center">
				<b><?= $experience["year"] ?></b><br>
				<?= $experience["desc"] ?>
			</div>
		<?php
			}
		?>
	</div>
	<div id="skill" class="segment align-center">
		<p class="label">My Skill</p>
		<br>
		<div class="skill-wrapper center">
			<?php
				foreach($skills as $skill){
			?>
				<div class="frame inline">
					<div class="photo has-img-<?= $skill["iconSize"] ?> has-tooltip" data-tooltip="<?= $skill["name"] ?>" style="background-image:url('<?= $skill["iconUrl"] ?>')">
					</div>
					<div class="bar <?= $skill["level"] ?>"></div>
				</div>
			<?php 
				} 
			?>
		</div>
	</div>
	<div id="portofolio" class="segment segment-odd align-center">
		<p class="label">My Portofolio</p>
		<br>
		<div class="portofolio-wrapper center">
			<?php
				foreach($apps as $app){
			?>
				<div class="large-photo inline has-img-contain" 
				style="background-image: url('<?= $app["imageUrl"] ?>');">
					<div class="large-photo tertiary opacity">
						<div class="text-secondary">
							<span class="hover-primary"><?= $app["name"] ?></span>
						</div>
					</div>
				</div>
			<?php
				}
			?>
		</div>
	</div>
	<div id="contact" class="footer align-center primary text-secondary">
		<div class="contact-address inline"><a class="hovered-text" href="https://instagram.com/renaldi.re2" target="_blank"><i class="fab fa-instagram"></i></a></div>
		<div class="contact-address inline"><a class="hovered-text" href="mailto:renaldi.re28@gmail.com" target="_blank"><i class="fab fa-google"></i></a></div>
		<div class="contact-address inline"><a class="hovered-text" href="https://facebook.com/renaldi.re28" target="_blank"><i class="fab fa-facebook"></i></a></div>
		<div class="contact-address inline"><a class="hovered-text" href="https://github.com/renaldire" target="_blank"><i class="fab fa-github"></i></a></div>
		<br>
		<div class="copyright">© 2020 Renal<b style="color: salmon;">di</b>. All rights reserved.</div>
	</div>
</body>
<script type="text/javascript" src="scripts/jquery1124.js"></script>
<script type="text/javascript" src="scripts/app.js"></script>
<script type="text/javascript" src="scripts/menu.js"></script>
<script type="text/javascript" src="scripts/scrollto.js"></script>
<script type="text/javascript" src="scripts/tooltip.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.8.2/js/brands.js" integrity="sha384-GtvEzzhN52RvAD7CnSR7TcPw555abR8NK28tAqa/GgIDk59o0TsaK6FHglLstzCf" crossorigin="anonymous"></script>
<script defer src="https://use.fontawesome.com/releases/v5.8.2/js/fontawesome.js" integrity="sha384-Ia7KZbX22R7DDSbxNmxHqPQ15ceNzg2U4h5A8dy3K47G2fV1k658BTxXjp7rdhXa" crossorigin="anonymous"></script>
</html>