function someComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello, welcome to the restaurant page.';

  return element;
}

document.appendChild(someComponent());