"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const tryAgain = document.querySelector(".again");

const displayMsg = function (msg) {
  message.textContent = msg;
};

check.addEventListener("click", () => {
  const guessInput = Number(guess.value);
  if (!guessInput) {
    displayMsg("🎯 No Number!");
  } else if (guessInput === secretNumber) {
    displayMsg("🎉 Correct Number!");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    guess.value = "";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMsg(guessInput > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

tryAgain.addEventListener("click", () => {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMsg("Start guessing...");
  document.querySelector(".score").textContent = score;
  number.textContent = "?";
  guess.value = "";
  body.style.backgroundColor = "#313131";
});
