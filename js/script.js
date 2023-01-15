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

////////////////////////////////////////////////////////
//////////////////// modal window in realization section
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".realization-btn");

const showModal = function () {
  modal.classList.remove("hidden-modal");
  overlay.classList.remove("hidden-modal");
  // back to top of modal
  modal.scrollTo({ top: 0 });
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

/////////////////////
// OPEN MODAL BUTTONS
const openModalBtn = document.querySelectorAll(".realization-btn");

/////////////////
// MODAL ELEMENTS
// one heading
const modalHeading = document.querySelector(".modal-heading");
// three paragraphs
const modalParagraphs = document.getElementsByClassName("modal-p");
// two imgs
const modalImg1 = document.getElementById("modal-img-1");
const modalImg2 = document.getElementById("modal-img-2");

// Function to change the content of the modal
function changeModalContent(heading, p1, img1, p2, img2, p3) {
  modalHeading.textContent = heading;
  modalParagraphs[0].textContent = p1;
  modalImg1.src = ""; // Dodano
  modalImg1.src = img1;
  modalParagraphs[1].textContent = p2;
  modalImg2.src = ""; // Dodano
  modalImg2.src = img2;
  modalParagraphs[2].textContent = p3;
}

// Change the content of the modal when the second realization button is clicked

// Realization 1
openModalBtn[0].addEventListener("click", function () {
  changeModalContent(
    "Czyszczenie elewacji bloku",
    "Czyszczenie elewacji bloku 1",
    "img/realization-modal-before-1.webp",
    "Czyszczenie elewacji 2",
    "img/realization-modal-after-1.webp",
    "Czyszczenie elewacji bloku 3"
  );
  modal.classList.add("animate");
});

// Realization 2
openModalBtn[1].addEventListener("click", function () {
  changeModalContent(
    "Czyszczenie ceglanej elewacji",
    "Czyszczenie ceglanej elewacji 1",
    "img/realization-modal-before-2.webp",
    "Czyszczenie ceglanej elewacji 2",
    "img/realization-modal-after-2.webp",
    "Czyszczenie ceglanej elewacji 3"
  );
});

// Realization 3
openModalBtn[2].addEventListener("click", function () {
  changeModalContent(
    "Malowanie dachu",
    "Malowanie dachu 1",
    "img/realization-modal-before-3.webp",
    "Malowanie dachu 2",
    "img/realization-modal-after-3.webp",
    "Malowanie dachu 3"
  );
});

// Realization 4
openModalBtn[3].addEventListener("click", function () {
  changeModalContent(
    "Malowanie kościoła",
    "Malowanie kościoła 1",
    "img/realization-modal-before-4.webp",
    "Montaż pleksi 1",
    "img/realization-modal-after-4.webp",
    "Lorem ipsum 3"
  );
});
