// preloader
window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

// Smooth Scrolling
$(".navbar a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
