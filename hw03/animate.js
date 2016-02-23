// Isaac Gerstein
// SoftDev2 pd6
// HW03 -- Animation Continued
// 2016-02-24

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");

var radius = 0;
var increasing = true;

var logo = new Image();
logo.src = "logo_dvd.jpg";

var dvdX = 200;
var dvdY = 200;

var requestID;

//Draws a circle with a changing radius
var startCircle = function(e){

    //Clears the canvas
    ctx.clearRect(0, 0, 400, 400);

    //Draws a circle with the current radius
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(200, 200, radius, 0, Math.PI * 2);
    ctx.fill();

    //If the radius is at a maximum or minimum, change whether it is increasing
    if (radius == 200){
	increasing = false;
    }
    if (radius == 0){
	increasing = true;
    }

    //Increase or decrease the radius
    if (increasing){
	radius += 5;
    } else {
	radius -= 5;
    }

    //Call the function again
    requestID = window.requestAnimationFrame(startCircle);
};

//Draws a moving dvd logo
var startDvd = function(e){
    
    //Clears the canvas
    ctx.clearRect(0, 0, 400, 400);

    //Draws the logo
    ctx.drawImage(logo, dvdX, dvdY, 90, 60);

};

//Stops the circle
var stopAnimation = function(e){
    window.cancelAnimationFrame(requestID);
};

//Calls the startCircle function when the start button is clicked
circle.addEventListener("click", startCircle);

//Calls the startDvd function when the DVD button is clicked
dvd.addEventListener("click", startDvd);

//Calls the stopAnimation function when the stop button is clicked
stop.addEventListener("click", stopAnimation);
