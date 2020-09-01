import * as generator from './generator';

export default function mainPageContainer() {
  // ASSEMBLE HOMEPAGE ELEMENTS
  const mainContainer = generator.htmlGenerator('div', 'main-container', 'content');
  return mainContainer;
}
