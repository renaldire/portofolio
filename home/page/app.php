<style type="text/css">
	.divApps
	{
		display: inline-block;
	}
	.pnlAppsBackground
	{
		font-size: 0px;
	}	
</style>

<div class="pnlAppsBackground" id="mainPnlApp">
	<?php
		$query="SELECT * FROM apps WHERE isShown='true'";
		$result=mysqli_query($con,$query);

		while($row=mysqli_fetch_assoc($result))
		{
	?>
			<div class="divApps" id="pnlApps" style="background-color: <?= $row['primaryColor'] ?>">
				<p class="lblMyApplication" style="color: <?= $row['headerTextColor'] ?>">APPS</p>
				<div class="preview-app" id="mainPreview-<?= $row['appsId'] ?>" style="background-image: url(<?= $row['path'].'1.png' ?>)">
				</div>
				<div class="detail-bottom" id="pnlMiniPreview">
					<?php
						for($i=1;$i<=$row['previewCount'];$i++)
						{
					?>
							<div id="miniPreview-<?= $row['appsId'].'-'.$i ?>" class="mini-preview"
								style="
									background-image: url(<?= $row['path'].$i.'.png'?>);
									<?php
										if($i==1)
										{
									?>
											border: 3px solid <?= $row['secondaryColor'] ?>;
									<?php
										}
									?>
								"
								onclick="clickMiniPreview(<?= $row['appsId'].",".$i ?>)"></div>
					<?php
						}
					?>
				</div>
				<a id="linkSite-<?= $row['appsId'] ?>" class="link" target="blank" href="<?= $row['linkSite'] ?>" 
					style="
						background-color: <?= $row['secondaryColor'] ?>;
						color: <?= $row['textColor'] ?>">
				Go to the Official Site!</a>
				<div class="button-down2" onclick="scrolltoContact()"></div>
			</div>
	<?php
		}
	?>
</div>
<div class="appList">
	<?php
		$query="SELECT * FROM apps WHERE isShown='true'";
		$result=mysqli_query($con,$query);

        $i=1;
		while($row=mysqli_fetch_assoc($result))
		{
	?>
			<button class="apps" id="app-<?= $row['appsId'] ?>" onclick="showAppDetail(<?= $i ?>)">
				<?= $row['appsName'] ?></button>
	<?php
	        $i++;
		}
	?>
</div>