"use strict";

const p1FinalScore = document.querySelector("#p1FinalScore");
const p2FinalScore = document.querySelector("#p2FinalScore");
const p1CurrentScore = document.querySelector("#p1CurrentScore");
const p2CurrentScore = document.querySelector("#p2CurrentScore");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const winP1 = document.querySelector("#winP1");
const winP2 = document.querySelector("#winP2");

const newGame = document.getElementById("newGame");
const rollDice = document.getElementById("rollDice");
const hold = document.getElementById("hold");
const dice = document.querySelector(".dice");

let p1FScore = 0;
let p2FScore = 0;
let p1CScore = 0;
let p2CScore = 0;
let playing = 0;

p1.classList.add("active");
dice.classList.add("hidden");

rollDice.addEventListener("click", function () {
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomNum}.png`;
  dice.classList.remove("hidden");
  if (playing == 0) {
    if (randomNum != 1) {
      const currScore = Number(p1CurrentScore.textContent);
      p1CurrentScore.textContent = randomNum + currScore;
    } else {
      p1CurrentScore.textContent = 0;
      playing = 1;
      p1.classList.remove("active");
      p2.classList.add("active");
    }
  } else if (playing == 1) {
    if (randomNum != 1) {
      const currScore = Number(p2CurrentScore.textContent);
      p2CurrentScore.textContent = randomNum + currScore;
    } else {
      p2CurrentScore.textContent = 0;
      playing = 0;
      p2.classList.remove("active");
      p1.classList.add("active");
    }
  }
});

hold.addEventListener("click", function () {
  if (playing == 0) {
    const currScore = Number(p1CurrentScore.textContent);
    const finalScore = Number(p1FinalScore.textContent);
    if (currScore + finalScore >= 100) {
      playing = 2;
    } else {
      p1FinalScore.textContent = finalScore + currScore;
      p1CurrentScore.textContent = 0;
      playing = 1;
      p1.classList.remove("active");
      p2.classList.add("active");
    }
  } else if (playing == 1) {
    const currScore = Number(p2CurrentScore.textContent);
    const finalScore = Number(p2FinalScore.textContent);
    if (currScore + finalScore >= 100) {
      playing = 2;
    } else {
      p2FinalScore.textContent = finalScore + currScore;
      p2CurrentScore.textContent = 0;
      playing = 0;
      p2.classList.remove("active");
      p1.classList.add("active");
    }
  }
});
