/*ACHIEVEMENT SECTION SEARCH */
function showProject(dataTab) {
  for (let project of dataTab) {
    //create Card
    let card = document.createElement("div");
    //Card should have category
    card.classList.add(
      "card",
      "hide",
      project.category[0],
      project.category[1],
      project.category[2],
      project.category[3],
      project.category[4],
      project.category[5]
    );

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", project.image);
    image.setAttribute("loading", "lazy");
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container text
    let containerText = document.createElement("div");
    containerText.classList.add("container-text");
    //project name
    let projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.innerText =
      "Titre: " +
      project.projectName.charAt(0).toUpperCase() +
      project.projectName.slice(1).toLowerCase();
    containerText.appendChild(projectName);
    //Date
    let date = document.createElement("p");
    date.classList.add("date-project");
    date.innerHTML = `<span>Date:</span> ${project.date}`;
    containerText.appendChild(date);
    //Stack
    let stack = document.createElement("p");
    stack.classList.add("stack-project");
    stack.innerHTML = `<span>Stack:</span> ${project.stack}`;
    containerText.appendChild(stack);
    //description, feedback
    let wrapperText = document.createElement("div");
    wrapperText.classList.add("wrapper-text");
    wrapperText.innerHTML = `
      <p class="description-project"> <span>Description:</span> ${project.description}</p>
      <p class="feedback"> <span>Retour d'expérience:</span> ${project.feedback}</p>
      `;
    containerText.appendChild(wrapperText);
    //links
    if (project.link1) {
      let link1 = document.createElement("p");
      link1.classList.add("link-card");
      link1.innerHTML = `<a class="btn" href="${project.link1}" target="_blank">Ouvrir</a>`;
      containerText.appendChild(link1);
    }
    if (project.link2) {
      let link2 = document.createElement("p");
      link2.classList.add("link-card");
      link2.innerHTML = `<a class="btn" href="${project.link2}" target="_blank">Lien Github</a>`;
      containerText.appendChild(link2);
    }
    if (project.link3) {
      let link3 = document.createElement("p");
      link3.classList.add("link-card");
      link3.innerHTML = `<a class="btn" href="${project.link3}" target="_blank">Lien Dockerhub</a>`;
      containerText.appendChild(link3);
    }
    card.appendChild(containerText);
    document.getElementById("projects").appendChild(card);
  }
}

/**PAGINATION */
let current_page = 1;
let cards_per_page = 6;
let cardsContainer = document.getElementById("projects");
function numPages() {
  return Math.ceil(projects.data.length / cards_per_page);
}
//dataset in projetcs.data
function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(projects.data, cardsContainer, cards_per_page, current_page);
    //filterProject("All");
  }
}
function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(projects.data, cardsContainer, cards_per_page, current_page);
    //filterProject("All");
  }
}

function changePage(dataArray, wrapper, rows_per_page, page) {
  const btn_prev1 = document.getElementById("btn_prev1");
  const btn_next1 = document.getElementById("btn_next1");
  const btn_prev2 = document.getElementById("btn_prev2");
  const btn_next2 = document.getElementById("btn_next2");
  const page_span1 = document.getElementById("page-number1");
  const page_span2 = document.getElementById("page-number2");
  page_span1.innerHTML = page;
  page_span2.innerHTML = page;
  wrapper.innerHTML = "";
  //validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  page--;
  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = dataArray.slice(start, end);

  //for loop
  for (let project of paginatedItems) {
    //create Card
    let card = document.createElement("div");
    //Card should have category
    card.classList.add(
      "card",
      /*"hide",*/
      project.category[0],
      project.category[1],
      project.category[2],
      project.category[3],
      project.category[4],
      project.category[5]
    );

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", project.image);
    image.setAttribute("loading", "lazy");
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container text
    let containerText = document.createElement("div");
    containerText.classList.add("container-text");
    //project name
    let projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.innerText =
      "Titre: " +
      project.projectName.charAt(0).toUpperCase() +
      project.projectName.slice(1).toLowerCase();
    containerText.appendChild(projectName);
    //Date
    let date = document.createElement("p");
    date.classList.add("date-project");
    date.innerHTML = `<span>Date:</span> ${project.date}`;
    containerText.appendChild(date);
    //Stack
    let stack = document.createElement("p");
    stack.classList.add("stack-project");
    stack.innerHTML = `<span>Stack:</span> ${project.stack}`;
    containerText.appendChild(stack);
    //description, feedback
    let wrapperText = document.createElement("div");
    wrapperText.classList.add("wrapper-text");
    wrapperText.innerHTML = `
      <p class="description-project"> <span>Description:</span> ${project.description}</p>
      <p class="feedback"> <span>Retour d'expérience:</span> ${project.feedback}</p>
      `;
    containerText.appendChild(wrapperText);
    //links
    if (project.link1) {
      let link1 = document.createElement("p");
      link1.classList.add("link-card");
      link1.innerHTML = `<a class="btn" href="${project.link1}" target="_blank">Ouvrir</a>`;
      containerText.appendChild(link1);
    }
    if (project.link2) {
      let link2 = document.createElement("p");
      link2.classList.add("link-card");
      link2.innerHTML = `<a class="btn" href="${project.link2}" target="_blank">Lien Github</a>`;
      containerText.appendChild(link2);
    }
    if (project.link3) {
      let link3 = document.createElement("p");
      link3.classList.add("link-card");
      link3.innerHTML = `<a class="btn" href="${project.link3}" target="_blank">Lien Dockerhub</a>`;
      containerText.appendChild(link3);
    }
    card.appendChild(containerText);
    wrapper.appendChild(card);
  }
  //activeSearch style on All button
  const buttons = document.getElementsByClassName("button-value");
  Array.from(buttons).forEach((button) => {
    button.classList.remove("activeSearch");
  });
  buttons[0].classList.add("activeSearch");

  /*if (page == 1) {
    btn_prev1.style.visibility = "hidden";
    btn_next1.style.visibility = "visible";
  }
  if (page == numPages()) {
    btn_next1.style.visibility = "hidden";
    btn_prev1.style.visibility = "visible";
  }
  if (page == 1) {
    btn_prev2.style.visibility = "hidden";
    btn_next2.style.visibility = "visible";
  }
  if (page == numPages()) {
    btn_next2.style.visibility = "hidden";
    btn_prev2.style.visibility = "visible";
  }*/
}

