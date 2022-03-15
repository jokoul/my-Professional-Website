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
      project.category[2]
    );

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", project.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container text
    let containerText = document.createElement("div");
    containerText.classList.add("container-text");
    //project name
    let projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.innerText =
      "Title: " +
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
    <p class="feedback"> <span>Feedback:</span> ${project.feedback}</p>
    `;
    containerText.appendChild(wrapperText);
    //links
    if (project.link1) {
      let link1 = document.createElement("p");
      link1.classList.add("link-card");
      link1.innerHTML = `<a class="btn" href="${project.link1}" target="_blank">Open</a>`;
      containerText.appendChild(link1);
    }
    if (project.link2) {
      let link2 = document.createElement("p");
      link2.classList.add("link-card");
      link2.innerHTML = `<a class="btn" href="${project.link2}" target="_blank">Github link</a>`;
      containerText.appendChild(link2);
    }
    if (project.link3) {
      let link3 = document.createElement("p");
      link3.classList.add("link-card");
      link3.innerHTML = `<a class="btn" href="${project.link3}" target="_blank">Dockerhub link</a>`;
      containerText.appendChild(link3);
    }
    card.appendChild(containerText);
    document.getElementById("projects").appendChild(card);
  }
}
showProject(projects.data);

//Parameter passed from button (Parameter same as category)
function filterProject(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  let inputValue = document.getElementById("search-input").value;
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

//Initially display all projects
window.onload = () => {
  filterProject("All");
  animeLine();
};

/*
DIFFERENT FUNCTION ON SCROLL
*/
window.onscroll = function () {
  scrollFunction();
  animeLine();
};
