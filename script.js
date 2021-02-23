const generate = document.querySelector(".generate");

const form = document.querySelector(".form");
const range = form.querySelector(".range");
const input = form.querySelector(".number");

const youChose = document.querySelector(".youChose");
const result = document.querySelector(".result");

function getRandomNumberBetween(min, max) {
  const small = Math.ceil(min);
  const big = Math.floor(max);
  return Math.floor(Math.random() * (big - small + 1)) + small;
}

function didOrNot(event) {
  event.preventDefault();
  if (input.value !== "") {
    handleSubmit();
  }
}

function handleSubmit() {
  const rangeValue = range.value;
  const inputValue = input.value;
  const randomValue = getRandomNumberBetween(0, rangeValue);
  youChose.innerHTML = `You chose: ${inputValue}, the machine chose: ${randomValue}`;
  result.style.display = "block";
  youChose.style.display = "block";
  if (parseInt(inputValue) === randomValue) {
    result.innerHTML = "You won!🎊";
    document.querySelector("body").style.backgroundColor = "#E2E1E0";
  } else {
    result.innerHTML = "You lost😥";
    document.querySelector("body").style.backgroundColor = "#525252";
  }
}

function loadNumber() {
  const rangeValue = range.value;
  generate.innerHTML = `Generate a number between 0 and ${rangeValue}`;
}

range.addEventListener("input", loadNumber);
form.addEventListener("submit", didOrNot);
