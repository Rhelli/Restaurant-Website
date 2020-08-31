export default function htmlGenerator(tag, className, idName = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  if (idName) element.id = idName;
  return element;
}

const textGen = (tag, text) => {
  const element = document.createElement(tag);
  element.innerHTML = text;
  return element;
};

const imgGen = (tag, className, src, idName = false) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.src = src;
  return element;
};

const sequentialAppend = (parent, array) => {
  const element = array;
  for (let i = 0, l = array.length; i < l; i++) {
    parent.appendChild(array[i]);
  }
  return array;
};

const spaceParse = (text, symbol = null) => {
  const arr = text.split('');
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === '#' || arr[i] === symbol) {
      arr[i] = ' ';
    }
  }
  return arr.join('');
};

const subMenuGen = (foodType, containerTitleText, unparsedFoodNames, unparsedFoodDescriptions, pricesArray) => {
  // CREATE CONTAINER, CAPITALISE FOOD TYPE AND APPEND IT TO THE CONTAINER
  const mainContainer = htmlGenerator('div', `${foodType}-container`, `${foodType}Container`);
  const capitalisedTitle = containerTitleText.charAt(0).toUpperCase() + containerTitleText.slice(1);
  const containerTitle = textGen('h2', `•&nbsp;${capitalisedTitle}`);
  mainContainer.appendChild(containerTitle);

  // PARSE FOOD NAMES ARRAY
  const foodNames = () => {
    const foodNames = [];

    for (let i = 0; i < unparsedFoodNames.length; i++) {
      let parsedFoodName = spaceParse(unparsedFoodNames[i], '*');
      foodNames.push(parsedFoodName);
    }
    return foodNames;
  };

  // GENERATE AND PARSE FOOD DESCRIPTIONS
  const foodDescriptions = () => {
    const foodDescriptions = [];

    for (let i = 0; i < unparsedFoodDescriptions.length; i++) {
      let parsedFoodDescription = spaceParse(unparsedFoodDescriptions[i], '*');
      foodDescriptions.push(parsedFoodDescription);
    }
    return foodDescriptions;
  };

  // BUILD SUB-MENU
  const menuBuilder = () => {
    let foodNameArray = foodNames();
    let foodDescriptionArray = foodDescriptions();

    for (let i = 0; i < foodNameArray.length; i++) {
      let row = htmlGenerator('div', `${foodType}-row`, `${foodType}Row`);
      let foodItem = htmlGenerator('div', `${foodType}-${i}`, `${foodType}${i}`);
      let foodText = htmlGenerator('div', `${foodType}-text-${i}`, `${foodType}Text${i}`);
      let foodImage = htmlGenerator('div', `${foodType}-image-${i}`, `${foodType}Image${i}`);
      let foodTitle = textGen('h4', foodNameArray[i]);
      let foodDescription = textGen('p', foodDescriptionArray[i]);
      let foodPrice = textGen('p', `${pricesArray[i]}`);
      let button = htmlGenerator('button', 'add-to-order-button', 'addToOrderButton');
      let addToOrder = spaceParse('Add*to*order<i*class="fas*fa-shopping-basket"></i*class=>', '*');
      let buttonText = textGen('p', addToOrder);
      button.appendChild(buttonText);
      foodText.append(foodTitle, foodDescription, foodPrice, button);

      foodText.classList.add(`${foodType}`);
      foodImage.classList.add(`${foodType}-image`);
      row.append(foodText, foodImage);
      mainContainer.appendChild(row);
    }

    return mainContainer;
  };

  return menuBuilder();
};

const textMenuGen = (drinkType, drinkNames, drinkPrices) => {
  const drinksContainer = htmlGenerator('div', `${drinkType}-container`, `${drinkType}Container`);
  const capitalisedDrinkType = drinkType.charAt(0).toUpperCase() + drinkType.slice(1);
  const drinksSubtitle = textGen('h5', spaceParse(`${capitalisedDrinkType}`, '*'));
  const menuBlock = htmlGenerator('div', `${drinkType}-drinks-menu-block`, `${drinkType}DrinksMenuBlock`);
  drinksContainer.appendChild(drinksSubtitle);
  for (let i = 0; i < drinkNames.length; i++) {
    let container = htmlGenerator('div', 'menu-item', 'menuItem');
    let element = textGen('p', spaceParse(`${drinkNames[i]}*-*<em>£${drinkPrices[i]}</em>`, '*'));
    const buttonText = textGen('p', spaceParse('Add*to*order&nbsp;<i*class="fas*fa-shopping-basket"></i*class=>', '*'));
    let button = htmlGenerator('button', 'drink-button', `${drinkNames[i]}-button`);
    button.appendChild(buttonText);
    container.append(element, button);
    drinksContainer.appendChild(container);
  }
  drinksContainer.classList.add('menu-block');
  return drinksContainer;
};

export { textGen, spaceParse, htmlGenerator, imgGen, sequentialAppend, subMenuGen, textMenuGen };