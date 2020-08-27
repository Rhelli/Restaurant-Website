import * as generator from './generator';
import generateNavbar from './nav';
import generateHomepage from './home';
import generateAbout from './about';

export default function mainPageContainer() {
  // ASSEMBLE HOMEPAGE ELEMENTS
  const mainContainer = generator.htmlGenerator('div', 'main-container', 'content');
  mainContainer.appendChild(generateNavbar());
  mainContainer.appendChild(generateHomepage());

  // BUILD DEFAULT HOMEPAGE / BUILD NEW PAGE ON CHANGE
  const mainPageBuilder = (page) => {
    if (page) {
      const changePage = mainContainer;
      changePage.removeChild(changePage.lastChild);
      changePage.appendChild(page);
      return changePage;
    }
    return mainContainer;
  };

  return mainPageBuilder();
}
