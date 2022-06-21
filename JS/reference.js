/*DISPLAY PROFESIONAL REFERENCES */
function proReferenceDisplay(referencesArray) {
  for (let reference of referencesArray) {
    const proReferenceCard = document.getElementById("pro-reference-card");

    proReferenceCard.innerHTML += `
        <li class="reference-item col-12 col-md-6 col-lg-4 col-xl-3 my-3">
            <img class="refImg" src="${reference.image}" alt="${reference.title}" width="${reference.dimension}"/>
            <div class="overlay px-1">
            <h3 class="refTitle my-3">${reference.title}</h3>
            <figure>
            <blockquote cite="${reference.address}">
            <q>${reference.quotation}</q>
            </blockquote>
            <figcaption>- ${reference.author}, <cite>${reference.position}</cite>&nbsp;&nbsp;&nbsp;&nbsp;<a href="${reference.address}" target="_blank"><i class="fa-brands fa-linkedin-in"></i
            ></a></figcaption>
            </figure>
            </div>
        </li>
    `;
  }
}
proReferenceDisplay(proReferences.data);

/*DISPLAY ACADEMIC REFERENCES */
function acaReferenceDisplay(referencesArray) {
  for (let reference of referencesArray) {
    const acaReferenceCard = document.getElementById("aca-reference-card");
    //create card
    acaReferenceCard.innerHTML += `
        <li data-aos="flip-right" class="reference-item col-12 col-md-6 col-lg-4 col-xl-3 my-3">
            <img id="acaRefImg" class="acaRefImg" src="${reference.image}" alt="${reference.title}" width="${reference.dimension}" onclick="displayModal('${reference.image}','${reference.title}','${reference.level}','${reference.year}','${reference.school}','${reference.address}',)"/>
        </li>
    `;
  }
}
acaReferenceDisplay(acaReferences.data);

/*DISPLAY MODAL*/
function displayModal(image, title, levelVal, yearVal, schoolVal, addressVal) {
  //Create image Modal
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("imgModal");
  const diploma = document.getElementById("diploma");
  const level = document.getElementById("level");
  const year = document.getElementById("year");
  const school = document.getElementById("school");

  modal.style.display = "block";
  modalImg.src = image;
  diploma.innerHTML = "diploma title: " + title;
  level.innerHTML = "diploma level: " + levelVal;
  year.innerHTML = "Year of graduation: " + yearVal;
  school.innerHTML = `Learning structure: <a href="${addressVal}" target="_blank" >${schoolVal}</a>`;

  const closeBtn = document.getElementsByClassName("closeBtn")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

/*
DIFFERENT FUNCTION ON SCROLL
*/
window.onscroll = function () {
  scrollFunction();
  animeLine();
};
