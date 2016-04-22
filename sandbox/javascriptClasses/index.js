var base = "this is in global namespace";
var x = "x in the global namespace";
var f2 = function() {
    console.log("this is f2");
};

var f1 = {
    x: "x in f1 namespace",
    f2: f2,
    f: function() {
	console.log("this is f in f1 namespace");
	console.log("x is " + x);
	console.log("f1.x is " + f1.x);
	console.log("better way: " + this.x);
    }
};

var makeIncrementer = function() {
    var i = 0;
    var inc = function() {
	i = i + 1;
	return i
    }
    return inc
};

var makeAdder = function(n) {
    var add = function(x) {
	return x + n;
    }
    return add
};

var makeCounter = function() {
    //Instance variable
    var i = 0;

    //Accessor method
    var get = function() {
	return i;
    };

    //Means of accessing members
    return  {
	x: "something in the dictionary",
	get: get,
	set: function(x) { i = x; },
	inc: function() { i++; },
	dec: function() { i--; },
	setx: function(x) { this.x = x;	}
    };
};
