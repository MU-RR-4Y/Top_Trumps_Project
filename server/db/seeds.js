use card_pack;
db.dropDatabase();

db.dinosaurs.insertMany([
    {
        image: "Pachycephalosaurus.jpg",
        name: "Pachycephalosaurus",
        diet: "Herbivore",
        description: "Pachycephalosaurus is famous for having a large, bony dome atop its skull, up to 25 cm thick, which safely cushioned its tiny brain. Pachycephalosaurs were herding dinosaurs that lived in small groups in coastal and upland regions.",
        height: 19.7,
        weight: 6614,
        length: 26.2,
        danger_rating: 2,
        intelligence: 7,
        age: 76,
    },
    {
        image: "TRex.jpg",
        name: "Tyrannosaurus Rex",
        diet: "Carnivore",
        description: "Tyrannosaurus-rex was one of the most ferocious predators to ever walk the Earth. With a massive body, sharp teeth, and jaws so powerful they could crush a car.",
        height: 18.4,
        weight: 13227,
        length: 39.3,
        danger_rating: 9,
        intelligence: 9,
        age: 67,
    },
    {
        image: "Barosaurus.jpg",
        name: "Barosaurus",
        diet: "Herbivore",
        description: "Barosaurus was a giant dinosaur that was very slow moving. It was a long-tailed, long-necked, plant-eating sauropod closely related to the more familiar Diplodocus. ",
        height: 85.3,
        weight: 8819,
        length: 85.3,
        danger_rating: 3,
        intelligence: 2,
        age: 156,
    },
    {
        image: "Heterodontosaurus.jpg",
        name: "Heterodontosaurus",
        diet: "Herbivore",
        description: "Heterodontosaurus was a small, lightly-built dinosaur with three different kinds of teeth (hence its name) and a beak. It had five-fingered hands with claws, and three-toed feet with claws.",
        height: 1.6,
        weight: 22,
        length: 3.9,
        danger_rating: 1,
        intelligence: 5,
        age: 208,
    },
    {
        image: "Suchomimus.jpg",
        name: "Suchomimus",
        diet: "Carnivore",
        description: "Suchomimus had a two-foot-high sail on its lower back. This dinosaur had a very long snout - around 1.2m - and huge, foot-long thumb claws. It is thought these adaptations were used to catch fish.",
        height: 13.1,
        weight: 11023,
        length: 39.3,
        danger_rating: 8,
        intelligence: 7,
        age: 100,
    },
    {
        image: "Pachyrhinosaurus.jpg",
        name: "Pachyrhinosaurus",
        diet: "Herbivore",
        description: "Pachyrhinosaurus was a large, plant-eating dinosaur that had a bony, spiked neck frill, four short legs, and a short tail. Pachyrhinosaurus may or may not have had a snout horn - it did have a large bony bump on its nose.",
        height: 9.8,
        weight: 8000,
        length: 23,
        danger_rating: 2,
        intelligence: 4,
        age: 70,
    },
    {
        image: "Compsognathus.jpg",
        name: "Compsognathus",
        diet: "Carnivore",
        description: "Compsognathus was a bird-like dinosaur that walked on two long, thin legs; it had three-toed feet. A long tail acted as a counterbalance and for stability during fast turns. It had short arms with two clawed fingers on each hand.",
        height: 2.3,
        weight: 7,
        length: 4.6,
        danger_rating: 5,
        intelligence: 7,
        age: 145,
    },
    {
        image: "Iguanodon.jpg",
        name: "Iguanodon",
        diet: "Herbivore",
        description: "Iguanodon was a plant-eating dinosaur that had a conical spike on each thumb. It was probably a herding animal, as evidenced by bonebed discoveries in Belgium. In these bonebeds, dozens of Iguanodon fossils were found together, suggesting that they congregated during their lives.",
        height: 16.4,
        weight: 9920,
        length: 32.8,
        danger_rating: 3,
        intelligence: 6,
        age: 135,
    },
    {
        image: "Pentaceratops.jpg",
        name: "Pentaceratops",
        diet: "Herbivore",
        description: "Pentaceratops was a rhinoceros-like plant-eating dinosaur. It walked on four sturdy legs and had three horns on its face along with a large bony plate projecting from the back of its skull (a frill). ",
        height: 9.8,
        weight: 17636,
        length: 26.2,
        danger_rating: 3,
        intelligence: 5,
        age: 75,
    },
    {
        image: "Coelophysis.jpg",
        name: "Coelophysis",
        diet: "Carnivore",
        description: "Coelophysis was a small, lightly-built dinosaur that walked on two long legs. This predator was about 2.8m long. It had light, hollow bones, a long, pointed head with dozens of small, serrated teeth, three clawed fingers on its hands, and a long neck.",
        height: 6.6,
        weight: 60,
        length: 9.8,
        danger_rating: 4,
        intelligence: 7,
        age: 225,
    },
    {
        image: "Velociraptor.jpg",
        name: "Velociraptor",
        diet: "Carnivore",
        description: "Velociraptor had a sharp, deadly, sickle-shaped, retractible, 9 cm long claw on each foot (located on each second toe). They may have been able to run up to roughly 40 mph for short bursts. It is thought they hunted together in packs.",
        height: 3.3,
        weight: 33,
        length: 6.6,
        danger_rating: 9,
        intelligence: 10,
        age: 85,
    },
    {
        image: "Centrosaurus.jpg",
        name: "Centrosaurus",
        diet: "Herbivore",
        description: "Centrosaurus was a four-legged plant-eating dinosaur that had many horns on its head. They lived in herds during the late Cretaceous period. This dinosaur was an herbivore that ate low-lying plants.",
        height: 6.6,
        weight: 2205,
        length: 19.7,
        danger_rating: 2,
        intelligence: 4,
        age: 76,
    },
    {
        image: "Megalosaurus.jpg",
        name: "Megalosaurus",
        diet: "Carnivore",
        description: "Megalosaurus was a large, meat-eating dinosaur. It walked on two powerful legs, had a strong, short neck, and a large head with sharp, serrated teeth. Megalosaurus was the first dinosaur fossil discovered (in England in 1676).",
        height: 9.8,
        weight: 2205,
        length: 29.5,
        danger_rating: 9,
        intelligence: 8,
        age: 175,
    },
    {
        image: "Protoceratops.jpg",
        name: "Protoceratops",
        diet: "Herbivore",
        description: "Protoceratops walked on four legs, had a large head, a bulky body, a parrot-like beak, cheek teeth, and a small frill on its head. Males may have had larger frills than females, indicating that the frill may have been used in courtship and mating.",
        height: 4.9,
        weight: 881,
        length: 6.6,
        danger_rating: 2,
        intelligence: 4,
        age: 72,
    },
    {
        image: "Giganotosaurus.jpg",
        name: "Giganotosaurus",
        diet: "Carnivore",
        description: "The longest meat-eating dinosaur yet discovered is Giganotosaurus, a 14m long behemoth, who weighed about 8 tons and stood 12 feet tall (at the hips). It walked on two legs, had a brain the size of a banana, and had enormous jaws with 8-inch long serrated teeth in a 1.8 m long skull. ",
        height: 19.7,
        weight: 17636,
        length: 52.5,
        danger_rating: 10,
        intelligence: 7,
        age: 100,
    },
    {
        image: "Brachiosaurus.jpg",
        name: "Brachiosaurus",
        diet: "Herbivore",
        description: "Brachiosaurus was one of the tallest and largest dinosaurs yet found. It had a long neck, small head, and relatively short, thick tail. They walked on four legs and, like the other Brachiosaurids and unlike most dinosaurs, its front legs were longer than its hind legs.",
        height: 52.5,
        weight: 17636,
        length: 85.3,
        danger_rating: 3,
        intelligence: 2,
        age: 156,
    },
    {
        image: "Herrerasaurus.jpg",
        name: "Herrerasaurus",
        diet: "Carnivore",
        description: "Herrerasaurus was one of the earliest dinosaurs. It walked on two long legs and had sharp teeth. The arms were short and the fingers had sharp claws. The first Herrerasaurus fossil was found in 1958 by Don Victorino Herrera.",
        height: 3.3,
        weight: 772,
        length: 16.4,
        danger_rating: 7,
        intelligence: 6,
        age: 230,
    },
    {
        image: "Gallimimus.jpg",
        name: "Gallimimus",
        diet: "Omnivore",
        description: "Gallimimus was a fast-running dinosaur with a very long, thin, flattened, toothless, horny beak, a small head, and a relatively large brain. The bottom front part of its beak was shaped like a shovel. It had large eyes positioned on opposite sites of its head.",
        height: 9.8,
        weight: 440,
        length: 18.3,
        danger_rating: 5,
        intelligence: 7,
        age: 74,
    },
    {
        image: "Triceratops.jpg",
        name: "Triceratops",
        diet: "Herbivore",
        description: "Triceratops walked on four sturdy legs and had three horns on its face along with a large bony plate projecting from the back of its skull (a frill). One short horn above its parrot-like beak and two longer horns above its eyes probably provided protection from predators.",
        height: 9.8,
        weight: 12125,
        length: 29.5,
        danger_rating: 2,
        intelligence: 4,
        age: 72,
    },
    {
        image: "Corythosaurus.jpg",
        name: "Corythosaurus",
        diet: "Herbivore",
        description: "Corythosaurus was a large duck-billed dinosaur with a hollow, bony crest in the shape of a helmet. Their nostrils went up through the crest, which may have been used to make sounds, as a cooling device, courtship displays, and/or as a sense-of-smell enhancer.",
        height: 16.4,
        weight: 11023,
        length: 26.2,
        danger_rating: 2,
        intelligence: 5,
        age: 80,
    },
    {
        image: "Maiasaura.jpg",
        name: "Maiasaura",
        diet: "Herbivore",
        description: "Maiasaura was the first dinosaur that was found alongside its young, eggs, and nests - suggesting it nurtured its young. It's a duck-billed dinosaur with a flat skull. This plant-eater had a toothless beak, cheek pouches, and many self-sharpening teeth.",
        height: 8.2,
        weight: 6614,
        length: 29.5,
        danger_rating: 2,
        intelligence: 3,
        age: 80,
    },
    {
        image: "Dimorphodon.jpg",
        name: "Dimorphodon",
        diet: "Carnivore",
        description: "Strictly not a dinosaur, but a type of extinct, flying reptile. It had a huge head with deep, wide, toothed jaws resembling the beak of the modern-day puffin, a short neck, and a diamond-shaped flap of skin at the end of the long, pointed tail.",
        height: 0.82,
        weight: 9,
        length: 0.82,
        danger_rating: 4,
        intelligence: 4,
        age: 200,
    },
    {
        image: "Stegosaurus.jpg",
        name: "Stegosaurus",
        diet: "Herbivore",
        description: "Stegosaurus had 17 bony plates embedded in two rows along its back. The largest of these triangular plates was about 76 cm tall and just as long. Stegosaurus also had spikes at the end of its flexible tail.",
        height: 9.8,
        weight: 6834,
        length: 29.5,
        danger_rating: 2,
        intelligence: 1,
        age: 76,
    },
    {
        image: "Stenonychosaurus.jpg",
        name: "Stenonychosaurus",
        diet: "Carnivore",
        description: "Stenonychosaurus had the largest brain of any know dinosaur - giving it a reputation as the 'Brainiest Dinosaur' among all. Their eyes were very large (perhaps suggesting a partially nocturnal lifestyle), and slightly forward facing. ",
        height: 5.9,
        weight: 132,
        length: 6.6,
        danger_rating: 7,
        intelligence: 10,
        age: 76,
    },
    {
        image: "Hypsilophodon.jpg",
        name: "Hypsilophodon",
        diet: "Herbivore",
        description: "Slender legs and a stiffened tail gave the Hypsilophodon speed and agility. It had large eyes, strong jaws, five-fingered hands and four-toed feet. They had a beak made of horn and 28-30 self-sharpening teeth in a small skull",
        height: 2.6,
        weight: 110,
        length: 6.6,
        danger_rating: 1,
        intelligence: 6,
        age: 125,
    },
    {
        image: "Camarasaurus.jpg",
        name: "Camarasaurus",
        diet: "Herbivore",
        description: "Over 100 different specimens of Camarasaurus have been found by paleontologists. It was a long-necked, long-tailed giant herbivore. It also had an enlarged head with a blunt snout and spoon-shaped teeth.",
        height: 29.5,
        weight: 4409,
        length: 59.1,
        danger_rating: 3,
        intelligence: 2,
        age: 150,
    },
    {
        image: "Styracosaurus.jpg",
        name: "Styracosaurus",
        diet: "Herbivore",
        description: "The Styracosaurus had a very distinctive skull, with 7 to 9 horns. These horns probably provided protection from predators, and were possibly used in mating rituals and rivalry. It had a short, thick, pointed tail, a bulky body and a large skull and beak.",
        height: 6.6,
        weight: 6614,
        length: 16.4,
        danger_rating: 2,
        intelligence: 3,
        age: 77,
    },
    {
        image: "Euoplocephalus.jpg",
        name: "Euoplocephalus",
        diet: "Herbivore",
        description: "The Euoplocephalus was roughly the size of a rhinoceros, it probably weighed a lot more thanks to its thick armour. Its entire top side was heavily protected from carnivores with thick, oval plates embedded in leathery skin, rows of large spikes along its body, large horns protecting the head, and a raised, club-like tail. ",
        height: 5.9,
        weight: 4409,
        length: 19.7,
        danger_rating: 3,
        intelligence: 3,
        age: 76,
    },
    {
        image: "Archaeopteryx.jpg",
        name: "Archaeopteryx",
        diet: "Omnivore",
        description: "Archaeopteryx is often called the 'first bird', because the winged creature was the first to show an evolutionary link between birds and reptiles. Like modern day birds, it had feathers and hollow bones. Unlike modern birds, it had teeth and three claws on each wing.",
        height: 1,
        weight: 13,
        length: 1,
        danger_rating: 6,
        intelligence: 5,
        age: 150,
    },
    {
        image: "Oviraptor.jpg",
        name: "Oviraptor",
        diet: "Carnivore",
        description: "Oviraptor was a small, bird-like dinosaur. Its name translates to 'egg thief', though they were quite protective of their own eggs. It was lightly built, fast-moving with long legs. Its strangely-shaped, parrot-like head had a short, toothless beak and extremely powerful jaws, built for crushing action. ",
        height: 2.6,
        weight: 44,
        length: 5.9,
        danger_rating: 5,
        intelligence: 8,
        age: 70,
    },

]);	
