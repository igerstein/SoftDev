// Isaac Gerstein
// SoftDev2 pd6
// HW2 -- Connect the Dots
// 2016-02-12

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var button = document.getElementById("clear");

//Creates variables to store the mouse's coordinates and previous coordinates
var x = null;
var y = null;
var prevX = null;
var prevY = null;

//Draws a dot and line connecting to it
var drawDot = function(e){
    
    //Sets the previous coordinates to what the mouse coordinates are at the start of the function
    prevX = x;
    prevY = y;
    
    //Sets the new mouse coordinates
    x = e.offsetX;
    y = e.offsetY;

    //If this is the first dot, sets the previous coordinates to the current coordinates
    if (prevX == null && prevY == null){
	prevX = x;
	prevY = y;
    }

    //Draws a circle at the current coordinates
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();

    //Draws a line from the previous coordinates to the current coordinates
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(x, y);
    ctx.stroke();
};

//Clears the dots and lines from the canvas
var clear = function(e){

    //Clears a rectangle from the canvas (x, y, width, height)
    ctx.clearRect(0, 0, 400, 400);

    //Sets the coordinate variables back to null
    x = null;
    y = null;
};

//Calls the drawDot function when the canvas is clicked
canvas.addEventListener("click", drawDot);

//Calls the clear function when the clear button is clicked
button.addEventListener("click", clear);
