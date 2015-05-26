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