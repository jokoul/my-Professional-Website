/* CAROUSEL CONTROL */
$(function () {
  $(".carousel").carousel({
    interval: 7000,
  });
});

/* SMOOTH SCROLLING */
jQuery(function () {
  // Add smooth scrolling to all links
  $("a#scroll-top").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smoot page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

/* PROGRESS BAR */
$(window).on("scroll", function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height(),
    scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressBar").attr("value", position);
});

/*GOOGLE TRANSLATE */
$(function () {
  $("#google_translate_element").on("DOMNodeInserted", function () {
    $(".goog-te-combo option[value='']").html("Translate");
  });
});
