
var d = document, w = window;
const _ = (eleId) => d.querySelector(`${eleId}`),
  __ = (eleId) => d.querySelectorAll(`${eleId}`);


// typing animation 
var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Graphic Designer", "Youtuber"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li")
totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }

  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
    // allSection[i].classList.remove("hidden");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
  // allSection[num].classList.add("hidden");
}


function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
    allSection[i].classList.remove("animate__fadeInDownBig");

  }

  const target = element.getAttribute("href").split("#")[1];
  let eje = document.querySelector("#" + target);
  eje.classList.add("active");
  eje.classList.add("animate__fadeInDownBig");
}



function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}


const inputs = document.querySelectorAll(".form-control");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }

}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})


// function sicronizarStorage() {
//   localStorage.setItem('color', JSON.stringify(color));
// }


// document.addEventListener('DOMContentLoaded', () => {
//   element = JSON.parse(localStorage.getItem('carrito')) || [];

//   carrito;
// });


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Validar el formulario antes de enviarlo
  if (validateForm()) {
    this.submit(); // Si el formulario es válido, enviarlo
  }
});

function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  let nameError = document.getElementById('name-error');
  let emailError = document.getElementById('email-error');
  let subjectError = document.getElementById('subject-error');
  let messageError = document.getElementById('message-error');

  clearErrors([nameError, emailError, subjectError, messageError]);

  let isValid = true;

  if (!name) {
    showError(nameError, "Por favor ingrese su nombre.");
    isValid = false;
  }

  if (!isValidEmail(email)) {
    showError(emailError, "Por favor ingrese un correo electrónico válido.");
    isValid = false;
  }

  if (!subject) {
    showError(subjectError, "Por favor ingrese el asunto.");
    isValid = false;
  }

  if (!message) {
    showError(messageError, "Por favor ingrese su mensaje.");
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  // Expresión regular para validar un correo electrónico
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(element, message) {
  element.textContent = message;
}

function clearErrors(errorElements) {
  errorElements.forEach(function (element) {
    element.textContent = "";
  });
}
