/**DISPLAY SERVICES */
function referenceDisplay(referencesArray) {
  for (let reference of referencesArray) {
    const referenceCard = document.getElementById("reference-card");

    referenceCard.innerHTML += `
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
referenceDisplay(references.data);

/*
DIFFERENT FUNCTION ON SCROLL
*/
window.onscroll = function () {
  scrollFunction();
  animeLine();
};
