const inputFontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('span#text');

inputFontSizeControlEl.addEventListener('change', onChangeFontSizeControl);

function onChangeFontSizeControl(event) {
  const fontSize = event.currentTarget.value;
  return textEl.style.fontSize = `${fontSize}px`;
};
