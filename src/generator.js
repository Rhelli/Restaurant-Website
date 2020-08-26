export default function htmlGenerator(tag, className, idName = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  if (idName) element.id = idName;
  return element;
}

function textGen(tag, text) {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
}

function spaceParse(text, symbol = null) {
  const arr = text.split('');
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === '#' || arr[i] === symbol) {
      arr[i] = ' ';
    }
  }
  return arr.join('');
}

export { textGen, spaceParse, htmlGenerator };