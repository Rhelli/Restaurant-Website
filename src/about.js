import * as generator from './generator';

export default function generateAbout() {
  //CREATE THE ABOUT PAGE CONTAINER
  const aboutContainer = generator.htmlGenerator('div', 'about-container', 'aboutContainer');
  aboutContainer.classList.add('slide-in-top');

  // CREATE THE ABOUT PAGE CONTENTS INNER CONTAINER AND CHILDREN
  const aboutContentsContainerGen = () => {
    const aboutContentContainer = generator.htmlGenerator('div', 'about-contents-container', 'aboutContentContainer');

    const aboutTextContainer = generator.htmlGenerator('div', 'about-text-container', 'aboutTextContainer');
    const contentTabTitle = generator.textGen('h3', 'About Us');
    const aboutContentTitleText = generator.spaceParse('The/Original/-/Since/1762.', '/');
    const aboutContentTitle = generator.textGen('h1', aboutContentTitleText);
    const aboutContentParagraphText = generator.spaceParse("Here*at*The*Earl of Sandwich,*we*have*been*making*sandwiches*for*over*250*years.*Through*time,*passing*and*hard*work,*we*have*perfected*the*food*cuisine*that*changed*lunchtime*for*the*world*-*the*humble*sandwich.<br/><br/>Founded*in*1764,*by*the*Sandwich*family*shortly*after*the*Earl's*culinary*invention,*the*original*<i>Sandwiche</i>*shop*still*stands*today.", '*');
    const aboutContentParagraph = generator.textGen('p', aboutContentParagraphText);

    const aboutButton = generator.htmlGenerator('button', 'about-button', 'aboutButton');
    const buttonInnerText = generator.spaceParse('Discover*Our*Menu<i*class="fas*fa-arrow-circle-right"></i*class=>', '*');
    const buttonText = generator.textGen('p', buttonInnerText);
    aboutButton.appendChild(buttonText);

    const aboutContentImage = generator.htmlGenerator('div', 'about-image-container');

    const aboutContents = [contentTabTitle, aboutContentTitle, aboutContentParagraph, aboutButton];
    generator.sequentialAppend(aboutTextContainer, aboutContents);
    aboutContentContainer.appendChild(aboutTextContainer);
    aboutContentContainer.appendChild(aboutContentImage);

    return aboutContentContainer;
  };

  const aboutPageBuilder = () => {
    aboutContainer.appendChild(aboutContentsContainerGen());
    return aboutContainer;
  };

  return aboutPageBuilder();
}