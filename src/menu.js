import * as generator from './generator';

export default function generateMenu() {
  const menuContainer = generator.htmlGenerator('div', 'menu-container', 'menuContainer');
  const menuTitle = generator.textGen('h1', 'Menu');

  // CREATE THE MENU SHORTCUTS/LINKS
  const menuShortcuts = () => {
    const menuShortcutsContainer = generator.htmlGenerator('div', 'menu-shortcuts', 'menuShortcuts');
    const menuShortcutsArray = ['•&nbsp;Sandwiches', '•&nbsp;Sides', '•&nbsp;Desserts', '•&nbsp;Drinks'];

    for (let i = 0; i < menuShortcutsArray.length; i++) {
      let element = generator.htmlGenerator('div', `menu-shortcut-${i}`, `menuShortcut${i}`);
      let text = generator.textGen('p', `${menuShortcutsArray[i]}`);
      element.appendChild(text);
      menuShortcutsContainer.appendChild(element);
    }
    return menuShortcutsContainer;
  };

  const sandwichMenu = () => {
    const unparsedSandwichNames = ["Chicken*Salad*&*'Slaw*", "Croque*Monsieur*Deluxe", "Vegan*Power*Wrap", "Shooter's*Sandwich", "B.A.B.", "Fully*Loaded*Tacos", "Crispy*Chicken*Panini", "Croissant*Au*Meditarrean"];
    const unparsedSandwichDescriptions = [
      "Responsibly*sourced,*tender*free*range*chicken*breast*seared*to*perfection.*It's*accompanied*by*our*homemade*paprika*and*sweet*chilli*sauce,*sun-dried*tomatoes*and*fresh*iceberg*lettuce.*Served*with*fries.",
      "Cooked*in*an*extra*light*garlic*and*sage*butter*and*dusted*with*parmesan*and*gran*padano.*Fresh*roma*tomatoes,*smoked*wiltshire*ham,*smoked*salami*and*smoked*cheddar.*Served*with*fries,*ketchup*and*deconstructed*'slaw.",
      "For*all*you*lean,*green*machines*out*there.*Curled*leaf*lettuce,*perfectly*ripened*avocado,*watercress,*our*homemade*vegan*garlic*and*herb*dip*and*a*dollop*of*dairy-free*mayo.*Served*in*a*toasty*warm*pitta.",
      "Our*<strong>world*famous</strong>*Shooter's*Sandwich*with*nine*layers*of*heaven.*Smoked*cheddar,*chorizo,*streaky*bacon,*Sicilian*salami,*romaine*gem*lettuce,*gouda,*honey*roasted*ham,*seasoned*sirloin*strips,*our*homemade*sun-dried*tomato*and*pesto*sauce*and*sliced.*Yum.",
      "Tenderloin*beef*seared*in*a*oregano,*paprika,*chorizo*and*butter*reduction.*Served*with*chopped*avocado,*a*pink*cabbage*and*beetroot*'slaw,*watercress*and*steamed*spinach.*Served*with*parboiled,*salted*and*roasted*new*potatoes*with*fresh*thyme.",
      "Hard*shell*tacos*-*the*American*way!*Homemade*refried*beans,*chorizo,*crispy*panchetta,*authentic*Oaxacan*cheese,*coriander,*tomatoes,*sour*cream*and*our*homemade*chilli*sauce,*available*in*light,*medium*and*'flamin*hot.",
      "The*staff*favourite.*Free*range*chicken*breast*strips*double*deep*fried*for*a*crispy*breaded*coating.*Combined*with*spring*onion,*gouda*and*wrapped*in*a*delicate*and*crispy*flatbread*panini.",
      "The*ligher*choice.*Our*homemade*viennoiserie*based*croissant*is*filled*with*corned*beef,*sweet*roma*tomatoes,*curled*lettuce,*a*potato*and*fat-reduced*mozzarella*omelette*and*a*spread*of*homemade*light*mayo."
    ];
    const sandwichPrices = ['6.75', '6.00', '5.50', '8.00', '6.75', '7.00', '5.50', '4.75'];

    return generator.subMenuGen('sandwich', 'Sandwiches', unparsedSandwichNames, unparsedSandwichDescriptions, sandwichPrices);
  };

  // CREATE THE SIDES MENU
  const sidesMenu = () => {
    const unparsedSidesNames = ["Sweet*'N*Fresh*Side*Salad", "Sticky*Korean*BBQ*Wings", "Power*Up*Side*Salad", "Kedgeree*Salad", "Triple*Cooked*Fries", "Triple*Cooked*Sweet*Potato*Fries"];
    const unparsedSidesDescriptions = [
      "A*sumptuiously*sweet*and*seasonal*side*salad*for*you.*Delectable*Fuji*apple*slices,*curled*lettuce,*spring*onions,*white*onion*and*fresh*cucumber.*A*perfect*accompaniment*to*spicy*or*intense*dishes.",
      "Our*very*own*recipe*developed*in*house.*Rice*wine,*soy*sauce*and*our*homemade*chilli*sauce*coat*the*outside*of*crispy*tender*chicken*wings.*Cooked*to*perfection,*they*make*a*great*side*for*larger*groups*to*share.*Optionally*served*with*a*choice*of*sour*cream*&*chive,*blue*cheese*or*our*'flamin*hot*chilli*dip.",
      "Our*most*nutritious*and*powerful*salad*yet.*Fresh*coriander,*avocado,*sliced*chillis,*peanuts,*button*mushrooms,*fresh*cucumber,*tomatoes*and*black*sesame*seeds.*Served*with*a*wedge*of*lemon*and*our*Seven*Islands*dressing.",
      "Perfect*for*those*cold*winter*days.*A*head*chef*in-house*invention,*our*Kedgeree*salad*ditches*the*rice*for*a*lighter*approach,*with*cherry*tomatoes,*a*mixed*leaf*salad,*parmesan*slices*and*wild*caught*<strong>Lock*Fyne™</strong>*salmon.*Served*with*a*balsamic*glaze.",
      "Not*once.*Not*twice.*Triple*cooked*-*for*that*ultimate*crunch.*Fluffy*soft*potato*in*the*middle*and*a*crunchy*exterior.*Generously*seasoned*with*salt,*pepper*and*cooked*with*thyme*(and*love).*Served*with*our*homemade*mayo*and*ketchup.",
      "For*all*the*health*aficionados*out*there*-*we've*got*you*covered.*Our*sweet*potato*fries*and*triple*cooked*with*paprika*to*give*them*an*extra*kick.*Served*with*our*sour*cream*and*chive*dip."
    ];

    const sidesPrices = ['3.15', '4.30', '4.00', '4.75', '2.00', '2.30'];

    return generator.subMenuGen('sides', 'Sides', unparsedSidesNames, unparsedSidesDescriptions, sidesPrices);
  };

  // CREATE THE DESSERTS MENU
  const dessertMenu = () => {
    const unparsedDessertNames = [
      "Autie*Ellie's*Double*Dark*Chocolate*&*Peanut*Cookies",
      "English*Roll",
      "Vanilla,*Chcocolate*&*Rocky*Road*Ice*Cream",
      "Homemade*Macarons"
    ];
    const unparsedDessertDescriptions = [
      "Yet*another*homemade*hit*-*our*cookies*are*made*at*routine*times*throughout*the*day*to*ensure*they*are*as*warm,*fresh*and*soft*as*possible.*With*a*butter*and*peanut*butter*base,*70%*Lindt*dark*chocolate,*and*unsalted*peanuts,*these*cookies*are*sure*to*have*you*coming*back*for*more!*Comes*in*servings*of*6*cookies.",
      "Our*take*on*a*Austrian*classic.*Soft,*doughey*cinnamon*and*carrot*infused*dough*with*a*sweet*vanilla*and*buttercream*icing.*Perfect*for*those*chilly*winter*afternoons*with*a*warm*drink.",
      "Homemade*rocky*road*with*pecans,*mashmallows,*infused*into*our*40%*dark*chocolate*/*60%*white*milk*chocolate*ice-cream.*Comes*in*a*standard*2*scoop*serving*with*an*optional*extra*scoop*for*£1.*Cones*£1.50.",
      "Our*Macarons*are*made*fresh*daily*-*so*no*stale*Macarons*for*anyone*here!*Flavour*choices*include*Pineapple*Jam*(Yellow),*Lavendar*&*Honey*Marscapone*(Purple),*Blueberry*Jam*Cheesecake*(Blue)*and*Almond-Raspberry*(Red). Come in servings of fours. Additional Macarons are £1.50."
    ];
    const dessertPrices = ['4.50', '5.00', '3.75', '4.00'];

    return generator.subMenuGen('desserts', 'Desserts', unparsedDessertNames, unparsedDessertDescriptions, dessertPrices);
  };

  const drinksMenu = () => {
    const drinksContainer = generator.htmlGenerator('div', 'drinks-container', 'drinksContainer');
    const drinksContainerSubtitle = generator.textGen('h2', '•&nbsp;Drinks');
    const drinksSubContainer = generator.htmlGenerator('div', 'drinks-subcontainer', 'drinksSubContainer');

    const softDrinksNames = ['Coca-Cola', 'San*Peligrino', 'Pepsi', 'Fanta', 'Sprite', 'Orangina', 'Lipton*Iced*Tea', 'Dr*Pepper'];
    const softDrinksPrices = ['1', '1.20', '1', '1', '1', '1', '1.20', '1.00', '1'];
    const teasDrinksNames = ['Breakfast', '*Earl*Grey', 'Gunpowder*Green*Tea', 'Matcha*Green*Tea', 'Oolong*Tea', '*Yogi*Tea'];
    const teasDrinksPrices = ['1', '1', '1.20', '1.60', '1.30', '1.40'];
    const coffeesDrinksNames = ['Americano', 'Cappuccino', 'Flat*White', 'Latte', 'Cortado', 'Machiatto', 'Ristretto', 'Frappé', 'Cold*Brew'];
    const coffeesDrinksPrices = ['1', '1.40', '1.20', '1.50', '1.10', '1.20', '1', '1.80', '1.20'];
    const beersDrinksNames = ['Peroni', 'Carling', 'Frontier', 'Amstel', 'Sierra*Nevada', 'Punk*IPA'];
    const beersDrinksPrices = ['5.25', '4.50', '5.25', '4.60', '5.65', '5.50'];
    const wineDrinksNames = ['House*White*Wine*150mL', 'House*Red*Wine*150mL'];
    const wineDrinksPrices = ['4.75', '4.75'];

    const softDrinksMenu = generator.textMenuGen('soft', softDrinksNames, softDrinksPrices);
    const teasDrinksMenu = generator.textMenuGen('teas', teasDrinksNames, teasDrinksPrices);
    const coffeesDrinksMenu = generator.textMenuGen('coffees', coffeesDrinksNames, coffeesDrinksPrices);
    const beersDrinksMenu = generator.textMenuGen('beers', beersDrinksNames, beersDrinksPrices);
    const wineDrinksMenu = generator.textMenuGen('wines', wineDrinksNames, wineDrinksPrices);

    drinksSubContainer.append(softDrinksMenu, teasDrinksMenu, coffeesDrinksMenu, beersDrinksMenu, wineDrinksMenu);
    drinksContainer.append(drinksContainerSubtitle, drinksSubContainer);
    return drinksContainer;
  };


  const menuBuilder = () => {
    menuContainer.append(menuShortcuts(), menuTitle, sandwichMenu(), sidesMenu(), dessertMenu(), drinksMenu());
    return menuContainer;
  };

  return menuBuilder();
}