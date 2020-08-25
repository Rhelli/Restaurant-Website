import homepageLanding from './home';

export default function mainPageContainer() {
  const element = document.createElement('div');
  element.id = 'content';
  element.classList.add('main-container');
  return element;
}

