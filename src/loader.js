import htmlGenerator from './generator';
import generateNavbar from './nav';
import homepageLandingContainer from './home';

export default function mainPageContainer() {
  const mainContainer = htmlGenerator('div', 'main-container', 'content');
  mainContainer.appendChild(generateNavbar());
  mainContainer.appendChild(homepageLandingContainer());
  return mainContainer;
}
