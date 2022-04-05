/**DISPLAY SERVICES */
function referenceDisplay(referencesArray) {
  for (let reference of referencesArray) {
    const referenceCard = document.getElementById("reference-card");

    referenceCard.innerHTML += `
        <li class="reference-item col-12 col-md-6 col-lg-4 col-xl-3 my-3">
            <img src="${reference.image}" alt="${reference.title}" width="${reference.dimension}" loading="lazy"/>
            <h3 class="h2 my-3">${reference.title}</h3>
            <figure>
            <blockquote cite="${reference.address}">
            <q>${reference.quotation}</q>
            </blockquote>
            <figcaption>- <a href="${reference.address}"  target="_blank">${reference.author}</a>, <cite>${reference.position}</cite></figcaption>
            </figure>
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
