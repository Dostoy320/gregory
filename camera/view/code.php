<?php include '/var/www/view/header.php' ?>

<div id='main'>
	<pre>
	<code class='prettyprint'>
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
	</code>
	</pre>
</div>

<?php include '/var/www/view/footer.php' ?>