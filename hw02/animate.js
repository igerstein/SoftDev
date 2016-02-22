// Isaac Gerstein
// SoftDev2 pd6
// HW02 -- Animate
// 2016-02-23

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");
var button = document.getElementById("start");

var radius = 0;
var increasing = true;

//Draws a circle with a changing radius
var circle = function(e){

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
    window.requestAnimationFrame(circle);
}


//Calls the circle function when the start button is clicked
button.addEventListener("click", circle);
