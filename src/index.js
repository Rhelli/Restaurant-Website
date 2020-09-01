import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './style.scss';
import mainPageContainer from './loader';
import generateNavbar from './nav';
import generateHomepage from './home';
import generateAbout from './about';
import generateMenu from './menu';

document.body.appendChild(mainPageContainer());
const mainContainer = document.getElementById('content');
mainContainer.appendChild(generateNavbar());
mainContainer.appendChild(generateHomepage());


  const navHomeButton = document.getElementById('navHomepageButton');
  const navMenuButton = document.getElementById('navMenuButton');
  const navAboutButton = document.getElementById('navAboutButton');

  let navLinks = [navHomeButton, navMenuButton, navAboutButton];

for (let i = 0; i < navLinks.length; i++) {
  // eslint-disable-next-line no-loop-func
  navLinks[i].addEventListener('click', (event) => {
    const identifier = navLinks[i].id;
    if (identifier === 'navHomepageButton') {
      mainContainer.removeChild(mainContainer.lastChild);
      mainContainer.appendChild(generateHomepage());
    }
    if (identifier === 'navMenuButton') {
      mainContainer.removeChild(mainContainer.lastChild);
      mainContainer.appendChild(generateMenu());
    }
    if (identifier === 'navAboutButton') {
      mainContainer.removeChild(mainContainer.lastChild);
      mainContainer.appendChild(generateAbout());
    }
  });
}
