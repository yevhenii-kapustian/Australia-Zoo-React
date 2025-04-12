function Animal(name, lifespan, group, food, description, length, weight, found, img) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
    this.img = img;
}

export const mammals = [
    new Animal(
        "Echidna",
        "50 years",
        "mammals",
        "insects such as ants and termites, beetle larvae and worms",
        "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
        "76cm",
        "10kg",
        "Throughout Australia",
        "Echidna.JPG"
    ),

    new Animal(
        "Tasmanian Devil",
        "5 years",
        "mammals",
        "meat from other animals such as wallabies and wombats",
        "The Tasmanian devil is a carnivorous marsupial. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales. It became the largest carnivorous marsupial in the world following the extinction of the thylacine. It is characterised by its muscular build, black fur, pungent odour, loud screech, keen sense of smell, and ferocity when feeding.",
        "70cm",
        "10kg",
        "Tasmania",
        "Tasmanian-devil.JPG"
    ),

    new Animal(
        "Quokka",
        "10 years",
        "mammals",
        "shrubs and grasses",
        "The Quokka, Setonix brachyurus, was described by Dutch explorer Willem de Vlamingh as a kind of rat as big as a common cat. It looks like other wallabies and has coarse grey-brown fur with lighter parts underneath. The tail is short and mostly devoid of hair.",
        "50cm",
        "3kg",
        "Rottnest Island and mainland Western Australia",
        "Quokka.JPG"
    )
]

export const reptiles = [
    new Animal(
        "Frill-necked Lizard",
        "20 years",
        "reptiles",
        "small insects and spiders",
        "When threatened, it rises on hind legs, opens its yellow mouth, unfurls the frill around its head, and hisses. If not effective, it bolts and runs until it reaches safety.",
        "90cm",
        "1kg",
        "Northern Australia",
        "Frill-necked-lizard.JPG"
    ),

    new Animal(
        "Hawksbill Turtle",
        "50 years",
        "reptiles",
        "sponges, jellyfish, sea plants",
        "The Hawksbill Sea Turtle gets its name from its beak-like mouth. The shell is covered in overlapping scutes forming a serrated edge. It has flippers with two claws and scales on its head and flippers.",
        "80cm",
        "50kg",
        "Tropical coasts of Queensland, NT, and WA",
        "Hawksbill-turtle.JPG"
    ),

    new Animal(
        "Perentie",
        "20 years",
        "reptiles",
        "kangaroos, rabbits, lizards, birds",
        "The Perentie is the largest monitor lizard in Australia, and among the largest in the world. Found west of the Great Dividing Range, it's shy and rarely seen. It has cultural significance for Aboriginal peoples.",
        "2.5m",
        "20kg",
        "Deserts",
        "Perentie.JPG"
    )
]

export const birds = [
    new Animal(
        "Cassowary",
        "20 years",
        "birds",
        "fruit, insects, small animals like mice and lizards",
        "Cassowaries can stand up to six feet tall and weigh 160 pounds. They cannot fly but can run and swim fast. Shy in the wild but can be dangerous if provoked.",
        "1.7m",
        "44kg",
        "Queensland",
        "Cassowary.JPG"
    ),

    new Animal(
        "Kookaburra",
        "20 years",
        "birds",
        "insects, snakes, frogs, lizards",
        "Native to eucalyptus forests of eastern Australia, the laughing kookaburra is the largest Kingfisher. Recognizable by its white head, black eye stripes, and reddish tail.",
        "43cm",
        "300g",
        "Australia wide",
        "Kookaburra.JPG"
    ),

    new Animal(
        "Yellow Tailed Black Cockatoo",
        "41 years",
        "birds",
        "fruit, seeds, plant material",
        "Mostly black with yellow cheek patches and tail band. Males have black beaks, females bone-coloured. Their calls are loud and wailing. Found in forests across southeast Australia.",
        "65cm",
        "900g",
        "SE Australia",
        "Yellow-tailed-black-cockatoo.JPG"
    )
]

export const allAnimals = [...mammals, ...reptiles, ...birds]

export const animalsByPage = {
    home: allAnimals,
    mammals: mammals,
    reptiles: reptiles,
    birds: birds,
};