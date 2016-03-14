function dwarfRollCall(dwarves) {
	var endString = ""
  for (var i = 0; i < dwarves.length; i++) {
   endString += (i+1).toString()+ ". " + dwarves[i] + " ";
  };
  return endString;
}

function summonCaptainPlanet(planeteerCalls){
	//your code here!
}

function longPlaneteerCalls(words) {
	//your code here!
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