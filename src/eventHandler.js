import generateMenu from './menu';

export default function pageSwap(page) {
  const mainContainer = document.getElementById('content')
  const currentPage = mainContainer.lastChild;
  currentPage.classList.remove('slide-in-top');
  currentPage.classList.add('slide-out-top');
  setTimeout(() => {
    mainContainer.removeChild(mainContainer.lastChild);
    mainContainer.appendChild(generateMenu());
  }, 400);
}