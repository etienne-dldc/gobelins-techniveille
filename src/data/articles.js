const read = "Lire l'article complet";
const watch = "Voir la vidéo";

const articles = [{
  title: "FutureCraft, la chaussure imprimée en 3D d’adidas",
  resume: "La marque Adidas a développé un prototype de basket dont la semelle est imprimée en 3D. ",
  button: read,
  link: 'http://www.3dnatives.com/basket-imprimee-3d-adidas-08102015/',
  category: 'industrie',
  date: '2015-10-08',
  cover: require('./images/chaussure.png')
}, {
  title: "Cody Wilson Announces Impending Release of 3D Files for $150 Machine Gun; Some Fear He is ‘Making Things Easier’ for Terrorists",
  date: '2015-11-25',
  category: 'industrie',
  button: read,
  link: 'http://3dprint.com/116658/wilson-3d-files-machine-gun/',
  cover: require('./images/gun.jpg')
}, {
  title: "Un père apprend les maths à son fils aveugle grave à l’impression 3D",
  resume: "Jason, père de famille, a eu l’idée d’utiliser une imprimante 3D pour faire découvrir le monde à Layla, sa fille aveugle de naissance. D’abord en imprimant des objets de la vie courante (un bus par exemple) puis pour illustrer des concepts mathématique tel que les fractions en imprimant des “parts de gâteau”.",
  date: '2015-04-17',
  category: 'science',
  button: read,
  link: 'http://www.3ders.org/articles/20150417-father-uses-3d-printing-to-help-teach-his-blind-daughter-math.html'
}, {
  title: "Les mathématique et une imprimante 3D pour des oeuvre de plastique et de lumiere",
  resume: "Paul Nylander, connu sous le pseudinyme \"bugman123\", créer des oeuvres d’art à l’aide de concepts mathématiques et d’une imprimante 3D. Ses réalisations sphériques sont souvent misent en valeur par d’habile jeux de lumières et peuvent être achetées sur sa boutique en ligne.",
  date: '2014-02-06',
  category: 'art',
  button: read,
  link: 'http://www.3ders.org/articles/20140206-the-marriage-of-math-and-art-in-3d-printing.html'
}];

for (var i = 0; i < articles.length; i++) {
  articles[i].id = i
  articles[i].disabled = false
}

export default articles
