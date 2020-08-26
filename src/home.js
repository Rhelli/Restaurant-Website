import * as generator from './generator';

export default function homepageLandingContainer() {
  const landingContainer = generator.htmlGenerator('div', 'landing-container', 'landingContainer');

  // CREATE THE LANDING TTITLE
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
    const landingSearchButton = generator.htmlGenerator('button', 'landing-search-button', 'landingSearchButton');
    const buttonText = generator.spaceParse('Check/Delivery', '/');
    const searchButtonText = generator.textGen('p', buttonText);
    landingSearchButton.appendChild(searchButtonText);
    landingSearchContainer.appendChild(landingSearchBar);
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
