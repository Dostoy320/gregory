from subprocess import call


def savefile(position):
    w = open("photo_number.sav", "w")
    w.write(str(position))
    w.close()

f = open("photo_number.sav")
r = int(f.read())

name = r + 1
con = 50
ISO = 400
exp = "auto"


call (["raspistill -t 1000 -o /var/www/camera/view/photos/%s.jpg -awb auto -co %d -ISO %d -ex %s -q 30 -w 600 -h 450" % (name, con, ISO, exp)], shell=True)

savefile(name)
