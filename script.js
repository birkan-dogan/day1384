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
