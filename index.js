// MENU
const menuBtn = document.getElementById("nav-menu");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpened = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpened ? "fa fa-times" : "fa fa-bars");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa fa-bars");
});

// SCROLL REVEAL
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption });

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".popular__card", {
  ...scrollRevealOption,
  interval: 1000,
});

ScrollReveal().reveal(".register__image", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".register__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".register__content button", {
  ...scrollRevealOption,
  delay: 1000,
});

// SWIPER
const swiper = new Swiper(".swiper", {
  sliderPerView: "auto",
  spaceBetween: 0,
});
