const locationNames = [
  "Ragnarok",
  "Hell",
  "Forest",
  "Mountain of Doom",
  "Evil Kingdom",
];

const locationDesc = ["Scary", "Dark", "Evil", "Magical", "Horrific"];
/**
 *
 * @param {Array} names
 * @param {Array} descriptions
 */
function locationsGenerator(names, descriptions) {
  let finalLocations = [];
  for (let i = 0; i < names.length; i++) {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomDesc =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    finalLocations.push(randomDesc + " " + randomName);
  }
  return finalLocations;
}

console.log(locationsGenerator(locationNames, locationDesc));
