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

const finalLocations = locationsGenerator(locationNames, locationDesc);

/**
 * print final locations
 */
function listLocations(finalLocationsArray) {
  console.log(finalLocationsArray);
}
