
// Build an array of coordinates 5 pixels from each other:
function arrayBuilder() {
	var x = 0;
	var pointArray = [];
	for (var i = 0; i < canvasWidth/5; i++) {
		var y = 0;
		pointArray.push({
			x: x,
			y: y
		});
		for (var inc = 0; inc < canvasHeight/5; inc++) {
			y = y + 5;
			pointArray.push({
				x: x,
				y: y
			});
		}
		x = x + 5;
	}
	return pointArray;
}

// For two values, find index in array that matches
function getIndexForAttr(array, val1, val2) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].x === val1 && array[i].y === val2) {
			return i;
		}
	}
	return -1;
}

// Clear surrounding array indexes based on coordinates
function clearRadius(array, index, radius) {
	// Set area limits:
	var xLMin = array[index].x - radius;
	var xRMin = array[index].x + radius;
	var yAMin = array[index].y - radius;
	var yBMin = array[index].y + radius;

	// For each element in array, if x and y coordinates fall within
	// the area limits, cut the coordinate object from the array.
	for (i = 0; i < array.length; i++) {
		if ( array[i].x > xLMin && array[i].x < xRMin
			&& array[i].y > yAMin && array[i].y < yBMin) {
				array.splice(i, 1);
			}
	}
	// Return an array with a missing box
	return array;
}

// Draw the array to the canvas
function drawPoints(pointArray) {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight)
	for (point in pointArray) {
		ctx.beginPath();
		ctx.arc(pointArray[point].x, pointArray[point].y, 1, 0, 2 * Math.PI, false);
		ctx.fillStyle = "black";
		ctx.fill();
	}
}

// Initialize canvas context:
//
var canvas = document.getElementById('radius_canvas');

if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	var canvasHeight = ctx.canvas.height;
	var canvasWidth = ctx.canvas.width;

// create array:
var myArray = arrayBuilder();
drawPoints(myArray);

var button = document.getElementById('index_submit');

button.onclick=function() {
	var indexValue = document.getElementById('index_value').value;

	// Modify the array to remove points around a set of coordinates
	var modArray = clearRadius(myArray, indexValue, 20);

	// Draw the modified array
	drawPoints(modArray);

}







} else {
	alert("Your browser does not support HTML5 Canvas.");
}