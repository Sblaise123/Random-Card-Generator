import "./style.css";
window.onload = () => {
  cardGenerator();
};
let cardGenerator = () => {
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
  let suit = ["♦", "♣", "♥", "♠"];

  let indexNumbers = [Math.floor(Math.random() * numbers.length)];
  let indexSuit = [Math.floor(Math.random() * suit.length)];

  if (suit[indexSuit] == "♥" || suit[indexSuit] == "♦") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".number").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
  document.querySelector(".top-suit").innerHTML = suit[indexSuit];
  document.querySelector(".number").innerHTML = numbers[indexNumbers];
  document.querySelector(".bottom-suit").innerHTML = suit[indexSuit];
};
