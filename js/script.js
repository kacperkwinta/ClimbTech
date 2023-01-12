"use strict";

///////////////////////////////////////////////////////////
// Set current year in foote copyright
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  if (link.classList.contains("main-nav-link"))
    headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animations
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobal navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//////////////////// animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//////////////////// modal window in realization section
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".realization-btn");

const showModal = function () {
  modal.classList.remove("hidden-modal");
  overlay.classList.remove("hidden-modal");
  // back to top of modal
  modal.scrollTo({ top: 0, behavior: "smooth" });
  // prevent body scrolling
  document.querySelector("body").style.overflow = "hidden";
};

const closeModal = function () {
  modal.classList.add("hidden-modal");
  overlay.classList.add("hidden-modal");
  // activate body scrolling
  document.querySelector("body").style.overflow = "auto";
};

// show modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", showModal);
}

// close modal
btnsCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal by keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-modal")) {
    closeModal();
  }
});
