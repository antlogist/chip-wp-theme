import Request from "../Classes/Request.js";
import Modal from "../Classes/Modal.js";

(function () {
  "use strict";
  BASEOBJECT.buttons.init = function () {
    const body = document.body;
    const modal = new Modal();
    const request = new Request();
    let template = "";
    body.addEventListener("click", function (e) {

      //About
      if (e.target.id === "openModalAbout") {

        const pageId = document.getElementById("openModalAbout").dataset.page_id;
        request.get(`${baseUrl}/wp-json/wp/v2/pages/${pageId}`, (err, resp) => {
          if (err) {
            console.log(err);
            return;
          }

          template = "";
          template = `
          <div class="container-fluid container-xxl">
            <div class="paragraphs-wrapper py-5">
              <h2 class="_modal-title">${resp.title.rendered}</h2>
              ${resp.content.rendered}
              <div class="buttons-wrapper w-100 mt-3">
                <a href="./about.php" class="_btn d-inline-block">More...</a>
                <a href="#" class="_btn _btn-invert _btn-right d-inline-block" id="modalCloseBottom">Close</a>
              </div>
            </div>
          </div>`;

          modal.renderTemplate(template);
        });
      };

      //Products
      if (e.target.id === "openModalProducts") {

        const pageId = document.getElementById("openModalProducts").dataset.page_id;
        request.get(`${baseUrl}/wp-json/wp/v2/pages/${pageId}`, (err, resp) => {
          if (err) {
            console.log(err);
            return;
          }

          template = "";
          template = `
          <div class="container-fluid container-xxl">
            <div class="products-info py-5">
              <h2 class="_modal-title">${resp.title.rendered}</h2>
              ${resp.content.rendered}
              <div class="buttons-wrapper w-100 mt-3">
                <a href="./products.php" class="_btn d-inline-block">More...</a>
                <a href="#" class="_btn _btn-invert _btn-right d-inline-block" id="modalCloseBottom">Close</a>
              </div>
            </div>
          </div>`;

          modal.renderTemplate(template);

        })
      }

      //Mail
      if (e.target.id === "openModalMail") {
        template = "";
        template = `
          <div class="container-fluid container-xxl" id="messageContainer">
            <div class="contact-form-wrapper py-5">
              <h2 class="_modal-title">Contact form</h2>
              <form class="row needs-validation" novalidate>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="inputName" class="form-label">Name*</label>
                    <input name="name" type="text" class="form-control" id="inputName" required>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="inputPhoneNumber" class="form-label">Phone*</label>
                    <input name="phone" type="text" class="form-control" id="inputPhoneNumber" required>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email address*</label>
                    <input name="email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" required>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="inputSuburb" class="form-label">Suburb</label>
                    <input name="suburb" type="text" class="form-control" id="inputSuburb">
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="inputMessage" class="form-label">Message*</label>
                    <textarea name="message" class="form-control" id="inputMessage" required></textarea>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div class="button-wrapper">
                    <button class="_btn text-uppercase" id="buttonSendMail">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>`;

        modal.renderTemplate(template);
      }
    });
  }
})();
