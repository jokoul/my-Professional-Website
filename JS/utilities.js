/*SCROLL TO TOP BUTTON*/
//get the button
const scrollTopBtn = document.getElementById("scroll-top");
//when the user scrolls down 100px from the top of the document, show the button

let scrollValue = window.scrollY;
console.log(scrollValue);

function scrollFunction() {
  if (
    document.body.scrollTop > 1450 ||
    document.documentElement.scrollTop > 1450
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}
//when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; // For chrome, firefox, IE and opera
}

/*ANIMATION LINE */

const lines = document.querySelectorAll(".line");

console.log(lines);

function animeLine() {
  lines.forEach((line) => {
    if (
      document.documentElement.scrollTop > 800 &&
      document.documentElement.scrollTop < 2100
    ) {
      line.classList.add("animeLine");
    } else if (
      document.documentElement.scrollTop > 0.1 &&
      document.documentElement.scrollTop < 250
    ) {
      line.classList.add("animeLine");
    } else {
      line.classList.remove("animeLine");
    }
  });
}
