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

      const children = {};

      resp.map((item) => {

        if (!parseInt(item.menu_item_parent)) {
          const navItem = `
            <li data-id="${item.ID}" class="${currentLocation === item.url ? "current " : ''}d-flex li-nav">
              <a href="${item.url}" class="px-3 text-uppercase">${item.title}</a>
            </li>
          `;
          ul.insertAdjacentHTML("beforeEnd", navItem);
        } else {

          children[item.menu_item_parent] ? "" : children[item.menu_item_parent] = [];

          children[item.menu_item_parent].push({
            id: item.ID,
            parentId: item.menu_item_parent,
            url: item.url,
            title: item.title
          });
        }
      })

      console.log(children);
      navMainWrapper.insertAdjacentElement("afterBegin", ul);

      //Remove opacity from wrapper
      navMainWrapper.classList.remove("opacity-0");
      navMainWrapper.classList.add("opacity-100");

      if (Object.keys(children).length !== 0) {
        const lis = document.getElementsByClassName("li-nav");

        [...lis].map((li) => {
          const id = li.dataset.id;
          for (const child in children) {
            if (child === id) {
              li.classList.add("parent");
              const a = li.children;
              a[0].classList.add("parent-link");
              submenuRender(li);
            }
          }
        })
      }

      //Submenu template
      function submenuRender(el) {
        const fragment = document.createDocumentFragment();
        const ul = document.createElement("ul");
        ul.classList.add("ul-nav-child");

        children[el.dataset.id].map((item) => {
          const navItemChild = `
          <li data-id="${item.id}" class="${currentLocation === item.url ? "current " : ''}li-nav-child">
            <a href="${item.url}" class="text-uppercase">${item.title}</a>
          </li>
        `;
          ul.insertAdjacentHTML("beforeEnd", navItemChild);
        })
        fragment.appendChild(ul);
        el.appendChild(fragment);
      }
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
