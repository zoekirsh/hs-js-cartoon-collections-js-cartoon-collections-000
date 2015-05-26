function dwarfRollCall (dwarves) {
	for (var i = 0; i < dwarves.length; i++) {
		console.log((i+1) + ". " + dwarves[i]);
	}
}

function summonCaptainPlanet (planeteerCalls){
	var newCalls = []
	for (var i = 0; i < planeteerCalls.length; i++) {
		var call = planeteerCalls[i].toUpperCase() + "!"
		newCalls.push(call)
	};
	return newCalls
}

function longPlaneteerCalls (words) {
	var outcome = false;
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > 4) {
			outcome = true;
			return outcome;
		}
	}
	return outcome;
}

function findTheCheese (foods) {
	var cheeses = ["cheddar", "gouda", "camembert"];
	for (var i = 0; i < foods.length; i++) {
		for (var j = 0; j < cheeses.length; j++) {
			if ( cheeses[j]=== foods[i] ) {
				return foods[i]; //will quit and return the first cheese that it finds
			}
		}
	}
	return null; // returns null if it doesn't find any cheese :( 
}