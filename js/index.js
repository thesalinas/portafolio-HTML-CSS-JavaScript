// Creamos las variables del html

let logo = document.getElementById("header-logo1");
let welcome = document.querySelector(".information-container");
let calculatorInformation = document.querySelector(".calculator-container");
let calculator = document.getElementById("calculator");
let todoList = document.getElementById("todoList");
let todoListInformation = document.querySelector(".todoList-container");
let movieReact = document.getElementById("movieReact");
let movieReactInformation = document.querySelector(".movieReact-container");
let eccomerce = document.getElementById("eccomerce");
let eccomerceInformation = document.querySelector(".eccomerce-container");
let contact = document.getElementById("contact");
let contactForm = document.querySelector(".home-contact-container");

// Creamos los eventos que utilizaremos en el html

logo.addEventListener("click", () => {
  welcome.classList.add("active");
  calculatorInformation.classList.remove("active");
  todoListInformation.classList.remove("active");
  movieReactInformation.classList.remove("active");
  eccomerceInformation.classList.remove("active");
  contactForm.classList.remove("active");
  welcome.style.animation = "right-left 2s 1";
});

calculator.addEventListener("click", () => {
  if (calculatorInformation.classList.contains("active")) {
    welcome.classList.add("active");
    welcome.style.animation = "right-left 2s 1";
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  } else {
    welcome.classList.remove("active");
    calculatorInformation.classList.add("active");
    calculatorInformation.style.animation = "right-left 2s 1";
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  }
});

todoList.addEventListener("click", () => {
  if (todoListInformation.classList.contains("active")) {
    welcome.classList.add("active");
    welcome.style.animation = "right-left 2s 1";
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  } else {
    welcome.classList.remove("active");
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.add("active");
    todoListInformation.style.animation = "right-left 2s 1";
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  }
});

movieReact.addEventListener("click", () => {
  if (movieReactInformation.classList.contains("active")) {
    welcome.classList.add("active");
    welcome.style.animation = "right-left 2s 1";
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  } else {
    welcome.classList.remove("active");
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.add("active");
    movieReactInformation.style.animation = "right-left 2s 1";
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  }
});

eccomerce.addEventListener("click", () => {
  if (eccomerceInformation.classList.contains("active")) {
    welcome.classList.add("active");
    welcome.style.animation = "right-left 2s 1";
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  } else {
    welcome.classList.remove("active");
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.add("active");
    eccomerceInformation.style.animation = "right-left 2s 1";
    contactForm.classList.remove("active");
  }
});

contact.addEventListener("click", () => {
  if (contactForm.classList.contains("active")) {
    welcome.classList.add("active");
    welcome.style.animation = "right-left 2s 1";
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.remove("active");
  } else {
    welcome.classList.remove("active");
    calculatorInformation.classList.remove("active");
    todoListInformation.classList.remove("active");
    movieReactInformation.classList.remove("active");
    eccomerceInformation.classList.remove("active");
    contactForm.classList.add("active");
    contactForm.style.animation = "right-left 2s 1";
  }
});
