import * as generator from './generator';

export default function generateNavbar() {
  // CREATE NAV CONTAINER
  const navbarContainer = generator.htmlGenerator('div', 'navbar-container', 'navbarContainer');

  // CREATE LOGO CONTAINER
  const logoContainerGen = () => {
    const logoContainer = generator.htmlGenerator('div', 'nav-logo-container');
    const logo = generator.imgGen('img', 'nav-logo', '../src/assets/img/icon.png');
    const text = generator.spaceParse('The/Earl/Of/Sandwich', '/');
    const logoText = generator.textGen('h4', text);
    logoContainer.appendChild(logo);
    logoContainer.appendChild(logoText);
    return logoContainer;
  };

  // CREATE NAV TABS
  const navTabGen = () => {
    const tabClass = ['menu-tab', 'delivery-tab', 'about-tab'];
    const tabName = ['Menu', 'Delivery', 'About Us'];
    const tabArray = [];

    for (let i = 0; i < 3; i++) {
      const div = generator.htmlGenerator('div', tabClass[i]);
      const tabText = generator.textGen('h3', tabName[i]);
      div.appendChild(tabText);
      tabArray.push(div);
    }
    return tabArray;
  };

  // ASSEMBLE AND BUILD THE NAVBAR
  const navbarBuilder = () => {
    navbarContainer.appendChild(logoContainerGen());
    generator.sequentialAppend(navbarContainer, navTabGen());
    return navbarContainer;
  };

  return navbarBuilder();
}