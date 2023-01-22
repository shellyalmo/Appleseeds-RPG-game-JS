/*player */
function createPlayer() {
  //   let playerName = prompt("Enter player name: ");
  let playerObj = {};
  playerObj.playerName = "Bob";
  playerObj.strength = Math.round(Math.random() * (100 - 1) + 1);
  playerObj.defense = Math.round(Math.random() * (100 - 1) + 1);
  playerObj.dexterity = Math.round(Math.random() * (10 - 1) + 1);
  playerObj.goldAmount = 100;
  playerObj.potionAmount = 3;
  playerObj.level = 1;
  playerObj.healthPoints = 100;
  playerObj.currentXP = 0;
  return playerObj;
}

let player = createPlayer();
