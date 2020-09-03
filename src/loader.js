import * as generator from './generator';

export default function mainPageContainer() {
  // ASSEMBLE HOMEPAGE ELEMENTS
  const mainContainer = generator.htmlGenerator('div', 'main-container', 'content');
  const credits = generator.htmlGenerator('div', 'credits');
  const creditsText = generator.textGen('p', generator.spaceParse('Lovingly*made*with*sandwiches*at*hand*by*Rory*Hellier.*<a*href="https://github.com/Rhelli">Come*and*find*me*on*Github</a*href=>*for*more*projects*like*this.*2020.', '*'));
  credits.appendChild(creditsText);
  mainContainer.appendChild(credits);
  return mainContainer;
}
