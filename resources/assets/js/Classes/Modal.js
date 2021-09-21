import Mail from "./Mail.js";

export default class Modal {

  constructor() {
    this.body = document.body;
    this.fragment = document.createDocumentFragment();
    this.modalId = "modalWindow";
    this.modalClass = "_modal";
    this.overlayClass = "_modal-overlay";
    this.buttonCloseId = "modalClose";
    this.buttonCloseIdBottom = "modalCloseBottom";
    this.buttonSendMail = "buttonSendMail";
  }

  renderTemplate(htmlTemplate) {
    const modal = document.getElementById(this.modalId);
    if (modal) {
      console.log("Element already exists!");
      return;
    }
    this.body.classList.add("active");
    this.fragment.appendChild(this.createOverlay());
    this.fragment.appendChild(this.createTemplate(htmlTemplate));
    this.body.appendChild(this.fragment);

    this.listenClick();
    
    if(!!document.querySelector("._modal .needs-validation")) {
      this.formValidation();
    }
    
    this.classAnimation();
  }

  formValidation() {
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const modalForm = document.querySelector("._modal .needs-validation");

    let valid = false;

    // Loop over them and prevent submission
    
    modalForm.addEventListener("submit", function (event) {
      event.preventDefault();
      valid = false;

      if (!modalForm.checkValidity()) {
        event.stopPropagation();
        valid = false;
      } else {
        valid = true;
      }

      modalForm.classList.add("was-validated");
      
      if (valid) {
        const formData = new FormData(modalForm);
        
        const data = {
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          suburb: formData.get("suburb"),
          message: formData.get("message"),
          token: token
        }
        
        const mail = new Mail();
        
        mail.sendMail(new URLSearchParams(data).toString(), "messageContainer");
      }
      
    }, false);
  }

  createOverlay() {
    const overlay = document.createElement("div");
    overlay.classList.add(this.overlayClass);
    return overlay;
  }

  createTemplate(htmlTemplate) {
    //Modal
    const modal = document.createElement("div");
    modal.classList.add(this.modalClass);
    modal.id = this.modalId;

    //HTML template
    modal.insertAdjacentHTML("afterBegin", `<div class="_modal-wrapper"><a href="#" class="_close-modal-button" id="${this.buttonCloseId}"><span class="toggle-line toggle-line-1"></span><span class="toggle-line toggle-line-2"></span></a><div class="_modal-content-wrapper h-100 w-100">${htmlTemplate}</div></div>`);

    return modal;
  }

  listenClick() {
    const modal = document.getElementById(this.modalId);
    const overlay = document.querySelector(`.${this.overlayClass}`);
    const buttonCloseId = this.buttonCloseId;
    const buttonCloseIdBottom = this.buttonCloseIdBottom;
    const body = this.body;

    modal.addEventListener("click", function (e) {

      //Close button click
      if (buttonCloseId === e.target.id || buttonCloseId === e.target.parentElement.id ||
        buttonCloseIdBottom === e.target.id) {
        e.preventDefault();
        modal.remove();
        overlay.remove();
        body.classList.remove("active");
      }

    })
  }
  
  classAnimation() {
    const modal = document.getElementById(this.modalId);
    setTimeout(function() {
      modal.classList.add("active");
    }, 250);
  }
}
