import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add("heart");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);
};

let generateRandomNumber;
() => {
  let numb = Math.floor(Math.random() * 12);
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suit = ["diamond", "spade", "heart", "club"];

  let indexNumbers = Math.floor(Math.random() * numbers.length);
  let indexSuit = Math.floor(Math.random() * suit.length);
};
