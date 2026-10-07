(function(root){
const categories=['General Knowledge','Lord of the Rings','Game of Thrones','Disney','Video Games','Science','Harry Potter','Manchester United','Marvel','DC','Pokémon','Marine Biology','Cats','Animals','Films','TV Shows','Stranger Things','Big Bang Theory','Friends','House of the Dragon','The Walking Dead'];
const raw={
'General Knowledge':[
['What is the capital of Australia?','Canberra','Sydney','Melbourne','Perth'],['Which planet is closest to the Sun?','Mercury','Venus','Mars','Earth'],['What currency is used in Japan?','Yen','Won','Yuan','Rupee'],['Which country is home to the city of Marrakech?','Morocco','Egypt','Turkey','Tunisia'],['How many sides does a hexagon have?','Six','Five','Seven','Eight'],['Which ocean is the largest?','Pacific','Atlantic','Indian','Arctic'],['Who painted the Mona Lisa?','Leonardo da Vinci','Michelangelo','Vincent van Gogh','Pablo Picasso'],['Which language is primarily spoken in Brazil?','Portuguese','Spanish','French','Italian'],['What is the smallest prime number?','2','0','1','3'],['Which instrument has keys, pedals and strings?','Piano','Trumpet','Clarinet','Flute']],
'Lord of the Rings':[
['Who carries the One Ring to Mount Doom?','Frodo Baggins','Bilbo Baggins','Merry Brandybuck','Peregrin Took'],['What is the name of Frodo’s loyal companion?','Samwise Gamgee','Gimli','Boromir','Éomer'],['Who forged the One Ring?','Sauron','Saruman','Gandalf','Elrond'],['What is the name of the inn in Bree?','The Prancing Pony','The Green Dragon','The Golden Perch','The Ivy Bush'],['Which creature does Gandalf confront in Moria?','A Balrog','A dragon','A troll king','A giant spider'],['What is Aragorn’s reforged sword called?','Andúril','Sting','Glamdring','Orcrist'],['Who is the ruler of Rohan when the Fellowship arrives?','Théoden','Denethor','Elrond','Thranduil'],['What was Gollum’s original name?','Sméagol','Déagol','Gríma','Radagast'],['Which member of the Fellowship is an elf?','Legolas','Gimli','Boromir','Aragorn'],['Where is the One Ring destroyed?','Mount Doom','Isengard','Helm’s Deep','Minas Tirith']],
'Game of Thrones':[
['What is House Stark’s ancestral seat?','Winterfell','Riverrun','Highgarden','Casterly Rock'],['What is House Lannister’s ancestral seat?','Casterly Rock','Winterfell','Dragonstone','The Eyrie'],['Which family uses a three-headed dragon as its sigil?','Targaryen','Stark','Baratheon','Tyrell'],['Who is Arya Stark’s older sister?','Sansa','Brienne','Lyanna','Catelyn'],['What is Arya’s sword called?','Needle','Ice','Longclaw','Oathkeeper'],['Which organisation guards the Wall?','The Night’s Watch','The Kingsguard','The Golden Company','The Unsullied'],['Who is known as the Onion Knight?','Davos Seaworth','Jorah Mormont','Bronn','Barristan Selmy'],['Which city is home to the Iron Bank?','Braavos','Pentos','Meereen','Volantis'],['Who is Daenerys’s largest dragon?','Drogon','Rhaegal','Viserion','Balerion'],['Which house has a rose as its sigil?','Tyrell','Martell','Greyjoy','Tully']],
'Disney':[
['What is Simba’s father called?','Mufasa','Scar','Rafiki','Zazu'],['What kind of animal is Dumbo?','Elephant','Hippo','Rhino','Giraffe'],['Which princess has a chameleon called Pascal?','Rapunzel','Ariel','Belle','Jasmine'],['What is the name of the snowman in Frozen?','Olaf','Sven','Kristoff','Hans'],['Which Disney film features the city of Agrabah?','Aladdin','Mulan','Hercules','Tangled'],['What is Ariel’s crab friend called?','Sebastian','Flounder','Scuttle','Eric'],['Who is the villain in The Little Mermaid?','Ursula','Maleficent','Cruella','Mother Gothel'],['What does Cinderella’s carriage begin as?','A pumpkin','A watermelon','A potato','An apple'],['Which character is a wooden puppet?','Pinocchio','Peter Pan','Jiminy Cricket','Geppetto'],['What is the name of Moana’s demigod companion?','Maui','Heihei','Pua','Tamatoa']],
'Video Games':[
['What is Mario’s brother called?','Luigi','Wario','Yoshi','Toad'],['Who is the usual playable hero of The Legend of Zelda?','Link','Zelda','Ganondorf','Impa'],['Which Minecraft enemy explodes near players?','Creeper','Enderman','Skeleton','Zombie'],['Which company created Sonic the Hedgehog?','Sega','Nintendo','Capcom','Sony'],['What is the name of Halo’s armoured protagonist?','Master Chief','Marcus Fenix','Gordon Freeman','Solid Snake'],['In Portal, what is the AI antagonist called?','GLaDOS','Cortana','SHODAN','Wheatley'],['Which series features the city of Rapture?','BioShock','Fallout','Half-Life','Mass Effect'],['Which Nintendo series features Isabelle and Tom Nook?','Animal Crossing','Splatoon','Pikmin','Fire Emblem'],['Which game features blocks called tetrominoes?','Tetris','Pac-Man','Pong','Space Invaders'],['Which series features the character Solid Snake?','Metal Gear','Splinter Cell','Hitman','Deus Ex']],
'Science':[
['What is the chemical symbol for gold?','Au','Ag','Fe','Gd'],['What gas do plants take in during photosynthesis?','Carbon dioxide','Oxygen','Helium','Hydrogen'],['Which part of a cell contains most of its DNA in humans?','Nucleus','Ribosome','Cell membrane','Cytoplasm'],['What is the SI unit of force?','Newton','Watt','Joule','Pascal'],['What is the chemical formula for water?','H₂O','CO₂','O₂','NaCl'],['What charge does an electron carry?','Negative','Positive','Neutral','It varies between atoms'],['Which organ pumps blood around the human body?','Heart','Liver','Kidney','Lung'],['What is the closest star to Earth?','The Sun','Sirius','Proxima Centauri','Polaris'],['What process turns a liquid into a gas at its surface?','Evaporation','Condensation','Freezing','Melting'],['Which scientist proposed general relativity?','Albert Einstein','Isaac Newton','Marie Curie','Charles Darwin']],
'Harry Potter':[
['Which Hogwarts house is Harry sorted into?','Gryffindor','Slytherin','Ravenclaw','Hufflepuff'],['What is Hermione’s surname?','Granger','Weasley','Lovegood','Longbottom'],['What is Harry’s owl called?','Hedwig','Errol','Pigwidgeon','Fawkes'],['Which platform does the Hogwarts Express depart from?','9¾','7½','10¼','8¾'],['Which position does Harry play in Quidditch?','Seeker','Keeper','Beater','Chaser'],['What is the spell commonly used to disarm?','Expelliarmus','Lumos','Accio','Alohomora'],['Who is the Hogwarts groundskeeper in Harry’s first year?','Rubeus Hagrid','Argus Filch','Albus Dumbledore','Severus Snape'],['Which creature is Aragog?','Acromantula','Basilisk','Hippogriff','Thestral'],['What is Voldemort’s birth name?','Tom Marvolo Riddle','Tobias Snape','Lucius Malfoy','Gellert Grindelwald'],['What shape is Harry’s Patronus?','Stag','Otter','Doe','Hare']],
'Manchester United':[
['What is Manchester United’s home stadium?','Old Trafford','Anfield','Goodison Park','St James’ Park'],['What is the club’s familiar nickname?','The Red Devils','The Toffees','The Magpies','The Gunners'],['Who managed United during the 1999 treble?','Alex Ferguson','Matt Busby','José Mourinho','David Moyes'],['Who scored United’s winning goal in the 1999 Champions League final?','Ole Gunnar Solskjær','Teddy Sheringham','David Beckham','Andy Cole'],['Which club did United beat in the 1999 Champions League final?','Bayern Munich','Barcelona','Juventus','Real Madrid'],['What was Manchester United originally called?','Newton Heath','Manchester Central','Salford Athletic','Lancashire United'],['Who captained United in the 2008 Champions League final?','Rio Ferdinand','Gary Neville','Ryan Giggs','Paul Scholes'],['Which goalkeeper saved Nicolas Anelka’s penalty in that final?','Edwin van der Sar','Peter Schmeichel','David de Gea','Fabien Barthez'],['Which United legend was nicknamed the King and wore number 7?','Eric Cantona','Roy Keane','Denis Irwin','Nicky Butt'],['Which manager led United to the 1968 European Cup?','Matt Busby','Alex Ferguson','Tommy Docherty','Ron Atkinson']],
'Marvel':[
['What is Iron Man’s real name?','Tony Stark','Bruce Banner','Steve Rogers','Clint Barton'],['What is Thor’s hammer called?','Mjolnir','Stormbreaker','Gungnir','Hofund'],['What fictional nation is Black Panther associated with?','Wakanda','Latveria','Genosha','Sokovia'],['What is Spider-Man Peter Parker’s aunt called?','May','June','Mary','Anna'],['Who transforms into the Hulk?','Bruce Banner','Tony Stark','Scott Lang','Stephen Strange'],['Which hero uses a shield made with vibranium?','Captain America','Hawkeye','Ant-Man','Star-Lord'],['What is Doctor Strange’s first name?','Stephen','Steven','Samuel','Simon'],['Which Guardian is a tree-like alien?','Groot','Rocket','Drax','Nebula'],['What is the name of Loki’s adoptive father?','Odin','Thanos','Ego','Heimdall'],['Which hero is also called the Scarlet Witch?','Wanda Maximoff','Natasha Romanoff','Carol Danvers','Jean Grey']],
'DC':[
['What is Batman’s real name?','Bruce Wayne','Clark Kent','Barry Allen','Hal Jordan'],['Which city is Superman most associated with?','Metropolis','Gotham','Central City','Star City'],['What is Wonder Woman’s given name?','Diana','Selina','Kara','Barbara'],['Which villain is also known as the Clown Prince of Crime?','The Joker','The Riddler','The Penguin','Two-Face'],['What is Superman’s birth name?','Kal-El','Jor-El','Zod','Kon-El'],['Which hero is king of Atlantis?','Aquaman','Green Arrow','Cyborg','Shazam'],['Which hero is associated with a power ring?','Green Lantern','Batman','The Flash','Superman'],['What is Batman’s butler called?','Alfred Pennyworth','Lucius Fox','James Gordon','Harvey Bullock'],['Which material famously weakens Superman?','Kryptonite','Vibranium','Adamantium','Promethium'],['Which DC hero is an archer?','Green Arrow','Green Lantern','Blue Beetle','Red Tornado']],
'Pokémon':[
['Which type is Pikachu?','Electric','Fire','Water','Normal'],['What does Charmander evolve into first?','Charmeleon','Charizard','Dragonair','Magmar'],['Which Pokémon is number 001 in the National Pokédex?','Bulbasaur','Pikachu','Charmander','Squirtle'],['What item is typically used to catch a Pokémon?','Poké Ball','Rare Candy','Potion','Repel'],['Which type is super effective against Water?','Electric','Fire','Ice','Steel'],['Which Pokémon travels with Jessie and James in the original anime?','Meowth','Ditto','Jigglypuff','Psyduck'],['Which region is featured in Pokémon Red and Blue?','Kanto','Johto','Hoenn','Sinnoh'],['What does Magikarp evolve into?','Gyarados','Milotic','Dragonite','Lapras'],['Which Pokémon can evolve into Vaporeon?','Eevee','Pikachu','Vulpix','Poliwag'],['Which Pokémon is famously associated with sleeping and blocking paths?','Snorlax','Abra','Slowpoke','Slaking']],
'Marine Biology':[
['How many arms does an octopus typically have?','Eight','Six','Ten','Twelve'],['Which is the largest living animal?','Blue whale','Whale shark','Giant squid','Orca'],['What kind of animal is a dolphin?','Mammal','Fish','Reptile','Amphibian'],['What are coral animals called?','Polyps','Spores','Larvae only','Nodules'],['What do sharks have skeletons mainly made of?','Cartilage','Bone','Chitin','Silica'],['Which marine animal has males that carry developing young in a brood pouch?','Seahorse','Sea turtle','Octopus','Clownfish'],['Which fish is famous for symbiosis with sea anemones?','Clownfish','Swordfish','Tuna','Mackerel'],['Which animal is an echinoderm?','Sea star','Jellyfish','Lobster','Clam'],['What do baleen whales use to filter food?','Baleen plates','Rows of sharp teeth','Gills','Tentacles'],['Which marine animal is a cephalopod?','Cuttlefish','Sea cucumber','Sea urchin','Sea horse']],
'Cats':[
['What is a young cat called?','Kitten','Cub','Pup','Foal'],['What is the usual term for a male breeding cat?','Tom','Buck','Boar','Ram'],['Which cat breed is famous for often having no coat?','Sphynx','Maine Coon','Persian','Ragdoll'],['What is a cat’s scientific species name?','Felis catus','Canis lupus','Panthera leo','Lynx lynx'],['What is the technical name for whiskers?','Vibrissae','Papillae','Cilia','Follicles'],['What does crepuscular mean?','Most active around dawn and dusk','Only active at midday','Unable to see in dim light','Sleeping all winter'],['What is the striped coat pattern commonly called?','Tabby','Tuxedo','Pointed','Calico'],['Which sense uses a cat’s vomeronasal organ?','Chemical scent detection','Hearing','Vision','Balance'],['Which big cat generally cannot retract its claws fully?','Cheetah','Tiger','Leopard','Jaguar'],['Which cat breed takes its name from an American state?','Maine Coon','Siamese','Bengal','Persian']],
'Animals':[
['Which mammal lays eggs?','Platypus','Otter','Badger','Hedgehog'],['What is a group of lions commonly called?','Pride','School','Pod','Colony'],['Which bird is the largest living bird?','Ostrich','Emu','Cassowary','Albatross'],['How many legs does an insect have?','Six','Eight','Ten','Four'],['Which animal is a marsupial?','Kangaroo','Rabbit','Fox','Squirrel'],['What is a baby frog commonly called?','Tadpole','Nymph','Larva beetle','Chick'],['What is the tallest living land animal?','Giraffe','Elephant','Ostrich','Camel'],['Which animal is a primate?','Lemur','Meerkat','Koala','Sloth'],['Which animal builds dams?','Beaver','Otter','Muskrat','Badger'],['What is a female deer commonly called?','Doe','Ewe','Mare','Sow']],
'Films':[
['Who directed Jurassic Park (1993)?','Steven Spielberg','James Cameron','George Lucas','Ridley Scott'],['Which film features a shark terrorising Amity Island?','Jaws','Deep Blue Sea','The Meg','Shark Tale'],['What is the name of the cowboy toy in Toy Story?','Woody','Buzz','Andy','Rex'],['Which film franchise features the character Jack Sparrow?','Pirates of the Caribbean','Indiana Jones','The Mummy','National Treasure'],['Who plays Neo in The Matrix (1999)?','Keanu Reeves','Brad Pitt','Tom Cruise','Nicolas Cage'],['What is the name of the kingdom in Shrek?','Duloc','Arendelle','Agrabah','Narnia'],['Which film features the DeLorean time machine?','Back to the Future','The Terminator','Ghostbusters','Blade Runner'],['Which film features the character Ellen Ripley?','Alien','Predator','The Thing','Dune'],['Who directed Titanic (1997)?','James Cameron','Steven Spielberg','Peter Jackson','Christopher Nolan'],['Which film follows a robot called WALL-E?','WALL-E','Robots','Big Hero 6','The Iron Giant']],
'TV Shows':[
['What is the coffee shop in Friends called?','Central Perk','Monk’s Café','The Peach Pit','Café Nervosa'],['Which show features Walter White?','Breaking Bad','The Wire','Dexter','Ozark'],['What is the surname of the family in The Simpsons?','Simpson','Griffin','Belcher','Smith'],['Which sci-fi show features the TARDIS?','Doctor Who','Star Trek','Stargate SG-1','Red Dwarf'],['Which sitcom features Del Boy and Rodney?','Only Fools and Horses','Porridge','Blackadder','The Young Ones'],['Which show is set largely in Hawkins, Indiana?','Stranger Things','Dark','Lost','The X-Files'],['What is the name of the pub in EastEnders?','The Queen Victoria','The Rovers Return','The Woolpack','The Dog in the Pond'],['Which show features the paper company Dunder Mifflin?','The Office (US)','Parks and Recreation','Community','30 Rock'],['Which TV detective is associated with 221B Baker Street?','Sherlock Holmes','Hercule Poirot','Columbo','Inspector Morse'],['Which animated show features the town of South Park?','South Park','Family Guy','Futurama','American Dad!']]
};
// Expanded v61 question bank: 10 additional multiple-choice questions per category.
Object.entries({"General Knowledge":[["What is the capital of Canada?","Ottawa","Toronto","Vancouver","Montreal"],["Which continent is the Sahara Desert primarily located on?","Africa","Asia","South America","Australia"],["How many colours are traditionally named in a rainbow?","Seven","Six","Eight","Five"],["Which country gifted the Statue of Liberty to the United States?","France","Spain","Italy","Germany"],["What is the largest planet in the Solar System?","Jupiter","Saturn","Neptune","Earth"],["Which metal is liquid at room temperature?","Mercury","Iron","Copper","Aluminium"],["What is the capital of New Zealand?","Wellington","Auckland","Christchurch","Hamilton"],["Which board game features properties such as Mayfair and Park Lane in the UK edition?","Monopoly","Cluedo","Scrabble","Risk"],["How many days are in a leap year?","366","365","364","367"],["Which river flows through Paris?","Seine","Thames","Rhine","Danube"]],"Lord of the Rings":[["What race is Gimli?","Dwarf","Elf","Hobbit","Man"],["Who is Legolas's father?","Thranduil","Elrond","Celeborn","Denethor"],["What is the Elvish settlement ruled by Elrond?","Rivendell","Lothlórien","Mirkwood","Edoras"],["What gift does Bilbo give Frodo along with Sting?","Mithril shirt","Palantír","Horn of Gondor","Elven cloak"],["Who kills the Witch-king of Angmar?","Éowyn","Aragorn","Legolas","Gandalf"],["What is the capital city of Gondor during The Lord of the Rings?","Minas Tirith","Osgiliath","Edoras","Dol Amroth"],["Which wizard leads the Istari before betraying the Free Peoples?","Saruman","Radagast","Gandalf","Alatar"],["What is the name of Gandalf's horse?","Shadowfax","Brego","Hasufel","Arod"],["Which forest is home to Treebeard?","Fangorn Forest","Mirkwood","Old Forest","Lothlórien"],["What kind of creature is Shelob?","Giant spider","Dragon","Balrog","Warg"]],"Game of Thrones":[["Who is known as the Kingslayer?","Jaime Lannister","Sandor Clegane","Bronn","Jorah Mormont"],["What is Jon Snow's direwolf called?","Ghost","Grey Wind","Summer","Shaggydog"],["Which house has the words 'We Do Not Sow'?","Greyjoy","Stark","Martell","Arryn"],["Who is Tyrion Lannister's father?","Tywin Lannister","Kevan Lannister","Jaime Lannister","Robert Baratheon"],["What is the name of the continent containing the Seven Kingdoms?","Westeros","Essos","Sothoryos","Ulthos"],["Who trains Arya in Braavos?","Jaqen H'ghar","Syrio Forel","Thoros of Myr","Daario Naharis"],["What metal can kill White Walkers?","Valyrian steel","Castle-forged steel","Iron","Copper"],["Which house rules the Iron Islands at the start of the series?","Greyjoy","Tully","Bolton","Frey"],["What is the seat of House Arryn?","The Eyrie","Highgarden","Sunspear","Pyke"],["Who is nicknamed the Hound?","Sandor Clegane","Gregor Clegane","Bronn","Beric Dondarrion"]],"Disney":[["What type of fish is Nemo?","Clownfish","Angelfish","Blue tang","Goldfish"],["Who is Mickey Mouse's girlfriend?","Minnie Mouse","Daisy Duck","Clarabelle Cow","Marie"],["What is the name of Belle's father in Beauty and the Beast?","Maurice","Gaston","Lumière","LeFou"],["Which Disney heroine disguises herself as a man to join the army?","Mulan","Pocahontas","Merida","Moana"],["What is the name of the toy space ranger in Toy Story?","Buzz Lightyear","Woody","Rex","Slinky Dog"],["Which Disney film features Mirabel Madrigal?","Encanto","Coco","Wish","Raya and the Last Dragon"],["What animal is Bambi?","Deer","Rabbit","Fox","Bear"],["Who is the villain in 101 Dalmatians?","Cruella de Vil","Ursula","Madame Medusa","Lady Tremaine"],["What is the name of Aladdin's monkey?","Abu","Rajah","Iago","Khan"],["Which Disney princess has seven dwarf companions?","Snow White","Cinderella","Aurora","Ariel"]],"Video Games":[["Which game series features Kratos?","God of War","Gears of War","Devil May Cry","Dark Souls"],["What is the name of the princess Mario frequently rescues?","Princess Peach","Princess Daisy","Rosalina","Pauline"],["Which game features the post-apocalyptic wasteland and Vault-Tec?","Fallout","Borderlands","Metro","Rage"],["In Minecraft, which material is required to build a Nether portal frame?","Obsidian","Bedrock","Diamond blocks","Blackstone"],["Which studio developed The Last of Us?","Naughty Dog","Rockstar Games","Bethesda","BioWare"],["What is the name of Link's kingdom in most Zelda games?","Hyrule","Termina","Tamriel","Albion"],["Which fighting game series features Scorpion and Sub-Zero?","Mortal Kombat","Street Fighter","Tekken","Soulcalibur"],["Which game series features Commander Shepard?","Mass Effect","Halo","Destiny","Dead Space"],["What is Pac-Man traditionally chased by?","Ghosts","Aliens","Robots","Skeletons"],["Which company makes the PlayStation consoles?","Sony","Nintendo","Sega","Microsoft"]],"Science":[["What is the largest organ of the human body?","Skin","Liver","Lung","Brain"],["Which planet is known for its prominent rings?","Saturn","Mars","Venus","Mercury"],["What is the centre of an atom called?","Nucleus","Electron shell","Ion","Molecule"],["What gas makes up most of Earth's atmosphere?","Nitrogen","Oxygen","Carbon dioxide","Argon"],["Which blood cells primarily carry oxygen?","Red blood cells","White blood cells","Platelets","Stem cells"],["What is the pH of a neutral solution at about 25°C?","7","0","14","10"],["Which force keeps planets in orbit around the Sun?","Gravity","Magnetism","Friction","Buoyancy"],["What is the hardest natural substance?","Diamond","Quartz","Granite","Graphite"],["Which vitamin is produced in human skin in response to sunlight?","Vitamin D","Vitamin C","Vitamin B12","Vitamin K"],["What is the boiling point of pure water at standard atmospheric pressure?","100°C","90°C","80°C","120°C"]],"Harry Potter":[["What is the name of Ron Weasley's pet rat?","Scabbers","Crookshanks","Trevor","Arnold"],["Who is the headmaster of Hogwarts at the beginning of Harry's first year?","Albus Dumbledore","Severus Snape","Minerva McGonagall","Filius Flitwick"],["What magical object shows a person's deepest desire?","Mirror of Erised","Pensieve","Time-Turner","Remembrall"],["Which house is Draco Malfoy in?","Slytherin","Ravenclaw","Hufflepuff","Gryffindor"],["What is the wizarding prison called?","Azkaban","Nurmengard","Gringotts","Durmstrang"],["What is Luna Lovegood's house?","Ravenclaw","Hufflepuff","Gryffindor","Slytherin"],["Which spell produces light from a wand?","Lumos","Nox","Accio","Reparo"],["What is the name of Hagrid's giant spider friend?","Aragog","Buckbeak","Fang","Norbert"],["Who teaches Transfiguration during Harry's first year?","Minerva McGonagall","Pomona Sprout","Sybill Trelawney","Rolanda Hooch"],["What is the core of Harry Potter's wand?","Phoenix feather","Dragon heartstring","Unicorn hair","Thestral hair"]],"Manchester United":[["Which United player was nicknamed 'The Welsh Wizard'?","Ryan Giggs","Paul Scholes","Roy Keane","Gary Neville"],["Who scored Manchester United's goal in the 2008 Champions League final before the penalty shootout?","Cristiano Ronaldo","Wayne Rooney","Carlos Tevez","Paul Scholes"],["Which team did Manchester United beat in the 2008 Champions League final?","Chelsea","Arsenal","Liverpool","Barcelona"],["What colour shirts are Manchester United traditionally associated with at home?","Red","Blue","White","Green"],["Which legendary United player survived the Munich air disaster and later won the 1968 European Cup?","Bobby Charlton","George Best","Denis Law","Eric Cantona"],["Which striker became Manchester United's all-time leading goalscorer in 2017?","Wayne Rooney","Bobby Charlton","Ruud van Nistelrooy","Andy Cole"],["Who was Manchester United's captain for much of the 1990s before Roy Keane?","Steve Bruce","Gary Pallister","Bryan Robson","Peter Schmeichel"],["Which goalkeeper captained United in the 1999 Champions League final?","Peter Schmeichel","Edwin van der Sar","Fabien Barthez","David de Gea"],["At which stadium did United win the 1999 Champions League final?","Camp Nou","Wembley","San Siro","Olympiastadion"],["Which academy generation became known as the Class of '92?","Beckham, Giggs, Scholes, Butt and the Neville brothers","Rooney, Ronaldo, Tevez and Nani","Best, Law, Charlton and Stiles","Rashford, Lingard, Pogba and Morrison"]],"Marvel":[["What is Captain America's real name?","Steve Rogers","Bucky Barnes","Sam Wilson","Clint Barton"],["Which Infinity Stone is embedded in Vision's forehead in the MCU?","Mind Stone","Time Stone","Space Stone","Power Stone"],["What is Black Widow's real name?","Natasha Romanoff","Wanda Maximoff","Yelena Belova","Maria Hill"],["Which Marvel hero is known as the Sorcerer Supreme?","Doctor Strange","Thor","Iron Man","Moon Knight"],["What is Hawkeye's real name?","Clint Barton","Scott Lang","Sam Wilson","Matt Murdock"],["Which villain seeks the Infinity Stones in Avengers: Infinity War?","Thanos","Ultron","Loki","Red Skull"],["What species is Rocket in Guardians of the Galaxy?","Raccoon","Otter","Fox","Badger"],["What is Daredevil's real name?","Matt Murdock","Frank Castle","Luke Cage","Danny Rand"],["Which superhero is Peter Quill?","Star-Lord","Nova","War Machine","Ant-Man"],["What metal is Wolverine's skeleton famously bonded with?","Adamantium","Vibranium","Uru","Carbonadium"]],"DC":[["What is The Flash's civilian name in the modern Justice League?","Barry Allen","Bruce Wayne","Hal Jordan","Oliver Queen"],["Which city is Batman most associated with?","Gotham City","Metropolis","Central City","Coast City"],["What is Supergirl's Kryptonian name?","Kara Zor-El","Diana Prince","Barbara Gordon","Zatanna Zatara"],["Who is the alter ego of Green Arrow?","Oliver Queen","Arthur Curry","Victor Stone","Billy Batson"],["Which villain is known for leaving riddles?","The Riddler","Bane","Deathstroke","Black Mask"],["What is Aquaman's human name?","Arthur Curry","Barry Allen","John Jones","Carter Hall"],["Which hero is also known as Cyborg?","Victor Stone","Ray Palmer","Ted Kord","John Henry Irons"],["What word does Billy Batson say to transform into Shazam?","Shazam","Abracadabra","Krypton","Thunder"],["Who is Batman's police ally and commissioner?","James Gordon","Harvey Dent","Lucius Fox","Dick Grayson"],["Which villain comes from the planet Apokolips?","Darkseid","Brainiac","Sinestro","Lex Luthor"]],"Pokémon":[["What type is Squirtle?","Water","Ice","Normal","Dragon"],["Which Pokémon evolves into Raichu?","Pikachu","Pichu","Plusle","Pawmi"],["What is the final evolution of Bulbasaur?","Venusaur","Ivysaur","Vileplume","Victreebel"],["Which Pokémon is known as the Genetic Pokémon?","Mewtwo","Mew","Ditto","Genesect"],["Which type is immune to Normal-type moves in the main series games?","Ghost","Dark","Steel","Rock"],["Which region was introduced in Pokémon Gold and Silver?","Johto","Hoenn","Sinnoh","Unova"],["What is the name of the Pokémon Professor in Kanto?","Professor Oak","Professor Elm","Professor Birch","Professor Rowan"],["Which Pokémon evolves from Dratini?","Dragonair","Gyarados","Lapras","Aerodactyl"],["What type is Jigglypuff in modern Pokémon games?","Normal/Fairy","Pure Fairy","Normal/Psychic","Fairy/Psychic"],["Which Legendary Pokémon is the mascot of Pokémon Silver?","Lugia","Ho-Oh","Suicune","Articuno"]],"Marine Biology":[["What is the largest species of shark?","Whale shark","Great white shark","Tiger shark","Basking shark"],["Which marine mammal is known for using rocks to open shellfish?","Sea otter","Dugong","Harbour seal","Walrus"],["What is the largest species of sea turtle?","Leatherback","Green sea turtle","Loggerhead","Hawksbill"],["Which organ do most fish use to extract oxygen from water?","Gills","Lungs","Spiracles only","Swim bladder"],["What group of animals includes jellyfish and corals?","Cnidarians","Molluscs","Crustaceans","Echinoderms"],["Which cephalopod has an external shell?","Nautilus","Octopus","Cuttlefish","Squid"],["What is a group of fish commonly called?","School","Pride","Herd","Pack"],["Which marine mammal has long tusks?","Walrus","Manatee","Orca","Sea lion"],["What are the microscopic algae that form the plant-like part of plankton called?","Phytoplankton","Zooplankton","Krill","Benthos"],["Which animal is famous for regenerating lost arms?","Sea star","Dolphin","Nautilus","Manta ray"]],"Cats":[["Which cat breed is known for its folded ears?","Scottish Fold","Siamese","Abyssinian","Birman"],["What is the loose fold of skin on a cat's belly commonly called?","Primordial pouch","Dewlap","Carapace","Mane"],["Which cat breed is one of the largest domestic breeds?","Maine Coon","Singapura","Cornish Rex","Burmese"],["What is a cat's normal walking gait called when each paw moves separately in sequence?","Four-beat walk","Two-beat trot","Gallop","Bound"],["Which colour-pointed breed originated in Thailand, formerly Siam?","Siamese","Persian","Manx","Ragdoll"],["What structure gives a cat's tongue its rough texture?","Papillae","Vibrissae","Canines","Sebaceous glands"],["Which sense is especially acute in cats and helps them detect high-frequency sounds?","Hearing","Taste","Colour vision","Touch only"],["What is a group of adult cats sometimes called?","Clowder","Murder","Parliament","Crash"],["Which breed is famous for having a very short or absent tail?","Manx","Bengal","Russian Blue","Norwegian Forest Cat"],["What is the term for a cat with patches of black, orange and white fur?","Calico","Tabby","Tuxedo","Colourpoint"]],"Animals":[["Which animal is the largest land mammal?","African bush elephant","White rhinoceros","Hippopotamus","Giraffe"],["What is a group of wolves commonly called?","Pack","Pride","Pod","Flock"],["Which bird is famous for being unable to fly and native to New Zealand?","Kiwi","Toucan","Pelican","Falcon"],["Which animal changes from a caterpillar into an adult through metamorphosis?","Butterfly","Spider","Earthworm","Snail"],["What is the fastest land animal?","Cheetah","Pronghorn","Lion","Greyhound"],["Which mammal is capable of true sustained flight?","Bat","Flying squirrel","Sugar glider","Colugo"],["Which animal has black and white stripes?","Zebra","Okapi","Tapir","Wildebeest"],["What is a baby sheep called?","Lamb","Calf","Kid","Foal"],["Which reptile is known for changing colour and independently moving eyes?","Chameleon","Iguana","Gecko","Komodo dragon"],["Which animal is the largest living species of penguin?","Emperor penguin","King penguin","Adélie penguin","Gentoo penguin"]],"Films":[["Which actor played Jack Dawson in Titanic?","Leonardo DiCaprio","Brad Pitt","Matt Damon","Tom Cruise"],["Which film features the fictional archaeologist Indiana Jones?","Raiders of the Lost Ark","The Goonies","Romancing the Stone","National Treasure"],["What is the name of the hotel in The Shining?","Overlook Hotel","Bates Motel","Grand Budapest Hotel","Continental Hotel"],["Which 1984 film features the Stay Puft Marshmallow Man?","Ghostbusters","Gremlins","The Terminator","Beverly Hills Cop"],["Who directed The Lord of the Rings film trilogy?","Peter Jackson","James Cameron","Ridley Scott","Sam Raimi"],["Which film features the character Forrest Gump?","Forrest Gump","Cast Away","Big","Philadelphia"],["What type of car is used as the time machine in Back to the Future?","DeLorean","Ferrari","Porsche","Ford Mustang"],["Which actor played the title role in Edward Scissorhands?","Johnny Depp","Jim Carrey","Keanu Reeves","Nicolas Cage"],["Which film series features the boxer Rocky Balboa?","Rocky","Raging Bull","Creed only","The Fighter"],["Which film features the quote 'Nobody puts Baby in a corner'?","Dirty Dancing","Footloose","Flashdance","Grease"]],"TV Shows":[["Which sitcom features Ross, Rachel, Monica, Chandler, Joey and Phoebe?","Friends","Seinfeld","Frasier","Cheers"],["Who lives in a pineapple under the sea?","SpongeBob SquarePants","Patrick Star","Squidward Tentacles","Mr. Krabs"],["Which series follows the Shelby crime family in Birmingham?","Peaky Blinders","Boardwalk Empire","Gangs of London","Top Boy"],["What is the name of the pub in Coronation Street?","The Rovers Return","The Queen Victoria","The Woolpack","The Nag's Head"],["Which comedy series features David Brent?","The Office (UK)","Extras","The IT Crowd","Black Books"],["Which TV show features the character Eleven?","Stranger Things","Wednesday","The Umbrella Academy","Dark"],["What is the surname of brothers Sam and Dean in Supernatural?","Winchester","Salvatore","Halliwells","Bennett"],["Which sitcom is set around the bar Cheers?","Cheers","Frasier","Taxi","Seinfeld"],["Which animated series features Rick Sanchez and Morty Smith?","Rick and Morty","Futurama","BoJack Horseman","Archer"],["Which British sci-fi comedy features Dave Lister and Arnold Rimmer?","Red Dwarf","Doctor Who","Blake's 7","Torchwood"]]}).forEach(([category,rows])=>{raw[category].push(...rows)});

// v84: curated question bank only; generated fact-pair expansion retired.\n// Researched explicit additions: each prompt is written as a real quiz question, never reverse-generated.
({
'General Knowledge':[
['Which country has Ottawa as its capital?','Canada','Australia','New Zealand','United States'],
['What is the capital city of New Zealand?','Wellington','Auckland','Christchurch','Hamilton'],
['Which element has the chemical symbol Fe?','Iron','Fluorine','Francium','Fermium'],
['Which continent contains the Sahara Desert?','Africa','Asia','South America','Australia']
],
'Lord of the Rings':[
['What is the first name of the hobbit usually called Pippin Took?','Peregrin','Meriadoc','Frodo','Samwise'],
['What is Merry Brandybuck’s full first name?','Meriadoc','Peregrin','Boromir','Faramir'],
['Which kingdom is ruled by Théoden during The Lord of the Rings?','Rohan','Gondor','Mordor','Arnor'],
['Which member of the Fellowship carries an axe?','Gimli','Legolas','Boromir','Samwise Gamgee']
],
'Game of Thrones':[
['What is the motto of House Stark?','Winter is Coming','Fire and Blood','Hear Me Roar!','Ours is the Fury'],
['Which Stark child becomes the Three-Eyed Raven?','Bran Stark','Robb Stark','Arya Stark','Rickon Stark'],
['What is Jon Snow’s direwolf called?','Ghost','Grey Wind','Nymeria','Summer'],
['Which castle serves as the headquarters of the Night’s Watch?','Castle Black','Winterfell','The Red Keep','The Eyrie']
],
'Disney':[
['In Finding Nemo, what species of fish is Dory?','Blue tang','Clownfish','Angelfish','Pufferfish'],
['Which Lion King character is a meerkat?','Timon','Pumbaa','Zazu','Rafiki'],
['What type of animal is Pumbaa in The Lion King?','Warthog','Meerkat','Baboon','Hyena'],
['Which Disney film features the Madrigal family?','Encanto','Coco','Moana','Tangled']
],
'Video Games':[
['Which game series features the archaeologist Lara Croft?','Tomb Raider','Uncharted','Assassin’s Creed','Far Cry'],
['What colour is Sonic the Hedgehog?','Blue','Red','Green','Yellow'],
['Which company publishes the mainline Pokémon video games alongside Nintendo?','The Pokémon Company','Sega','Capcom','Square Enix'],
['Which game series features Master Chief and the Covenant?','Halo','Gears of War','Destiny','Mass Effect']
],
'Science':[
['What is the largest organ of the human body?','Skin','Liver','Heart','Lung'],
['Which planet is famous for its prominent ring system?','Saturn','Mars','Venus','Mercury'],
['What is the pH of a neutral solution at about room temperature?','7','1','10','14'],
['Which blood cells primarily transport oxygen around the human body?','Red blood cells','Platelets','Neutrophils','Lymphocytes']
],
'Harry Potter':[
['What is the name of the wizarding prison guarded by Dementors?','Azkaban','Gringotts','Durmstrang','Nurmengard'],
['Which Hogwarts house has a badger as its emblem?','Hufflepuff','Ravenclaw','Gryffindor','Slytherin'],
['Who teaches Potions during Harry’s first year at Hogwarts?','Severus Snape','Remus Lupin','Minerva McGonagall','Filius Flitwick'],
['What object does Harry catch to end a Quidditch match?','Golden Snitch','Quaffle','Bludger','Remembrall']
],
'Manchester United':[
['What was Manchester United originally called when founded in 1878?','Newton Heath L&YR Football Club','Manchester Central','Salford United','Newton Manchester FC'],
['In what year did the club change its name to Manchester United?','1902','1878','1910','1922'],
['In what year did Manchester United move to Old Trafford?','1910','1902','1920','1938'],
['Which manager led Manchester United to the inaugural Premier League title in 1992/93?','Sir Alex Ferguson','Sir Matt Busby','Ron Atkinson','David Moyes'],
['How many European Cup/Champions League titles has Manchester United won?','3','2','4','5'],
['Which club did Manchester United beat in the 1968 European Cup final?','Benfica','Real Madrid','Bayern Munich','Barcelona']
],
'Marvel':[
['What is the civilian name of Spider-Man?','Peter Parker','Bruce Banner','Matt Murdock','Scott Lang'],
['Which Infinity Stone is set in Vision’s forehead in the MCU?','Mind Stone','Time Stone','Space Stone','Power Stone'],
['What metal is associated with Wolverine’s skeleton and claws?','Adamantium','Vibranium','Uru','Carbonadium'],
['Which Marvel hero is also known as the Sorcerer Supreme?','Doctor Strange','Iron Man','Hawkeye','Star-Lord']
],
'DC':[
['What is Batman’s civilian identity?','Bruce Wayne','Clark Kent','Hal Jordan','Oliver Queen'],
['Which city is Superman most closely associated with?','Metropolis','Gotham City','Central City','Star City'],
['What is Wonder Woman’s home island called?','Themyscira','Atlantis','Apokolips','Oa'],
['Which villain is famous for using fear toxin against Batman?','Scarecrow','Penguin','Bane','Two-Face']
],
'Pokémon':[
['What type is Pikachu?','Electric','Fire','Normal','Psychic'],
['Which Pokémon evolves from Magikarp?','Gyarados','Lapras','Seaking','Dragonair'],
['Which item is commonly used to catch wild Pokémon?','Poké Ball','Potion','Rare Candy','Repel'],
['What are the three types of the original Kanto starter Pokémon?','Grass, Fire and Water','Fire, Electric and Water','Grass, Rock and Water','Normal, Fire and Grass']
],
'Marine Biology':[
['What is the largest living animal on Earth?','Blue whale','Whale shark','Giant squid','Orca'],
['Which group of marine mammals includes dolphins and whales?','Cetaceans','Pinnipeds','Crustaceans','Cephalopods'],
['How many arms does a typical octopus have?','8','6','10','12'],
['What structure do most fish use to extract oxygen from water?','Gills','Lungs','Spiracles','Blowholes']
],
'Cats':[
['What is a group of adult cats commonly called?','Clowder','Pack','Herd','Flock'],
['Which sense is assisted by a cat’s whiskers?','Touch','Taste','Colour vision','Hearing'],
['What is the name for a male domestic cat, especially an unneutered one?','Tom','Queen','Doe','Buck'],
['Which wild cat is the largest living cat species?','Tiger','Lion','Jaguar','Leopard']
],
'Animals':[
['What is the fastest land animal?','Cheetah','Pronghorn','Lion','Greyhound'],
['Which mammal is capable of true sustained flight?','Bat','Flying squirrel','Sugar glider','Colugo'],
['What is a baby kangaroo called?','Joey','Calf','Kit','Cub'],
['Which bird is the largest living bird by height and mass?','Ostrich','Emu','Cassowary','Albatross']
],
'Films':[
['Who directed Jaws?','Steven Spielberg','George Lucas','James Cameron','Ridley Scott'],
['Which film features the fictional archaeologist Indiana Jones?','Raiders of the Lost Ark','Top Gun','Die Hard','Rocky'],
['In The Matrix, which pill does Neo choose?','Red pill','Blue pill','Green pill','White pill'],
['Which actor played the title character in Edward Scissorhands?','Johnny Depp','Tom Cruise','Brad Pitt','Keanu Reeves']
],
'TV Shows':[
['Which TV series is set in the fictional town of Hawkins, Indiana?','Stranger Things','Twin Peaks','Riverdale','Dark'],
['What is the name of the coffee shop regularly visited in Friends?','Central Perk','Monk’s Café','Café Nervosa','Luke’s Diner'],
['Which British sci-fi series features the TARDIS?','Doctor Who','Red Dwarf','Torchwood','Blake’s 7'],
['Which animated sitcom centres on the Griffin family?','Family Guy','The Simpsons','American Dad!','Bob’s Burgers']
]
}).forEach(([category,rows])=>raw[category].push(...rows));
// v86: researched explicit banks for the five new TV categories. No generated fact-pair questions.
({
'Stranger Things':[
['In which fictional Indiana town is Stranger Things primarily set?','Hawkins','Lenora Hills','Derry','Riverdale'],
['Which boy disappears at the beginning of Season 1?','Will Byers','Mike Wheeler','Dustin Henderson','Lucas Sinclair'],
['What number is associated with Eleven at Hawkins Lab?','011','001','008','010'],
['Who is Eleven’s adoptive father?','Jim Hopper','Sam Owens','Martin Brenner','Ted Wheeler'],
['What is the dark parallel dimension called?','The Upside Down','The Void','Dimension X','The Shadow Realm'],
['Which character is Max Mayfield’s stepbrother?','Billy Hargrove','Steve Harrington','Eddie Munson','Jonathan Byers'],
['Who works with Steve at Scoops Ahoy?','Robin Buckley','Nancy Wheeler','Chrissy Cunningham','Barb Holland'],
['Which mall is central to Season 3?','Starcourt Mall','Hawkins Plaza','Lenora Mall','Palace Arcade'],
['What is Dustin’s girlfriend called?','Suzie','Vickie','Chrissy','Angela'],
['Who leads the Hellfire Club in Season 4?','Eddie Munson','Dustin Henderson','Jason Carver','Steve Harrington'],
['What is Vecna’s human name?','Henry Creel','Victor Creel','Martin Brenner','Sam Owens'],
['Which character is also known as One?','Henry Creel','Kali Prasad','Will Byers','Billy Hargrove'],
['Which song helps Max escape Vecna in Season 4?','Running Up That Hill','Should I Stay or Should I Go','Master of Puppets','Every Breath You Take'],
['What arcade game does Max beat Dustin’s high score on?','Dig Dug','Pac-Man','Dragon’s Lair','Galaga'],
['What does Dustin name the creature he finds in Season 2?','D’Artagnan','Mews','Yertle','Bongo'],
['What sweet does Dart particularly like?','Three Musketeers bars','Eggo waffles','Reese’s Pieces','M&M’s'],
['Who is Nancy Wheeler’s younger brother?','Mike Wheeler','Will Byers','Lucas Sinclair','Dustin Henderson'],
['Who is Will Byers’ older brother?','Jonathan Byers','Steve Harrington','Billy Hargrove','Eddie Munson'],
['What food is Eleven famously fond of?','Eggo waffles','Pizza','Corn dogs','Ice cream'],
['Who is Hawkins’ police chief at the start of the series?','Jim Hopper','Calvin Powell','Phil Callahan','Sam Owens'],
['Which teacher explains alternate dimensions using the flea-and-acrobat analogy?','Scott Clarke','Martin Brenner','Sam Owens','Ted Wheeler'],
['Which character is Lucas Sinclair’s younger sister?','Erica Sinclair','Max Mayfield','Holly Wheeler','Eleven'],
['Which ice-cream shop employs Steve and Robin?','Scoops Ahoy','Benny’s Burgers','Surfer Boy Pizza','Family Video'],
['Which pizza company does Argyle work for?','Surfer Boy Pizza','Pizza Planet','Hawkins Pizza','California Slice'],
['Who is Joyce Byers’ boyfriend in Season 2?','Bob Newby','Jim Hopper','Lonnie Byers','Murray Bauman']
],
'Big Bang Theory':[
['How many seasons did The Big Bang Theory run for?','12','10','11','13'],
['How many episodes of The Big Bang Theory were produced?','279','236','250','300'],
['What is Sheldon Cooper’s profession?','Theoretical physicist','Engineer','Microbiologist','Geologist'],
['What is Leonard Hofstadter’s profession?','Experimental physicist','Engineer','Astronomer','Neuroscientist'],
['Which main character is an aerospace engineer?','Howard Wolowitz','Raj Koothrappali','Leonard Hofstadter','Sheldon Cooper'],
['What is Raj Koothrappali’s field?','Astrophysics','Engineering','Geology','Microbiology'],
['What is Amy Farrah Fowler’s profession?','Neuroscientist','Physicist','Engineer','Pharmacist'],
['What is Bernadette Rostenkowski-Wolowitz’s profession?','Microbiologist','Astronomer','Lawyer','Architect'],
['Who lives across the hall from Sheldon and Leonard at the start?','Penny','Amy','Bernadette','Leslie'],
['What is Penny’s surname revealed to be after marrying Leonard?','Hofstadter','Cooper','Wolowitz','Koothrappali'],
['Which character is famous for saying “Bazinga!”?','Sheldon Cooper','Howard Wolowitz','Raj Koothrappali','Leonard Hofstadter'],
['What is Sheldon’s favourite spot on the apartment sofa commonly called?','His spot','The throne','The physics seat','The corner'],
['Who eventually marries Amy Farrah Fowler?','Sheldon Cooper','Leonard Hofstadter','Raj Koothrappali','Stuart Bloom'],
['Who eventually marries Bernadette?','Howard Wolowitz','Raj Koothrappali','Leonard Hofstadter','Stuart Bloom'],
['Who eventually marries Penny?','Leonard Hofstadter','Sheldon Cooper','Raj Koothrappali','Howard Wolowitz'],
['Which pair win a Nobel Prize together in the series finale?','Sheldon and Amy','Leonard and Penny','Howard and Raj','Bernadette and Howard'],
['What is the name of the comic-book-store owner?','Stuart Bloom','Barry Kripke','Wil Wheaton','Bert Kibbler'],
['Which actor plays Sheldon Cooper?','Jim Parsons','Johnny Galecki','Simon Helberg','Kunal Nayyar'],
['Which actor plays Leonard Hofstadter?','Johnny Galecki','Jim Parsons','Simon Helberg','Kevin Sussman'],
['Which actor plays Penny?','Kaley Cuoco','Mayim Bialik','Melissa Rauch','Sara Gilbert'],
['Which actor plays Howard Wolowitz?','Simon Helberg','Kunal Nayyar','Jim Parsons','Johnny Galecki'],
['Which actor plays Raj Koothrappali?','Kunal Nayyar','Simon Helberg','Kevin Sussman','John Ross Bowie'],
['Which actor plays Amy Farrah Fowler?','Mayim Bialik','Kaley Cuoco','Melissa Rauch','Sara Gilbert'],
['Which actor plays Bernadette?','Melissa Rauch','Mayim Bialik','Kaley Cuoco','Laura Spencer'],
['On what date did The Big Bang Theory first air in the US?','September 24, 2007','September 22, 1994','May 16, 2019','September 20, 2010']
],
'Friends':[
['How many friends make up the show’s central group?','Six','Five','Seven','Eight'],
['What is Ross and Monica’s surname?','Geller','Green','Bing','Tribbiani'],
['What is Rachel’s surname?','Green','Geller','Buffay','Bing'],
['What is Joey’s surname?','Tribbiani','Bing','Geller','Green'],
['What is Phoebe’s surname?','Buffay','Green','Geller','Tribbiani'],
['What is Chandler’s surname?','Bing','Geller','Tribbiani','Burke'],
['What is the group’s regular coffee shop called?','Central Perk','Central Park Café','Monk’s Café','Café Nervosa'],
['Which friend is Ross Geller’s sister?','Monica','Rachel','Phoebe','Janice'],
['Which character works as a palaeontologist?','Ross Geller','Chandler Bing','Joey Tribbiani','Gunther'],
['Which character is a chef?','Monica Geller','Rachel Green','Phoebe Buffay','Carol Willick'],
['Which character is an actor?','Joey Tribbiani','Chandler Bing','Ross Geller','Mike Hannigan'],
['Which character performs “Smelly Cat”?','Phoebe Buffay','Rachel Green','Monica Geller','Janice'],
['Who marries Monica Geller?','Chandler Bing','Richard Burke','Joey Tribbiani','Ross Geller'],
['Who marries Phoebe Buffay?','Mike Hannigan','David','Joey Tribbiani','Gunther'],
['What is Ross’s pet monkey called?','Marcel','Maurice','Michael','Marty'],
['What is Joey’s soap-opera character called?','Dr. Drake Ramoray','Dr. Richard Burke','Dr. Leonard Green','Dr. Roger'],
['Which soap opera employs Joey’s character?','Days of Our Lives','General Hospital','All My Children','The Young and the Restless'],
['Who owns Central Perk for much of the series?','Terry','Gunther','Joey','Chandler'],
['Which Central Perk employee has a long-running crush on Rachel?','Gunther','Terry','Mike','David'],
['What is the name of Ross’s first wife?','Carol','Emily','Susan','Julie'],
['Who is Carol’s partner and later wife?','Susan Bunch','Emily Waltham','Janice Hosenstein','Julie'],
['What is Ross’s son called?','Ben','Jack','Frank','Mike'],
['What are Monica and Chandler’s adopted twins called?','Jack and Erica','Ben and Emma','Frank and Alice','Ross and Rachel'],
['What is Rachel and Ross’s daughter called?','Emma','Erica','Emily','Amy'],
['Which friend famously says “How you doin’?”','Joey Tribbiani','Chandler Bing','Ross Geller','Phoebe Buffay']
],
'House of the Dragon':[
['House of the Dragon is primarily about which ruling family?','House Targaryen','House Stark','House Lannister','House Baratheon'],
['Who is King Viserys I’s named heir?','Rhaenyra Targaryen','Daemon Targaryen','Aegon Targaryen','Alicent Hightower'],
['Who is Rhaenyra Targaryen’s father?','Viserys I Targaryen','Daemon Targaryen','Corlys Velaryon','Otto Hightower'],
['Who is Daemon Targaryen’s brother?','Viserys I Targaryen','Aegon II Targaryen','Corlys Velaryon','Criston Cole'],
['Which house does Alicent belong to by birth?','House Hightower','House Velaryon','House Strong','House Arryn'],
['Who is Alicent Hightower’s father?','Otto Hightower','Lyonel Strong','Corlys Velaryon','Larys Strong'],
['What title is Corlys Velaryon widely known by?','The Sea Snake','The Rogue Prince','The Kingmaker','The White Worm'],
['Who is known as the Rogue Prince?','Daemon Targaryen','Aemond Targaryen','Aegon II Targaryen','Jacaerys Velaryon'],
['Which dragon is ridden by Rhaenyra?','Syrax','Caraxes','Vhagar','Meleys'],
['Which dragon is ridden by Daemon?','Caraxes','Syrax','Sunfyre','Seasmoke'],
['Which enormous dragon is claimed by Aemond?','Vhagar','Meleys','Arrax','Vermax'],
['Which dragon is ridden by Rhaenys Targaryen?','Meleys','Dreamfyre','Moondancer','Tyraxes'],
['What is the ancestral seat of House Targaryen in the series?','Dragonstone','Winterfell','Highgarden','Storm’s End'],
['Which city contains the Iron Throne?','King’s Landing','Oldtown','Pentos','Braavos'],
['What is the name of Rhaenyra’s first husband?','Laenor Velaryon','Harwin Strong','Criston Cole','Jason Lannister'],
['Who is Laenor Velaryon’s sister?','Laena Velaryon','Rhaena Targaryen','Baela Targaryen','Helaena Targaryen'],
['Which Kingsguard knight becomes closely allied with Alicent?','Criston Cole','Harrold Westerling','Erryk Cargyll','Steffon Darklyn'],
['Which twins serve in the Kingsguard on opposing sides?','Arryk and Erryk Cargyll','Jason and Tyland Lannister','Aegon and Aemond Targaryen','Jace and Luke Velaryon'],
['What is Mysaria also known as?','The White Worm','The Red Woman','The Queen Who Never Was','The Good Queen'],
['Which character is nicknamed the Queen Who Never Was?','Rhaenys Targaryen','Rhaenyra Targaryen','Alicent Hightower','Helaena Targaryen'],
['Which house rules Driftmark?','House Velaryon','House Hightower','House Strong','House Celtigar'],
['Who is Lord of the Tides at the start of the series?','Corlys Velaryon','Vaemond Velaryon','Otto Hightower','Lyonel Strong'],
['Which son of Alicent loses an eye?','Aemond Targaryen','Aegon Targaryen','Daeron Targaryen','Jacaerys Velaryon'],
['What colour faction supports Rhaenyra’s claim?','Black','Green','Red','Gold'],
['What colour faction supports Aegon II’s claim?','Green','Black','Blue','White']
],
'The Walking Dead':[
['Who is the central protagonist when The Walking Dead begins?','Rick Grimes','Daryl Dixon','Glenn Rhee','Shane Walsh'],
['What was Rick Grimes’ profession before the apocalypse?','Sheriff’s deputy','Firefighter','Doctor','Mechanic'],
['Who is Rick’s wife at the beginning of the series?','Lori Grimes','Michonne','Andrea','Carol Peletier'],
['What is Rick’s son called?','Carl Grimes','RJ Grimes','Henry','Hershel'],
['Which character is famous for using a crossbow?','Daryl Dixon','Rick Grimes','Glenn Rhee','Abraham Ford'],
['Who is Daryl Dixon’s older brother?','Merle Dixon','Dwight','Shane Walsh','Aaron'],
['Who does Glenn Rhee marry?','Maggie Greene','Beth Greene','Tara Chambler','Sasha Williams'],
['Who is Maggie Greene’s father?','Hershel Greene','Dale Horvath','Tyreese Williams','Gregory'],
['Which character wields a katana?','Michonne','Carol Peletier','Rosita Espinosa','Andrea'],
['What is the name of Negan’s barbed-wire baseball bat?','Lucille','Judith','Olivia','Alpha'],
['What group is led by Negan?','The Saviors','The Whisperers','The Wolves','The Claimers'],
['Who leads the Whisperers before Beta?','Alpha','Gamma','Lydia','Leah'],
['What community is led by Gregory before Maggie takes over?','Hilltop','Alexandria','Oceanside','Terminus'],
['Which walled community becomes a major home for Rick’s group?','Alexandria','Woodbury','Terminus','The Sanctuary'],
['Who is the Governor of Woodbury?','Philip Blake','Negan Smith','Gareth','Simon'],
['Which character is known as King Ezekiel?','Ezekiel Sutton','Jerry','Mercer','Gabriel Stokes'],
['What animal is Ezekiel’s companion Shiva?','Tiger','Lion','Horse','Wolf'],
['Who is Carol Peletier’s daughter?','Sophia','Judith','Lydia','Lizzie'],
['Who is Rick’s best friend and fellow deputy before the apocalypse?','Shane Walsh','Daryl Dixon','Morgan Jones','Glenn Rhee'],
['Who is the first survivor Rick encounters after leaving the hospital?','Morgan Jones','Glenn Rhee','Daryl Dixon','Dale Horvath'],
['Which city does Rick initially travel toward looking for his family?','Atlanta','Washington, D.C.','Richmond','Baltimore'],
['What does the group call the undead most often?','Walkers','Zombies','Biters','Roamers'],
['Which character is a priest when introduced?','Gabriel Stokes','Eugene Porter','Aaron','Jesus'],
['What is Eugene Porter’s first name?','Eugene','Abraham','Milton','Simon'],
['Who travels with Eugene and Rosita when first introduced?','Abraham Ford','Aaron','Jesus','Dwight']
]
}).forEach(([category,rows])=>raw[category]=rows);
const questions=categories.flatMap((category,c)=>raw[category].map((r,i)=>({id:'c'+c+'q'+i,category,prompt:r[0],answer:r[1],options:r.slice(1)})));\n// v85 researched explicit additions (official/reference-source facts; no generated reversals)
({
'General Knowledge':[
['How many planets are in our solar system?','Eight','Seven','Nine','Ten'],
['Which galaxy contains our solar system?','Milky Way','Andromeda','Triangulum','Sombrero'],
['What is the largest planet in our solar system?','Jupiter','Saturn','Neptune','Earth'],
['Which planet is nearest the Sun?','Mercury','Venus','Earth','Mars'],
['Which two planets have no natural moons?','Mercury and Venus','Earth and Mars','Jupiter and Saturn','Uranus and Neptune'],
['What is the only dwarf planet in the inner solar system?','Ceres','Pluto','Eris','Makemake']
],
'Science':[
['Which four planets are the terrestrial planets?','Mercury, Venus, Earth and Mars','Earth, Mars, Jupiter and Saturn','Jupiter, Saturn, Uranus and Neptune','Venus, Earth, Uranus and Neptune'],
['Which two planets are classified as gas giants?','Jupiter and Saturn','Uranus and Neptune','Earth and Mars','Mercury and Venus'],
['Which two planets are classified as ice giants?','Uranus and Neptune','Jupiter and Saturn','Mars and Jupiter','Venus and Earth'],
['About how old is the solar system?','4.6 billion years','460 million years','13.8 billion years','46 billion years'],
['What is the name of the spiral-arm region containing our Sun?','Orion Spur','Perseus Core','Andromeda Arm','Kuiper Spur'],
['Which dwarf planet was reclassified from planet status in 2006?','Pluto','Ceres','Eris','Haumea'],
['What is an astronomical unit approximately equal to?','The average Earth-Sun distance','The Earth-Moon distance','One light-year','The Sun-Jupiter distance']
],
'Manchester United':[
['How many English league titles has Manchester United won?','20','18','21','13'],
['How many UEFA Champions League/European Cup titles has Manchester United won?','3','2','4','5'],
['In which years did Manchester United win the European Cup/Champions League?','1968, 1999 and 2008','1968, 1994 and 2008','1977, 1999 and 2008','1968, 1999 and 2013'],
['How many FA Cups had Manchester United won by 2024?','13','12','14','11'],
['Which club did Manchester United beat in the 1968 European Cup final?','Benfica','Bayern Munich','Barcelona','Real Madrid'],
['Who scored twice for Manchester United in the 1968 European Cup final?','Bobby Charlton','George Best','Brian Kidd','Denis Law'],
['Which club did United beat to win their first League Cup in 1992?','Nottingham Forest','Liverpool','Aston Villa','Arsenal'],
['Who scored the winner in United’s 1992 League Cup final victory?','Brian McClair','Mark Hughes','Ryan Giggs','Steve Bruce'],
['Which team did Manchester United beat in the 1909 FA Cup final?','Bristol City','Blackpool','Liverpool','Leicester City'],
['Who scored United’s winner in the 1909 FA Cup final?','Sandy Turnbull','Billy Meredith','Charlie Roberts','Jimmy Turnbull'],
['Which manager was appointed by Manchester United in 1986?','Alex Ferguson','Ron Atkinson','Matt Busby','Tommy Docherty'],
['In which season did Manchester United win their first Premier League title?','1992/93','1993/94','1991/92','1995/96'],
['What nickname was given to Matt Busby’s famous young United side?','Busby Babes','Red Devils XI','Fergie Fledglings','Old Trafford Boys'],
['In which year did Manchester United first win the FA Cup?','1909','1908','1911','1948'],
['In which year did Manchester United first win the European Cup?','1968','1958','1999','2008']
],
'DC':[
['What is Wonder Woman’s alter ego?','Diana Prince','Lois Lane','Selina Kyle','Barbara Gordon'],
['Where was Wonder Woman raised?','Themyscira','Metropolis','Gotham City','Oa'],
['In which comic did Wonder Woman first appear?','All-Star Comics #8','Action Comics #1','Detective Comics #27','The Flash #1'],
['What is Superman’s Kryptonian name?','Kal-El','Jor-El','Zod','Kon-El'],
['What is Superman’s civilian identity?','Clark Kent','Bruce Wayne','Barry Allen','Hal Jordan'],
['What is Superman’s base of operations?','Metropolis','Gotham City','Central City','Coast City'],
['In which comic did Superman first appear?','Action Comics #1','Detective Comics #27','All-Star Comics #8','Superman #100']
],
'Harry Potter':[
['What London pub serves as a gateway to Diagon Alley?','The Leaky Cauldron','The Three Broomsticks','The Hog’s Head','The Green Dragon'],
['What is the wizarding prison called?','Azkaban','Nurmengard','Gringotts','St Mungo’s'],
['What species is Aragog?','Acromantula','Basilisk','Thestral','Hippogriff'],
['What type of magical profession hunts Dark witches and wizards?','Auror','Unspeakable','Healer','Magizoologist']
],
'Pokémon':[
['What is Bulbasaur’s National Pokédex number?','1','4','7','25'],
['What are Bulbasaur’s two types?','Grass and Poison','Grass and Ground','Poison and Bug','Grass and Fairy'],
['What type is Charmander?','Fire','Fire and Flying','Dragon','Normal'],
['What are Charizard’s two types?','Fire and Flying','Fire and Dragon','Dragon and Flying','Fire and Ground'],
['What type is Squirtle?','Water','Water and Ice','Water and Ground','Normal'],
['What is Pikachu’s National Pokédex number?','25','26','24','35'],
['What is Numel’s National Pokédex number?','322','323','321','232'],
['What are Numel’s two types?','Fire and Ground','Fire and Rock','Ground and Rock','Fire and Normal']
],
'Disney':[
['In what year was The Walt Disney Company founded?','1923','1928','1937','1955'],
['Which Disney-Pixar film was the first fully computer-animated feature film?','Toy Story','Cars','A Bug’s Life','The Incredibles'],
['In what year was the original Toy Story released?','1995','1994','1996','1998'],
['Which two characters were introduced as central stars of Toy Story?','Woody and Buzz Lightyear','Mike and Sulley','Nemo and Dory','Lightning McQueen and Mater'],
['In what year was the Walt Disney Archives established?','1970','1955','1989','2001']
],
'Films':[
['Which 1995 film became the first fully computer-animated feature?','Toy Story','Jumanji','Pocahontas','Babe'],
['Which organisation maintains the official Academy Awards database?','Academy of Motion Picture Arts and Sciences','British Film Institute','Screen Actors Guild','Hollywood Foreign Press Association']
],
'TV Shows':[
['What species is the Doctor in Doctor Who?','Time Lord','Human','Dalek','Cyberman'],
['What is the Doctor’s time machine called?','TARDIS','Torchwood','Gallifrey','UNIT'],
['Which married couple travelled with the Eleventh Doctor?','Amy Pond and Rory Williams','Rose Tyler and Mickey Smith','Donna Noble and Shaun Temple','Clara Oswald and Danny Pink']
]
}).forEach(([category,rows])=>raw[category].push(...rows));
const numericSeed=[];\n// v86 specialist-round material for the new categories.
[
['How many seasons of Stranger Things are there in the completed Netflix series?',5,'seasons','Stranger Things'],
['In what year does Stranger Things Season 1 begin?',1983,'year','Stranger Things'],
['How many seasons did The Big Bang Theory run?',12,'seasons','Big Bang Theory'],
['How many episodes did The Big Bang Theory produce?',279,'episodes','Big Bang Theory'],
['How many seasons did Friends run?',10,'seasons','Friends'],
['How many episodes of Friends were produced?',236,'episodes','Friends'],
['How many seasons did the original The Walking Dead series run?',11,'seasons','The Walking Dead'],
['In what year did The Walking Dead TV series premiere?',2010,'year','The Walking Dead'],
['In what year did House of the Dragon premiere?',2022,'year','House of the Dragon']
].forEach(x=>numericSeed.push(x));
const numeric=[
['How many bones are in a typical adult human skeleton?',206,'bones','Science'],['How many elements have atomic numbers from 1 to 118?',118,'elements','Science'],['In which year was the first Harry Potter novel published in the UK?',1997,'year','Harry Potter'],['How many players are on one Quidditch team on the pitch?',7,'players','Harry Potter'],['In which year did Manchester United win their 1999 treble?',1999,'year','Manchester United'],['In which year was Manchester United founded as Newton Heath?',1878,'year','Manchester United'],['How many Pokémon were in the original Generation I Pokédex?',151,'Pokémon','Pokémon'],['What is Pikachu’s National Pokédex number?',25,'number','Pokémon'],['How many members begin the Fellowship of the Ring?',9,'members','Lord of the Rings'],['How many rings were given to the dwarf-lords?',7,'rings','Lord of the Rings'],['How many seasons does the HBO Game of Thrones series have?',8,'seasons','Game of Thrones'],['How many dragons hatch for Daenerys at the end of season one?',3,'dragons','Game of Thrones'],['How many dwarfs are in Disney’s Snow White?',7,'dwarfs','Disney'],['In which year was Disney’s The Lion King first released?',1994,'year','Disney'],['How many hearts does an octopus have?',3,'hearts','Marine Biology'],['How many pairs of gill slits do most sharks have?',5,'pairs','Marine Biology'],['How many neck vertebrae does a typical domestic cat have?',7,'vertebrae','Cats'],['How many toes does a typical cat have across all four paws?',18,'toes','Cats'],['How many legs does a spider have?',8,'legs','Animals'],['How many chambers does a crocodile’s heart have?',4,'chambers','Animals'],['In which year was the first Toy Story film released?',1995,'year','Films'],['In which year was the original Jurassic Park released?',1993,'year','Films'],['How many seasons does the original Friends series have?',10,'seasons','TV Shows'],['How many seasons does Breaking Bad have?',5,'seasons','TV Shows'],['How many Infinity Stones are there in the MCU?',6,'stones','Marvel'],['In which year was the first MCU Iron Man film released?',2008,'year','Marvel'],['In which year did Batman first appear in Detective Comics #27?',1939,'year','DC'],['In which year did Superman first appear in Action Comics #1?',1938,'year','DC'],['In which year was the first Sonic the Hedgehog game released?',1991,'year','Video Games'],['How many squares are in a standard Tetris tetromino?',4,'squares','Video Games'],['How many minutes are in a day?',1440,'minutes','General Knowledge'],['How many squares are on a chessboard?',64,'squares','General Knowledge']
].map((r,i)=>({id:`n${i}`,prompt:r[0],value:r[1],unit:r[2],category:r[3]}));
const quoteRowsSeed=[];\n[
["Friends don't lie.","Eleven","Stranger Things"],
["Mornings are for coffee and contemplation.","Jim Hopper","Stranger Things"],
["She's our friend and she's crazy!","Dustin Henderson","Stranger Things"],
["Bazinga!","Sheldon Cooper","Big Bang Theory"],
["Penny, Penny, Penny.","Sheldon Cooper","Big Bang Theory"],
["How you doin'?","Joey Tribbiani","Friends"],
["We were on a break!","Ross Geller","Friends"],
["Pivot!","Ross Geller","Friends"],
["Dreams didn't make us kings. Dragons did.","Daemon Targaryen","House of the Dragon"],
["I want my father to see me as more than his little girl.","Rhaenyra Targaryen","House of the Dragon"],
["We are the walking dead.","Rick Grimes","The Walking Dead"],
["I am not the good guy anymore.","Rick Grimes","The Walking Dead"]
].forEach(x=>quoteRowsSeed.push(x));
const quoteRows=[["You shall not pass!","Gandalf","Lord of the Rings"],["My precious.","Gollum","Lord of the Rings"],["What about second breakfast?","Pippin","Lord of the Rings"],["One does not simply walk into Mordor.","Boromir","Lord of the Rings"],["Winter is coming.","Ned Stark","Game of Thrones"],["Hold the door!","Hodor","Game of Thrones"],["Chaos is a ladder.","Petyr Baelish","Game of Thrones"],["You know nothing, Jon Snow.","Ygritte","Game of Thrones"],["Dracarys.","Daenerys Targaryen","Game of Thrones"],["To infinity and beyond!","Buzz Lightyear","Disney"],["Just keep swimming.","Dory","Disney"],["Hakuna Matata!","Timon and Pumbaa","Disney"],["Ohana means family.","Lilo","Disney"],["The cold never bothered me anyway.","Elsa","Disney"],["It's-a me, Mario!","Mario","Video Games"],["Finish him!","Mortal Kombat announcer","Video Games"],["Would you kindly?","Atlas","Video Games"],["War. War never changes.","Fallout narrator","Video Games"],["You're a wizard, Harry.","Rubeus Hagrid","Harry Potter"],["Always.","Severus Snape","Harry Potter"],["Mischief managed.","Harry Potter","Harry Potter"],["I solemnly swear that I am up to no good.","Harry Potter","Harry Potter"],["Not my daughter, you bitch!","Molly Weasley","Harry Potter"],["I am Iron Man.","Tony Stark","Marvel"],["I am Groot.","Groot","Marvel"],["We have a Hulk.","Tony Stark","Marvel"],["Wakanda forever!","T'Challa","Marvel"],["Dormammu, I've come to bargain.","Doctor Strange","Marvel"],["Why so serious?","The Joker","DC"],["I'm Batman.","Batman","DC"],["I am vengeance.","Batman","DC"],["I'll be back.","The Terminator","Films"],["Here's Johnny!","Jack Torrance","Films"],["E.T. phone home.","E.T.","Films"],["Nobody puts Baby in a corner.","Johnny Castle","Films"],["I see dead people.","Cole Sear","Films"],["Why did it have to be snakes?","Indiana Jones","Films"],["Wax on, wax off.","Mr. Miyagi","Films"],["Show me the money!","Jerry Maguire","Films"],["You talking to me?","Travis Bickle","Films"],["How you doin'?","Joey Tribbiani","TV Shows"],["Lovely jubbly!","Del Boy","TV Shows"],["D'oh!","Homer Simpson","TV Shows"],["Bazinga!","Sheldon Cooper","TV Shows"],["I am the one who knocks!","Walter White","TV Shows"],["No soup for you!","The Soup Nazi","TV Shows"],["Suit up!","Barney Stinson","TV Shows"],["Pika pika!","Pikachu","Pokémon"],["Prepare for trouble!","Jessie","Pokémon"],["Make it double!","James","Pokémon"],["Wobbuffet!","Wobbuffet","Pokémon"],["Meowth, that's right!","Meowth","Pokémon"]];\nquoteRows.push(...quoteRowsSeed);\nnumeric.push(...numericSeed);
const quotePeople=[...new Set(quoteRows.map(r=>r[1]))];
const quotes=quoteRows.map((r,i)=>{let pool=quotePeople.filter(x=>x!==r[1]),wrong=[pool[(i*7)%pool.length],pool[(i*7+11)%pool.length],pool[(i*7+23)%pool.length]];return {id:'quote'+i,category:r[2],prompt:'Who said “'+r[0]+'”?',answer:r[1],options:[r[1],...wrong]}});
const flagPics=[
['Japan','#fff','#bc002d','circle'],['France','#002395','#fff','#ed2939'],['Italy','#009246','#fff','#ce2b37'],['Germany','#000','#dd0000','#ffce00'],['Belgium','#000','#ffd90c','#ef3340'],['Ireland','#169b62','#fff','#ff883e'],['Romania','#002b7f','#fcd116','#ce1126'],['Nigeria','#008751','#fff','#008751']
];
const pictureRows=flagPics.map((x,i)=>{let [name,a,b,c]=x,svg=c==='circle'?'<rect width="400" height="260" fill="'+a+'"/><circle cx="200" cy="130" r="72" fill="'+b+'"/>':'<rect width="134" height="260" fill="'+a+'"/><rect x="134" width="133" height="260" fill="'+b+'"/><rect x="267" width="133" height="260" fill="'+c+'"/>';let others=flagPics.filter(y=>y[0]!==name).slice(i%4,i%4+3).map(y=>y[0]);return {prompt:"Which country's flag is this?",answer:name,options:[name,...others],svg,category:'General Knowledge'}});
[['Triangle','200,35 330,225 70,225'],['Square','95,45 305,45 305,215 95,215'],['Pentagon','200,28 310,108 268,230 132,230 90,108'],['Hexagon','105,130 155,43 245,43 295,130 245,217 155,217'],['Octagon','135,35 265,35 330,100 330,160 265,225 135,225 70,160 70,100'],['Diamond','200,25 330,130 200,235 70,130']].forEach((x,i,all)=>pictureRows.push({prompt:'Name this geometric shape.',answer:x[0],options:[x[0],...all.filter(y=>y[0]!==x[0]).slice(0,3).map(y=>y[0])],svg:'<rect width="400" height="260" fill="#182338"/><polygon points="'+x[1]+'" fill="#f1be5b"/>',category:'General Knowledge'}));
const animalPics=[['Cat','🐈','Cats'],['Dog','🐕','Animals'],['Lion','🦁','Animals'],['Tiger','🐅','Animals'],['Elephant','🐘','Animals'],['Giraffe','🦒','Animals'],['Zebra','🦓','Animals'],['Penguin','🐧','Animals'],['Octopus','🐙','Marine Biology'],['Dolphin','🐬','Marine Biology'],['Shark','🦈','Marine Biology'],['Whale','🐋','Marine Biology']];
animalPics.forEach((x,i)=>pictureRows.push({prompt:'Which animal is shown?',answer:x[0],options:[x[0],...animalPics.filter(y=>y[0]!==x[0]).slice(i%7,i%7+3).map(y=>y[0])],svg:'<rect width="400" height="260" fill="#e8f3ff"/><text x="200" y="180" text-anchor="middle" font-size="140">'+x[1]+'</text>',category:x[2]}));
const pictures=pictureRows.map((p,i)=>({...p,id:'pic'+i,image:'data:image/svg+xml;base64,'+(typeof Buffer!=='undefined'?Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260">'+p.svg+'</svg>').toString('base64'):btoa(unescape(encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260">'+p.svg+'</svg>'))))}));

// v85: generated special-round filler retired; only explicit curated entries remain.\nconst data={categories,questions,numeric,quotes,pictures}; if(typeof module!=='undefined')module.exports=data;else root.QuizData=data;
})(typeof globalThis!=='undefined'?globalThis:this);
