////////////////////////////
//         SLIDER         //
////////////////////////////
//pobieranie elementów potrzebnych do działania slajdera
const slider = document.querySelector(".slider");
const slides = slider.getElementsByTagName("img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentSlide = 0;
let intervalId;

//ustawienie pierwszego slajdu jako aktywnego
slides[currentSlide].classList.add("active");

//funkcja przełączająca na następne zdjęcie
function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

//funkcja przełączająca na poprzednie zdjęcie
function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

//nasłuchiwanie kliknięcia na przyciski prev i next
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

//funkcja automatycznego przełączania zdjęć
function autoSlide() {
  intervalId = setInterval(nextSlide, 3000);
}

autoSlide();

//nasłuchiwanie na najechanie myszką na slajder
slider.addEventListener("mouseover", function () {
  clearInterval(intervalId);
});

//nasłuchiwanie na opuszczenie myszką slajdera
slider.addEventListener("mouseout", autoSlide);
