/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Yar Pirate Ipsum',
    date: 'Aug 6th, 2019',
    firstParagraph: `Pieces of Eight jury mast aye bowsprit draft barque no prey, no pay draught prow sutler. Plate Fleet jury mast barque cable scallywag mizzenmast haul wind heave to cutlass broadside. Gold Road brigantine ye bowsprit Davy Jones' Locker starboard reef sails yo-ho-ho Spanish Main rum. `,

    secondParagraph: `Spirits swing the lead yo-ho-ho reef belaying pin bowsprit Yellow Jack matey shrouds scurvy. Keelhaul topmast Spanish Main bilge rat fore jury mast grog blossom stern Sail ho cable. Landlubber or just lubber pirate quarterdeck gibbet driver bilge water code of conduct line prow belay. `,

    thirdParagraph: `Rope's end bounty man-of-war Shiver me timbers wherry scourge of the seven seas aye me topgallant Sink me. Yo-ho-ho capstan weigh anchor hearties hogshead quarterdeck killick mutiny clap of thunder galleon. Shiver me timbers topsail spyglass matey gally pirate rope's end avast Nelsons folly gunwalls.`
  },
  {
    title: 'Cupcake Ipsum',
    date: 'Aug 10th, 2019',
    firstParagraph: `Brownie bear claw candy canes topping liquorice. Tiramisu gingerbread cookie brownie. Jelly beans tart sweet roll gummies brownie danish. Muffin sugar plum cheesecake carrot cake candy canes. Croissant marzipan chocolate. Cake marshmallow marzipan caramels. Toffee brownie tootsie roll wafer candy canes muffin gingerbread cheesecake. Jujubes oat cake fruitcake topping. Tart pie sweet roll. Pie fruitcake carrot cake macaroon pudding pastry biscuit tart. Sweet sweet roll pudding sugar plum jujubes gummi bears. Chocolate sugar plum gummi bears.`,

    secondParagraph: `Sugar plum gingerbread lollipop halvah. Cake candy toffee donut donut jelly-o chupa chups. Toffee jelly-o dragée tart pie sweet roll. Danish lollipop fruitcake chocolate cake. Gummi bears topping gingerbread danish muffin dessert ice cream lollipop. Marzipan sugar plum caramels danish jujubes sesame snaps. Caramels icing biscuit fruitcake pudding. Sugar plum danish muffin. Caramels pie croissant danish biscuit croissant biscuit jelly beans. Tootsie roll tiramisu jelly beans jujubes pastry lollipop. Pastry icing ice cream cupcake jelly-o. Toffee candy cotton candy macaroon oat cake macaroon gummies bear claw.`,

    thirdParagraph: `Jujubes sesame snaps ice cream macaroon brownie candy cookie lollipop. Candy canes jelly-o sesame snaps biscuit caramels dragée muffin brownie biscuit. Chocolate bar jelly beans biscuit. Chocolate pudding cookie. Cake donut jujubes. Macaroon lollipop topping. Wafer biscuit candy canes marzipan lemon drops. Cotton candy sesame snaps toffee brownie oat cake halvah gingerbread. Halvah croissant ice cream muffin candy canes icing dessert biscuit croissant. Caramels jelly beans cheesecake carrot cake lollipop pudding biscuit sweet roll. Jelly-o tootsie roll tart jelly gummi bears halvah tiramisu halvah. Candy canes marshmallow candy gummies.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/

const article = document.querySelector('.articles');

data.forEach(x => {
  article.appendChild(createArticle(x.title, x.date, x.firstParagraph, x.secondParagraph, x.thirdParagraph))
});

function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph) {

  //defining the elements
  const article = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('date');
  const paragraphOne = document.createElement('p');
  const paragraphTwo = document.createElement('p');
  const paragraphThree = document.createElement('p');
  const button = document.createElement('span');

  //set structure

  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(paragraphOne);
  article.appendChild(paragraphTwo);
  article.appendChild(paragraphThree);
  article.appendChild(button);

  //set class names
  article.classList.add('article');
  articleTitle.classList.add('h2');
  articleDate.classList.add('date');
  paragraphOne.classList.add('firstParagraph');
  paragraphTwo.classList.add('secondParagraph');
  paragraphThree.classList.add('thirdParagraph');
  button.classList.add('expandButton');

  //set text content
  articleTitle.textContent = title;
  articleDate.textContent = date;
  paragraphOne.textContent = firstParagraph;
  paragraphTwo.textContent = secondParagraph;
  paragraphThree.textContent = thirdParagraph;
  button.textContent = "Click to Expand";

  button.addEventListener("click", () =>{
    article.classList.toggle('article-open');
  })
  
  return article;

}

article.appendChild(createArticle(`This is not the article you are looking for`, `Aug 15th, 2019`, 'p1 is the best paragraph', `p2 is the second worst paragraph`, `p3 is just right`));

