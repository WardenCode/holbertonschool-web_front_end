function studentHogwarts () {
  let privateScore = 0;
  let name = null;

  const changeSchoreBy = (points) => {
    privateScore += points;
  };

  return ({
    setName: (newName) => {
      name = newName;
    },
    rewardStudent: () => {
      changeSchoreBy(1);
    },
    penalizeStudent: () => {
      changeSchoreBy(-1);
    },
    getScore: () => `${name}: ${privateScore}`
  });
}

const harry = studentHogwarts();
harry.setName('Harry');
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

const draco = studentHogwarts();

draco.setName('Draco');
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());