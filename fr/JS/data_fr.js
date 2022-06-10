/*
 * DATA PROJECT SECTION ACHIEVEMENT
 */
let projects = {
  data: [
    {
      projectName: "Modèle animé de site.",
      image: "./img/projects/animated-template.png",
      category: [
        "Front-end",
        "Javascript",
        "Netlify",
        "Fonctionnalité",
        "Site-Web",
      ],
      date: "09-06-2022",
      stack: "Javascript, Tailwind",
      description:
        "Réalisation d'un site web dynamique réalisé avec Javascript, Tailwindcss et déployé avec Netlify.",
      feedback:
        "Ce projet m'a permis d'utiliser Tailwindcss qui est un framework CSS. J'ai également utilisé l'API du générateur d'utilisateurs aléatoires pour remplir le site Web et la bibliothèque javascript AOS pour définir des animations avec l'attribut data-aos.",
      link1: "https://loquacious-rugelach-13856d.netlify.app/",
      link2: "https://github.com/jokoul/project-27-Animated-template",
    },
    {
      projectName: "Compteur de temps de réaction.",
      image: "./img/projects/reaction-time.gif",
      category: [
        "Front-end",
        "Vue.JS",
        "Netlify",
        "Utilitaire",
        "Divertissement",
        "Application-Web",
      ],
      date: "08-06-2022",
      stack: "Vue.js, Netlify",
      description:
        "Réalisation d'une application de compteur de temps de réaction permettant de tester et de mesurer votre temps de réaction, elle a été conçue avec vuejs et déployée avec Netlify Hosting.",
      feedback:
        "Ce projet m'a permis d'utiliser des Hooks de cycle de vie comme mounted() pour déclencher certaines fonctions à différentes étapes de l'exécution de mon application. J'utilise également un événement personnalisé avec la méthode $emit pour envoyer des données des composants enfants au composant parent.",
      link1: "https://jade-griffin-d47936.netlify.app/",
      link2: "https://github.com/jokoul/project-26-reaction-time-counter",
    },
    {
      projectName: "Convertisseur de devises.",
      image: "./img/projects/currency-converter.png",
      category: [
        "Front-end",
        "React.JS",
        "Firebase",
        "Utilitaire",
        "Application-Web",
      ],
      date: "06-06-2022",
      stack: "React.js, exchangeRate-API, Firebase",
      description:
        "Réalisation d'une application de conversion de devises conçue avec React.js et déployée avec Firebase Hosting. Il consomme les données de exchangeRate-API et affiche le taux de change actuel.",
      feedback:
        "Ce projet m'a permis d'utiliser des Hooks comme useState pour stocker des données, useEffect pour exécuter une fonction lorsque certaines données changent dans le tableau de dépendances. J'ai également utilisé des props pour transmettre des données et des méthodes du composant parent aux composants enfants.",
      link1: "https://currency-converter-22b76.firebaseapp.com/",
      link2: "https://github.com/jokoul/project-24-currency-converter",
    },
    {
      projectName: "Défilement d'image à l'infini.",
      image: "./img/projects/infinity-scroll.png",
      category: [
        "Front-end",
        "Javascript",
        "HTML-CSS",
        "Fonctionnalité",
        "Application-Web",
      ],
      date: "04-06-2022",
      stack: "Javascript, API Unsplash, HTML, CSS",
      description:
        "Réalisation d'un site Web vitrine qui implémente la fonctionnalité de défilement à l'infini et qui consomme les données d'image de l'API Unsplash pour remplir dynamiquement le conteneur d'images dans le DOM. Lorsque l'utilisateur fait défiler vers le bas et atteint presque le bas, le nouveau contenu est automatiquement chargé, ce qui donne un effet de défilement à l'infini.",
      feedback:
        "Ce projet m'a permis de manipuler les propriétés des éléments DOM comme document.body.offsetHeight, document.body.scrollTop et les propriétés des objets window comme window.innerHeight, window.scrollY.",
      link1:
        "https://jokoul.github.io/project-23-Infinity-Scroll-Unsplash-API/",
      link2:
        "https://github.com/jokoul/project-23-Infinity-Scroll-Unsplash-API",
    },
    {
      projectName: "Site d'offre d'emplois.",
      image: "./img/projects/job-lister.png",
      category: [
        "Full-stack",
        "PHP",
        "MySQL",
        "framework-Bootstrap",
        "Utilitaire",
        "Site-Web",
      ],
      date: "02-06-2022",
      stack: "PHP, MySQL, Bootstrap 5",
      description:
        "Réalisation d'un site Web dynamique de recherche et d'affichage d'emploi en utilisant PHP OOP (Programmation Orientée Objet) et la base de données MySQL qui est un système de gestion de base de données (SGBD).",
      feedback:
        "Ce projet m'a permis d'utiliser le design pattern MVC pour structurer l'architecture de mon projet. J'ai fait des requêtes SQL avancées avec des jointures internes pour effectuer des opérations CRUD. J'ai créé plusieurs classes comme Job, Template, Database et je les ai instanciés pour utiliser leurs propriétés et méthodes à différents endroits de mon code.",
      link1: "https://joan-kouloumba.in/job-lister",
      link2: "https://github.com/jokoul/project-22-job-lister",
    },
    {
      projectName: "Générateur de citations Manga.",
      image: "./img/projects/quote-generator.png",
      category: [
        "Front-end",
        "Vue.JS",
        "Firebase",
        "Divertissement",
        "Application-Web",
      ],
      date: "31-05-2022",
      stack: "Vue.js, Firebase",
      description:
        "Réalisation d'une application de génération de citations conçue avec Vue.js et déployée avec Firebase Hosting. Il consomme des données d'une API appelée Animechan et les affiche de manière cool.",
      feedback:
        "ce projet m'a permis d'utiliser le framework javascript appelé Vue.js. J'ai utilisé des directives comme v-for pour boucler sur un tableau de données. J'ai créé des composants réutilisables pour rendre mon code facile à maintenir et modulaire.",
      link1: "https://quote-generator-2d5c4.web.app/",
      link2: "https://github.com/jokoul/project-21-quote-generator",
    },
    {
      projectName: "Distance entre villes.",
      image: "./img/projects/distance-between-cities.png",
      category: [
        "Front-end",
        "Javascript",
        "Google-API-GCP",
        "framework-Bootstrap",
        "Utilitaire",
        "Application-Web",
      ],
      date: "27-05-2022",
      stack: "API Google Maps-GCP, Javascript, Bootstrap 5",
      description:
        "Réalisation d'une application qui fournit une assistance aux déplacements en obtenant des informations entre les lieux, telles que la distance et l'heure. Il est basé sur l'API google maps (Application Programming Interface) et Google Cloud Platform (GCP).",
      feedback:
        "ce projet a été l'occasion de travailler avec une API publique pour récupérer des données externes au format JSON et les manipuler à ma façon. J'ai utilisé GCP qui est une plate-forme en tant que service (PaaS) pour surveiller, authentifier et accéder au service API.",
      link1: "https://joan-kouloumba.in/distance-between-cities",
      link2: "https://github.com/jokoul/project-20-distance-between-cities",
    },
    {
      projectName: "Application de notes en ligne.",
      image: "./img/projects/note-app.png",
      category: [
        "Full-stack",
        "PHP",
        "MySQL",
        "bibliothèque-JQuery",
        "framework-Bootstrap",
        "Utilitaire",
        "Application-Web",
      ],
      date: "24-05-2022",
      stack: "PHP, jQuery, MySQL, Bootstrap 5",
      description:
        "Réalisation d'une application permettant de prendre facilement des notes partout et de les stocker en toute sécurité.",
      feedback:
        "ce projet m'a permis de travailler avec le langage de programmation côté serveur PHP. J'ai utilisé jQuery pour faire des appels AJAX, MySQL pour gérer la base de données et Bootstrap pour définir rapidement un design responsive. J'ai implémenté de nombreuses fonctionnalités telles que l'inscription/la connexion avec un jeton d'activation et un e-mail de confirmation. La gestion des comptes utilisateurs avec des variables de session, des opérations CRUD sur les Notes et la persistance des données avec des cookies.",
      link1: "https://joan-kouloumba.in/note-app",
      link2: "https://github.com/jokoul/project-19-Online-Note-App",
    },
    {
      projectName: "Application d'exploration de fichiers.",
      image: "./img/projects/file-explorer.png",
      category: [
        "Back-end",
        "Node.JS",
        "framework-Bootstrap",
        "Utilitaire",
        "Application-Web",
      ],
      date: "15-05-2022",
      stack: "Node.js, Bootstrap 5.1",
      description:
        "Réalisation d'une application d'exploration de fichiers permettant de naviguer dans des répertoires et de lire différents types d'extensions de fichiers.",
      feedback:
        "ce projet m'a permis de travailler avec le runtime Node.js. J'ai utilisé le module Node.js appelé File System (fs) et certaines de ses méthodes comme statSync() pour obtenir des informations sur les fichiers, readdirSync() pour lire le contenu du répertoire, readFileSync() pour lire le contenu du fichier.",
      link1: "https://jo-online-file-explorer.herokuapp.com",
      link2: "https://github.com/jokoul/project-11-Online-file-explorer",
    },
    {
      projectName: "Zarasclo, site du club de basket-ball.",
      image: "./img/projects/zarasclo.png",
      category: ["Wordpress", "Docker", "SEO", "Site-Web"],
      date: "02-05-2022",
      stack: "Docker, Wordpress, Plugin Elementor, SEO yoast",
      description:
        "Réalisation d'un site Web de Basket-ball qui présente le club, les joueurs, l'équipe dirigeante, affiche le planning des matchs, les résultats, etc.",
      feedback:
        "ce projet m'a permis de travailler sur un cas réel d'un besoin client. J'ai travaillé avec un cahier des charges client et un délai à respecter. J'ai itéré de nombreux entretiens avec le client pour préciser les fonctionnalités à mettre en place et le former à la mise à jour du contenu wordpress.",
      link1: "https://joan-kouloumba.in/zarasclo",
      link3: "https://hub.docker.com/r/joandock/zarasclo",
    },
    {
      projectName: "application de dessein pour ordinateur",
      image: "./img/projects/drawing-app.png",
      category: [
        "HTML-CSS",
        "Front-end",
        "bibliothèque-JQuery",
        "Divertissement",
        "Application-Web",
      ],
      date: "25-04-2022",
      stack: "HTML, CSS, jQuery",
      description:
        "Réalisation d'une application de dessin conçue pour fonctionner sur ordinateur et permettre de dessiner des choses amusantes.",
      feedback:
        "Dans ce projet, j'ai utilisé HTML, CSS et jQuery. Un diagramme UML a permis de cartographier toutes les interactions de l'utilisateur avant le codage.  La fonction 'getContext' m'a permis de définir le type de canevas 2D.",
      link1: "https://joan-kouloumba.in/drawing-app",
      link2: "https://github.com/jokoul/project-10-Drawing-App-JQ",
    },
    {
      projectName: "application Chronomètre",
      image: "./img/projects/stopwatch.png",
      category: [
        "framework-Bootstrap",
        "Front-end",
        "bibliothèque-JQuery",
        "Utilitaire",
        "Application-Web",
      ],
      date: "20-04-2022",
      stack: "Bootstrap 5, jQuery",
      description:
        "Réalisation d'une application chronomètre conçue pour mesurer le temps dans différentes situations comme le sport, le travail, la cuisine, etc.",
      feedback:
        "Dans ce projet, j'utilise Bootstrap 5.1 et jQuery. J'ai d'abord pensé à la logique d'interaction à travers un diagramme UML. La fonction 'setInterval' était cruciale pour régler le compteur des centisecondes, des secondes et des minutes.",
      link1: "https://joan-kouloumba.in/stopwatch",
      link2: "https://github.com/jokoul/project-9-Stopwatch-JQ-BP",
    },
    {
      projectName: "Holidious, un site de recherche de vacances",
      image: "./img/projects/holidious.png",
      category: [
        "framework-Bootstrap",
        "HTML-CSS",
        "Sass-préprocesseur",
        "Site-Web",
      ],
      date: "10-04-2022",
      stack: "Bootstrap 5, HTML, CSS, Sass préprocesseur",
      description:
        "Réalisation d'un site de recherche de vacances proposant de nombreuses offres de vacances.",
      feedback:
        "ce projet m'a permis d'utiliser la dernière version de Bootstrap 5.1. J'utilise également des images clés pour créer des animations avancées et le préprocesseur Sass pour structurer mon code CSS avec des mixins, des variables, des imbrications, etc.",
      link1: "https://joan-kouloumba.in/holidious/",
      link2: "https://github.com/jokoul/project-SS-BP-Holidious-holiday-finder",
    },
    {
      projectName: "Jeu de tranches de fruits",
      image: "./img/projects/fruits-game.png",
      category: [
        "Front-end",
        "HTML-CSS",
        "bibliothèque-JQuery",
        "Divertissement",
        "Application-Web",
      ],
      date: "29-03-2022",
      stack: "jQuery, HTML, CSS",
      description:
        "Réalisation d'un site de Jeu de tranches de fruits pour le divertissement.",
      feedback:
        "ce projet m'a permis de manipuler les fonctions jQuery et la logique algorithmique.",
      link1: "https://joan-kouloumba.in/fruits-game",
      link2: "https://github.com/jokoul/project-JQ-01-Fruit-slice-game",
    },
    {
      projectName: "Generalwp, un site Web entreprenarial.",
      image: "./img/projects/general-wp.png",
      category: ["Wordpress", "Docker", "Site-Web"],
      date: "02-04-2022",
      stack: "Docker, Wordpress, Plugin Elementor",
      description:
        "Réalisation d'un site web promotionnel d'entreprise pouvant s'adapter à tout type d'activités commerciales.",
      feedback:
        "ce projet me permet de manipuler le thème wordpress Phlox, les plugins Elementor, etc.",
      link1: "https://joan-kouloumba.in/general-wp",
      link3: "https://hub.docker.com/r/joandock/wordpress_generalwp",
    },
    {
      projectName:
        "Mathématiques en s'amusant, site d'apprentissage des mathématique",
      image: "./img/projects/maths-tutorial.png",
      category: [
        "Front-end",
        "HTML-CSS",
        "Javascript",
        "Utilitaire",
        "Divertissement",
        "Site-Web",
      ],
      date: "23-03-2022",
      stack: "Javascript, HTML, CSS",
      description:
        "Réalisation d'un site Web d'apprentissage des mathématiques comprenant un jeu de mathématiques pour pratiquer.",
      feedback:
        "ce projet m'a permis de manipuler des fonctions mathématiques de javascript, Grid CSS, la saisie de formulaire avancée et la fonction setTimeout.",
      link1: "https://joan-kouloumba.in/maths-tutorial/index.html",
      link2: "https://github.com/jokoul/project-8-Maths-the-Fun-way",
    },
    {
      projectName: "Reservia, accomodation booking website",
      image: "./img/projects/reservia.png",
      category: ["Front-end", "HTML-CSS", "Site-Web"],
      date: "08-01-2021",
      stack: "HTML, CSS",
      description:
        "Intégration de modèles de page d'accueil de site Web en utilisant uniquement HTML et CSS à partir de zéro.",
      feedback:
        "ce projet m'a permis de comprendre et d'utiliser le système flexbox.",
      link1:
        "https://jokoul.github.io/Projet-2-Transformer-une-maquette-en-site-web-avec-HTML5-CSS3/",
      link2:
        "https://github.com/jokoul/Projet-2-Transformer-une-maquette-en-site-web-avec-HTML5-CSS3",
    },
    {
      projectName: "Application compteur de score de tennis",
      image: "./img/projects/tennis-score.png",
      category: [
        "Front-end",
        "React.JS",
        "Docker",
        "Utilitaire",
        "Application-Web",
      ],
      date: "12-02-2022",
      stack: "ReactJS, Redux",
      description:
        "Cette application est utile pour suivre et enregistrer un score de match de tennis.",
      feedback:
        "ce projet m'a permis de manipuler la bibliothèque de gestion d'état la plus utilisée appelée Redux.",
      link1: "https://tennis-score-counter.herokuapp.com/",
      link2:
        "https://github.com/jokoul/project-RT-RX-01-Tennis-score-counter-Redux-React",
      link3: "https://hub.docker.com/r/joandock/tennis-score-counter",
    },
    {
      projectName: "Ohmyfood, site de réservation de restaurant",
      image: "./img/projects/ohmyfood.png",
      category: [
        "Front-end",
        "HTML-CSS",
        "Sass-préprocesseur",
        "Utilitaire",
        "Site-Web",
      ],
      date: "23-08-2021",
      stack: "HTML, CSS, préprocesseur Sass ",
      description:
        " Intégration de plusieurs pages du modèle de site Web en utilisant HTML, CSS et Sass à partir de zéro.",
      feedback:
        "ce projet m'a permis de créer des animations avancées avec des images clés et d'utiliser le préprocesseur Sass pour structurer mon code CSS en utilisant des imbrications, des variables, des mixins, etc.",
      link1:
        "https://jokoul.github.io/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS",
      link2:
        "https://github.com/jokoul/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS",
    },
    {
      projectName: "Banana-design, site vitrine agence web",
      image: "./img/projects/banana-design.png",
      category: ["Wordpress", "Docker", "Site-Web"],
      date: "20-02-2022",
      stack: "Wordpress, Docker, Plugin Elementor",
      description:
        "Réalisation d'un site vitrine pour promouvoir les activités de l'agence.",
      feedback:
        "ce projet a été très utile pour manipuler les fonctionnalités de base du système de gestion de contenu wordpress comme les plugins, les thèmes, etc.",
      link1: "https://joan-kouloumba.in/banana-design",
      link3:
        "https://hub.docker.com/r/joandock/wordpress_agence_web_banana_design",
    },
    {
      projectName: "Orinoco, site e-commerce",
      image: "./img/projects/orinoco.png",
      category: ["Javascript", "Front-end", "framework-Bootstrap", "Site-Web"],
      date: "25-10-2021",
      stack: "Javascript Vanilla, Node.JS, Express.js, Bootstrap 5",
      description:
        "Réalisation d'un site e-commerce avec système de gestion de panier utilisant le data mocking et la simulation de paiement.",
      feedback:
        "ce projet m'a permis de me familiariser avec le stockage local du navigateur, l'API de récupération de donnée et les connaissances de base de Javascript.",
      link1:
        "https://jokoul.github.io/Projet-5-Construire-un-site-e-commerce-en-JavaScript-vanilla/index.html",
      link2:
        "https://github.com/jokoul/Projet-5-Construire-un-site-e-commerce-en-JavaScript-vanilla",
    },
    {
      projectName: "La chouette, site agence web",
      image: "./img/projects/chouette.png",
      category: ["SEO", "HTML-CSS", "Site-Web"],
      date: "07-10-2021",
      stack: "SEO, HTML, CSS",
      description:
        "amélioration de la visibilité Web de l'agence et des performances du site Web en augmentant la vitesse de chargement, en réduisant la taille des images, etc.",
      feedback:
        "ce projet m'a permis d'utiliser les bonnes pratiques du SEO et de l'accessibilité en utilisant des outils comme google search console pour définir des mots clés pertinents, Axe Devtools pour régler les problèmes d'accessibilité, etc.",
      link1:
        "https://jokoul.github.io/Projet-4-Optimiser-un-site-web-existant-avec-des-outils-SEO/index.html",
      link2:
        "https://github.com/jokoul/Projet-4-Optimiser-un-site-web-existant-avec-des-outils-SEO",
    },
    {
      projectName: "Hot_takes, Application de notation de sauce",
      image: "./img/projects/hottakes.png",
      category: [
        "Back-end",
        "Node.JS",
        "Express.JS",
        "MongoDB",
        "API-REST",
        "Utilitaire",
        "Application-Web",
      ],
      date: "15-11-2021",
      stack: "Node.js, Express.js, MongoDB",
      description:
        "Réalisation d'une API REST pour exécuter des opérations CRUD sur l'application Front-end.",
      feedback:
        "ce projet m'a permis d'utiliser l'Object Data Model Mongoose pour manipuler une base de données NoSQL.",
      link2:
        "https://github.com/jokoul/Projet-6-Construire-une-API-pour-une-application-web",
    },
    {
      projectName: "Groupomania, réseau social privé",
      image: "./img/projects/groupomania.png",
      category: [
        "Full-stack",
        "Node.JS",
        "Express.JS",
        "MySQL",
        "Vue.JS",
        "Application-Web",
      ],
      date: "15-01-2022",
      stack: "Vue.JS, Node.js, Express.js, MySQL",
      description:
        "Réalisation d'un réseau social d'entreprise avec le framework VueJS.",
      feedback:
        "ce projet m'a permis de me familiariser avec la logique des composants pour obtenir une base de code modulaire et maintenable. J'ai également utilisé l'Object Relational Model Sequelize pour manipuler la base de données SQL.",
      link2:
        "https://github.com/jokoul/Projet-7-Construire-un-reseau-social-d-entreprise-avec-le-framework-Vue.js",
    },
  ],
};

