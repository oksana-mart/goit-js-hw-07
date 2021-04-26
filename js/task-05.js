const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output')

function onInputEnter(event) {
  outputEl.textContent = inputEl.value;
  if (inputEl.value === '') {
    outputEl.textContent = 'незнакомец';
  };
};

inputEl.addEventListener('input', onInputEnter);