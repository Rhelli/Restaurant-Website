import * as generator from './generator';

export default function generateNavbar() {
  // CREATE NAV CONTAINER
  const navbarContainer = generator.htmlGenerator('div', 'navbar-container', 'navbarContainer');

  // CREATE LOGO CONTAINER
  const logoContainerGen = () => {
    const logoContainer = generator.htmlGenerator('div', 'nav-logo-container');
    const logo = generator.htmlGenerator('div', 'nav-logo');
    const text = generator.spaceParse('The/Earl/Of/Sandwich', '/');
    const logoText = generator.textGen('h4', text);
    logoText.id = 'navHomepageButton';
    logoContainer.append(logo, logoText);
    return logoContainer;
  };

  // CREATE NAV TABS
  const navTabGen = () => {
    const tabClass = ['menu-tab', 'about-tab'];
    const tabName = ['Menu', 'About Us'];
    const tabID = ['navMenuButton', 'navAboutButton'];
    const tabArray = [];

    for (let i = 0; i < tabName.length; i++) {
      const div = generator.htmlGenerator('div', tabClass[i]);
      const tabText = generator.textGen('h3', tabName[i]);
      tabText.id = `${tabID[i]}`;
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