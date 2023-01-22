const locationNames = [
  "Ragnarok",
  "Hell",
  "Forest",
  "Mountain of Doom",
  "Evil Kingdom",
];

const locationDesc = ["Scary", "Dark", "Evil", "Magical", "Horrific"];
/**
 * generate random locations based on given names and descriptions
 * @param {Array} names
 * @param {Array} descriptions
 */
function locationsGenerator(names, descriptions) {
  let locations = [];
  for (let i = 0; i < names.length; i++) {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomDesc =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    locations.push(randomDesc + " " + randomName);
  }
  return locations;
}

let finalLocations = locationsGenerator(locationNames, locationDesc);

/**
 * print final locations
 */
function listLocations(finalLocationsArray) {
  console.log(finalLocationsArray);
}

/**
 * set user's current location
 * @param {string} location
 */
function goToLocation(location) {
  playerLocation = location;
}
//inside a location you can fight only the monsters inside this location.
let playerLocation = "";
goToLocation(finalLocations[0]);
// console.log(playerLocation);

// mapLocationMonsters - create multiple monsters, and attach them to every location. returns an object with locations as keys and array of monsters in each location.
// temporary monsters array. TODO: replace with a function that creates monsters
const monsters = ["Beast", "StinkyFish", "BadBeast", "SlayerVampire"];

function mapLocationMonsters(monsters, locations) {
  let monstersPerLocation = {};
  locations.forEach((location) => {
    monstersPerLocation[location] = monsters;
  });
  return monstersPerLocation;
}
console.log(mapLocationMonsters(monsters, finalLocations));
