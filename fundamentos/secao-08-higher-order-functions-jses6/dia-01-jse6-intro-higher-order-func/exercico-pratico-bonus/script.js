const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

console.log(battleMembers);

const dragonAttack = (members) => {
  return Math.floor(Math.random() * (members.dragon.strength - 15 + 1)) + 15;
};

console.log(dragonAttack(battleMembers));

const warriorAttack = (members) => {
  return (
    Math.floor(
      Math.random() *
        (members.warrior.strength * members.warrior.weaponDmg -
          members.warrior.strength +
          1)
    ) + members.warrior.strength
  );
};

console.log(warriorAttack(battleMembers));

const mageAttack = (members) => {
  const damage =
    members.mage.mana >= 15
      ? Math.floor(
          Math.random() *
            (members.mage.intelligence * 2 - members.mage.intelligence + 1)
        ) + members.mage.intelligence
      : "Não possui mana suficiente";
  const mana = members.mage.mana >= 15 ? 15 : 0;

  return { damageDealt: damage, manaUsed: mana };
};

console.log(mageAttack(battleMembers));

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (members, attack) => {
    const warriorDamage = attack(members);
    members.dragon.healthPoints -= warriorDamage;
    members.warrior.damage = warriorDamage;
  },
  mageTurn: (members, attack) => {
    const mageDamage = attack(members);
    members.dragon.healthPoints -= mageDamage.damageDealt;
    members.mage.damage = mageDamage.damageDealt;
    members.mage.mana -= mageDamage.manaUsed;
  },
  dragonTurn: (members, attack) => {
    const dragonDamage = attack(members);
    members.mage.healthPoints -= dragonDamage;
    members.warrior.healthPoints -= dragonDamage;
    members.dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(battleMembers, warriorAttack);
gameActions.mageTurn(battleMembers, mageAttack);
gameActions.dragonTurn(battleMembers, dragonAttack);
console.log(gameActions.turnResults());
