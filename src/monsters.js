// mapLocationMonsters - create multiple monsters, and attach them to every location. returns an object with locations as keys and array of monsters in each location.
/**
 * generate monster
 */
function monsterGenerator(namesArray) {
  let monsterObj = {};
  monsterObj.monsterName =
    namesArray[Math.floor(Math.random() * namesArray.length)];
  monsterObj.strength = Math.round(Math.random() * (100 - 1) + 1);
  monsterObj.defense = Math.round(Math.random() * (100 - 1) + 1);
  monsterObj.level = Math.round(Math.random() * (50 - 1) + 1);
  monsterObj.healthPoints = Math.round(Math.random() * (100 - 1) + 1);
  monsterObj.XPReward = Math.round(Math.random() * (1000 - 1) + 1);
  monsterObj.dexterity = Math.round(Math.random() * (10 - 1) + 1);
  return monsterObj;
}
const monsterNames = [
  "Beast",
  "StinkyFish",
  "BadBeast",
  "SlayerVampire",
  "Smoketaur",
  "Gloomlich",
];
let monsters = [];
for (let name of monsterNames) {
  monsters.push(monsterGenerator(monsterNames));
}
// console.log(monsters);

const contracts = [
  { monsterName: "Smoketaur", XP: 500, gold: 200 },
  { monsterName: "Gloomlich", XP: 700, gold: 400 },
  { monsterName: "SlayerVampire", XP: 800, gold: 500 },
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
// console.log(monstersInEachLocation);

// TODO
/**
 * match monster name in contract to monster name in location, then return location:[contracts]
 */
// function listLocationsContracts(contractsArray, monstersInEachLocationArray) {
//   const contractMonsterNames = contractsArray.map((obj) => {
//     return obj.monsterName;
//   });
//   return contractMonsterNames;
//   monstersInEachLocationArray.forEach(element => {

//   });
// }

// console.log(listLocationsContracts(contracts, monstersInEachLocation));
