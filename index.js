// Code your solutions in this file
const writeCards = (names) => {
  return names.map(
    (name) => `Thank you, ${name}, for the wonderful surprise gift!`
  );
};

const countDown = (counter) => {
  while (counter >= 0) {
    console.log(counter);
    counter--;
  }
};