//=========================================================================================================================

/*
 * DATA SKILLS
 */

let skills = {
  language: [
    {
      image: "../img/language/html.png",
      name: "HTML",
      description:
        "Le langage HyperText Markup est utilisé pour créer et organiser le contenu Web.",
      dimension: 150,
    },
    {
      image: "../img/language/css.png",
      name: "CSS",
      description:
        "CSS signifie Cascading Style Sheets et décrit comment les éléments HTML doivent être affichés à l`écran ou sur d`autres supports.",
      dimension: 110,
    },
    {
      image: "../img/language/javascript.png",
      name: "Javascript",
      description:
        "Javascript est un langage de programmation de script couramment utilisé pour créer des effets interactifs et du contenu dynamique dans le navigateur.",
      dimension: 130,
    },
    {
      image: "../img/language/php.png",
      name: "PHP",
      description:
        "PHP signifie HyperText Preprocessor, c`est un langage de script à usage général pour le développement Web. Le code PHP est interprété par un interpréteur PHP implémenté sous la forme d`un module sur le serveur Web.",
      dimension: 170,
    },
    {
      image: "../img/language/node.png",
      name: "Node.js",
      description:
        "Node.js est une plateforme de développement logiciel basée sur javascript pour le côté serveur.",
      dimension: 150,
    },
    {
      image: "../img/language/react.png",
      name: "ReactJS",
      description:
        "ReactJS est une bibliothèque Javascript utilisée pour créer une application d`une seule page avec une interface interactive. Le principe de React est de créer des composants basés sur la gestion d`état et de restituer la page html correspondante.",
      dimension: 170,
    },
    {
      image: "../img/language/mysql.png",
      name: "MySQL",
      description:
        "MySQL est un système de gestion de bases de données relationnelles basé sur le langage SQL qui permet de communiquer avec des bases de données relationnelles.",
      dimension: 190,
    },
    {
      image: "../img/language/mongo.png",
      name: "MongoDB",
      description:
        "MongoDB est un système de gestion de base de données orienté document permettant d`exploiter des bases de données non relationnelles.",
      dimension: 220,
    },
    {
      image: "../img/language/bootstrap.png",
      name: "framework Bootstrap",
      description:
        "Le Framework Bootstrap permet de faire du développement front-end en utilisant HTML, CSS et Javascript. il permet de concevoir rapidement une interface responsive personnalisable.",
      dimension: 190,
    },
    {
      image: "../img/language/sass.png",
      name: "Sass preprocessor",
      description:
        "Le préprocesseur Sass signifie Syntactically Awesome Style Sheets et c`est un langage de script qui est compilé en CSS.",
      dimension: 140,
    },
    {
      image: "../img/language/vue.png",
      name: "Vue.js",
      description:
        "Vue.js est un framework open-source basé sur javascript pour créer des interfaces utilisateur et des applications à page unique.",
      dimension: 150,
    },
    {
      image: "../img/language/postgre.png",
      name: "Postgre.SQL",
      description:
        "Postgre.SQL est un système de gestion de base de données relationnelle basé sur le langage SQL qui permet de communiquer avec une base de données relationnelle.",
      dimension: 150,
    },
  ],
  tool: [
    {
      image: "../img/tools/github.png",
      name: "GitHub",
      description:
        "GitHub est un fournisseur d`hébergement Internet pour le développement de logiciels et c`est également un outil de contrôle de version utilisant le logiciel Git pour suivre les modifications.",
      dimension: 190,
    },
    {
      image: "../img/tools/postman.png",
      name: "Plateforme API Postman",
      description:
        "Postman est une application logiciel qui permet de tester des API en créant et en envoyant différents types de requêtes.",
      dimension: 110,
    },
    {
      image: "../img/tools/vscode.png",
      name: "Visual Studio Code",
      description:
        "Visual Studio Code est un éditeur de code source créé par Microsoft pour Windows, Linux et MacOs. il comprend de nombreuses fonctionnalités telles que le débogage, la coloration syntaxique, la complétion de code intelligente, les extraits de code, la refactorisation de code, etc.",
      dimension: 170,
    },
    {
      image: "../img/tools/docker.png",
      name: "Docker",
      description:
        "Docker est un ensemble de plateformes en tant que produits de service qui utilisent la virtualisation au niveau du système d`exploitation pour fournir des logiciels dans des packages appelés conteneurs.",
      dimension: 120,
    },
    {
      image: "../img/tools/google_sc.png",
      name: "Google Search Console",
      description:
        "Google Search Console est un service Web de Google qui permet de vérifier l`état de l`indexation et d`optimiser la visibilité d`un site Web par référencement.",
      dimension: 220,
    },
    {
      image: "../img/tools/axe.png",
      name: "Axe DevTools",
      description:
        "Axe DevTools est un outil utilisé pour tester l`accessibilité du site Web.",
      dimension: 150,
    },
  ],
};

