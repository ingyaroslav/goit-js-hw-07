'use strict';

const categories = document.querySelector('ul#categories');

console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach(item => {
  let category = item.querySelector('h2').innerText;
  let elements = item.querySelector('ul').children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});