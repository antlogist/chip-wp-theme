import Request from "./Request.js";

export default class Mail {

  constructor() {
    this.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    this.url = `${baseUrl}/wp-content/themes/overlapping-design-theme/inc/mail/mail.php`;
  }
  
  getHeaders() {
    return this.headers;
  }
  
  sendMail(formData, id = "") {

    const myHttp = new Request();
    
    const body = formData;

    myHttp.post(this.url, body, this.headers, (err, resp) => {
      if (err) {
        console.log(err);
        return;
      }
      
      const message = document.getElementById(id);
      const parent = message.parentElement;
      parent.classList.add("w-100", "h-100", "d-flex");
      parent.classList.remove("pt-5", "mt-5");
      
      message.innerHTML = "";
      const template = `
        <div class="d-flex align-items-center justify-content-center h-100 w-100">
          <h1>${resp.message}</h1>
        </div>
        `;
      message.insertAdjacentHTML("afterbegin", template);
      
    });
  }
}
