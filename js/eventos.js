
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#carouselExampleControls");
  carousel.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
      carousel.querySelector("#prev").click();
    } else {
      carousel.querySelector("#next").click();
    }
  });
});
