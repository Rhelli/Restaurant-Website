import './style.scss';
import printMe from './print';

function someComponent() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'Hello, welcome to the restaurant page.';
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(someComponent());