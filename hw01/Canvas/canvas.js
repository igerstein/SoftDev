var canvas = document.getElementById("ftb2maga");
var ctx = canvas.getContext("2d");

//Specifies the color to fill a rectangle with
ctx.fillStyle = "blue";

//Draws a filled rectangle (x, y, length, height)
ctx.fillRect(50, 50, 100, 100);

//Specifies the color to draw a line with
ctx.strokeStyle = "red";

//Draws a rectangle border out of lines (x, y, length, height)
ctx.strokeRect(150, 150, 100, 100);

ctx.fillRect(250, 250, 100, 100);
ctx.strokeRect(350, 350, 100, 100);

ctx.fillStyle = "yellow";

//Creates a path to draw on
ctx.beginPath()

//Moves the path to the point (x, y) without drawing
ctx.moveTo(50, 150);

//Marks where the line will be drawn, to the point (x, y)
ctx.lineTo(350, 450);
ctx.lineTo(240, 360);

//Closes the current path
ctx.closePath();

//Draws lines based on the path
ctx.stroke();

//Fills in the lines drawn based on the path
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(450, 350);
ctx.lineTo(260, 140);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();

//Marks where an arc will be drawn using strokes (x, y, radius, startingAngle, endingAngle)
ctx.arc(150, 350, 20, 0, Math.PI * 2);

ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(350, 150, 20, 0, Math.PI * 2);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black";

//Specifies the font and size to draw text in
ctx.font = "30px arial"

//Draws text (text, x, y)
ctx.fillText("text", 250, 50);
