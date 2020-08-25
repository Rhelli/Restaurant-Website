export default function generateNavbar() {
  let navbarContainer = document.createElement('div');

  let logoContainer = document.createElement('div');
  logoContainer.classList.add('nav-logo-container');
  let logo = document.createElement('img');
  logo.classList.add('nav-logo');
  logo.src = '../src/assets/img/icon.png';
  logoContainer.appendChild(logo);
  navbarContainer.appendChild(logoContainer);

  navbarContainer.id = 'navbarContainer';
  navbarContainer.classList.add('navbar-container');

  let tabClass = ['menu-tab', 'delivery-tab', 'about-tab'];
  let tabName = ['Menu', 'Delivery', 'About Us'];

  for (let i = 0; i < 3; i++) {
    let div = document.createElement('div');
    div.classList.add(tabClass[i]);
    let tabText = document.createElement('h3');
    tabText.innerHTML = tabName[i];
    div.appendChild(tabText);
    navbarContainer.appendChild(div);
  }
  return navbarContainer;
}