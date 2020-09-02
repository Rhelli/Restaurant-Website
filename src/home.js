import * as generator from './generator';

export default function generateHomepage() {
  const landingContainer = generator.htmlGenerator('div', 'landing-container', 'landingContainer');
  landingContainer.classList.add('slide-in-top');

  // CREATE THE LANDING TITLE
  const landingTitleGen = () => {
    const landingTitleContainer = generator.htmlGenerator('div', 'landing-title');
    const title = generator.spaceParse('The&nbsp;Earl&nbsp;Of&nbsp;Sandwich.\nThe&nbsp;Home&nbsp;Of&nbsp;Lunchtime.', '&nbsp;');
    const landingTitle = generator.textGen('h1', title);
    landingTitleContainer.appendChild(landingTitle);
    return landingTitleContainer;
  };

  // CREATE THE LANDING SEARCH BAR
  const landingSearchBarGen = () => {
    const landingSearchContainer = generator.htmlGenerator('div', 'landing-search', 'landingSearch');
    const landingSearchBar = generator.htmlGenerator('input', 'landing-search-input', 'landingSearchInput');
    const searchBarLoader = generator.htmlGenerator('div', 'loader', 'loader');
    const landingSearchButton = generator.htmlGenerator('button', 'landing-search-button', 'landingSearchButton');
    const buttonText = generator.spaceParse('Check/Delivery', '/');
    const searchButtonText = generator.textGen('p', buttonText);

    // DEFINE THE SEARCH BAR BUTTON BEHAVIOUR AND INFORMATION POP UPS
    landingSearchButton.addEventListener('click', (event) => {
      if (landingSearchBar.value !== '') {
        searchBarLoader.classList.add('spinner');
        setTimeout(() => {
          const container = generator.htmlGenerator('div', 'delivery-container', 'deliveryContainer');
          const closeDeliveryButton = generator.htmlGenerator('button', 'close-delivery-button', 'closeDeliveryButton');
          const closeDeliveryButtonText = generator.textGen('p', generator.spaceParse('<i class="fas fa-times-circle"></i>', '*'));
          closeDeliveryButton.appendChild(closeDeliveryButtonText);
          closeDeliveryButton.addEventListener('click', (event) => {
            const popUp = document.getElementById('deliveryContainer');
            landingContainer.removeChild(popUp);
          });
          const title = generator.textGen('h4', generator.spaceParse('Good*News!', '*'));
          const innerContainer = generator.htmlGenerator('div', 'delivery-text-container', 'deliveryTextContainer');
          const innerText = generator.textGen('p', generator.spaceParse("Huzzagh!*It*looks*like*you're*in*our*neighborhood!*Give*us*a*call*or*order*from*our*restaurant*online.", '*'));
          const ctoContainer = generator.htmlGenerator('div', 'cto-container', 'ctoContainer');
          const phone = generator.textGen('p', generator.spaceParse('<i*class="fas*fa-phone"></i*class=>**+44*0845*9080', '*'));
          const button = generator.htmlGenerator('button', 'delivery-button', 'deliveryButton');
          const buttonText = generator.textGen('p', generator.spaceParse('<i*class="fas*fa-utensils"></i*class=>****Order*Online', '*'));
          button.appendChild(buttonText);
          ctoContainer.append(phone, button);
          innerContainer.append(innerText, ctoContainer);
          container.append(closeDeliveryButton, title, innerContainer);
          searchBarLoader.classList.remove('spinner');
          landingContainer.appendChild(container);
        }, Math.floor(Math.random() * (3000 - 800 + 1)) + 800);
      } else {
        const failContainer = generator.htmlGenerator('div', 'delivery-error-container', 'deliveryErrorContainer');
        const closeErrorButton = generator.htmlGenerator('button', 'close-error', 'closeError');
        const closeErrorButtonText = generator.textGen('p', generator.spaceParse('<i class="fas fa-times-circle"></i>', '*'));
        closeErrorButton.appendChild(closeErrorButtonText);
        closeErrorButton.addEventListener('click', (event) => {
          const errorPopUp = document.getElementById('deliveryErrorContainer');
          landingContainer.removeChild(errorPopUp);
        });
        const errorTitle = generator.textGen('h4', 'Oops!');
        const errorText = generator.textGen('p', generator.spaceParse("It looks like you didn't search for a location for delivery! Please try again.", '*'));
        failContainer.append(closeErrorButton, errorTitle, errorText);
        landingContainer.appendChild(failContainer);
      }
    });
    landingSearchButton.appendChild(searchButtonText);
    landingSearchContainer.appendChild(landingSearchBar);
    landingSearchContainer.appendChild(searchBarLoader);
    landingSearchContainer.appendChild(landingSearchButton);
    return landingSearchContainer;
  };

  // CREATE THE LANDING SOCIAL MEDIA BUTTONS
  const landingSocialButtonsGen = () => {
    const landingButtonsContainer = generator.htmlGenerator('div', 'landing-buttons', 'landingButtons');
    for (let i = 0; i < 3; i++) {
      const socialId = ['FB', 'IG', 'TW'];
      const socialIcons = ['<i class="fab fa-facebook-f"></i>', '<i class="fab fa-instagram"></i>', '<i class="fab fa-twitter"></i>']
      const landingButtons = generator.htmlGenerator('div', `landing-button-${i}`, `social${socialId[i]}`);
      const landingButtonText = generator.textGen('p', `${socialIcons[i]} ${socialId[i]}`);
      landingButtons.appendChild(landingButtonText);
      landingButtonsContainer.appendChild(landingButtons);
    }
    return landingButtonsContainer;
  };

  // ASSEMBLE ALL PAGE ELEMENTS AND BUILD LANDING PAGE
  const landingContainerBuilder = () => {
    landingContainer.appendChild(landingTitleGen());
    landingContainer.appendChild(landingSearchBarGen());
    landingContainer.appendChild(landingSocialButtonsGen());
    return landingContainer;
  };

  return landingContainerBuilder();
}
