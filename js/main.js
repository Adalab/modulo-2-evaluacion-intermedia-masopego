'use strict';
const userNumber = document.querySelector('.js-user-number');
const textClue = document.querySelector('.text-clue');
const textAttemps = document.querySelector('.text-attemps');
const submitButton = document.querySelector('.js-submit-button');
submitButton.addEventListener('click', handlerButton);

//Número de intentos
let attemps = 0;

//Números límites de random

const limitsNumber = {
  down: 1,
  up: 100,
};

// Mensajes a mostrar

const textNumberUp = 'Demasiado alto';
const textNumberDown = 'Demasiado bajo';
const textNumberEqual = 'Has ganado, campeona 😀';
const textNumberNotValid = 'El número debe estar entre 1 y 100';
const textTryAttempt = 'Número de intentos: ';

// Valor del input

const userData = userNumber.value;

// Función manejadora
function handlerButton(ev) {
  countAttemps();

  checkNumber();
}

// Obtener número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(limitsNumber.up);

console.log(randomNumber);

// Contar los intentos

function countAttemps() {
  attemps++;
  textAttemps.innerHTML = textTryAttempt + attemps;
}

// Comprobación de números
function checkNumber() {
  const userData = parseInt(userNumber.value);
  console.log(userData);
  if (userData < limitsNumber.down || userData > limitsNumber.up) {
    textClue.innerHTML = textNumberNotValid;
  } else if (userData === randomNumber) {
    textClue.innerHTML = textNumberEqual;
  } else if (userData < randomNumber) {
    textClue.innerHTML = textNumberDown;
  } else if (userData > randomNumber) {
    textClue.innerHTML = textNumberUp;
  }
}
