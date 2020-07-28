function dwarfRollCall(dwarves) {
  let dwarfLine = [];
  for (let i=0; i < dwarves.length; i++) {
    dwarfLine.push(`${[i+1]}. ${dwarves[i]} `)
  } return dwarfLine.join("")
}

function summonCaptainPlanet(planeteerCalls){
  let summonYelling = [];
  for (let i=0; i<planeteerCalls.length; i++) {
    summonYelling.push(`${planeteerCalls[i].toUpperCase()}!`)
  } return summonYelling
}

function longPlaneteerCalls(words) {
  let characters = [];
  for (let i=0; i<words.length; i++){
    characters.push(words[i].length)
  } return characters.some(x => x>4)
}

let cheeses = ['cheddar', 'gouda', 'camembert']

function findTheCheese (foods) {
  if (foods.find(x => cheeses.includes(x)) === undefined) {
    return "no cheese!"
  } else {
    return foods.find(x => cheeses.includes(x))
  }
}
