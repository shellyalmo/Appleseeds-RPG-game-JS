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
const monsters = [
  "Beast",
  "StinkyFish",
  "BadBeast",
  "SlayerVampire",
  "Smoketaur",
  "Gloomlich",
  "Poisonstep",
  "Stenchpaw",
  "The Insidious Critter",
  "The Delirious Ooze",
  "The Electric Gnoll",
  "The Amphibian Venom Elephant",
  "The Tattooed Dread Tiger",
  "The Furry Storm Critter",
];

function mapLocationMonsters(monsters, locations) {
  let monstersPerLocation = {};
  locations.forEach((location) => {
    const n = Math.random() * (10 - 5) + 5; // number of elements we want to get
    const shuffledArray = monsters.sort(() => 0.5 - Math.random()); // shuffles array
    const result = shuffledArray.slice(0, n); // gets first n elements after shuffle
    monstersPerLocation[location] = result;
  });
  return monstersPerLocation;
}
let monstersInEachLocation = mapLocationMonsters(monsters, finalLocations);
