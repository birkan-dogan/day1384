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
  console.log(input.value.toLowerCase());
  inputValue = input.value.toLowerCase();
  [...cardsSection].forEach(function (card) {
    if (card.innerHTML.includes(inputValue)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
