import Request from "../Classes/Request.js";

(function () {
  "use strict";

  BASEOBJECT.nav.init = function () {
    const navMainWrapper = document.getElementById("navMainWrapper");
    const request = new Request();

    request.get(`${baseUrl}/wp-json/menus/v1/menu`, (err, resp) => {
      if (err) {
        console.log(err);
        return;
      }

      const currentLocation = window.location.href;

      const ul = document.createElement("ul");
      ul.id = "navMainUl";

      resp.map((item) => {

        if (!parseInt(item.menu_item_parent)) {
          const navItem = `
            <li class="${currentLocation === item.url ? "current " : ''}d-flex">
              <a href="${item.url}" class="px-3 text-uppercase">${item.title}</a>
            </li>
          `;
          ul.insertAdjacentHTML("beforeEnd", navItem);
        }
      })
      navMainWrapper.insertAdjacentElement("afterBegin", ul);

      //Remove opacity from wrapper
      navMainWrapper.classList.remove("opacity-0");
      navMainWrapper.classList.add("opacity-100");
    });
  }

  BASEOBJECT.nav.toggleButton = function () {
    const button = document.getElementById("navToggleButton");
    const navMain = document.getElementById("navMainWrapper");
    const body = document.body;
    const request = new Request();

    button.addEventListener("click", function (e) {
      e.preventDefault();

      switch (navMain.classList.contains("active")) {
        case true:
          navMain.classList.remove("active");
          button.classList.remove("active");
          body.classList.remove("active");
          break;
        default:
          navMain.classList.add("active");
          button.classList.add("active");
          body.classList.add("active");
      }
    });
  }
})();
