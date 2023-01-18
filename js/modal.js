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
const modalImg3 = document.getElementById("modal-img-3");

// Function to change the content of the modal
function changeModalContent(heading, p1, img1, img2, img3) {
  modalHeading.textContent = heading;
  modalParagraphs[0].textContent = p1;
  modalImg1.src = "";
  modalImg1.src = img1;
  modalImg2.src = "";
  modalImg2.src = img2;
  modalImg3.src = "";
  modalImg3.src = img3;
}

// Realization 1
openModalBtn[0].addEventListener("click", function () {
  changeModalContent(
    "Wymiana separatora gipsu",
    "Odkręcenie i wycięcie części dachu i ponowne zamontowanie z wykorzystaniem technik alpinistycznych, prace służyły do wymiany separatora gipsu.",
    "img/realizations/realization-1.webp",
    "img/realizations/first-modal-img-1.webp",
    "img/realizations/first-modal-img-2.webp"
  );
});

// Realization 2
openModalBtn[1].addEventListener("click", function () {
  changeModalContent(
    "Mycie elewacji",
    "Mycie i impregnacja elewacji dla Spółdzielni Mieszkaniowej - mycie z wykorzystaniem chemii i gorącej wody.",
    "img/realizations/realization-2.webp",
    "img/realizations/second-modal-img-1.webp",
    "img/realizations/second-modal-img-2.webp"
  );
});

// Realization 3
openModalBtn[2].addEventListener("click", function () {
  changeModalContent(
    "Wciąganie jaccuzi",
    "Wciąganie przy pomocy technik linowych jaccuzi wraz z wykonaniem i zaprojektowaniem odpowiedniego żurawia.",
    "img/realizations/realization-3.webp",
    "img/realizations/third-modal-img-1.webp",
    "img/realizations/third-modal-img-2.webp"
  );
});

// Realization 4
openModalBtn[3].addEventListener("click", function () {
  changeModalContent(
    "Odkurzanie konstrukcji",
    "Odkurzanie konstrukcji dachu wraz z słupami i ścianami",
    "img/realizations/realization-4.webp",
    "img/realizations/fourth-modal-img-1.webp",
    "img/realizations/fourth-modal-img-2.webp"
  );
});

openModalBtn[4].addEventListener("click", function () {
  changeModalContent(
    "Malowanie natryskowe dachu szkoły",
    "",
    "img/realizations/realization-5.webp",
    "img/realizations/fifth-modal-img-1.webp",
    "img/realizations/fifth-modal-img-2.webp"
  );
});

openModalBtn[5].addEventListener("click", function () {
  changeModalContent(
    "Chemiczne czyszczenie elewacji",
    "Chemiczne czyszczenie elewacji z cegły przy użyciu chemii i gorącej wody z wykorzystaniem technik alpinistycznych",
    "img/realizations/realization-6.webp",
    "img/realizations/sixth-modal-img-1.webp",
    "img/realizations/sixth-modal-img-2.webp"
  );
});
