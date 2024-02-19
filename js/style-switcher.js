// toggle style switcher
const d = document;
function _(el) {
  return d.querySelector(el);
}

const styleSwitcherToggle = d.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  d.querySelector(".style-switcher").classList.toggle("open");
})

// Hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (d.querySelector(".style-switcher").classList.contains("open")) {
    d.querySelector(".style-switcher").classList.remove("open")
  }
})


// theme color
const alternateStyles = d.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach(style => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// theme light and dark mode
const dayNight = d.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-moon");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  d.body.classList.toggle("dark")
})

window.addEventListener("load", () => {
  if (d.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
  else {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
})


const btnScrollTop = d.querySelector("#btnScrollTop");
window.addEventListener("scroll", (e) => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 400) {
    btnScrollTop.classList.remove("hidden");
    btnScrollTop.classList.remove("hidden");
  } else {
    btnScrollTop.classList.add("hidden");
  }
})

d.querySelector("#scroll").addEventListener("click", (e) => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  })
})

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio_button")) {
    togglePortfolioPopup();
    console.log(e.target.parentElement);
    portfolioltemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio_popup").classList.toggle("open");

  if (document.querySelector(".portfolio_popup").classList.contains("open")) {
    document.querySelector(".portfolio_popup-inner").classList.remove("animate__fadeOutDownBig");
    document.querySelector(".portfolio_popup-inner").classList.add("animate__bounceInDown");
  } else {
    document.querySelector(".portfolio_popup-inner").classList.remove("animate__bounceInDown");
    document.querySelector(".portfolio_popup-inner").classList.add("animate__fadeOutDownBig");
  }
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioltemDetails(portfolioItem) {
  document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".portfolio-img").src;
  document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".portfolio_title").innerHTML;
  document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}