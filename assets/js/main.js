/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.querySelector(".header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== VALUE ACCORDION ===============*/
const accrdionItems = document.querySelectorAll(".value__accordion-item");

accrdionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleAccordion(item);

    if (openItem && openItem !== item) {
      toggleAccordion(openItem);
    }
  });
});

const toggleAccordion = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const crollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
  const scrollUp = document.querySelector(".scrollup");

  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.querySelector(".change-theme");
const darktheme = "dark";
const icontheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcen = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  document.body.classList.contains(darktheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeButton.classList.contains(icontheme) ? "bx bx-moon" : "bx bx-sun";
};

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darktheme
  );
  themeButton.classList[selectedIcen === "bx bx-moon" ? "add" : "remove"](
    icontheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darktheme);
  themeButton.classList.toggle(icontheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  deplay: 400,
  // reset: true,
});

sr.reveal(
  ".home__title,.logos__container ,.popular__container, .subscribe, .footer__container"
);
sr.reveal(".home__description, .footer__info", { delay: 500 });
sr.reveal(".home__search", { delay: 600 });
sr.reveal(".home__value", { delay: 700 });
sr.reveal(".home__images", { delay: 800, origin: "bottom" });
sr.reveal(".home__img", { interval: 100 });
sr.reveal(".value__images, .contact__content", { origin: "left" });
sr.reveal(".value__content, .contact__images", { origin: "right" });
