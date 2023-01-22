/**
 * determine who attacks first
 */
function firstAttacker(playerDex, monsterDex) {
  let playerResult = playerDex + Math.round(Math.random() * (20 - 1) + 1);
  console.log(playerResult);
  let monsterResult = monsterDex + Math.round(Math.random() * (20 - 1) + 1);
  console.log(monsterResult);

  return playerResult > monsterResult ? playerResult : monsterResult;
}

// console.log(firstAttacker(player.dexterity, 5));
