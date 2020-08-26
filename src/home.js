import * as generator from './generator';

export default function homepageLandingContainer() {
  const landingContainer = generator.htmlGenerator('div', 'landing-container', 'landingContainer');

  const landingTitleContainer = generator.htmlGenerator('div', 'landing-title');
  const title = generator.spaceParse('The&nbsp;Earl&nbsp;Of&nbsp;Sandwich.\nThe&nbsp;Home&nbsp;Of&nbsp;Lunchtime.', '&nbsp;');
  const landingTitle = generator.textGen('h1', title);
  landingTitleContainer.appendChild(landingTitle);
  landingContainer.appendChild(landingTitleContainer);

  

  const landingButtonsContainer = generator.htmlGenerator('div', 'landing-buttons', 'landingButtons');
  for (let i = 0; i < 3; i++) {
    const socialId = ['FB', 'IG', 'TW'];
    const landingButtons = generator.htmlGenerator('div', `landing-button-${i}`, `social${socialId[i]}`);
    const landingButtonText = generator.textGen('p', `${socialId[i]}`);
    landingButtons.appendChild(landingButtonText);
    landingButtonsContainer.appendChild(landingButtons);
  }

  landingContainer.appendChild(landingButtonsContainer);
  return landingContainer;
}

