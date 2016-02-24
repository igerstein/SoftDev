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
var dvdXIncreasing = true;
var dvdYIncreasing = true;

var requestID;

//Draws a circle with a changing radius
var startCircle = function(e){

    //Clears the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //Draws a circle with the current radius
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();

    //If the radius is at a maximum or minimum, change whether it is increasing
    if (radius == ctx.canvas.width / 2){
	increasing = false;
    } else if (radius == 0){
	increasing = true;
    }

    //Increase or decrease the radius
    if (increasing){
	radius += 2;
    } else {
	radius -= 2;
    }

    //Call the function again
    requestID = window.requestAnimationFrame(startCircle);
};

//Draws a moving dvd logo
var startDvd = function(e){
    
    //Clears the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //Draws the logo
    ctx.drawImage(logo, dvdX, dvdY, 90, 60);

    //If the coordinates are at the edge of the canvas, change directions
    if (dvdX == ctx.canvas.width - 90){
	dvdXIncreasing = false;
    } else if (dvdX == 0){
	dvdXIncreasing = true;
    }
    if (dvdY == ctx.canvas.height - 60){
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
    requestID = window.requestAnimationFrame(startDvd);
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
