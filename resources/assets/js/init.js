(function () {
  "use strict";

  BASEOBJECT.nav.init();
  BASEOBJECT.nav.initFooter();
  BASEOBJECT.nav.toggleButton();
//  BASEOBJECT.buttons.init();
  
  const body = document.body;
  switch (body.id) {
    case "frontPage":
      BASEOBJECT.frontPageCarousel.init();
      BASEOBJECT.wpcf7.init();
  }

})();
