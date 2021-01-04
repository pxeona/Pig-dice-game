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
let p1FScore;
let p2FScore;
let p1CScore;
let p2CScore;
let playing;

const init = function () {
  p1FScore = 0;
  p2FScore = 0;
  p1CScore = 0;
  p2CScore = 0;
  playing = 0;

  p1FinalScore.textContent = 0;
  p2FinalScore.textContent = 0;
  p1CurrentScore.textContent = 0;
  p2CurrentScore.textContent = 0;

  p1.classList.add("active");
  dice.classList.add("hidden");

  p2.classList.remove("active");
  winP1.classList.add("hidden");
  winP2.classList.add("hidden");
};

const switchPlayer = function () {
  playing = playing === 0 ? 1 : 0;
  p1CurrentScore.textContent = 0;
  p2CurrentScore.textContent = 0;
  p1.classList.toggle("active");
  p2.classList.toggle("active");
};

init();

rollDice.addEventListener("click", function () {
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomNum}.png`;
  dice.classList.remove("hidden");
  if (playing == 0) {
    if (randomNum != 1) {
      const currScore = Number(p1CurrentScore.textContent);
      p1CurrentScore.textContent = randomNum + currScore;
    } else {
      switchPlayer();
    }
  } else if (playing == 1) {
    if (randomNum != 1) {
      const currScore = Number(p2CurrentScore.textContent);
      p2CurrentScore.textContent = randomNum + currScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing == 0) {
    const currScore = Number(p1CurrentScore.textContent);
    const finalScore = Number(p1FinalScore.textContent);
    p1FinalScore.textContent = finalScore + currScore;
    if (currScore + finalScore >= 100) {
      const anim = window.setInterval(function () {
        winnerAnim(1);
      }, 500);
      setTimeout(() => {
        clearInterval(anim);
      }, 3000);
      winP1.classList.remove("hidden");
      playing = 2;
    } else {
      switchPlayer();
    }
  } else if (playing == 1) {
    const currScore = Number(p2CurrentScore.textContent);
    const finalScore = Number(p2FinalScore.textContent);
    p2FinalScore.textContent = finalScore + currScore;
    if (currScore + finalScore >= 100) {
      const anim = setInterval(function () {
        winnerAnim(2);
      }, 500);
      setTimeout(() => {
        clearInterval(anim);
      }, 3000);
      winP2.classList.remove("hidden");
      playing = 2;
    } else {
      switchPlayer();
    }
  }
});

const winnerAnim = function (playerNum) {
  if (playerNum == 1) {
    if (p1.classList.contains("active")) {
      p1.classList.remove("active");
    } else {
      p1.classList.add("active");
    }
  } else {
    if (p2.classList.contains("active")) {
      p2.classList.remove("active");
    } else {
      p2.classList.add("active");
    }
  }
};

newGame.addEventListener("click", init);
