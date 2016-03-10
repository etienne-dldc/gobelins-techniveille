const read = "Lire l'article complet";
const watch = "Voir la vidéo";

// const articles = [{
//   title: "FutureCraft, la chaussure imprimée en 3D d’adidas",
//   resume: "La marque Adidas a développé un prototype de basket dont la semelle est imprimée en 3D. ",
//   button: read,
//   link: 'http://www.3dnatives.com/basket-imprimee-3d-adidas-08102015/',
//   category: 'industrie',
//   date: '2015-10-08',
//   cover: require('./images/chaussure.png')
// }, {
//   title: "Cody Wilson Announces Impending Release of 3D Files for $150 Machine Gun; Some Fear He is ‘Making Things Easier’ for Terrorists",
//   date: '2015-11-25',
//   category: 'industrie',
//   button: read,
//   link: 'http://3dprint.com/116658/wilson-3d-files-machine-gun/',
//   cover: require('./images/gun.jpg')
// }, {
//   title: "Un père apprend les maths à son fils aveugle grave à l’impression 3D",
//   resume: "Jason, père de famille, a eu l’idée d’utiliser une imprimante 3D pour faire découvrir le monde à Layla, sa fille aveugle de naissance. D’abord en imprimant des objets de la vie courante (un bus par exemple) puis pour illustrer des concepts mathématique tel que les fractions en imprimant des “parts de gâteau”.",
//   date: '2015-04-17',
//   category: 'science',
//   button: read,
//   link: 'http://www.3ders.org/articles/20150417-father-uses-3d-printing-to-help-teach-his-blind-daughter-math.html'
// }, {
//   title: "Les mathématique et une imprimante 3D pour des oeuvre de plastique et de lumiere",
//   resume: "Paul Nylander, connu sous le pseudinyme \"bugman123\", créer des oeuvres d’art à l’aide de concepts mathématiques et d’une imprimante 3D. Ses réalisations sphériques sont souvent misent en valeur par d’habile jeux de lumières et peuvent être achetées sur sa boutique en ligne.",
//   date: '2014-02-06',
//   category: 'art',
//   button: read,
//   link: 'http://www.3ders.org/articles/20140206-the-marriage-of-math-and-art-in-3d-printing.html'
// }];

