'use strict';

const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

textInput.addEventListener('input', event => {
  const input = event.currentTarget.value.trim();
  if (input) {
    textOutput.textContent = input;
  } else {
    textOutput.textContent = 'Anonymous';
  }
});