
// Add text in the center of the circle that shows how many 
// times this svg has been clicked on. Each time the svg
// clicked on, the count should update.

var counter = 0;
var circle3_visible = true;

function circle1_click() {

	counter += 1;

	document.getElementById("circle1text").innerHTML = counter;

}

function circle2_mouseover() {

	document.getElementById("circle2").setAttribute("stroke", "black");
	document.getElementById("circle2").setAttribute("stroke-width", "3px");

}

function circle2_mouseout() {

	document.getElementById("circle2").setAttribute("stroke", "none");
	document.getElementById("circle2").setAttribute("stroke-width", "0");

}

function circle3_click() {
	if (circle3_visible) {
		document.getElementById("circle3").style.opacity = "0";
		circle3_visible = false;
	} else {
		document.getElementById("circle3").style.opacity = "1";
		circle3_visible = true;
	}

}