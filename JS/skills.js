/*PROGRAMMING LANGUAGE */
function showProgramming(languageArray) {
  for (let language of languageArray) {
    const languageGallery = document.getElementById("language-gallery");
    languageGallery.innerHTML += `
      <li class="grid-item">
            <a href="#exampleModal" class="thumbnail" data-toggle="modal" onclick="modalContent('${language.name}','${language.description}')">
              <img src="${language.image}" alt="html" width="${language.dimension}" />
              <div class="words">
                <h3 class="grid-title">${language.name}</h3>
                <p class="grid-text">
                ${language.description}
                </p>
              </div>
            </a>
          </li> 
      `;
  }
}
showProgramming(skills.language);

/*TOOL */
function showTool(toolArray) {
  for (let tool of toolArray) {
    const toolGallery = document.getElementById("tool-gallery");

    toolGallery.innerHTML += `
      <li class="grid-item">
            <a href="#exampleModal" onclick="modalContent('${tool.name}','${tool.description}')" class="thumbnail" data-toggle="modal" >
              <img src="${tool.image}" alt="html" width="${tool.dimension}" />
              <div class="words">
                <h3 class="grid-title">${tool.name}</h3>
                <p class="grid-text">
                ${tool.description}
                </p>
              </div>
            </a>
        </li>  
      `;
  }
}
showTool(skills.tool);

function modalContent(name, description) {
  const modalName = document.getElementById("exampleModalLabel");
  const modalDescription = document.getElementById("modal-body");

  modalName.innerHTML = name;
  modalDescription.innerHTML = description;
}

/*
DIFFERENT FUNCTION ON SCROLL
*/
window.onscroll = function () {
  scrollFunction();
  animeLine();
};
