import generateNavbar from './nav';
import homepageLandingContainer from './home';

export default function mainPageContainer() {
  const mainContainer = document.createElement('div');
  mainContainer.id = 'content';
  mainContainer.classList.add('main-container');
  mainContainer.appendChild(generateNavbar());
  mainContainer.appendChild(homepageLandingContainer());
  return mainContainer;
}
