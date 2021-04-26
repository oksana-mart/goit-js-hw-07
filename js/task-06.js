const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;
  const inputElLength = inputEl.getAttribute("data-length");

  inputEl.setAttribute('class', 'invalid');

  if (inputLength === Number(inputElLength)) {
    inputEl.setAttribute('class', 'valid');
  };
};