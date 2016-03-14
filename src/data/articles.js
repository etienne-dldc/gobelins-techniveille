const read = "Lire l'article complet";
const watch = "Voir la vidéo";

const articles = [


    // MÉDECINE
    {
      title: "Des plâtres design grâce à l’impression 3D",
      cover: require('./images/cortex.jpg'),
      resume: "Un plâtre qui respire s'adaptant à la forme du bras, léger, aéré, résistant à l'eau et très design. C’est l’invention de Jake Evill, un étudiant de l’Université Victoria de Wellington. L’imprimante 3D Cortex permet de créer un plâtre en Nylon sur mesure en fonction des différentes blessures.",
      category: 'medecine',
      button: read,
      type: 'article',
      link: 'http://jakevilldesign.dunked.com/cortex',
      date: '2016-12-31'
    },
    {
      title: "Des mains 3D pour des enfants handicapés",
      cover: require('./images/main3D.jpg'),
      resume: "Un plâtre qui respire s'adaptant à la forme du bras, léger, aéré, résistant à l'eau et très design. C’est l’invention de Jake Evill, un étudiant de l’Université Victoria de Wellington. L’imprimante 3D Cortex permet de créer un plâtre en Nylon sur mesure en fonction des différentes blessures.",
      category: 'medecine',
      button: read,
      type: 'article',
      link: 'http://www.industrie-techno.com/une-collaboration-globale-pour-offrir-des-mains-imprimees-en-3d-a-des-enfants.29578',
      date: '2014-04-25'
    },
    {
      title: "Impression de tissus cellulaires",
      cover: require('./images/tissus3D.jpg'),
      resume: 'La start-up BioBots a créé une imprimante capable de créer des tissus humains vivants.<br />Cette technique permettrait de tester des médicaments en laboratoire, sans utiliser de cobayes animaliers ainsi que de créer des médicaments adaptés à chaque individu grâce à la reproduction des tissus cellulaires des patients, pouvant ainsi être utilisé pour tester différents traitements.',
      category: 'medecine',
      button: read,
      type: 'article',
      link: 'http://www.atelier.net/trends/articles/impression-3d-desormais-creer-vie_438092',
      date: '2015-09-20'
    },
    {
      title: "Un homme retrouve sont visage grâce à l’imprimante 3D",
      cover: require('./images/visage.jpg'),
      resume: 'Eric Moger a perdu le côté gauche de son visage suite aune chirurgie pour enlever une tumeur. Après la chirurgie, il était incapable de manger et boire correctement en raison du trou dans son visage. Après qu’un médecin est utilisé la technique de l’impression 3D pour créer une prothèse et de reconstruire le côté gauche de son visage, l’homme a finalement été en mesure de reprendre sa vie comme une personne normale.',
      category: 'medecine',
      button: watch,
      type: 'video',
      link: 'https://www.youtube.com/watch?v=5SWw_qM6_8I',
      date: '2013-04-02'
    },
    {
      title: "Impression de cartilage.",
      cover: require('./images/cartilage.jpg'),
      resume: "L'arthrose, est la forme la plus fréquente d'arthrite. Il s'agit d'une maladie dégénérative causée par une désintégration du cartilage autour des articulations. Sera-t-il bientôt possible d’aller chez son médecin pour remplacer son cartilage endommagé par du cartilage imprimé en 3D ? C’est sur ce sujet que travaille Rocky Tuan, chercheur de l'école de médecine de Pittsburgh.",
      category: 'medecine',
      button: read,
      type: 'article',
      link: 'http://www.huffingtonpost.fr/2014/05/02/traitement-arthrose-cartilage-developpe-methode-impression-3d_n_5251890.html',
      date: '2014-05-02'
    },
    {
      title: "Un bébé sauvé par une imprimante 3D.",
      resume: "Opération cardiaque réussie pour un bébé de 14 mois grâce à l'impression en trois dimensions de son coeur. Son coeur a été reproduit en trois dimensions, permettant au chirurgien de repérer à l’avance les malformations et de réparer avec succès le jeune organe défaillant.",
      category: 'medecine',
      button: read,
      type: 'article',
      link: 'http://www.lepoint.fr/sante/etats-unis-un-bebe-sauve-par-une-imprimante-3d-26-02-2014-1795915_40.php',
      cover: require('./images/heart.jpg'),
      date: '2014-02-26'
    },

    // ART
    {
      title: "FutureCraft, la chaussure imprimée en 3D d’adidas",
      resume: "La marque Adidas a développé un prototype de basket dont la semelle est imprimée en 3D dans le cadre de sa série “Futurecraft” destinée à explorer de nouveaux horizons en terme de manufacture de chaussure. L’idée est de créer des paires de chaussures sur mesures et adaptées aux besoins de  chaque consommateurs en imprimant la semelle directement en 3D ",
      button: read,
      type: 'article',
      link: 'http://www.3dnatives.com/basket-imprimee-3d-adidas-08102015/',
      category: 'art',
      date: '2015-10-08',
      cover: require('./images/futurecraft.jpg')
    },
     {
      title: "Le premier court-métrage en impression 3D",
      resume: "« Chase Me » est le dernier projet très ambitieux de l’artiste français Gilles-Alexandre Deschaud, tout juste sorti du four, ou plutôt de l’imprimante.  Après le stop motion en pâte à modeler, voici donc celui usant de la technologie 3D. Un croisement des techniques qui offre un mode d’animation inédit et des images aussi soignées que délicates. ",
      button: read,
      type: 'article',
      link: 'http://nebuleuz.com/2015/04/22/un-artiste-francais-realise-le-premier-court-metrage-en-impression-3d/',
      category: 'art',
      date: '2015-04-22',
      cover: require('./images/chase-me.jpg')
    },
    {
      title: "L'impression 3D s'invite à la cérémonie des oscars",
      resume: "L’academy of motion picture Art and science a eu recours à l’impression 3D pour fabriquer les statuettes de la dernière édition des oscars. En effet l’impression 3D s’est révélé être le meilleur moyen de répliquer la statuette originale créée en 1929. Une utilisation surprenante de l’impression 3D qui comme à son habitude est toujours là où on ne l’attend pas ",
      button: read,
      type: 'article',
      link: 'http://www.3dnatives.com/impression-3d-oscars23022016/',
      category: 'art',
      date: '2016-02-23',
      cover: require('./images/oscar.jpg')
    },
    {
      title: "Une façade imprimée en 3D pour le Conseil de l’UE",
      resume: "Depuis le début du mois de janvier, les politiques et officiels européens ont le privilège de découvrir la magnifique façade imprimée en 3D du Conseil de l’Union Européenne. Réalisée à partir d’une imprimante 3D XXL, les panneaux sont entièrement amovibles. Curieuse et innovante, cette oeuvre architecturale présage peut-être de ce à quoi pourrait ressembler les bâtiments de demain, qui eux seront peut-être entièrement fabriqué en 3D... ",
      button: read,
      type: 'article',
      link: 'http://www.3dnatives.com/facade-imprimee-3d-union-europeenne-12012016/',
      category: 'art',
      date: '2016-12-01',
      cover: require('./images/EU-council.jpg')
    },
    {
      title: "Penis Wall",
      resume: "Le titre en dit déjà beaucoup. Penis Wall est une sculpture cinétique composée de 81 pénis qui répondent aux mouvement du spectateur ou au mouvements réels de la bourse (non, pas celle qui se trouve dans le caleçon).",
      date: '2014-05-28',
      category: 'art',
      button: read,
      type: 'article',
      link: 'http://peiqi.su/peniswall.html',
      cover: require('./images/penis.jpg')
    },

    // INDUSTRIE
    {
      title: " Des voitures imprimées en 3D par Local Motors",
      resume: "Les voitures imprimées partiellement 3D existent déjà, mais aucune n’a encore été commercialisée au public. Local Motors veut révolutionner le secteur automobile ; savez-vous comment ? En commercialisant la première voiture imprimée en 3D, en série. La LM3D devrait débarquer en 2017, le temps pour le constructeur de finaliser les certifications et autres détails.",
      date: '2015-11-13',
      category: 'industrie',
      button: read,
      type: 'article',
      link: 'http://www.paruvendu.fr/auto-moto/I/la-lm3d-de-local-motors-premiere-voiture-en-3d-produite-en-serie-i37865',
      cover: require('./images/LM3D-Swim.jpg')
    },
    {
      title: "LixPen, le plus fin stylo “imprimeur 3D” commercialisé",
      resume: "Lix Pen est le premier stylo 3D digne de ce nom, aussi fin qu’un stylo classique! Conçu pour extruder du plastique ABS ou PLA à une température allant de 160°C et 230°C représentée par un système de LED, le Lix Pen tient dans une poche de chemise et ne risque pas de faire tâche avec son design “unibody” noir ou alu. D’un point de vue fonctionnel, ce nouveau stylo 3D est alimenté par un simple câble USB et dispose de deux boutons pour contrôler l’extrusion (arrêt/démarrage et vitesse).",
      date: '2014-10-14',
      category: 'industrie',
      button: read,
      type: 'article',
      link: 'http://lixpen.com/',
      cover: require('./images/lixpen.jpg')
    },
    {
      title: "10 maisons imprimées en 24 heures",
      resume: "Une entreprise chinoise basée à Shanghai a fait construire dix maisons en une seule journée en utilisant l’imprimante 3D. Les murs sont principalement constitués de déchets de construction recyclés et mélangés à du ciment. Cette méthode, d’après le constructeur, est respectueuse de l’environnement tout en étant plus rapide et moins chère qu’une construction classique.",
      date: '2014-04-16',
      category: 'industrie',
      button: watch,
      type: 'video',
      link: 'https://www.youtube.com/watch?v=SObzNdyRTBs',
      cover: require('./images/chine_2_0.jpg')
    },
    {
      title: "Des robots 3D autodidactes",
      resume: "Les équipes de l'université d'Oslo (Norvège) ont conçu un programme permettant aux robots de s'adapter aux différentes modifications de l'environnement. Équipés de ce logiciel, les robots évaluent leur performance, optimisent leur adaptation et même s'auto-réparent. Après diagnostic de ses besoins, le robot doté d'une imprimante 3D fabrique les pièces qui lui sont nécessaires. Une innovation à exploiter lors des explorations spatiales ou des catastrophes naturelles.",
      date: '2014-11-12',
      category: 'industrie',
      button: read,
      type: 'article',
      link: 'https://www.apollon.uio.no/english/articles/2014/4_robots.html',
      cover: require('./images/4_roboter_forskere.jpg')
    },
    {
      title: "Cody Wilson, fabriquant d’armes en 3D",
      resume: "Un certain Cody Wilson a récemment annoncé la mise en ligne imminente des plans d’un fusil d’assaut semi-automatique imprimable en 3D pour seulement 150$. Cet homme n’est pas un inconnu, en effet c’est à lui que l’on doit le célèbre “liberator”, une arme a feu facilement imprimable en 3D qui a fait grand bruit en 2013. Une personnalité sujette à controverse donc, tout comme la possibilité d’imprimer des armes à feu depuis chez soi.",
      date: '2015-11-25',
      category: 'industrie',
      button: read,
      type: 'article',
      link: 'http://3dprint.com/116658/wilson-3d-files-machine-gun/',
      cover: require('./images/patrick.jpg')
    },
    {
      title: "Le premier revolver imprimé en 3D",
      resume: "Un étudiant en ingénierie a réussi à créer le tout premier revolver imprimé en 3D. Ne nécessitant en plus du mode 3Dl que d’un percuteur et de quelques élastiques, celui-ci est capable de tirer 6 balles de façon automatique. Une nouvelle invention qui menace la sécurité publique, tant la fabrication de l’arme est facile pour qui dispose d’une imprimante 3D et du matériau de base adéquat.",
      date: '2015-11-23',
      category: 'industrie',
      button: read,
      type: 'article',
      link: "http://3dprint.com/107062/worlds-1st-3d-printed-revolver/",
      cover: require('./images/gun.jpg')
    },

    // ESPACE

    {
      title: "Impression d’un propulseur métalique en 3D",
      resume: "La NASA s’intéresse de plus en plus à l’impression 3D, principalement à l’impression d’objets métalliques. Elle a récemment réalisé un injecteur de fusée avec cette technologie… En 10 jours au lieu de 6 à 9 mois pour les injecteurs classiques.",
      date: '2015-10-19',
      category: 'espace',
      button: read,
      type: 'article',
      link: 'http://3dprintingindustry.com/2015/10/19/metal-3d-printing-is-helping-nasa-blast-off-into-space/',
      cover: require('./images/3d-rocket-injector.jpg')
    },
    {
      title: "Concours d’habitats martiens imprimés en 3D",
      resume: "La NASA a organisé un concours au sein duquel les participants devaient concevoir les futurs habitats martiens imprimés en 3D. L’organisme prévoit en effet très sérieusement d’utiliser l’impression 3D pour créer les bâtiments servant de refuges aux premiers colons martiens, qui selon la NASA, devraient atterrir courant 2030.",
      date: '2015-10-19',
      category: 'espace',
      button: read,
      type: 'article',
      link: 'http://www.space.com/30854-nasa-3d-printed-mars-habitat-contest-winners.html',
      cover: require('./images/3d-printed-home.jpg')
    },
    {
      title: "Imprimante 3D à bord de l’ISS",
      resume: "Deux compagnies américaines prévoient d’envoyer une imprimante 3D fonctionnant même en situation de microgravité à bord de l’ISS, celle-ci viendra renforcer le prototype déjà à bord de la station. L’impression 3D se présente comme une technologie cruciale dans la conquête spatiale tant elle est flexible et renouvelable.",
      date: '2015-10-29',
      category: 'espace',
      button: read,
      type: 'article',
      link: 'http://www.space.com/30965-made-in-space-3d-printer-lowes.html',
      cover: require('./images/ISS.jpg')
    },
    {
      title: "Un objet imprimé en 3D à partir d’une métorite",
      resume: "Une société américaine a créée le premier objet imprimée en 3D à partir de matériaux venant de l’espace, d’une météorite plus précisément. La compagnie minière prévoit d’exploiter les ressources des astéroïdes directement depuis l’espace, notamment pour fabriquer du carburant, ou comme ici, des objets à partir de matériaux spatiaux. Un signe de plus qui prouve que l’impression 3D pourrait un jour amener l’homme à une quasi autosuffisance en milieu spatial.",
      date: '2016-01-08',
      category: 'espace',
      button: read,
      type: 'article',
      link: 'http://www.space.com/31553-asteroid-metal-3d-printing-test-planetary-resources.html',
      cover: require('./images/space-object.jpg')
    },
    {
      title: "Un robot lunaire, imprimé en 3D grâce à Audi",
      resume: "Dans le cadre du Google Lunar XPRIZE, un concours destiné à envoyé un robot financé de façon privé sur la Lune, Audi a sponsorisé une équipe appelée “the part time scientists” dans leur projet de créer un robot imprimé en 3D. Cela fait quelques temps maintenant que la célèbre marque expérimente dans le domaine de l’impression 3D et elle ne compte pas s’arrêter là. En effet, elle a l’intention d’implémenter cette technologie au coeur de leur ligne de production.",
      date: '2016-01-11',
      category: 'espace',
      button: read,
      type: 'article',
      link: 'http://3dprintingindustry.com/2016/01/11/64645/',
      cover: require('./images/goole-lunar-x-prize.jpg')
    },



    // SCIENCE
    {
      title: 'Transformer une photo en modele imprimable en 3D',
      category: 'science',
      resume: "Smoothie 3D est un logiciel qui permet de transformer une photo en un objet 3D imprimable par une imprimante 2D.",
      link: 'http://www.3dprinter.net/did-you-know-you-can-turn-a-2d-photo-into-a-printable-3d-model',
      date: '2016-02-01',
      button: read,
      type: 'article',
      cover: require('./images/2d-to-3d.png')
    },
    {
      title: 'La plus légère structure métallique au monde',
      category: 'science',
      resume: "Le laboratoire de recherche HRL, filiale de Boeing a dévelloper une structure métalique ultra lègere et ressistante. Ce matériau du future est produit en grande partie grace à une imprimante 3D et à de nombreuses applications potentiel, notament dans l’aréospaciale.",
      link: 'http://www.3dnatives.com/boeing-3d-metallique-ultra-legere-19102015/',
      date: '2015-10-19',
      button: read,
      type: 'article',
      cover: require('./images/structure.jpg')
    },
    {
      title: "Un père apprend les maths à son fils aveugle",
      resume: "Jason, père de famille, a eu l’idée d’utiliser une imprimante 3D pour faire découvrir le monde à Layla, sa fille aveugle de naissance. D’abord en imprimant des objets de la vie courante (un bus par exemple) puis pour illustrer des concepts mathématique tel que les fractions en imprimant des “parts de gâteau”.",
      date: '2015-04-17',
      category: 'science',
      button: read,
      type: 'article',
      link: 'http://www.3ders.org/articles/20150417-father-uses-3d-printing-to-help-teach-his-blind-daughter-math.html',
      cover: require('./images/father-math.png')
    },
    {
      title: "L’impression au service des non-voyants",
      resume: "« Touchable Memories » est une expérience proposée à 5 personnes non-voyantes afin de les aider à revivre des moments marquants de leur vie grâce à l’impression 3D. En transformant simplement une photo en une scène de vie perceptible, le projet montre comment les nouvelles technologies peuvent venir en aide au handicap.",
      date: '2014-10-22',
      category: 'science',
      button: read,
      type: 'article',
      link: 'http://www.3dnatives.com/impression-3d-non-voyants/',
      cover: require('./images/print-memory.jpg')
    },
    {
      title: 'Une microbatterie en impression 3D',
      category: 'science',
      resume: "Des scientifiques américains ont réussi à fabriquer une minuscule batterie par impression 3D.<br />Ce procédé pourrait permettre d'alimenter en électricité des implants médicaux miniaturisés.<br />La microbatterie offre des performances analogues aux batteries de grande taille vendues dans le commerce, selon ses concepteurs.",
      link: 'http://www.journaldelascience.fr/technologie/articles/une-batterie-taille-dun-grain-sable-creee-par-impression-3d-3153',
      date: '2013-06-20',
      button: read,
      type: 'article',
      cover: require('./images/mocro-batterie.jpg')
    },
    {
      title: 'NASA : De la nouriture imprimée en 3D',
      category: 'espace',
      resume: "La NASA envisage d'imprimer de la nouriture pour les missions de longue durée dans l'espace. L'avantage d'une nouriture imprimée est qu'avec quelques éléments de base il est possible de créer un multitude de \"plats\".",
      link: 'http://www.nasa.gov/directorates/spacetech/home/feature_3d_food.html#.VqZi5lPhAvr',
      date: '2013-05-23',
      button: read,
      type: 'article',
      cover: require('./images/printed-food.jpg')
    }

];

articles.sort((left, right) => {
  return left.date.localeCompare(right.date)
})

for (var i = 0; i < articles.length; i++) {
  articles[i].id = i
  articles[i].disabled = false
}


export default articles
