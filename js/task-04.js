const valueEl = document.querySelector('#value');
const counterEl = document.querySelector('#counter');
let counterValue = 0;

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

counterEl.lastElementChild.addEventListener("click", increment);
counterEl.firstElementChild.addEventListener("click", decrement);
