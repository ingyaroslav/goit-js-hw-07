'use strict';

const body = document.querySelector('body');
const button = document.querySelector('button.change-color');
const colorText = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = event => {
  const newColor = getRandomHexColor();
  colorText.textContent = newColor;
  body.style.backgroundColor = newColor;
};

button.addEventListener('click', changeColor);