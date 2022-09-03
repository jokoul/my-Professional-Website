/*
 * DATA PROJECT SECTION ACHIEVEMENT
 */
let projects = {
  data: [
    {
      projectName: "Application de formulaire d'audit",
      image: "./img/projects/chat.png",
      category: [
        "Front-end",
        "Utilitaire",
        "React.JS",
        "Application-Web",
        "Firebase",
      ],
      date: "03-09-2022",
      stack: "React.js, Firebase",
      description:
        "Réalisation d'une application basique de chat en temps réel basée sur Firebase et sur React permettant de communiquer en temps réel.",
      feedback:
        "Dans ce projet, j'ai commencé par créer une nouvelle application dans firebase, puis j'ai configuré firestore pour gérer la base de données nosql. J'ai défini la règle d'authentification sur les informations d'identification du compte Google. Ensuite, j'ai créé mes composants react en utilisant des hooks firebase et des méthodes comme useCollectionData, GoogleAuthProvider() pour gérer le message de chat, le formulaire. Pour finir, j'ai utilisé l'hébergement firebase pour déployer mon application.",
      link1: "https://two-person-chat-app.web.app/",
      link2: "https://github.com/jokoul/project-48-two-person-chat-app",
    },
    {
      projectName: "Application de formulaire d'audit",
      image: "./img/projects/audiform.png",
      category: [
        "Front-end",
        "Utilitaire",
        "React.JS",
        "Application-Web",
        "Firebase",
      ],
      date: "30-08-2022",
      stack: "React.js, Bootstrap, Firebase",
      description:
        "Réalisation d'une application de formulaire d'audit réalisée avec React qui permet aux auditeurs d'effectuer facilement des audits. Vous pouvez utiliser le formulaire numérique pour remplir le questionnaire d'audit et le score sera calculé automatiquement, puis vous pourrez le télécharger en tant que fichier pdf.",
      feedback:
        "Grâce à cette application, j'ai digitalisé un processus métier autrefois basé sur le papier. J'ai utilisé React et Bootstrap pour concevoir l'interface utilisateur de l'application, puis j'ai utilisé les packages node jspdf et html2canvas pour implémenter la fonction de conversion pdf. J'ai déployé l'application sur firebase google Backend en tant que service (BaaS). Je prévois d'améliorer l'application en implémentant la fonction de prise de photo comme preuve à joindre au formulaire numérique.",
      link1: "https://audiform-46aa4.web.app/",
      link2: "https://github.com/jokoul/project-50-AudiForm-App",
    },
    {
      projectName: "Application d'assistant vocal",
      image: "./img/projects/voice-assistant.png",
      category: [
        "Full-stack",
        "Utilitaire",
        "React.JS",
        "Node.JS",
        "Application-Web",
        "Heroku",
      ],
      date: "23-08-2022",
      stack: "React.js, Node.js",
      description:
        "Réalisation d'une application d'assistant vocal avec reconnaissance vocale réalisée avec React et Node.js permettant de retranscrire un message vocal en message texte. Ensuite, vous pouvez modifier et envoyer le message texte par e-mail directement et recevoir un e-mail de confirmation parfois dans la boîte de spam.",
      feedback:
        "Pour réaliser ce projet, j'ai créé en frontend deux composants React pour gérer l'interface utilisateur, puis en backend, j'ai utilisé le package Nodemailer pour envoyer le message texte converti par e-mail.",
      link1: "https://voice-assistant-jo.herokuapp.com/",
      link2: "https://github.com/jokoul/project-46-voice-assistant",
    },
    {
      projectName: "Application de commande de pizza",
      image: "./img/projects/pizzajo.png",
      category: [
        "Full-stack",
        "Utilitaire",
        "Laravel",
        "framework-Bootstrap",
        "E-commerce",
        "MySQL",
      ],
      date: "19-08-2022",
      stack: "Laravel, Bootstrap, MySQL",
      description:
        "Réalisation d'une application de commande de pizza réalisée avec Laravel qui permet de gérer le commerce de restauration rapide de pizza. Les clients peuvent commander des pizzas via l'application et le gestionnaire peut gérer les informations des clients et il peut ajouter, modifier, supprimer des pizzas dans le tableau de menu.",
      feedback:
        "Pour réaliser ce projet, j'ai commencé par créer une base de données MySQL avec des modèles et des migrations. Ensuite, j'ai généré des contrôleurs pour gérer les formulaires et les opérations crud sur différentes ressources comme les pizzas, les utilisateurs, les commandes. Enfin, j'ai créé des modèle de vues appropriés avec l'extension blade pour obtenir une interface utilisateur affichant les données. Mon application respecte le design pattern MVC.",
      link1: "https://joan-kouloumba.in/pizzajo",
      link2: "https://github.com/jokoul/project-38-pizza-ordering",
    },
    {
      projectName: "fonctionnalité Mode clair-sombre",
      image: "./img/projects/light-dark-mode.png",
      category: [
        "Front-end",
        "Fonctionnalité",
        "Javascript",
        "HTML-CSS",
        "Site-Web",
      ],
      date: "12-08-2022",
      stack: "Javascript, HTML, CSS",
      description:
        "Réalisation d'un site Web de démonstration conçu pour montrer les fonctionnalités des modes clair et sombre en javascript. Cette fonctionnalité permet aux utilisateurs d'utiliser le bouton bascule pour changer la couleur du site Web.",
      feedback:
        "Pour réaliser ce projet, j'ai appliqué le principe DRY sur la fonction personnalisée que j'ai créée pour modifier dynamiquement l'attribut de classe et le style css en utilisant les méthodes setAttribute et classList.",
      link1: "https://jokoul.github.io/project-44-Light-Dark-Mode",
      link2: "https://github.com/jokoul/project-44-Light-Dark-Mode",
    },
    {
      projectName: "Application image dans image",
      image: "./img/projects/pic-in-pic.png",
      category: [
        "Front-end",
        "Fonctionnalité",
        "Javascript",
        "HTML-CSS",
        "Application-Web",
      ],
      date: "04-08-2022",
      stack: "Javascript, HTML, CSS",
      description:
        "Réalisation d'une application qui permet de réduire un partage d'écran ou de fenêtre avec lecture vidéo et de travailler sur d'autres fenêtres en même temps. Il est fait avec Javascript.",
      feedback:
        "Pour réaliser ce projet,  j'ai créé un flux multimédia avec getDisplayMedia() et appliqué la méthode requestPictureInPicture sur l'élément vidéo.",
      link1: "https://jokoul.github.io/project-39-picture-in-picture",
      link2: "https://github.com/jokoul/project-39-picture-in-picture",
    },
    {
      projectName: "Graphique à Barres du PIB USA",
      image: "./img/projects/usa-gdp-d3.png",
      category: [
        "Front-end",
        "Utilitaire",
        "D3.js",
        "HTML-CSS",
        "Application-Web",
      ],
      date: "02-08-2022",
      stack: "D3.js, HTML, CSS",
      description:
        "Réalisation d'une application d'histogramme de visualisation de données montrant l'évolution du Produit Intérieur Brut (PIB) des États-Unis.",
      feedback:
        "Pour réaliser ce graphique, j'ai utilisé la bibliothèque D3.js pour définir un canevas svg. À l'intérieur du svg, j'ai créé plusieurs fonctions pour générer une échelle, dessiner des barres basées sur des données PIB récupérées à partir de l'API et générer des axes.",
      link1: "https://jokoul.github.io/data-visualization-bar-chart-usa-gdp/",
      link2: "https://github.com/jokoul/data-visualization-bar-chart-usa-gdp",
    },
    {
      projectName: "PHP Fans Blog",
      image: "./img/projects/php-fans-blog.png",
      category: [
        "Full-stack",
        "PHP",
        "MySQL",
        "framework-Bootstrap",
        "Site-Web",
      ],
      date: "30-07-2022",
      stack: "PHP, MySQL, Bootstrap",
      description:
        "Réalisation d'un Blog réalisé avec PHP POO et MySQL. J'ai utilisé des données factices pour remplir le contenu.",
      feedback:
        "dans ce projet, j'ai séparé mon code dans des fichiers de module et je les ai inclus là où il est nécessaire afin de suivre le principe DRY et de produire un code propre et maintenable.",
      link1: "https://joan-kouloumba.in/php-fans-blog/",
      link2: "https://github.com/jokoul/project-35-php-fans-blog",
    },
    {
      projectName: "Application de Citation à twitter",
      image: "./img/projects/quote-twitter.png",
      category: [
        "Front-end",
        "Divertissement",
        "Javascript",
        "Application-Web",
        "HTML-CSS",
      ],
      date: "28-07-2022",
      stack: "Javascript, HTML-CSS",
      description:
        "Réalisation d'une application de génération de citations qui extrait des citations d'une API et l'affiche avec une fonctionnalité de partage Twitter. ",
      feedback:
        "Dans ce projet,  j'ai effectué un appel d'API avec la méthode fetch et défini un chargeur car il s'agit d'une fonction asynchrone. J'ai géré les erreurs potentielles dans un bloc 'try/catch'.",
      link1: "https://jokoul.github.io/project-37-quote-twitter/",
      link2: "https://github.com/jokoul/project-37-quote-twitter",
    },
    {
      projectName: "Application Web Scrapper",
      image: "./img/projects/web-scraper.png",
      category: [
        "Back-end",
        "Fonctionnalité",
        "Heroku",
        "Express.JS",
        "Application-Web",
        "Node.JS",
      ],
      date: "21-07-2022",
      stack: " Express.js, Node.js",
      description:
        "Réalisation d'une application Web Scraper déployée sur Heroku qui permet de récupérer toutes les rubriques d'un site web uniquement en saisissant son adresse url. Il permet également d'obtenir la capture d'écran de toutes les pages ciblées par l'url. Cette application est faite avec Node.js et de nombreux packages comme puppeteer et cheerio.",
      feedback:
        "Dans ce projet, la méthode 'cheerio.load()' permet de sélectionner un élément dans le document HTML copié, puis je peux traiter les données comme je le souhaite. Pour le package 'puppeteer', j'ai d'abord lancé un navigateur avec la méthode 'puppeteer.launch()' puis j'ai créé une nouvelle page avec la méthode 'browser.newPage()' ensuite je suis allé à l'url avec la méthode 'page.goto (url)' et enfin j'ai procédé aux données comme je veux.",
      link1: "https://web-scraper-joan.herokuapp.com/",
      link2: "https://github.com/jokoul/project-34-web-scraper",
    },
    {
      projectName: "Boutique en ligne",
      image: "./img/projects/garatimbi.png",
      category: [
        "Full-stack",
        "MongoDB",
        "Heroku",
        "Express.JS",
        "React.JS",
        "Node.JS",
        "E-commerce",
        "Utilitaire",
      ],
      date: "12-07-2022",
      stack: "MongoDB, Express.js, React.js Node.js",
      description:
        "Réalisation d'une boutique en ligne qui permet de vendre et de gérer des produits. Il est fait avec la pile MERN. Il implémente de nombreuses fonctionnalités telles que la gestion du panier, l'opération CRUD sur le profil utilisateur, la fonction de recherche, la fonction de paiement, etc.",
      feedback:
        "Dans ce projet, j'ai d'abord créé un serveur node.js et je l'ai déployé sur heroku. puis j'ai implémenté des routes API, des modèles et des contrôleurs pour l'utilisateur, les produits, les commandes, etc. Ensuite, j'ai utilisé la bibliothèque react-bootstrap pour créer l'interface utilisateur. J'ai également utilisé des React Hooks comme useState, useReducer, useNavigate, useEffect pour implémenter la logique de mon application et gérer l'état des données.",
      link1: "https://garatimbi-ecommerce.herokuapp.com/",
      link2: "https://github.com/jokoul/project-33-garatimbi-ecommerce",
    },
    {
      projectName: "Planificateur de projet",
      image: "./img/projects/project-planner.png",
      category: [
        "Front-end",
        "Vue.JS",
        "Netlify",
        "Application-Web",
        "Utilitaire",
      ],
      date: "06-07-2022",
      stack: "Vue.js, Netlify, Json server",
      description:
        "Réalisation d'une application de planification de projet réalisée avec Vue.js et vous permettant d'organiser les étapes du projet. Il a été déployé avec Netlify.",
      feedback:
        "Ce projet m'a permis d'utiliser Json Server pour simuler une API dans mon application. J'ai implémenté les opérations CRUD et j'ai utilisé router-link pour gérer la navigation dans l'application. Les événements personnalisés créés avec $emit, les props, les méthodes, les propriétés de données et les données calculées m'ont aidé à définir la logique de mon application.",
      link1: "https://fabulous-genie-3b1b9c.netlify.app",
      link2: "https://github.com/jokoul/project-32-Project-planner",
    },
    {
      projectName: "Quizz des Villes Africaines",
      image: "./img/projects/african-city-quizzer.png",
      category: [
        "Back-end",
        "MySQL",
        "PHP",
        "Application-Web",
        "HTML-CSS",
        "Divertissement",
      ],
      date: "26-06-2022",
      stack: "PHP, HTML, CSS, MySQL",
      description:
        "Réalisation d'une application Quizz pour tester vos connaissances sur les villes Capitale Africaine. Il est construit avec le mode procédural PHP et le système de gestion de base de données MySQL.",
      feedback:
        "Ce projet m'a permis de créer une interface utilisateur faite uniquement avec HTML et CSS. J'ai utilisé la super variable globale de session pour enregistrer le score et la méthode unset() pour réinitialiser le score.",
      link1: "https://joan-kouloumba.in/african-city-quizzer",
      link2: "https://github.com/jokoul/prioject-31-African-City-Quizzer",
    },
    {
      projectName: "Application d'enregistrement de contacts.",
      image: "./img/projects/contact-register.png",
      category: [
        "Back-end",
        "MySQL",
        "Utilitaire",
        "Application-Web",
        "Laravel",
      ],
      date: "20-06-2022",
      stack: "Laravel, Bootstrap, MySQL",
      description:
        "Réalisation d'une application d'enregistrement de contacts permettant d'enregistrer des informations de contact telles que l'adresse, le numéro de téléphone, etc. J'ai utilisé le framework PHP appelé Laravel pour réaliser cette application en implémentant les opérations CRUD.",
      feedback:
        "Ce projet m'a permis d'utiliser Laravel qui est basé sur le modèle MVC. J'ai donc conçu des routes spécifiques qui appellent un contrôleur de ressources et le contrôleur gère la base de données via des modèles d'une part et renvoient les vues correspondantes avec l'extension blade d'autre part.",
      link1: "https://joan-kouloumba.in/contact-register",
      link2: "https://github.com/jokoul/project-40-contact-registerer",
    },
    {
      projectName: "Liste de tâches Pern.",
      image: "./img/projects/pern-todo-list.png",
      category: [
        "Full-stack",
        "React.JS",
        "Node.JS",
        "Heroku",
        "Postgre.SQL",
        "Utilitaire",
        "Application-Web",
        "Express.JS",
      ],
      date: "14-06-2022",
      stack: "React.js, Express.js, Node.js, PostgreSQL",
      description:
        "Réalisation d'une application de todo-list réalisée avec les technologies PERN et permettant d'organiser les tâches. Il a été déployé avec Heroku.",
      feedback:
        "Ce projet m'a permis d'utiliser la pile PERN, c'est-à-dire Postgresql comme système de gestion de base de données, Express.js comme bibliothèque pour créer l'API REST, React.js comme framework pour créer une interface côté client et Node.js comme plate-forme d'exécution Javascript pour exécuter javascript côté serveur.",
      link1: "https://pern-todo-list-joan.herokuapp.com/",
      link2: "https://github.com/jokoul/project-29-pern-todo-list",
    },
    {
      projectName: "Boîte de message",
      image: "./img/projects/message-box.png",
      category: [
        "Back-end",
        "PHP",
        "HTML-CSS",
        "MySQL",
        "Utilitaire",
        "Application-Web",
      ],
      date: "12-06-2022",
      stack: "PHP, HTML, CSS, MySQL",
      description:
        "Réalisation d'une application de messagerie permettant de créer, lire, mettre à jour et supprimer des messages. J'ai utilisé la programmation procédurale PHP pour y parvenir.",
      feedback:
        "Ce projet m'a permis d'utiliser un langage de programmation côté serveur appelé PHP. J'ai implémenté des opérations CRUD à l'aide de requêtes SQL et de fonctions PHP telles que mysqli_connect, mysqli_query, mysqli_fetch_assoc, mysqli_real_escape_string",
      link1: "https://joan-kouloumba.in/message-box/",
      link2: "https://github.com/jokoul/project-28-message-box",
    },
    {
      projectName: "Modèle animé de site.",
      image: "./img/projects/animated-template.png",
      category: [
        "Front-end",
        "Javascript",
        "Netlify",
        "Tailwindcss",
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
        "Heroku",
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
      projectName: "Application compteur de score de tennis",
      image: "./img/projects/tennis-score.png",
      category: [
        "Front-end",
        "React.JS",
        "Docker",
        "Heroku",
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
      projectName: "Reservia, accomodation booking website",
      image: "./img/projects/reservia.png",
      category: ["Front-end", "HTML-CSS", "Site-Web"],
      date: "01-08-2021",
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
  ],
};

//==========================================================================================================================
/*
 * DATA REFERENCES
 */

let proReferences = {
  data: [
    {
      image: "../img/pro-references/zarasclo.png",
      title: "Zarasclo, site du club de basket",
      address: "https://www.linkedin.com/in/guy-maurice-limbio-78953285/",
      quotation:
        "Joan a compris nos besoins en matière de communication digital et a conçu un site Web qui y correspond.",
      author: "Guy Maurice LIMBIO",
      position: "Président du club",
      dimension: 250,
    },
  ],
};

let acaReferences = {
  data: [
    {
      image: "../img/aca-references/dev-island-complete-web-dev.png",
      title: "Cours développement web fullstack bootcamp",
      level: "Certification",
      year: "2022",
      school: "Development Island, UK",
      address: "https://www.udemy.com/user/ib12/",
      dimension: 250,
    },
    {
      image: "../img/aca-references/openclassroom-dev-web.png",
      title: "Web Developer Profesional Certificate",
      level: "Certification",
      year: "2022",
      school: "Openclassroom, FR",
      address: "https://openclassrooms.com",
      dimension: 250,
    },
    {
      image: "../img/aca-references/licence-pro-ind.png",
      title:
        "3 year college degree in Industrial Production specialized in metrology, control and quality insurance.",
      level: "Bachelor degree",
      year: "2014",
      school: "University of Grenoble, FR",
      address: "https://www.univ-grenoble-alpes.fr/",
      dimension: 250,
    },
    {
      image: "../img/aca-references/freecodecamp-javascript.png",
      title: "Algorithmes JavaScript et structures de données",
      level: "Certification",
      year: "2022",
      school: "FreeCodeCamp, US",
      address:
        "https://www.freecodecamp.org/certification/joankouloumba/javascript-algorithms-and-data-structures",
      dimension: 250,
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
      image: "../img/language/react.png",
      name: "ReactJS",
      description:
        "ReactJS est une bibliothèque Javascript utilisée pour créer une application d`une seule page avec une interface interactive. Le principe de React est de créer des composants basés sur la gestion d`état et de restituer la page html correspondante.",
      dimension: 170,
    },
    {
      image: "../img/language/vue.png",
      name: "Vue.js",
      description:
        "Vue.js est un framework open-source basé sur javascript pour créer des interfaces utilisateur et des applications à page unique.",
      dimension: 150,
    },
    {
      image: "../img/language/laravel.png",
      name: "Laravel",
      description:
        "Laravel est un framework Web PHP gratuit et open source destiné au développement d`applications Web suivant le modèle architectural modèle-vue-contrôleur (MVC) et basé sur Symfony.",
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
      image: "../img/language/postgre.png",
      name: "Postgre.SQL",
      description:
        "Postgre.SQL est un système de gestion de base de données relationnelle basé sur le langage SQL qui permet de communiquer avec une base de données relationnelle.",
      dimension: 150,
    },
  ],
  tool: [
    {
      image: "../img/tools/jenkins.png",
      name: "Jenkins",
      description:
        "Jenkins est un serveur d`automatisation open source qui permet aux développeurs du monde entier de créer, tester et déployer leurs logiciels de manière fiable.",
      dimension: 190,
    },
    {
      image: "../img/tools/jira.webp",
      name: "Jira",
      description:
        "Jira est une application logicielle utilisée pour le suivi des problèmes et la gestion de projet. L`outil, développé par la société Atlassian, est devenu largement utilisé par les équipes de développement agiles pour suivre les bogues, les histoires, les épopées et d`autres tâches.",
      dimension: 190,
    },
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
