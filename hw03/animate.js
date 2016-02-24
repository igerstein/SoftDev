// Isaac Gerstein
// SoftDev2 pd6
// HW03 -- Animation Continued (With Framework)
// 2016-02-25

//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";


var requestID;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
};

var radius = 0;
var growing = true;


var drawDot = function() {
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius = radius + 1;
    }    
    else {
	radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }
    
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {
    
    //cancels the drawDot animation if it is still running
    window.cancelAnimationFrame( requestID );
   
    //var inits
    var dvdX = 200;
    var dvdY = 200;
    var dvdXIncreasing = true;
    var dvdYIncreasing = true;
    var logo = new Image();
    logo.src = "logo_dvd.jpg";


    //a function defined within a function, oh my!
    var dvdLogo = function() {
	
	//propulsion mechanism
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	ctx.drawImage(logo, dvdX, dvdY, 90, 60);

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

	//continually calls the dvdLogo function, but not the dvdLogoSetup function
	requestID = window.requestAnimationFrame( dvdLogo );		
    };

    dvdLogo();
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );
