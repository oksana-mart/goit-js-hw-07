const categoriesEl = document.querySelector('#categories');

console.log(`'В списке ${categoriesEl.children.length} категории.'`);

const itemsEl = document.querySelectorAll('#categories .item');


itemsEl.forEach(function (item) {
  const categoryTitleEl = item.querySelector('.item h2');
  const categoryName = categoryTitleEl.textContent;
  console.log((`Категория: ${categoryName}`));

  const categoryLength = item.querySelectorAll('.item li').length;
  console.log((`Количество элементов: ${categoryLength}`));
});
