const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const listElementEl = document.createElement('li');
  listElementEl.textContent = ingredient;
  return listElementEl;
});

listEl.append(...elements);