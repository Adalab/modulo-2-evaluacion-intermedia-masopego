'use strict';
const userNumber = document.querySelector('.js-user-number');
const textClue = document.querySelector('.text-clue');
const textAttemps = document.querySelector('.text-attemps');
const submitButton = document.querySelector('.js-submit-button');
submitButton.addEventListener('click', handlerButton);

//Número de intentos
let attemps = 0;

//Números límites de random

const LIMIT_DOWN = 1;
const LIMIT_UP = 100;

// Mensajes a mostrar

const textTryAttempt = 'Número de intentos: ';

// Valor del input

const userData = userNumber.value;

// Función manejadora
function handlerButton(ev) {
  ev.preventDefault();
  countAttemps();
  checkNumber();
}

// Obtener número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(LIMIT_UP);

console.log(`El número elegido es ${randomNumber}`);

// Contar los intentos

function countAttemps() {
  attemps++;
  textAttemps.innerHTML = textTryAttempt + attemps;
}

// Comprobación de números
function checkNumber() {
  const userData = parseInt(userNumber.value);
  printFeedback(userData);
}

function printFeedback(userData) {
  if (userData < LIMIT_DOWN || userData > LIMIT_UP) {
    printMessage('Pista: El número debe estar entre 1 y 100 🤯');
  } else if (userData === randomNumber) {
    printMessage('Has ganado, campeona 😀 🎉');
  } else if (userData < randomNumber) {
    printMessage('Pista: Demasiado bajo ⬇️');
  } else if (userData > randomNumber) {
    printMessage('Pista: Demasiado alto ⬆️');
  }
}

function printMessage(message) {
  textClue.innerHTML = message;
}
