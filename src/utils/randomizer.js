export const randomizer = (arrayLength) => {
  let randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.floor(Math.random() * arrayLength);

    while (randomArray.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * arrayLength);
    }

    randomArray.push(randomNumber);
  }

  return randomArray;
};
