'use strict';
const userNumber = document.querySelector('.js-user-number');
const textClue = document.querySelector('.text-clue');
const textAttemps = document.querySelector('.text-attemps');
const submitButton = document.querySelector('.js-submit-button');
submitButton.addEventListener('click', handlerButton);

function handlerButton(ev) {
  // generar el número aleatorio
  // comprobar que el valor del input es el mismo que el del número aleatorio
  // Si nº mayor que  random, mensaje "Demasiado alto"
  // Si nº menor que  random, mensaje "Demasiado bajo"
  // Si nº igual que  random, mensaje "Has ganado"
  // Si nº mayor que  random, mensaje "El número debe estar entre 1 y 100"
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

getRandomNumber(100);

console.log(getRandomNumber(100));
