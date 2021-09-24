(function () {
  "use strict";
  BASEOBJECT.wpcf7.init = function () {
    const form = document.querySelector(".wpcf7-form");
    form.addEventListener("click", function(e) {
      const target = e.target;
      const responseOutput = document.querySelector(".wpcf7-response-output");
      const submitButton = document.querySelector(".wpcf7-submit");
      if(target=== submitButton) {
        responseOutput.style.display = "flex";
      }
      if(target === responseOutput) {
        responseOutput.style.display = "none";
      }
    })
  }
})();
