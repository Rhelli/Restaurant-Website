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

// INITIALIZE PAGE CONTAINER AND DEFAULT CONTENTS
(function() {
  document.body.appendChild(mainPageContainer());
  const mainContainer = document.getElementById('content');
  mainContainer.appendChild(generateNavbar());
  mainContainer.appendChild(generateHomepage());
}());

// DEFINE NAV TABS & ARRAY
const mainContainer = document.getElementById('content');
const navHomeButton = document.getElementById('navHomepageButton');
const navMenuButton = document.getElementById('navMenuButton');
const navAboutButton = document.getElementById('navAboutButton');
const navLinks = [navHomeButton, navMenuButton, navAboutButton];

// DEFINE TAB SWAPPING & ANIMATION BEHAVIOUR
const pageSwapHandle = (page) => {
  const isolatedPageName = page.slice(3).split('').reverse().slice(6).reverse().join('').toLowerCase();
  if (mainContainer.lastChild !== `${isolatedPageName}Container`) {
    if (mainContainer.lastChild.id === 'menuContainer') {
      const currentPage = mainContainer.lastChild;
      currentPage.classList.remove('slide-in-right');
      currentPage.classList.add('slide-out-right');
    } else {
      const currentPage = mainContainer.lastChild;
      currentPage.classList.remove('slide-in-top');
      currentPage.classList.add('slide-out-top');
    }
    if (isolatedPageName === 'homepage') {
      setTimeout(() => {
        mainContainer.removeChild(mainContainer.lastChild);
        mainContainer.appendChild(generateHomepage());
      }, 400);
    }
    if (isolatedPageName === 'menu') {
      setTimeout(() => {
        mainContainer.removeChild(mainContainer.lastChild);
        mainContainer.appendChild(generateMenu());
      }, 400);
    }
    if (isolatedPageName === 'about') {
      setTimeout(() => {
        mainContainer.removeChild(mainContainer.lastChild);
        mainContainer.appendChild(generateAbout());
      }, 400);
    }
  }
};

// ADD TABS EVENT LISTENERS
(function() {
  for (let i = 0; i < navLinks.length; i++) {
    // eslint-disable-next-line no-loop-func
    navLinks[i].addEventListener('click', (event) => {
      const identifier = navLinks[i].id;
      pageSwapHandle(identifier);
    });
  }
}());