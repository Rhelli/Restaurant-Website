export default function htmlGenerator(tag, className, idName = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  if (idName) element.id = idName;
  return element;
}

const textGen = (tag, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
};

const imgGen = (tag, className, src, idName = false) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.src = src;
  return element;
};

const sequentialAppend = (parent, array) => {
  const element = array;
  for (let i = 0, l = array.length; i < l; i++) {
    parent.appendChild(array[i]);
  }
  return array;
};

const spaceParse = (text, symbol = null) => {
  const arr = text.split('');
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === '#' || arr[i] === symbol) {
      arr[i] = ' ';
    }
  }
  return arr.join('');
};

export { textGen, spaceParse, htmlGenerator, imgGen, sequentialAppend };