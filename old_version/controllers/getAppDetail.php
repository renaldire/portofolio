<?php
	require_once "connect.php";

	$id = $_POST['id'];
	$query="SELECT * FROM apps WHERE appsId=$id";
	$result = mysqli_query($con,$query);
	$row=mysqli_fetch_assoc($result);

	echo $row['appsName']."@".$row['appsDescription']."@".$row['path']."@".$row['linkSite']."@".$row['previewCount'];