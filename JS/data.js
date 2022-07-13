/*
 * DATA PROJECT SECTION ACHIEVEMENT
 */
let projects = {
  data: [
    {
      projectName: "Online Shopping Store.",
      image: "./img/projects/garatimbi.png",
      category: [
        "Full-stack-development",
        "E-commerce",
        "Heroku",
        "Tool",
        "MongoDB",
        "Express.JS",
        "React.JS",
        "Node.JS",
      ],
      date: "12-07-2022",
      stack: "MongoDB, Express.js, React.js, Node.js",
      description:
        "Achievement of an online shopping store which allows to sell and manage products. It is made with MERN stack. It implements many features like cart managing, CRUD operation on user profile, search feature, payment feature,etc.",
      feedback:
        "In this project, First I did a node.js server and I deployed it on heroku. then I implemented api routes, models and controllers for user, products, orders, etc. Then, I used react-bootstrap library to create User Interface. I also used react Hooks like useState, useReducer, useNavigate, useEffect to implement my app logic and manage data state.",
      link1: "https://garatimbi-ecommerce.herokuapp.com/",
      link2: "https://github.com/jokoul/project-33-garatimbi-ecommerce",
    },
    {
      projectName: "Project Planner.",
      image: "./img/projects/project-planner.png",
      category: [
        "Front-end-development",
        "Web-App",
        "Tool",
        "Vue.JS",
        "Netlify",
      ],
      date: "06-07-2022",
      stack: "Vue.js, Netlify, Json-server",
      description:
        "Achievement of a Project Planning app that allows to organise project steps. It was deployed with Netlify.",
      feedback:
        "This project allowed me to use Json Server to simulate an API in my app. I implemented CRUD operations and I used router-link to manage navigation through the app. Custom events made with $emit, props, methods, data properties and computed data helped me to set the logic of my app.",
      link1: "https://fabulous-genie-3b1b9c.netlify.app",
      link2: "https://github.com/jokoul/project-32-Project-planner",
    },
    {
      projectName: "African City Quizzer.",
      image: "./img/projects/african-city-quizzer.png",
      category: [
        "Back-end-development",
        "Web-App",
        "Entertainment",
        "HTML-CSS",
        "PHP",
        "MySQL",
      ],
      date: "26-06-2022",
      stack: "PHP, MySQL, HTML, CSS",
      description:
        "Achievement of a Quizz app to test your knowledge on African Capital City. It is build with PHP procedural mode and MySQL database management system.",
      feedback:
        "This project allowed me to create an User Interface made only with HTML and CSS. I used session super global variable to save the score and unset() methode to reset the score.",
      link1: "https://joan-kouloumba.in/african-city-quizzer",
      link2: "https://github.com/jokoul/prioject-31-African-City-Quizzer",
    },
    {
      projectName: "contact Registration app.",
      image: "./img/projects/contact-register.png",
      category: ["Back-end-development", "Web-App", "Tool", "Laravel", "MySQL"],
      date: "20-06-2022",
      stack: "Laravel, MySQL, Bootstrap",
      description:
        "Achievement of a contact register app that allow to register contact information such as address, phone number, etc. I used PHP framework called Laravel to achieve this app by implementing CRUD operations.",
      feedback:
        "This project allowed me to use Laravel which is based on MVC pattern, so I designed specific routes wich call a resource controller and the controller handle database through models from one side and return corresponding views with blade extension from other side.",
      link1: "https://joan-kouloumba.in/contact-register",
      link2: "https://github.com/jokoul/project-40-contact-registerer",
    },
    {
      projectName: "Pern Todo List.",
      image: "./img/projects/pern-todo-list.png",
      category: [
        "Full-stack-development",
        "React.JS",
        "Node.JS",
        "Heroku",
        "Web-App",
        "Tool",
        "Express.JS",
        "Postgre.SQL",
      ],
      date: "14-06-2022",
      stack: "React.js, Express.js, Node.js, PostgreSQL",
      description:
        "Achievement of a todo-list app made with PERN technologies stack and allow you to organise tasks. It was deployed with Heroku.",
      feedback:
        "This project allowed me to use PERN stack that's mean Postgresql as database management system, Express.js as library to create the REST API, React.js as framework to build client-side interface and Node.js as Javascript runtime platform to run javascript by server-side.",
      link1: "https://pern-todo-list-joan.herokuapp.com/",
      link2: "https://github.com/jokoul/project-29-pern-todo-list",
    },
    {
      projectName: "message box.",
      image: "./img/projects/message-box.png",
      category: [
        "Back-end-development",
        "PHP",
        "Tool",
        "HTML-CSS",
        "MySQL",
        "Web-App",
      ],
      date: "12-06-2022",
      stack: "PHP, HTML, CSS, MySQL",
      description:
        "Achievement of a message box app that allow you to create, read, update and delete message. I used PHP Procedural programmation to achieve it.",
      feedback:
        "This project allowed me to use a server side programming language called PHP. I implemented CRUD operations using SQL requests and PHP functions like mysqli_connect, mysqli_query, mysqli_fetch_assoc, mysqli_real_escape_string",
      link1: "https://joan-kouloumba.in/message-box/",
      link2: "https://github.com/jokoul/project-28-message-box",
    },
    {
      projectName: "Animated Template of site.",
      image: "./img/projects/animated-template.png",
      category: [
        "Front-end-development",
        "Javascript",
        "Functionality",
        "Tailwindcss",
        "Netlify",
        "Web-site",
      ],
      date: "09-06-2022",
      stack: "Javascript, Tailwindcss",
      description:
        "Achievement of a dynamic website made with Javascript, Tailwindcss and deployed with Netlify.",
      feedback:
        "This project allowed me to use Tailwindcss which is a CSS framework. I used also random user generator API to populate the website and AOS javascript library to set animations with data-aos attribute.",
      link1: "https://loquacious-rugelach-13856d.netlify.app/",
      link2: "https://github.com/jokoul/project-27-Animated-template",
    },
    {
      projectName: "Reaction Time Counter.",
      image: "./img/projects/reaction-time.gif",
      category: [
        "Front-end-development",
        "Vue.JS",
        "Entertainment",
        "Tool",
        "Netlify",
        "Web-App",
      ],
      date: "08-06-2022",
      stack: "Vue.js, Netlify",
      description:
        "Achievement of a Reaction Time counter App that allow you to test and measure your reaction time, it was designed with vuejs and deployed with Netlify Hosting.",
      feedback:
        "This project allowed me to use lifecycle Hooks like mounted() to fire some functions at different stages of my application running. I use also custom event with $emit method to send data from child components to the parent component.",
      link1: "https://jade-griffin-d47936.netlify.app/",
      link2: "https://github.com/jokoul/project-26-reaction-time-counter",
    },
    {
      projectName: "Currency Converter.",
      image: "./img/projects/currency-converter.png",
      category: [
        "Front-end-development",
        "React.JS",
        "Tool",
        "Firebase",
        "Web-App",
      ],
      date: "06-06-2022",
      stack: "React.js, exchangeRate-API, Firebase",
      description:
        "Achievement of a currency converter app designed with React.js and deployed with Firebase Hosting. It consumes data from exchangeRate-API and display the current currency exchange rate.",
      feedback:
        "This project allowed me to use Hooks like useState to store data, useEffect to run fonction when some data change in the dependency array. I used also props to pass datas and methods from the parent component to the child components.",
      link1: "https://currency-converter-22b76.firebaseapp.com/",
      link2: "https://github.com/jokoul/project-24-currency-converter",
    },
    {
      projectName: "Infinite Image Scroller.",
      image: "./img/projects/infinity-scroll.png",
      category: [
        "Front-end-development",
        "Javascript",
        "Functionality",
        "HTML-CSS",
        "Web-App",
      ],
      date: "04-06-2022",
      stack: "Javascript, unsplash API, HTML, CSS",
      description:
        "Achievement of a showcase web app  which implements infinity scroll functionality and it consumes image data from Unsplash API to populate image container dynamically in the DOM. When user scroll down and almost reach the bottom, new content is automatically loaded which result to an infinity scroll effect.",
      feedback:
        "This project allowed me to manipulate DOM element's properties like document.body.offsetHeight, document.body.scrollTop and window object's properties like window.innerHeight, window.scrollY.",
      link1:
        "https://jokoul.github.io/project-23-Infinity-Scroll-Unsplash-API/",
      link2:
        "https://github.com/jokoul/project-23-Infinity-Scroll-Unsplash-API",
    },
    {
      projectName: "Job Lister Website.",
      image: "./img/projects/job-lister.png",
      category: [
        "Full-stack-development",
        "PHP",
        "MySQL",
        "framework-Bootstrap",
        "Tool",
        "Web-site",
      ],
      date: "02-06-2022",
      stack: "PHP, MySQL, Bootstrap 5",
      description:
        "Achievement of a dynamical job search and posting website using PHP OOP (Object-Oriented Programming) and MySQL databse which is a database management system (DBMS).",
      feedback:
        "This project allowed me to use MVC design pattern to structure my project's architecture. I did advanced SQL queries with inner joins to perform CRUD operations. I created several Class like Job, Template, Database and instantiated them to use their properties and methods at different places within my code.",
      link1: "https://joan-kouloumba.in/job-lister",
      link2: "https://github.com/jokoul/project-22-job-lister",
    },
    {
      projectName: "Animed quotes generator.",
      image: "./img/projects/quote-generator.png",
      category: [
        "Front-end-development",
        "Vue.JS",
        "Firebase",
        "Entertainment",
        "Web-App",
      ],
      date: "31-05-2022",
      stack: "Vue.js,Firebase",
      description:
        "Achievement of a anime quotes generator app designed with Vue.js and deployed with Firebase Hosting. It consumes data from API called Animechan and display it in a cool way.",
      feedback:
        "this project allowed me to use the javascript framwork called Vue.js. I used directives like v-for to loop on array of data. I created reusable components to make my code easy to maintain and modular.",
      link1: "https://quote-generator-2d5c4.web.app/",
      link2: "https://github.com/jokoul/project-21-quote-generator",
    },
    {
      projectName: "Distance between cities.",
      image: "./img/projects/distance-between-cities.png",
      category: [
        "Front-end-development",
        "Javascript",
        "framework-Bootstrap",
        "Google-API-GCP",
        "Tool",
        "Web-App",
      ],
      date: "27-05-2022",
      stack: "Google Maps API-GCP, Javascript, Bootstrap 5",
      description:
        "Achievement of an app that provides travelling assistance by getting information between to location like the distance and time. It is based on google maps API (Application Programming Interface) and Google Cloud Platform (GCP).",
      feedback:
        "this project was an opportunity to work with a public API to retrieve external data in JSON format and manipulate them in my way. I used GCP which is a Platform as a Service (PaaS) to monitor, authenticate and access to the API service.",
      link1: "https://joan-kouloumba.in/distance-between-cities",
      link2: "https://github.com/jokoul/project-20-distance-between-cities",
    },
    {
      projectName: "Online Note app.",
      image: "./img/projects/note-app.png",
      category: [
        "Full-stack-development",
        "PHP",
        "MySQL",
        "framework-Bootstrap",
        "library-JQuery",
        "Tool",
        "Web-App",
      ],
      date: "24-05-2022",
      stack: "PHP, jQuery, MySQL, Bootstrap 5",
      description:
        "Achievement of an app allowing to take note easely everywhere and store it safely.",
      feedback:
        "this project allowed me to work with the server-side programming language PHP. I used jQuery to do AJAX calls, MySQL to manage the database and Bootstrap to set responsive design quickly. I implemented many features like signup/login with activation token and confirmation email. User Account management with session variables, CRUD operations on the Notes and data persistence with cookies.",
      link1: "https://joan-kouloumba.in/note-app",
      link2: "https://github.com/jokoul/project-19-Online-Note-App",
    },
    {
      projectName: "File Explorer app.",
      image: "./img/projects/file-explorer.png",
      category: [
        "Back-end-development",
        "Node.JS",
        "framework-Bootstrap",
        "Heroku",
        "Tool",
        "Web-App",
      ],
      date: "15-05-2022",
      stack: "Node.js, Bootstrap 5",
      description:
        "Achievement of a file explorer app which allow to navigate through directories and read different kind of file extension.",
      feedback:
        "this project allowed me to work with the runtime Node.js. I used Node.js module called File System (fs) and some of its methods like statSync() to get file information, readdirSync() to read directory content, readFileSync() to read file content.",
      link1: "https://jo-online-file-explorer.herokuapp.com",
      link2: "https://github.com/jokoul/project-11-Online-file-explorer",
    },
    {
      projectName: "Zarasclo, basket-ball club site.",
      image: "./img/projects/zarasclo.png",
      category: ["Wordpress", "Docker", "SEO", "Web-site"],
      date: "02-05-2022",
      stack: "Docker, Wordpress, Plugin Elementor, SEO yoast",
      description:
        "Achievement of a Basket-ball website which present the club, players, management team, display match planning, results, etc.",
      feedback:
        "this project allowed me to work on a real world case of a client needs. I worked with a customer specifications and a time deadline to respect. I iterated many interviews with the client to precise the features to implement and to train him on updating wordpress content.",
      link1: "https://joan-kouloumba.in/zarasclo",
      link3: "https://hub.docker.com/r/joandock/zarasclo",
    },
    {
      projectName: "Drawing app for desktop",
      image: "./img/projects/drawing-app.png",
      category: [
        "Front-end-development",
        "library-JQuery",
        "HTML-CSS",
        "Entertainment",
        "Web-App",
      ],
      date: "25-04-2022",
      stack: "HTML, CSS, jQuery",
      description:
        "Achievement of a drawing app designed to work on desktop and allow to sketch fun things.",
      feedback:
        "In this project, I used HTML, CSS and jQuery. An UML-diagram allowed to map all user interaction before coding. 'getContext' function allowed me to set 2D canvas type.",
      link1: "https://joan-kouloumba.in/drawing-app",
      link2: "https://github.com/jokoul/project-10-Drawing-App-JQ",
    },
    {
      projectName: "StopWatch app",
      image: "./img/projects/stopwatch.png",
      category: [
        "Front-end-development",
        "library-JQuery",
        "framework-Bootstrap",
        "Tool",
        "Web-App",
      ],
      date: "20-04-2022",
      stack: "Bootstrap 5.1, jQuery",
      description:
        "Achievement of a stopwatch app designed to measure time in different situation like sport, work, cooking, etc.",
      feedback:
        "In this project, I use Bootstrap 5.1 and jQuery. I first thought about interaction logic through an UML-diagram. 'setInterval' function was crucial to set centiseconds, seconds and minutes counter.",
      link1: "https://joan-kouloumba.in/stopwatch",
      link2: "https://github.com/jokoul/project-9-Stopwatch-JQ-BP",
    },
    {
      projectName: "Holidious, an Holiday finder website",
      image: "./img/projects/holidious.png",
      category: [
        "Sass-preprocessor",
        "HTML-CSS",
        "framework-Bootstrap",
        "Web-site",
      ],
      date: "04-10-2022",
      stack: "Bootstrap 5.1, Sass preprocessor, HTML, CSS",
      description:
        "Achievement of an holiday finder website wich provide many Holiday offers.",
      feedback:
        "this project allowed me to use the last version of Bootstrap 5.1. I also use Keyframes to build advanced animation and Sass preprocessor to structure my CSS code with mixins, variables, nesting, etc.",
      link1: "https://joan-kouloumba.in/holidious",
      link2: "https://github.com/jokoul/project-SS-BP-Holidious-holiday-finder",
    },
    {
      projectName: "Fruits Slice game",
      image: "./img/projects/fruits-game.png",
      category: [
        "Front-end-development",
        "HTML-CSS",
        "library-JQuery",
        "Entertainment",
        "web-App",
      ],
      date: "03-29-2022",
      stack: "jQuery, HTML, CSS",
      description:
        "Achievement of a Fruits Slice Game website for entertainment.",
      feedback:
        "this project allowed me to manipulate jQuery functions and algorithmic logic.",
      link1: "https://joan-kouloumba.in/fruits-game/",
      link2: "https://github.com/jokoul/project-JQ-01-Fruit-slice-game",
    },
    {
      projectName: "generalWP, an entrepreneur website.",
      image: "./img/projects/general-wp.png",
      category: ["Wordpress", "Docker", "Web-site"],
      date: "04-02-2022",
      stack: "Docker, Wordpress, Plugin Elementor",
      description:
        "Achievement of a business promotional website wich can fit any kind of business activities.",
      feedback:
        "this project allow me to manipulate wordpress Phlox theme, Elementor plugins, etc..",
      link1: "https://joan-kouloumba.in/general-wp",
      link3: "https://hub.docker.com/r/joandock/wordpress_generalwp",
    },
    {
      projectName: "Math The Fun way, Maths learning site",
      image: "./img/projects/maths-tutorial.png",
      category: [
        "Front-end-development",
        "HTML-CSS",
        "Javascript",
        "Tool",
        "Entertainment",
        "Web-site",
        "Web-App",
      ],
      date: "03-23-2022",
      stack: "Javascript, HTML, CSS",
      description:
        "Achievement of a Maths learning website including a game of Maths for practice.",
      feedback:
        "this project allowed me to manipulate maths functions of javascript, Grid CSS, advanced form input and setTimeout fonction.",
      link1: "https://joan-kouloumba.in/maths-tutorial/index.html",
      link2: "https://github.com/jokoul/project-8-Maths-the-Fun-way",
    },
    {
      projectName: "Reservia, accomodation booking website",
      image: "./img/projects/reservia.png",
      category: ["Front-end-development", "HTML-CSS", "Web-site"],
      date: "08-01-2021",
      stack: "HTML, CSS",
      description:
        "Integration of website land page models by using only HTML and CSS from scratch.",
      feedback: "this project allowed me to understand and use flexbox system.",
      link1:
        "https://jokoul.github.io/Projet-2-Transformer-une-maquette-en-site-web-avec-HTML5-CSS3/",
      link2:
        "https://github.com/jokoul/Projet-2-Transformer-une-maquette-en-site-web-avec-HTML5-CSS3",
    },
    {
      projectName: "Tennis-Score-Counter application",
      image: "./img/projects/tennis-score.png",
      category: [
        "Front-end-development",
        "React.JS",
        "Docker",
        "Heroku",
        "Tool",
        "Web-App",
      ],
      date: "02-12-2022",
      stack: "ReactJS, Redux",
      description:
        "This application is useful to follow and register a score of tennis game.",
      feedback:
        "this project allowed me to manipulate the most used state management library called Redux.",
      link1: "https://tennis-score-counter.herokuapp.com/",
      link2:
        "https://github.com/jokoul/project-RT-RX-01-Tennis-score-counter-Redux-React",
      link3: "https://hub.docker.com/r/joandock/tennis-score-counter",
    },
    {
      projectName: "Ohmyfood, restaurant booking website",
      image: "./img/projects/ohmyfood.png",
      category: [
        "Front-end-development",
        "HTML-CSS",
        "Sass-preprocessor",
        "Tool",
        "Web-site",
      ],
      date: "08-23-2021",
      stack: "HTML, CSS, Sass preprocessor ",
      description:
        "Integration of several pages of the website model by using HTML, CSS and Sass from scratch.",
      feedback:
        "this project allowed me to create advance animations with keyframes and to use Sass preprocessor to structure my CSS code by using nesting, variables, mixins, etc.",
      link1:
        "https://jokoul.github.io/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS",
      link2:
        "https://github.com/jokoul/Projet-3-Dynamiser-une-page-web-avec-des-animations-CSS",
    },
    {
      projectName: "Banana-design, web agency showcase site",
      image: "./img/projects/banana-design.png",
      category: ["Wordpress", "Docker", "Web-site"],
      date: "02-20-2022",
      stack: "Wordpress, Docker, Plugin Elementor",
      description:
        "Achievement of a showcase website to promote the activities of the agency.",
      feedback:
        "this project was very useful to manipulate basic features of the content management system wordpress as plugins, themes, etc..",
      link1: "https://joan-kouloumba.in/banana-design",
      link3:
        "https://hub.docker.com/r/joandock/wordpress_agence_web_banana_design",
    },
    {
      projectName: "Orinoco, e-commerce site",
      image: "./img/projects/orinoco.png",
      category: [
        "Javascript",
        "Front-end-development",
        "framework-Bootstrap",
        "Web-site",
      ],
      date: "10-25-2021",
      stack: "Javascript Vanilla, Node.JS, Express.js, framework Bootstrap",
      description:
        "Achievement of e-commerce site with basket managing system using data mocking and payment simulation. ",
      feedback:
        "this project allowed me to familiarize with browser localstorage, fetch API and Javascript basic knowledge.",
      link1:
        "https://jokoul.github.io/Projet-5-Construire-un-site-e-commerce-en-JavaScript-vanilla/index.html",
      link2:
        "https://github.com/jokoul/Projet-5-Construire-un-site-e-commerce-en-JavaScript-vanilla",
    },
    {
      projectName: "La chouette web agency",
      image: "./img/projects/chouette.png",
      category: ["SEO", "HTML-CSS", "Web-site"],
      date: "10-07-2021",
      stack: "SEO, HTML, CSS",
      description:
        "enhancing web visibility of the agency and the website performance by increasing loading speed, by reducing size of images, etc.",
      feedback:
        "this project allowed me to use the good practices of SEO and accessibility by using tools like google search console to set relevant key words, Axe Devtools to fix accessibility issues, etc.",
      link1:
        "https://jokoul.github.io/Projet-4-Optimiser-un-site-web-existant-avec-des-outils-SEO/index.html",
      link2:
        "https://github.com/jokoul/Projet-4-Optimiser-un-site-web-existant-avec-des-outils-SEO",
    },
    {
      projectName: "Hot_takes, Sauce notation app",
      image: "./img/projects/hottakes.png",
      category: [
        "Back-end-development",
        "Node.JS",
        "Express.JS",
        "MongoDB",
        "API-REST",
        "Tool",
        "Web-App",
      ],
      date: "11-15-2021",
      stack: "Node.js, Express.js, MongoDB",
      description:
        "Achievement of an API REST to run CRUD operations on the Front-end application.",
      feedback:
        "this project allowed me to use the Object Data Model Mongoose to manipulate a NoSQL database. ",
      link2:
        "https://github.com/jokoul/Projet-6-Construire-une-API-pour-une-application-web",
    },
    {
      projectName: "Groupomania, private social network",
      image: "./img/projects/groupomania.png",
      category: [
        "Full-stack-development",
        "Node.JS",
        "Express.JS",
        "MySQL",
        "Vue.JS",
        "Web-App",
      ],
      date: "01-15-2022",
      stack: "Vue.JS, Node.js, Express.js, MySQL",
      description:
        "Achievement of an entreprise social network with the framework VueJS.",
      feedback:
        "this project allowed me to familiarize with component logic to obtain modulary and maintainable code base. I also used the Object Relational Model Sequelize to manipulate SQL database.",
      link2:
        "https://github.com/jokoul/Projet-7-Construire-un-reseau-social-d-entreprise-avec-le-framework-Vue.js",
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
      title: "Zarasclo, basket-ball club site",
      address: "https://www.linkedin.com/in/guy-maurice-limbio-78953285/",
      quotation:
        "Joan has understood our digital needs and design a website that match them.",
      author: "Guy Maurice LIMBIO",
      position: "Zarasclo Basketball club president",
      dimension: 250,
    },
  ],
};
let acaReferences = {
  data: [
    {
      image: "../img/aca-references/dev-island-complete-web-dev.png",
      title: "Complete web development course Bootcamp",
      level: "Certificate",
      year: "2022",
      school: "Development Island, UK",
      address: "https://www.udemy.com/user/ib12/",
      dimension: 250,
    },
    {
      image: "../img/aca-references/openclassroom-dev-web.png",
      title: "Web Developer Profesional Certificate",
      level: "Certificate",
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
      title: "JavaScript Algorithms and Data Structures",
      level: "Certitficate",
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
        "HyperText Markup language is used to create and organise web content.",
      dimension: 150,
    },
    {
      image: "../img/language/css.png",
      name: "CSS",
      description:
        "CSS stands for Cascading Style Sheets and it describes how HTML elements have to be displayed on screen or in other media.",
      dimension: 110,
    },
    {
      image: "../img/language/javascript.png",
      name: "Javascript",
      description:
        "Javascript is a script programming language commonly used to create interactive effects and dynamic content within the browser.",
      dimension: 130,
    },
    {
      image: "../img/language/php.png",
      name: "PHP",
      description:
        "PHP stand for HyperText Preprocessor, it is a general-purpose scripting language suit for web developpement. PHP code is interpreted by PHP interpreter implemented as a module on web server.",
      dimension: 170,
    },
    {
      image: "../img/language/react.png",
      name: "ReactJS",
      description:
        "ReactJS is a Javascript library used to create single page application with an interactive interface. The principle of React is to create components based on state management and render the corresponding html page.",
      dimension: 170,
    },
    {
      image: "../img/language/vue.png",
      name: "Vue.js",
      description:
        "Vue.js is an open-source framework based on javascript to create user interfaces and single page application.",
      dimension: 150,
    },
    {
      image: "../img/language/laravel.png",
      name: "Laravel",
      description:
        "Laravel is a free, open-source PHP web framework intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony.",
      dimension: 170,
    },
    {
      image: "../img/language/node.png",
      name: "Node.js",
      description:
        "Node.js is a software development platform based on javascript for server-side.",
      dimension: 150,
    },
    {
      image: "../img/language/mysql.png",
      name: "MySQL",
      description:
        "MySQL is a relational database management system based on the SQL language which allow to communicate with relational database.",
      dimension: 190,
    },
    {
      image: "../img/language/postgre.png",
      name: "Postgre.SQL",
      description:
        "Postgre.SQL is a relational database management system based on the SQL language that allow to communicate with relational database.",
      dimension: 150,
    },
    {
      image: "../img/language/mongo.png",
      name: "MongoDB",
      description:
        "MongoDB is a document-oriented database management system allowing to exploit non-relational databse.",
      dimension: 220,
    },
    {
      image: "../img/language/bootstrap.png",
      name: "framework Bootstrap",
      description:
        "Framework Bootstrap allows to do front-end development by using HTML, CSS and Javascript. it allows to design customizable responsive interface quickly.",
      dimension: 190,
    },
    {
      image: "../img/language/sass.png",
      name: "Sass preprocessor",
      description:
        "Sass preprocessor stands for Syntactically Awesome Style Sheets and it is a scripting language that is compiled into CSS.",
      dimension: 150,
    },
  ],
  tool: [
    {
      image: "../img/tools/github.png",
      name: "GitHub",
      description:
        "GitHub is an internet hosting provider for software development and it is also a version control tool using Git software for tracking changes.",
      dimension: 190,
    },
    {
      image: "../img/tools/postman.png",
      name: "Postman api platform",
      description:
        "Postman is a software application that allows the testing of APIs by creating and sending different type of request.",
      dimension: 110,
    },
    {
      image: "../img/tools/vscode.png",
      name: "Visual Studio Code",
      description:
        "Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and MacOs. it includes many features like debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, etc. ",
      dimension: 170,
    },
    {
      image: "../img/tools/docker.png",
      name: "Docker",
      description:
        "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
      dimension: 120,
    },
    {
      image: "../img/tools/google_sc.png",
      name: "Google Search Console",
      description:
        "Google Search Console is a web service by google which allows to check indexing status and optimize visibility of a website by SEO.",
      dimension: 220,
    },
    {
      image: "../img/tools/axe.png",
      name: "Axe DevTools",
      description:
        "Axe DevTools is a tool used to test the accessibility of website.",
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
        "I can create website for you by using the famous content management system called Wordpress. There is lots of plugins and design pattern which will fit your needs. I will train you also to manage the website content by yourself. I can create different type of website that will boost your productivity like e-commerce sites, blogs, showcase websites, etc.",
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
      title: "Search Engine Optimization",
      description:
        "I can optimize the visibility of your website on search engine like google, bing, Yahoo, etc. this is very useful in Webmarketing to increase traffic to your site, build customer loyalty and attract new prospects. We define together the key words needed in your website and I restructure the content using best practices of SEO. ",
      dimension: 160,
    },
    {
      image: "../img/services/web_app.png",
      title: "Web Application",
      description:
        "I can create web applications to automatize and simplify performing of some tasks for you. The application will be available online and you can access it trough your browser. I usually use some technology like ReactJS, VueJS, NodeJS, MySQL and other to do it.",
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
      title: "Dynamic Website",
      description:
        "I can create dynamic website for you from scratch. This type of website allows a high level customization and a full control on content and data used. I usually use some technology like Javascript, HTML, CSS, NodeJS, Postgre.SQL and other to do it.",
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
