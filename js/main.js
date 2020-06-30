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

function handlerButton(ev) {
  attemps++;
  textAttemps.innerHTML = textTryAttempt + attemps++;

  const userData = userNumber.value;
  console.log(userData);

  if (userData < limitsNumber.up || userData > limitsNumber.down) {
  }

  // generar el número aleatorio
  // comprobar que el valor del input es el mismo que el del número aleatorio
  // Si nº mayor que  random, mensaje "Demasiado alto"
  // Si nº menor que  random, mensaje "Demasiado bajo"
  // Si nº igual que  random, mensaje "Has ganado"
  // Si nº mayor que  random, mensaje "El número debe estar entre 1 y 100"
  // Mostrar número de intentos
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(limitsNumber.up);

console.log(getRandomNumber(limitsNumber.up));

console.log(limitsNumber.up);
console.log(limitsNumber.down);
