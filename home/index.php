<?php
   require_once "controllers/connect.php";
   
   ?>
<!DOCTYPE html>
<html>
   <head>
      <title>Renaldi</title>
      <link rel="stylesheet" type="text/css" href="style/style.css">
      <link rel="shortcut icon" href="assets/logo.png" />
      <meta charset="utf-8">
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="target-densitydpi=device-dpi, initial-scale=1.0, user-scalable=no"/>
   </head>
   <body>
   	<style type="text/css">
   	</style>
      <div class="site-wrapper">
         <?php include "page/intro.php"; ?>
         <div id="dimDetail">
            <div id="ssDetail">
               <div class="closeButton" onclick="closeDimDetail()"></div>
            </div>
         </div>
         <div class="navBar-content">
            <div class="logo">
            </div>
            <ul>
               <li onclick="scrolltoContact()">Contact</li>
               <li onclick="scrolltoApps()" id="liApps">Apps</li>
               <li onclick="scrolltoSkill()">Skills</li>
               <li onclick="scrolltoHistory()">History</li>
               <li onclick="scrolltoHome()">Home</li>
            </ul>
         </div>
         <div class="app-option">
	   	<?php
		    $query="SELECT * FROM apps WHERE isShown='true'";
		    $result=mysqli_query($con,$query);
		    $i=1;
		    while($row=mysqli_fetch_assoc($result))
		    {
		?>
		   		<p  class="app-option-menu<?php if($i==1){echo " selected-app-option";}?>" onclick="showAppDetail(<?= $i ?>)"><?= $row['appsName'] ?></p>
	   	<?php
		    	$i++;
		    }
      	?>
		</div>
         <div class="container divProfile">
            <?php include "page/profile.php"; ?>
         </div>
         <div id="pnlHistory">
            <?php include "page/history.php"; ?>
         </div>
         <div class="container divSkills" id="pnlSkill">
            <?php include "page/skill.php"; ?>
         </div>
         <?php include "page/app.php"; ?>
         <div class="divContact" id="pnlContact">
            <?php include "page/contact.php"; ?>
         </div>
      </div>
   </body>
   <script type="text/javascript" src="script/jquery-1.12.4.js"></script>
   <script type="text/javascript" src="script/jquery-ui.js"></script>
   <script type="text/javascript" src="script/script.js"></script>
   <script type="text/javascript" src="script/slide.js"></script>
</html>