const articles = [
    // ART
    {
        title: "FutureCraft, la chaussure imprimée en 3D d’adidas",
        resume: "La marque Adidas a développé un prototype de basket dont la semelle est imprimée en 3D dans le cadre de sa série “Futurecraft” destinée à explorer de nouveaux horizons en terme de manufacture de chaussure. L’idée est de créer des paires de chaussures sur mesures et adaptées aux besoins de  chaque consommateurs en imprimant la semelle directement en 3D ",
        button: read,
        link: 'http://www.3dnatives.com/basket-imprimee-3d-adidas-08102015/',
        category: 'art',
        date: '2015-10-08'
    },
    {
        title: "L'impression 3D s'invite à la cérémonie des oscars",
        resume: "L’academy of motion picture Art and science a eu recours à l’impression 3D pour fabriquer les statuettes de la dernière édition des oscars. En effet l’impression 3D s’est révélé être le meilleur moyen de répliquer la statuette originale créée en 1929. Une utilisation surprenante de l’impression 3D qui comme à son habitude est toujours là où on ne l’attend pas ",
        button: read,
        link: 'http://www.3dnatives.com/impression-3d-oscars23022016/',
        category: 'art',
        date: '2016-02-23'
    },
    {
        title: "Une façade imprimée en 3D pour le Conseil de l’Union Européenne",
        resume: "L’academy of motion picture Art and science a eu recours à l’impression 3D pour fabriquer les statuettes de la dernière édition des oscars. En effet l’impression 3D s’est révélé être le meilleur moyen de répliquer la statuette originale créée en 1929. Une utilisation surprenante de l’impression 3D qui comme à son habitude est toujours là où on ne l’attend pas ",
        button: read,
        link: 'http://www.3dnatives.com/facade-imprimee-3d-union-europeenne-12012016/',
        category: 'art',
        date: '2016-12-01'
    },
    {
        title: "Les mathématiques et une imprimante 3D pour des oeuvres de plastique et de lumiere",
        resume: "Paul Nylander, connu sous le pseudonyme \"bugman123\", crée des oeuvres d’art à l’aide de concepts mathématiques et d’une imprimante 3D. Ses réalisations sphériques sont souvent mises en valeur par d’habiles jeux de lumières et peuvent être achetées sur sa boutique en ligne.",
        date: '2014-02-06',
        category: 'art',
        button: read,
        link: 'http://www.3ders.org/articles/20140206-the-marriage-of-math-and-art-in-3d-printing.html',
        // cover: 'ShadowProjection-large.jpg'
    },
    {
        title: "Robe imprimée en 3D avec 12 000 crystaux Swarovski",
        resume: "Francis Bitonti Studio ont collaboré avec Michael Schmidt Studios et Shapeways pour créer une robe totalement articulée imprimée en 3D conçue spécifiquement pour Dita Von Teese. La robe a environ 3000 joints articulés unique et est orné de plus de 12 000 crystaux Swarovski.",
        date: '2013-03-05',
        category: 'art',
        button: read,
        link: 'http://www.francisbitonti.com/ditas-gown/',
        // cover: 'the-bristle-dress-visuel.jpeg'
    },
    {
        title: "Première robe imprimée en 3D en une seule fois",
        resume: "Si nombre de designers tels que Michael Schmidt et Francis Bitonti ont déjà usé de l’impression 3D pour concevoir leurs robes, c’est néanmoins la première fois qu’une robe est imprimée en une seule fois. En effet les premières du genre étaient imprimées en plusieurs morceaux pour être ensuite assemblées. Cette magnifique création est née du projet Kinematics...",
        date: '2014-12-11',
        category: 'art',
        button: read,
        link: 'http://www.priximprimante3d.com/kinematics/',
        // cover: 'robe-3d.jpg'
    },
    {
        title: "Penis Wall",
        resume: "Le titre en dit déjà beaucoup. Penis Wall est une sculpture cinétique composée de 81 pénis qui répondent aux mouvement du spectateur ou au mouvements réels de la bourse (non, pas celle qui se trouve dans le caleçon).",
        date: '2014-05-28',
        category: 'art',
        button: read,
        link: 'http://peiqi.su/peniswall.html',
        // cover: 'bite.jpg'
    },
    // INDUSTRIE
    {
        title: "Local Motors veut commercialiser ses voitures imprimées en 3D à 75% en 2017",
        resume: "Les voitures imprimées partiellement 3D existent déjà, mais aucune n’a encore été commercialisée au public. Local Motors veut révolutionner le secteur automobile ; savez-vous comment ? En commercialisant la première voiture imprimée en 3D, en série. La LM3D devrait débarquer en 2017, le temps pour le constructeur de finaliser les certifications et autres détails.",
        date: '2015-11-13',
        category: 'industrie',
        button: read,
        link: 'http://www.paruvendu.fr/auto-moto/I/la-lm3d-de-local-motors-premiere-voiture-en-3d-produite-en-serie-i37865',
        // cover: 'LM3D-Swim.jpg'
    },
    {
        title: "LixPen, le plus fin stylo “imprimeur 3D” commercialisé",
        resume: "Lix Pen est le premier stylo 3D digne de ce nom, aussi fin qu’un stylo classique! Conçu pour extruder du plastique ABS ou PLA à une température allant de 160°C et 230°C représentée par un système de LED, le Lix Pen tient dans une poche de chemise et ne risque pas de faire tâche avec son design “unibody” noir ou alu. D’un point de vue fonctionnel, ce nouveau stylo 3D est alimenté par un simple câble USB et dispose de deux boutons pour contrôler l’extrusion (arrêt/démarrage et vitesse).",
        date: '2014-10-14',
        category: 'industrie',
        button: read,
        link: 'http://lixpen.com/',
        // cover: 'lixpen-3d-printing-pen-kickstarter-2.jpg'
    },
    {
        title: "10 maisons imprimées en 24 heures",
        resume: "Une entreprise chinoise basée à Shanghai a fait construire dix maisons en une seule journée en utilisant l’imprimante 3D. Les murs sont principalement constitués de déchets de construction recyclés et mélangés à du ciment. Cette méthode, d’après le constructeur, est respectueuse de l’environnement tout en étant plus rapide et moins chère qu’une construction classique.",
        date: '2014-04-16',
        category: 'industrie',
        button: watch,
        link: 'https://www.youtube.com/watch?v=SObzNdyRTBs',
        // cover: 'chine_2_0.jpg'
    },
    {
        title: "Des robots 3D autodidactes",
        resume: "Les équipes de l'université d'Oslo (Norvège) ont conçu un programme permettant aux robots de s'adapter aux différentes modifications de l'environnement. Équipés de ce logiciel, les robots évaluent leur performance, optimisent leur adaptation et même s'auto-réparent. Après diagnostic de ses besoins, le robot doté d'une imprimante 3D fabrique les pièces qui lui sont nécessaires. Une innovation à exploiter lors des explorations spatiales ou des catastrophes naturelles.",
        date: '2014-11-12',
        category: 'industrie',
        button: read,
        link: 'https://www.apollon.uio.no/english/articles/2014/4_robots.html',
        // cover: '4_roboter_forskere.jpg'
    },
    {
        title: "Cody Wilson, fabriquant d’armes en 3D",
        resume: "Un certain Cody Wilson a récemment annoncé la mise en ligne imminente des plans d’un fusil d’assaut semi-automatique imprimable en 3D pour seulement 150$. Cet homme n’est pas un inconnu, en effet c’est à lui que l’on doit le célèbre “liberator”, une arme a feu facilement imprimable en 3D qui a fait grand bruit en 2013. Une personnalité sujette à controverse donc, tout comme la possibilité d’imprimer des armes à feu depuis chez soi.",
        date: '2015-11-25',
        category: 'industrie',
        button: read,
        link: 'http://3dprint.com/116658/wilson-3d-files-machine-gun/',
        // cover: 'gun.jpg'
    },
    {
        title: "Le premier revolver imprimé en 3D",
        resume: "Un étudiant en ingénierie a réussi à créer le tout premier revolver imprimé en 3D. Ne nécessitant en plus du mode 3Dl que d’un percuteur et de quelques élastiques, celui-ci est capable de tirer 6 balles de façon automatique. Une nouvelle invention qui menace la sécurité publique, tant la fabrication de l’arme est facile pour qui dispose d’une imprimante 3D et du matériau de base adéquat.",
        date: '2015-11-23',
        category: 'industrie',
        button: read,
        link: "http://3dprint.com/107062/worlds-1st-3d-printed-revolver/",
        // cover: 'gun.jpg'
    },
    // ESPACE
    {
        title: "Impression d’un propulseur métalique en 3D",
        resume: "La NASA s’intéresse de plus en plus à l’impression 3D, principalement à l’impression d’objets métalliques. Elle a récemment réalisé un injecteur de fusée avec cette technologie… En 10 jours au lieu de 6 à 9 mois pour les injecteurs classiques.",
        date: '2015-10-19',
        category: 'espace',
        button: read,
        link: 'http://3dprintingindustry.com/2015/10/19/metal-3d-printing-is-helping-nasa-blast-off-into-space/',
        // cover: '3d-rocket-injector.jpg'
    },
    {
        title: "Concours d’habitats martiens imprimés en 3D",
        resume: "La NASA a organisé un concours au sein duquel les participants devaient concevoir les futurs habitats martiens imprimés en 3D. L’organisme prévoit en effet très sérieusement d’utiliser l’impression 3D pour créer les bâtiments servant de refuges aux premiers colons martiens, qui selon la NASA, devraient atterrir courant 2030.",
        date: '2015-10-19',
        category: 'espace',
        button: read,
        link: 'http://www.space.com/30854-nasa-3d-printed-mars-habitat-contest-winners.html',
        // cover: '3d-printed-home.jpg'
    },
    {
        title: "Imprimante 3D à bord de l’ISS",
        resume: "Deux compagnies américaines prévoient d’envoyer une imprimante 3D fonctionnant même en situation de microgravité à bord de l’ISS, celle-ci viendra renforcer le prototype déjà à bord de la station. L’impression 3D se présente comme une technologie cruciale dans la conquête spatiale tant elle est flexible et renouvelable.",
        date: '2015-10-29',
        category: 'espace',
        button: read,
        link: 'http://www.space.com/30965-made-in-space-3d-printer-lowes.html',
        // cover: 'ISS.jpg'
    },
    {
        title: "Un objet imprimé en 3D à partir d’une métorite",
        resume: "Une société américaine a créée le premier objet imprimée en 3D à partir de matériaux venant de l’espace, d’une météorite plus précisément. La compagnie minière prévoit d’exploiter les ressources des astéroïdes directement depuis l’espace, notamment pour fabriquer du carburant, ou comme ici, des objets à partir de matériaux spatiaux. Un signe de plus qui prouve que l’impression 3D pourrait un jour amener l’homme à une quasi autosuffisance en milieu spatial.",
        date: '2016-01-08',
        category: 'espace',
        button: read,
        link: 'http://www.space.com/31553-asteroid-metal-3d-printing-test-planetary-resources.html',
        // cover: 'space-object.jpg'
    },
    {
        title: "Un robot lunaire, imprimé en 3D grâce à Audi",
        resume: "Dans le cadre du Google Lunar XPRIZE, un concours destiné à envoyé un robot financé de façon privé sur la Lune, Audi a sponsorisé une équipe appelée “the part time scientists” dans leur projet de créer un robot imprimé en 3D. Cela fait quelques temps maintenant que la célèbre marque expérimente dans le domaine de l’impression 3D et elle ne compte pas s’arrêter là. En effet, elle a l’intention d’implémenter cette technologie au coeur de leur ligne de production.",
        date: '2016-01-11',
        category: 'espace',
        button: read,
        link: 'http://3dprintingindustry.com/2016/01/11/64645/',
        // cover: 'lunar-rover.jpg'
    },
    // SCIENCE
    {
        title: 'Transformer une photo en modele imprimable en 3D',
        category: 'science',
        resume: "",
        link: 'http://www.3dprinter.net/did-you-know-you-can-turn-a-2d-photo-into-a-printable-3d-model',
        date: '2016-02-01',
        button: read
    },
    {
        title: 'La plus légère structure métallique au monde fabriquée par impression 3D',
        category: 'science',
        resume: "Le laboratoire de recherche HRL, filiale de Boeing a dévelloper une structure métalique ultra lègere et ressistante. Ce matériau du future est produit en grande partie grace à une imprimante 3D et à de nombreuses applications potentiel, notament dans l’aréospaciale.",
        link: 'http://www.3dnatives.com/boeing-3d-metallique-ultra-legere-19102015/',
        date: '2015-10-19',
        button: read
    },
    {
        title: 'La FDA (Food and Drug Administration) authorise la comercialisation du premier médicament imprimé en 3D.',
        category: 'science',
        resume: "",
        link: 'https://www.theguardian.com/science/2015/aug/04/fda-first-prescription-drug-3d-printing',
        date: '2015-08-04',
        button: read
    },
    {
        title: "Une collaboration globale pour offrir des mains imprimées à des enfants",
        resume: "Shea Stollenwerk a 9 ans. Elle est née avec une main atrophiée, dont les doigts ne sont pas complets. L'année dernière, après avoir visionné sur Internet des vidéos de prothèses imprimées en 3D, elle a annoncé à ses parents qu'elle en voulait une pour Noël. Ils n'ont pas réussi à lui accorder ce souhait à temps pour la fin de l'année, mais après s'être renseignés en ligne, ils sont parvenus à trouver de l'aide.",
        date: '2015-04-25',
        category: 'science',
        button: read,
        link: 'http://www.3ders.org/articles/20150417-father-uses-3d-printing-to-help-teach-his-blind-daughter-math.html',
        // cover: '000012832_imageArticlePrincipaleLarge.jpg'
    },
    {
        title: "Un père apprend les maths à son fils aveugle grâce à l’impression 3D",
        resume: "Jason, père de famille, a eu l’idée d’utiliser une imprimante 3D pour faire découvrir le monde à Layla, sa fille aveugle de naissance. D’abord en imprimant des objets de la vie courante (un bus par exemple) puis pour illustrer des concepts mathématique tel que les fractions en imprimant des “parts de gâteau”.",
        date: '2015-04-17',
        category: 'science',
        button: read,
        link: 'http://www.3ders.org/articles/20150417-father-uses-3d-printing-to-help-teach-his-blind-daughter-math.html',
        // cover: 'father-uses-3d-printing-to-teach-his-adopted-daughter-math-3.jpeg'
    },
    {
        title: "L’impression au service des non-voyants",
        resume: "« Touchable Memories » est une expérience proposée à 5 personnes non-voyantes afin de les aider à revivre des moments marquants de leur vie grâce à l’impression 3D. En transformant simplement une photo en une scène de vie perceptible, le projet montre comment les nouvelles technologies peuvent venir en aide au handicap.",
        date: '2014-10-22',
        category: 'science',
        button: read,
        link: 'http://www.3dnatives.com/impression-3d-non-voyants/',
        // cover: '3d5-1-610x428.jpg'
    },
    {
        title: 'Une microbatterie en impression 3D',
        category: 'science',
        resume: "Des scientifiques américains ont réussi à fabriquer une minuscule batterie par impression 3D.<br />Ce procédé pourrait permettre d'alimenter en électricité des implants médicaux miniaturisés.<br />La microbatterie offre des performances analogues aux batteries de grande taille vendues dans le commerce, selon ses concepteurs.",
        link: 'http://www.journaldelascience.fr/technologie/articles/une-batterie-taille-dun-grain-sable-creee-par-impression-3d-3153',
        date: '2013-06-20',
        button: read
    },
    {
        title: 'La nasa est tellement chaude qu’elle imprime sa bouffe en 3D',
        category: 'science',
        resume: "",
        link: 'http://www.nasa.gov/directorates/spacetech/home/feature_3d_food.html#.VqZi5lPhAvr',
        date: '2013-05-23',
        button: read
    }
];

for (var i = 0; i < articles.length; i++) {
  articles[i].id = i
  // articles[i].disabled = false
}

articles.sort((left, right) => {
  return left.date.localeCompare(right.date)
})

export default articles
