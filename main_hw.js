
// Add text in the center of the circle that shows how many 
// times this svg has been clicked on. Each time the svg
// clicked on, the count should update.

var counter = 0;

function circle1_click() {

	counter += 1;

	document.getElementById("circle1text").innerHTML = counter;

}

function circle2_mouseover() {

	document.getElementById("circle2").stroke = black;
	document.getElementById("circle2").stroke-width = 3px;


}