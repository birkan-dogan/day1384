// search field

const form = document.querySelector("form");
const input = document.querySelector("input");

let inputValue = input.value;

const searchWords = document.querySelectorAll(
  ".cards .card-boxes .card-images .search-images"
);

// for (const word of searchWords) {
//   console.log(word.alt);
// }
// searchWords: ubuntu, dashboard, download

let cardsSection = document.getElementsByClassName("card-boxes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

input.addEventListener("keydown", function () {
  inputValue = input.value.toLowerCase();

  [...cardsSection].forEach(function (card) {
    if (card.innerHTML.includes(inputValue)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// arrow button

const arrowButton = document.getElementById("arrow");
const dropdown = document.getElementsByClassName("dropdown-box");
const arrowIcon = document.getElementById("arrow-icon");

let booleanValue = false;

arrowButton.addEventListener("click", function () {
  booleanValue = !booleanValue;
  if (booleanValue) {
    arrowIcon.style.transform = "rotate(180deg)";
    dropdown[0].style.display = "inline-block";
    dropdown[0].style.transition = "all 1s";
  } else {
    arrowIcon.style.transform = "rotate(0deg)";
    dropdown[0].style.display = "none";
  }
});

// hamburger button

let booleanValueForHamburger = false;

const hamburgerButton = document.getElementById("hamburger");
// console.log(hamburgerButton.innerHTML);
const container = document.getElementById("responsive-menubar");

hamburgerButton.addEventListener("click", function () {
  booleanValueForHamburger = !booleanValueForHamburger;

  //   booleanValueForHamburger
  //     ? container.classList.add("active")
  //     : container.classList.remove("active");
  if (booleanValueForHamburger) {
    container.classList.add("active");
    hamburgerButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    container.classList.remove("active");
    hamburgerButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});
