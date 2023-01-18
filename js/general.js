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
});

///////////////////////////////////////////////////////////
// Smooth scrolling animations
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // close mobal navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////
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