//==========================================================================================================================
/*
 * DATA SERVICES
 */

let services = {
  data: [
    {
      image: "../img/services/wordpress.png",
      title: "WordPress",
      description:
        "Je peux créer un site Web pour vous en utilisant le célèbre système de gestion de contenu appelé Wordpress. Il existe de nombreux plugins et modèles de conception qui répondront à vos besoins. Je vous formerai également à gérer vous-même le contenu du site Web. Je peux créer différents types de sites web qui boosteront votre productivité comme des sites e-commerce, des blogs, des sites vitrines, etc.",
      dimension: 150,
    },
    /*{
      image: "../img/services/software.png",
      title: "Software",
      description:
        "I can create website for you using the famous content management system called Wordpress. There is so many plugins and design pattern which will fit your needs. I can crreate different type of website with it like e-commerce, blogs, showcase website, etc.",
      dimension: 150,
    },*/
    {
      image: "../img/services/seo.png",
      title: "Référencement SEO, SEA",
      description:
        "Je peux optimiser la visibilité de votre site sur les moteurs de recherche comme google, bing, Yahoo, etc. c'est très utile en Webmarketing pour augmenter le trafic sur votre site, fidéliser vos clients et attirer de nouveaux prospects. Nous définissons ensemble les mots clés nécessaires à votre site web et je restructure le contenu en utilisant les meilleures pratiques de référencement.",
      dimension: 160,
    },
    {
      image: "../img/services/web_app.png",
      title: "Application Web",
      description:
        "Je peux créer des applications Web pour automatiser et simplifier l'exécution de certaines tâches pour vous. L'application sera disponible en ligne et vous pourrez y accéder via votre navigateur. J'utilise généralement des technologies comme ReactJS, VueJS, NodeJS, MySQL et autres pour le faire.",
      dimension: 150,
    },
    /*{
      image: "../img/services/pwa.png",
      title: "Progressive Web Application",
      description:
        "I can create website for you using the famous content management system called Wordpress. There is so many plugins and design pattern which will fit your needs. I can crreate different type of website with it like e-commerce, blogs, showcase website, etc.",
      dimension: 200,
    },*/
    {
      image: "../img/services/dynamic_website.png",
      title: "Site Web dynamique",
      description:
        "Je peux créer un site Web dynamique pour vous à partir de zéro. Ce type de site Web permet une personnalisation de haut niveau et un contrôle total sur le contenu et les données utilisées. J'utilise généralement des technologies comme Javascript, HTML, CSS, NodeJS, Postgre.SQL et autres pour le faire.",
      dimension: 130,
    },
    /*{
      image: "../img/services/mobile.png",
      title: "Mobile Application",
      description:
        "I can create website for you using the famous content management system called Wordpress. There is so many plugins and design pattern which will fit your needs. I can crreate different type of website with it like e-commerce, blogs, showcase website, etc.",
      dimension: 60,
    },*/
  ],
};
//==========================================================================================================================
/*
 * DATA REFERENCES
 */

