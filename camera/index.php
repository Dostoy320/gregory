<?php

if (isset($_POST['shutter'])) {
	shell_exec('sudo python camera.py');
	include('view/photo.php');
}

elseif (isset($_POST['show_code'])) {
	include('view/camera_code.php');
}

else { 
	include('view/photo.php');
}



unset($_POST);

?>