//Parameter passed from button (Parameter same as category)
function filterProject(value) {
  const pagesContainer = document.getElementsByClassName("pagination");
  const buttons = document.getElementsByClassName("button-value");
  console.log(pagesContainer);
  if (value !== "Tous") {
    Array.from(pagesContainer).forEach((pageContainer) => {
      pageContainer.classList.add("hide");
      pageContainer.classList.remove("pagination");
    });
  }

  const cardsContainer = document.getElementById("projects");
  cardsContainer.innerHTML = "";
  showProject(projects.data);
  //Remove activeSearch style on All button

  buttons[0].classList.remove("activeSearch");

  //Button class code
  //let buttons = document.querySelectorAll(".button-value");
  let input = document.getElementById("search-input");
  Array.from(buttons).forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("activeSearch");
    } else {
      button.classList.remove("activeSearch");
    }
    input.addEventListener("input", () => {
      button.classList.remove("activeSearch");
    });
  });

  //select all cards
  const elements = document.querySelectorAll(".card");
  //loop trough all cards
  elements.forEach((element) => {
    //check if element contains category class
    if (element.classList.contains(value)) {
      //display element based on category
      element.classList.remove("hide");
    } else {
      //hide other elements
      element.classList.add("hide");
    }
  });
}

/**FILTER PROJECT BUTTON */
/*
function filterProjectButton(value) {
  const cardsContainer = document.getElementById("projects");
  cardsContainer.innerHTML = "";
  showProject(projects.data);

  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  let input = document.getElementById("search-input");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("activeSearch");
    } else {
      button.classList.remove("activeSearch");
    }
    input.addEventListener("input", () => {
      button.classList.remove("activeSearch");
    });
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop trough all cards
  elements.forEach((element) => {
    if (value == "All") {
      element.classList.remove("hide");
    } else {
      //check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
*/
//Search button click
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".project-name");
  let cards = document.querySelectorAll(".card");

  //loop trough all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

//filter automatically
const inputSearch = document.getElementById("search-input");

inputSearch.addEventListener("keyup", () => {
  //initializations
  let inputValue = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".project-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

function displayAll() {
  changePage(projects.data, cardsContainer, cards_per_page, 1);

  const pageContainer1 = document.getElementById("pagination1");
  const pageContainer2 = document.getElementById("pagination2");
  const buttons = document.getElementsByClassName("button-value");
  console.log(buttons[0]);
  if (buttons[0].classList.contains("activeSearch")) {
    pageContainer1.classList.add("pagination");
    pageContainer1.classList.remove("hide");
    pageContainer2.classList.add("pagination");
    pageContainer2.classList.remove("hide");
  }
}

//Initially display all projects
window.onload = () => {
  animeLine();
  changePage(projects.data, cardsContainer, cards_per_page, 1);
};

/*
DIFFERENT FUNCTION ON SCROLL
*/
window.onscroll = function () {
  scrollFunction();
  animeLine();
};
