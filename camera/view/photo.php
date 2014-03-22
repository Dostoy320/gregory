<html>
<head>
	<title>3940 Camera Module</title>
	<link rel="stylesheet" media="all" href="css/camera.css"/>
	<link href="css/prettify.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="scripts/prettify.js"></script>
</head>
<body onload="prettyPrint()">

<div id='container'>

<header><h3>Camera Module</h3></header>

<div id='sidebar'>
	<p>I got the Raspberry Pi Camera because I couldn't resist, and now I don't
	know what to do with it.  For now it does this. </p>
	<p>This app uses php's shell_exec to run a python script that instructs the Rpi 
	Camera to take a photo.</p>  <p>The photo is saved to a directory,
	and a bit more php displays the most recent photo.</p>
	<p>I'd like to redo this completely in Python, probably with 
	<a href="http://flask.pocoo.org/">Flask</a>, and I'd like to add exposure 
	controls</p>
	<p>Give it a shot:<br>
	<small>(though the office may be dark)</small></p>

	<form action="index.php" method="post" id="fire_camera">
		<input type="submit" value="Retrieve New Photo" name="shutter"/>
	</form>
</div>


<div id='photo_frame'>
	<?php
	$dirname = "view/photos/";
	$images = glob($dirname."*.jpg");
	$image = end($images);
		echo '<img src="'.$image.'" /><br />';
	?>
</div>

<div id="explanation">
	<p>Here's the python code for the camera:</p>
	<pre class="prettyprint">
		from subprocess import call<br>

		def savefile(position):<br>
			w = open("photo_number.sav", "w")<br>
			w.write(str(position))<br>
			w.close()<br>

		f = open("photo_number.sav")<br>
		r = int(f.read())<br>

		name = r + 1<br>
		con = 50<br>
		ISO = 200<br>
		exp = "auto"<br>


		call (["raspistill -t 1000 -o /var/www/camera/view/photos/%s.jpg 
			 -vf -awb auto -co %d -ISO %d -ex %s -q 40" % (name, con, ISO, exp)], shell=True)<br>

		savefile(name)
	</pre>
<footer>
...
</footer>
</div>

</body>
</html>
