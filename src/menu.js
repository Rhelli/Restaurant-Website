import * as generator from './generator';

export default function generateMenu() {
  const menuContainer = generator.htmlGenerator('div', 'menu-container', 'menuContainer');

  const sandwiches = () => {
    // CREATE THE SANDWICH CONTAINER
    const sandwichContainer = generator.htmlGenerator('div', 'sandwich-container', 'sandwichContainer');

    // GENERATE SANDWICH NAMES. YUM.
    const makeSandwichNames = () => {
      const sandwichNames = [];
      const unparsedSandwichNames = ["Chicken*'Slaw*&*Salad", "Croque*Monsieur*Deluxe", "Vegan*Power*Wrap", "Shooter's*Sandwich", "B.A.B.", "Fully*Loaded*Tacos", "Crispy*Chicken*Panini", "Croissant*Au*Meditarrean"];

      for (let i = 0; i < unparsedSandwichNames.length; i++) {
        let parsedSandwichName = generator.spaceParse(unparsedSandwichNames[i], '*');
        sandwichNames.push(sandwichNames);
      }
      return sandwichNames;
    };

    const makeSandwichDescriptions = () => {
      const sandwichDescriptions = [];
      const unparsedSandwichDescriptions = [
        "Responsibly sourced, tender free range chicken breast seared to perfection. It's accompanied by our homemade paprika and sweet chilli sauce, sun-dried tomatoes and fresh iceberg lettuce. Served with fries.",
        "Cooked in an extra light garlic and sage butter and dusted with parmesan and gran padano. Fresh roma tomatoes, smoked wiltshire ham, smoked salami and smoked chedder. Served with fries, ketchup and deconstructed 'slaw.",
        "For all you lean, green machines out there. Curled leaf lettuce, perfectly ripened avocado, watercress, our homemade vegan garlic and herb dip and a dollop of dairy-free mayo. Served in a toasty warm pitta.",
        "Our world famous Shooter's Sandwich with nine layers of heaven. Smoked cheddar, chorizo, streaky bacon, Sicilian salami, romaine gem lettuce, gouda, honey roasted ham, seasoned sirloin strips, our homemade sun-dried tomato and pesto sauce and sliced. Yum.",
        "Tenderloin beef seared in a oregano, paprika, chorizo and butter reduction. Served with chopped avocado, a pink cabbage and beetroot 'slaw, watercress and steamed spinach. Served with parboiled, salted and roasted new potatoes with fresh thyme.",
        "Hard shell tacos - the American way! Homemade refried beans, chorizo, crispy panchetta, authentic Oaxacan cheese, coriander, tomatoes, sour cream and our homemade chilli sauce, available in light, medium and 'flamin hot.",
        "The staff favourite. Free range chicken breast strips double deep fried for a crispy breaded coating. Combined with spring onion, gouda and wrapped in a delicate and crispy flatbread panini.",
        "The ligher choice. Our homemade viennoiserie based croissant is filled with corned beef, sweet roma tomatoes, curled lettuce, a potato and fat-reduced mozzarella ommlette and a spread of homemade light mayo."
      ]
    }

  }
}