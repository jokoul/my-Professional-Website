/**DISPLAY SERVICES */
function serviceDisplay(servicesArray) {
  for (let service of servicesArray) {
    const serviceCard = document.getElementById("service-card");

    serviceCard.innerHTML += `
        <li class="service-item col-12 col-md-6 col-lg-4 col-xl-3 my-3">
            <img src="${service.image}" alt="${service.title}" width="${service.dimension}" loading="lazy"/>
            <h3 class="h2 my-3">${service.title}</h3>
            <p class="">${service.description}</p>
        </li>
    `;
  }
}
serviceDisplay(services.data);

/*
DIFFERENT FUNCTION ON SCROLL
*/
window.onscroll = function () {
  scrollFunction();
  animeLine();
};
