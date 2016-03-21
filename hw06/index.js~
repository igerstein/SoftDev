// Isaac Gerstein
// SoftDev2 pd6
// HW05 -- Delegates
// 2016-03-21

//Each key is a state, and each value is an array with the number of delegates and whether they have been allotted
var delegates = {
    "Iowa": [44, true],
    "New Hampshire": [24, true],
    "Nevada": [35, true],
    "South Carolina": [53, true],
    "Alabama": [53, true],
    "Arkansas": [32, true],
    "Colorado": [66, true],
    "Georgia": [102, true],
    "Massachusetts": [91, true],
    "Minnesota": [77, true],
    "Oklahoma": [38, true],
    "Tennessee": [67, true],
    "Texas": [222, true],
    "Vermont": [16, true],
    "Virginia": [95, true],
    "American Samoa": [6, true],
    "Kansas": [33, true],
    "Louisiana": [51, true],
    "Nebraska": [25, true],
    "Maine": [25, true],
    "Michigan": [127, true],
    "Mississippi": [34, true],
    "Northern Mariana Islands": [6, true],
    "Florida": [198, true],
    "Illinois": [135, true],
    "Missouri": [64, true],
    "North Carolina": [104, true],
    "Ohio": [141, true],
    "Arizona": [85, false],
    "Idaho": [27, false],
    "Utah": [37, false],
    "Alaska": [20, false],
    "Hawaii": [34, false],
    "Washington": [118, false],
    "Wisconsin": [96, false],
    "Wyoming": [18, false],
    "New York": [291, false],
    "Connecticut": [70, false],
    "Delaware": [31, false],
    "Maryland": [118, false],
    "Pennsylvania": [210, false],
    "Rhode Island": [33, false],
    "Indiana": [92, false],
    "Guam": [12, false],
    "West Virginia": [37, false],
    "Kentucky": [61, false],
    "Oregon": [74, false],
    "Virgin Islands": [12, false],
    "Puerto Rico": [67, false],
    "California": [546, false],
    "Montana": [27, false],
    "New Jersey": [142, false],
    "New Mexico": [43, false],
    "North Dakota": [23, false],
    "South Dakota": [25, false],
    "District of Columbia": [45, false]
};

var republicans = {
    "Iowa": [30, true],
    "New Hampshire": [23, true],
    "Nevada": [30, true],
    "South Carolina": [50, true],
    "Alabama": [50, true],
    "Arkansas": [39, true],
    "Colorado": [0, true],
    "Georgia": [72, true],
    "Massachusetts": [42, true],
    "Minnesota": [38, true],
    "Oklahoma": [40, true],
    "Tennessee": [58, true],
    "Texas": [155, true],
    "Vermont": [16, true],
    "Virginia": [49, true],
    "American Samoa": [0, true],
    "Kansas": [40, true],
    "Louisiana": [41, true],
    "Nebraska": [36, false],
    "Maine": [23, true],
    "Michigan": [59, true],
    "Mississippi": [37, true],
    "Northern Mariana Islands": [9, true],
    "Florida": [99, true],
    "Illinois": [65, true],
    "Missouri": [30, true],
    "North Carolina": [71, true],
    "Ohio": [66, true],
    "Arizona": [58, false],
    "Idaho": [32, true],
    "Utah": [40, false],
    "Alaska": [28, true],
    "Hawaii": [19, true],
    "Washington": [44, false],
    "Wisconsin": [42, false],
    "Wyoming": [11, true],
    "New York": [95, false],
    "Connecticut": [28, false],
    "Delaware": [16, false],
    "Maryland": [38, false],
    "Pennsylvania": [71, false],
    "Rhode Island": [19, false],
    "Indiana": [57, false],
    "Guam": [9, false],
    "West Virginia": [34, false],
    "Kentucky": [46, true],
    "Oregon": [28, false],
    "Virgin Islands": [9, false],
    "Puerto Rico": [23, true],
    "California": [172, false],
    "Montana": [27, false],
    "New Jersey": [51, false],
    "New Mexico": [24, false],
    "North Dakota": [28, false],
    "South Dakota": [29, false],
    "District of Columbia": [19, true]
};    


//Finds the total number of delegates, number allotted, and number not yet allotted
var totalDelegates = 0;
for (var i in delegates){
    totalDelegates += delegates[i][0];
}

var totalRep = 0;
for (var i in republicans){
    totalRep += republicans[i][0];
}

var allottedDelegates = 0;
for (var i in delegates){
    if (delegates[i][1]){
	allottedDelegates += delegates[i][0];
    }
}

var allottedRep = 0;
for (var i in republicans){
    if (republicans[i][1]){
	allottedRep += republicans[i][0];
    }
}

var notAllottedRep = totalRep - allottedRep;
var notAllottedDelegates = totalDelegates - allottedDelegates;

//Inputs the totals into the html
var total = d3.select("#total");
total.text("Total delegates: " + totalDelegates);
var allotted = d3.select("#allotted");
allotted.text("Allotted: " + allottedDelegates);
var notAllotted = d3.select("#notAllotted");
notAllotted.text("Not yet allotted: " + notAllottedDelegates);

var totalR = d3.select("#totalRep");
totalR.text("Total delegates: " + totalRep);
var allottedR = d3.select("#allottedRep");
allottedR.text("Allotted: " + allottedRep);
var notAllottedR = d3.select("#notAllottedRep");
notAllottedR.text("Not yet allotted: " + notAllottedRep);

//Creates an array out of the delegate dictionary to pass into the divs
var delegateArray = [];
for (var i in delegates){
    delegateArray.push(i);
    delegateArray.push(delegates[i].concat([true]));
    delegateArray.push(republicans[i].concat([false]));
}



var states = d3.select("#states");
var div = states.selectAll("div");
var divUpdate = div.data(delegateArray);
var divEnter = divUpdate.enter().append("div");
var demOrRep = true;
//Sets the text and style of the divs based on whether they are labels or bars
divEnter.text(function(d){
    if (typeof d == "string"){
	return d;
    } else {
	return d[0];
    }
});
divEnter.style("width", function(d){
    if (typeof d == "object"){
	return d[0] * 3 + "px";
    }
});
divEnter.style("background", function(d){
    if (typeof d == "object"){
	if (d[1]){
	    if (d[2]){
		return "green";
	    }
	    return "red";
	} else {
	    if (d[2]){
		return "orange";
	    }
	    return "purple";
	}
    }
});
divEnter.style("color", function(d){
    if (typeof d == "object"){
	return "black";
    }
});
divEnter.style("text-align", function(d){
    if (typeof d == "string"){
	return "left";
    } else {
	return "right";
    }
});
divEnter.style("padding-top", function(d){
    if (typeof d == "string"){
	return "20px";
    }
});
