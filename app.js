let secretNumber = 0;
let userTry = 0;
let maxTries = 3;
let guessedNumbers = [];
let maxNumber = 10;

function elementText(selector, text) {
  let element = document.querySelector(selector);
  element.innerHTML = text;
  return;
}

function checkUserGuess() {
  let userGuess = parseInt(document.getElementById("userGuessInput").value);

  if (userTry === maxTries) {
    document.getElementById("retry").setAttribute("disabled", "true");
    document.getElementById("reiniciar").removeAttribute("disabled");
  }

  if (userGuess === secretNumber) {
    elementText(
      "p",
      `You guessed the number in ${userTry} ${userTry == 1 ? "try" : "tries"}!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (userGuess > secretNumber) {
    elementText("p", "Your number is bigger than the secret number.");
  } else {
    elementText("p", "Your number is smaller than the secret number.");
  }
  userTry++;
  clearInput();
  return;
}

function clearInput() {
  document.querySelector("#userGuessInput").value = "";
}

function restartGame() {
  clearInput();
  startingConditions();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function generateRandomNumber() {
  let secretNumber = Math.floor(Math.random() * maxNumber) + 1;

  if (guessedNumbers.length == maxNumber) {
    elementText("p", "You guessed all possible numbers!");
  } else {
    if (guessedNumbers.includes(secretNumber)) {
      return generateRandomNumber();
    }
  }

  console.log(guessedNumbers);
  guessedNumbers.push(secretNumber);

  return secretNumber;
}

function startingConditions() {
  elementText("h1", "Secret number game!");
  elementText("p", `Write a number between 1 and ${maxNumber}`);
  document.getElementById("retry").removeAttribute("disabled");
  secretNumber = generateRandomNumber();
  console.log(secretNumber);
  userTry = 1;
}

startingConditions();

// Might look what hoisting is
