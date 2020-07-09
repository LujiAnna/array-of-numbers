'use strict';
console.log('--- loading: add number');

const addNumberHandler = () => {
  console.log('\n--- calling: add number handler');

  const userInput = Number(prompt('Please add a number:'))
  console.log('userInput:', typeof userInput, '\n', userInput);
  if (typeof(Number(userInput))!=='number') {
    return;
  }

  const userNumber =Number(userInput);
  console.log('userNumber:', typeof userNumber, '\n', userNumber);
  if (typeof(userNumber)!=='number') {
    alert(`${userInput} is not a valid number`);
    return;
  }

  console.log('numbers (before):', typeof numbers, '\n', numbers);
  // add the user's number to the main shared array of numbers
  const arrOfNumbers= numbers.push(userInput);
  console.log('numbers (after):', typeof numbers, '\n', numbers);

  displayArrayHandler();
};
