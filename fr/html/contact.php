<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--A) ajouter balise meta "robots" afin d'indiquer au moteur d'exploration d'indéxer la page et suivre les liens-->
    <meta name="robots" content="index, follow" />
    <!--Implementation of multilingual website-->
    <link
      rel="alternate"
      hreflang="en"
      href="https://joan-kouloumba.in/professional-site/html/contact.php"
    />
    <link
      rel="alternate"
      hreflang="en-US"
      href="https://joan-kouloumba.in/professional-site/html/contact.php"
    />
    <link
      rel="alternate"
      hreflang="fr"
      href="https://joan-kouloumba.in/professional-site/fr/html/contact.php"
    />
    <link
      rel="alternate"
      hreflang="fr-FR"
      href="https://joan-kouloumba.in/professional-site/fr/html/contact.php"
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href="https://joan-kouloumba.in/professional-site/html/contact.php"
    />
    <!--Ajout d'un favicon-->
    <link
      rel="shorcut icon"
      type="image/png"
      href="../img/favicon_io/logomakr.png"
    />
    <!--A) ajout d'une description attrayante (language parlé ex questionnement, mot d'appel à l'action ex achetez, 
		faites-le,etc argument convainquant) pour le lecteur et qui reprend certain mot-clé-->
    <meta
      name="description"
      content="Joan Kouloumba est un développeur web, mobile et logiciel situé à Lyon. il est à l'écoute des opportunités pour la réalisation de sites web, d'applications mobile et de logiciels. Le portfolio de ses projets consultable sur ce site témoigne de ses compétences en programmation informatique qui sont actualisés constamment afin de répondre aux besoins du marché et à l'évolution constante des technologies comme Javascript, SQL, HTML, CSS, Java, PHP, etc. "
    />
    <!-- A) Ajout des "open graph" pour Facebook -->
    <meta
      property="og:title"
      content="Joan Kouloumba - web, mobile and software developer in Lyon - freelance"
    />
    <meta
      property="og:url"
      content="https://joan-kouloumba.in/professional-site"
    />
    <!--M) A modifier plus tard-->
    <meta property="og:image" content="./img/moi.jpg" />
    <meta
      property="og:description"
      content="Joan Kouloumba est un développeur web, mobile et logiciel situé à Lyon. il est à l'écoute des opportunités pour la réalisation de sites web, d'applications mobile et de logiciels. Le portfolio de ses projets consultable sur ce site témoigne de ses compétences en programmation informatique qui sont actualisés constamment afin de répondre aux besoins du marché et à l'évolution constante des technologies comme Javascript, SQL, HTML, CSS, Java, PHP, etc."
    />
    <meta
      property="og:site_name"
      content="Joan Kouloumba professionnal website"
    />
    <meta property="og:type" content="siteweb" />
    <!--M)Emplacement pour video youtube à venir-->
    <meta property="og:video" content="#" />

    <!-- A) Ajout des "open graph" pour Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <!--M) A modifier plus tard-->
    <meta name="twitter:site" content="@joanKouloumba" />
    <meta
      name="twitter:title"
      content="Joan Kouloumba - web, mobile and software developer in Lyon- freelance"
    />
    <meta
      name="twitter:description"
      content="Joan Kouloumba est un développeur web, mobile et logiciel situé à Lyon. il est à l'écoute des opportunités pour la réalisation de sites web, d'applications mobile et de logiciels. Le portfolio de ses projets consultable sur ce site témoigne de ses compétences en programmation informatique qui sont actualisés constamment afin de répondre aux besoins du marché et à l'évolution constante des technologies comme Javascript, SQL, HTML, CSS, Java, PHP, etc."
    />
    <meta name="twitter:image" content="./img/moi.jpg" />

    <title>
      Joan Kouloumba - Contact développeur web, mobile et logiciel à Lyon -
      freelance
    </title>

    <!--Bootstrap-->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
    <!--M) minification des fichier CSS afin de réduire la taille des fichiers et augmenter la vitesse de chargement-->
    <link rel="stylesheet" href="../css/style.css" />
    <!--Google font family-->
    <link
      href="https://fonts.googleapis.com/css?family=Arvo"
      rel="stylesheet"
      type="text/css"
    />
    <!--FONT AWESOME-->
    <script
      src="https://kit.fontawesome.com/52339f9582.js"
      crossorigin="anonymous"
    ></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-X89D9ZX7Q3"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-X89D9ZX7Q3");
    </script>
  </head>
  <body data-spy="scroll" data-target="#mynavBar">
    <!--NAVIGATION BAR WITH SCROLLSPY-->
    <header>
      <nav
        role="navigation"
        class="navbar navbar-expand-md fixed-top navbar-dark"
        id="mynavBar"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="../developpeur-web.html">JK</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-md-flex justify-content-md-end"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav navbar-nav-scroll">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="../developpeur-web.html"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accueil
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="../developpeur-web.html#news"
                      >Nouvelles</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="../developpeur-web.html#achievements"
                      >Réalisations</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./competences.html"> Compétences </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./prestation-service.html">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://joanresume.herokuapp.com"
                  target="_blank"
                  >CV</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./references-avis.html">Références</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact.php">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../html/contact.php"
                  ><img
                    src="../img/icons8-uk-flag-64.png"
                    alt="french"
                    width="25"
                /></a>
              </li>
              <li>
                <div id="google_translate_element"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!------------------------------------------------------------------------------------------------------------>
    <main>
      <progress id="progressBar" value="0" max="100"></progress>

      <!--PROGRAMMING LANGUAGE-->
      <section class="contactSection container-fluid">
        <h1 class="sectionTitle text-center display-4">Contact</h1>
        <div class="line"></div>
        <h2 class="subTitle">
          N'hésitez pas à me contacter et nous discuterons de votre projet
          numérique.
        </h2>
        <article class="container-fluid mt-3">
          <ul
            id="contact-info"
            class="col-12 d-flex flex-column flex-lg-row justify-content-center align-content-center"
          >
            <li
              class="col-12 col-lg-6 d-flex flex-column justify-content-center align-content-center"
            >
              <p class="d-flex justify-content-center align-content-center">
                <i class="fas fa-phone-square"></i> +33 6 59 25 65 14
              </p>
              <p class="d-flex justify-content-center align-content-center">
                <i class="fas fa-envelope"></i> joankouloumba@yahoo.fr
              </p>
            </li>
            <li
              class="col-12 col-lg-6 d-flex flex-column justify-content-center align-content-center"
            >
              <p class="d-flex justify-content-center align-content-center">
                <i class="fas fa-map-marker-alt"></i> Rue Youri Gagarine 69500
                Bron, France (near by Lyon)
              </p>
              <p class="d-flex justify-content-center align-content-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1392.237285713185!2d4.924257172502456!3d45.7416311041713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1132e2cacd5%3A0x774cd28c1f984b67!2sRue%20Youri%20Gagarine%2C%2069500%20Bron!5e0!3m2!1sfr!2sfr!4v1647774906190!5m2!1sfr!2sfr"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </p>
            </li>
          </ul>
        </article>
        <!-- <article
          id="contactSection"
          class="container-fluid d-flex justify-content-center align-content-center"
        >
          <a
            href="https://joanresume.herokuapp.com#contact"
            target="_blank"
            class="btn btn-lg border mb-5"
          >
            envoyer un e-mail
          </a>
        </article> -->
        <!--CONTACT FORM-->
        <article>
          <?php 
              //form submit script
              require_once('../sendMail-fr.php');
            ?>
          <form
            action="contact.php"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="d-md-flex justify-content-center align-item-center">
              <div class="form-group col-md-6">
                <label class="fw-bold" for="name">Nom : </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  class="form-control"
                  placeholder="exemple: Omoye"
                  value="<?php echo !empty($postData['lastname'])?$postData['lastname']:''; ?>"
                />
              </div>
              <div class="form-group col-md-6">
                <label class="fw-bold" for="name">Prénom : </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  class="form-control"
                  placeholder="exemple: Mike"
                  value="<?php echo !empty($postData['firstname'])?$postData['firstname']:''; ?>"
                />
              </div>
            </div>
            <div class="px-3">
              <div class="form-group">
                <label class="fw-bold" for="email">E-mail :</label>
                <div class="input-group">
                  <label class="input-group-text">@</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="exemple : joankouloumba@yahoo.fr"
                    class="form-control"
                    value="<?php echo !empty($postData['email'])?$postData['email']:''; ?>"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="fw-bold" for="subject"
                  >Sujet du message :</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="exemple: demande de devis"
                  value="<?php echo !empty($postData['subject'])?$postData['subject']:''; ?>"
                />
              </div>
              <div class="form-group">
                <label class="fw-bold" for="message">Message :</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Bonjour..."
                  class="form-control"
                  rows="5"
                >