let references = {
  data: [
    {
      image: "../img/references/zarasclo.png",
      title: "Zarasclo, site du club de basket",
      address: "https://www.linkedin.com/in/guy-maurice-limbio-78953285/",
      quotation:
        "Joan a compris nos besoins en matière de communication digital et a conçu un site Web qui y correspond.",
      author: "Guy Maurice LIMBIO",
      position: "Président du club",
      dimension: 250,
    },
    /*{
      image: "../img/references/site_artiste_lionel.jpg",
      title: "Painting showcase website",
      address: "https://www.linkedin.com/feed/",
      quotation:
        "Joan achieve this wonderful website for my society, now i have a better sight on internet.",
      author: "Lionel PAMADOU",
      position: "painter",
      dimension: 150,
    },
    {
      image: "../img/references/site_club_basket.jpg",
      title: "Basket-ball club website",
      address: "https://www.linkedin.com/feed/",
      quotation:
        "Joan achieve this wonderful website for my society, now i have a better sight on internet.",
      author: "Loïc CHAMEL",
      position: "club manager",
      dimension: 150,
    },
    {
      image: "../img/references/site_boulangerie.jpg",
      title: "Bakery website",
      address: "https://www.linkedin.com/feed/",
      quotation:
        "Joan achieve this wonderful website for my society, now i have a better sight on internet.",
      author: "Didier CLOVIS",
      position: "Baker entrepreneur",
      dimension: 170,
    },
    {
      image: "../img/references/site_marketing.jpg",
      title: "Marketing agency wabsite",
      address: "https://www.linkedin.com/feed/",
      quotation:
        "Joan achieve this wonderful website for my society, now i have a better sight on internet.",
      author: "Bella MANOUKA",
      position: "marketing manager",
      dimension: 170,
    },
    {
      image: "../img/references/site_immobilier.jpg",
      title: "Real estate website",
      address: "https://www.linkedin.com/feed/",
      quotation:
        "Joan achieve this wonderful website for my society, now i have a better sight on internet.",
      author: "Hamed PIRAKI",
      position: "real estate agent",
      dimension: 150,
    },*/
  ],
};
