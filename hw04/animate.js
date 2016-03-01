// Isaac Gerstein
// SoftDev2 pd6
// HW04 -- SVG Animation
// 2016-03-02

var pic = document.getElementById("vimage");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");

var requestID;

//Draws a circle with a changing radius
var startCircle = function(e){

    //cancels the dvd animation if it is still running
    window.cancelAnimationFrame(requestID);

    //Variable inits
    var radius = 0;
    var increasing = true;

    var circleAnimate = function(){
	//Clears the svg
	while (pic.children.length > 0){
	    pic.removeChild(pic.children[0]);
	}
	
	//Draws a circle with the current radius
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", pic.width.baseVal.value / 2);
	c.setAttribute("cy", pic.height.baseVal.value / 2);
	c.setAttribute("r", radius);
	c.setAttribute("fill", "red");
	pic.appendChild(c);

	//If the radius is at a maximum or minimum, change whether it is increasing
	if (radius == pic.width.baseVal.value / 2){
	    increasing = false;
	} else if (radius == 0){
	    increasing = true;
	}

	//Increase or decrease the radius
	if (increasing){
	    radius += 1;
	} else {
	    radius -= 1;
	}

	//Call the function again
	requestID = window.requestAnimationFrame(circleAnimate);
    };

    circleAnimate();
};

//Draws a moving dvd logo
var startDvd = function(e){
    
    //cancels the drawDot animation if it is still running
    window.cancelAnimationFrame(requestID);

    //Variable inits
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    var dvdX = 200;
    var dvdY = 200;
    var dvdXIncreasing = true;
    var dvdYIncreasing = true;

    var dvdAnimate = function(){
	//Clears the svg
	while (pic.children.length > 0){
	    pic.removeChild(pic.children[0]);
	}

	//Draws the logo
	var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
	c.setAttribute("width", 90);
	c.setAttribute("height", 60);
	c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "logo_dvd.jpg");
	c.setAttribute("x", dvdX);
	c.setAttribute("y", dvdY);
	pic.appendChild(c);

	//If the coordinates are at the edge of the canvas, change directions
	if (dvdX == pic.width.baseVal.value - 90){
	    dvdXIncreasing = false;
	} else if (dvdX == 0){
	    dvdXIncreasing = true;
	}
	if (dvdY == pic.height.baseVal.value - 60){
	    dvdYIncreasing = false;
	} else if (dvdY == 0){
	    dvdYIncreasing = true;
	}

	//Increase or decrease the coordinates
	if (dvdXIncreasing){
	    dvdX += 2;
	} else {
	    dvdX -= 2;
	}
	if (dvdYIncreasing){
	    dvdY += 2;
	} else {
	    dvdY -= 2;
	}

	//Call the function again
	requestID = window.requestAnimationFrame(dvdAnimate);
    };

    dvdAnimate();
};

//Stops the animation
var stopAnimation = function(e){
    window.cancelAnimationFrame(requestID);
};

//Calls the startCircle function when the start button is clicked
circle.addEventListener("click", startCircle);

//Calls the startDvd function when the DVD button is clicked
dvd.addEventListener("click", startDvd);

//Calls the stopAnimation function when the stop button is clicked
stop.addEventListener("click", stopAnimation);
