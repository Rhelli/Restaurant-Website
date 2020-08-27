import * as generator from './generator';

export default function generateAbout() {
  //CREATE THE ABOUT PAGE CONTAINER
  const aboutContainer = generator.htmlGenerator('div', 'about-container', 'aboutContainer');
  
  // CREATE THE ABOUT PAGE CONTENTS INNER CONTAINER AND CHILDREN
  const aboutContentsContainerGen = () => {
    const aboutContentContainer = generator.htmlGenerator('div', 'about-contents-container', 'aboutContentContainer');

    const contentTabTitle = generator.textGen('h3', 'About Us');
    const aboutContentTitleText = generator.spaceParse('The/Original/Since/1762.', '/');
    const aboutContentTitle = generator.textGen('h1', aboutContentTitleText);
    const aboutContentParagraphText = generator.spaceParse("Here/at/The/Earl of Sandwich,/we/have/been/making/sandwiches/for/over/250/years./Through/time,/passing/and/hard/work,/we/have/perfected/the/food/cuisine/that/changed/lunchtime/for/the/world/-/the/humble/sandwich.\n\nFounded/in/1764,/by/the/Sandwich/family/shortly/after/the/Earl's/culinary/invention,/the/original/<i>Sandwiche</i>/shop/still/stands/today.", '/');
    const aboutContentParagraph = generator.textGen('p', aboutContentParagraphText);

    const aboutButton = generator.htmlGenerator('button', 'about-button', 'aboutButton');

    const aboutContents = [contentTabTitle, aboutContentTitle, aboutContentParagraph, aboutButton];
    generator.sequentialAppend(aboutContentContainer, aboutContents);

    return aboutContentContainer;
  };

  const aboutPageBuilder = () => {
    aboutContainer.appendChild(aboutContentsContainerGen());
    return aboutContainer;
  };

  return aboutPageBuilder();
}