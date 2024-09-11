'use strict';

const divBox = document.querySelector('div#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  if (!amount || amount < 0 || amount > 100) {
    return 'Value must be greater than 0 and less or equals 100';
  } else {
    let elements = '';
    let size = { width: 30, height: 30 };
    for (let step = 0; step < amount; step++) {
      let color = getRandomHexColor();
      elements += `<div style='background-color:${color}; width:${size.width}px; height:${size.height}px'></div>`;
      size.height += 10;
      size.width += 10;
    }
    divBox.insertAdjacentHTML('afterbegin', elements);
    input.value = null;
  }
};

const destroyBoxes = () => {
  [...divBox.children].forEach(el => el.remove());
  input.value = null;
};

createButton.addEventListener('click', event => createBoxes(input.value));
destroyButton.addEventListener('click', event => destroyBoxes());