<?php echo !empty($postData['message'])?$postData['message']:''; ?></textarea
                >
              </div>
              <div class="form-group">
                <label class="fw-bold" for="file"
                  >Choisir un fichier (taille max : 1 Mo et format accepté : pdf, doc, odt, docx, jpg, jpeg, png) :</label
                >
                <input
                  type="file"
                  class="form-control"
                  name="file"
                  id="file"
                  placeholder="choose file"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value=""
                  id="check"
                  required
                />
                <label class="form-check-label" for="check"
                  >J'accepte de partager mes données selon les termes et dispositions légaux.</label
                >
              </div>

              <div
                class="form-group d-flex justify-content-center align-content-center"
              >
                <input
                  type="submit"
                  name="submit"
                  value="Envoyer le message"
                  class="btn submitBtn my-3"
                />
              </div>
            </div>
          </form>
        </article>
      </section>
      <!--MAINTENANCE 
        <section
        class="container my-5 p-5 d-flex justify-content-center align-content-center"
      >
        <img class="mb-5" src="../img/page_maintenance.png" alt="maintenance" width="150"/>
      </section> -->
    </main>
    <!--FOOTER-->
    <footer class="footer">
      <div class="footer-content">
        <ul class="social-media">
          <li>
            <a
              href="https://www.linkedin.com/in/joan-kouloumba-570a7680/"
              target="_blank"
              ><i class="fa-brands fa-linkedin-in"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/joanKouloumba" target="_blank"
              ><i class="fa-brands fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com/jokoul" target="_blank"
              ><i class="fa-brands fa-github"></i
            ></a>
          </li>
        </ul>
        <ul class="footer-nav-list">
          <li class="footer-nav-item">
            <a href="../developpeur-web.html#achievements">Portfolio</a>
          </li>
          <li class="footer-nav-item">
            <a href="./competences.html">Compétences</a>
          </li>
          <li class="footer-nav-item">
            <a href="./prestation-service.html">Services</a>
          </li>
          <li class="footer-nav-item">
            <a href="https://joanresume.herokuapp.com" target="_blank">CV</a>
          </li>
          <li class="footer-nav-item">
            <a href="./references-avis.html">Références</a>
          </li>
          <li class="footer-nav-item"><a href="./contact.php">Contact</a></li>
          <li class="footer-nav-item">
            <a href="./mention-legale.html">Mention légale</a>
          </li>
        </ul>
        <p>Copyright &copy; 2022 - Développé par Joan Kouloumba</p>
        <button
          id="scroll-top"
          class="btn scroll-top"
          onclick="topFunction()"
          title="Go at the top of the page"
        >
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
    <!--GOOGLE TRADUCTION-->
    <script type="text/javascript">
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,zh,yo,sw,de,ha,es,zu,ru,ig,sv,ar,pt,hi",
          },
          "google_translate_element"
        );
      }
    </script>

    <script
      type="text/javascript"
      src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <!-- MY JQUERY CODE-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="../JS/jquery.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
      integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
      crossorigin="anonymous"
    ></script>
    <!--MY JAVASCRIPT FILE-->
    <!-- test : ctrl deux points passage en commentaires -->
    <script src="../JS/data_fr.js"></script>
    <script src="../JS/utilities.js"></script>
    <script src="../JS/contact.js"></script>
  </body>
</html>
