const frmContact = document.getElementById("form-contact");

// Creamos las variables del servicio que vamos a utilizar
const serviceId = "service_phah6bo";
const templateId = "template_rpr2bxe";
const apiKey = "yQ5-ayKdEKgfVIqDA";
frmContact.addEventListener("submit", (event) => {
  event.preventDefault();
  emailjs.init(serviceId);
  emailjs
    .sendForm(serviceId, templateId, frmContact, apiKey)
    .then((result) => Swal.fire("Su mensaje se ha enviado con éxito."))
    .catch((error) =>
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      })
    );
});
