import Carousel from "../../libs/bootstrap/js/dist/carousel";

(function () {
  "use strict";
  BASEOBJECT.frontPageCarousel.init = function () {
    const frontCarousel = new Carousel(document.getElementById("frontPageCarousel"), {
      interval: 3000
    });
  }

})();
