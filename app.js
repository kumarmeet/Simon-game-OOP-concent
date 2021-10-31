"use strict";

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;
let started = false;

const playSound = (name) => {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
};

const animatePress = (currColor) => {
  currColor.classList.add("pressed");
  setTimeout(() => {
    currColor.classList.remove("pressed");
  }, 60);
};

const reset = () => {
  gamePattern = [];
  userClickPattern = [];
  level = 0;
  document.getElementById("level-title").textContent = "Press A Key To Start";
  playSound("wrong");
  document.body.classList.add("game-over");
  setTimeout(() => {
    document.body.classList.remove("game-over");
  }, 40);
};

const newSequence = () => {
  userClickPattern = [];
  const randomNumber = Math.floor(Math.random() * 4 + 1);
  const randomChosenColor = buttonColors[randomNumber - 1];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  const pressed = document.getElementById(randomChosenColor);
  animatePress(pressed);
  playSound(randomChosenColor);
  level++;
  document.getElementById("level-title").textContent = `Level ${level}`;
};

const btnHandler = () => {
  const btn = document.querySelectorAll(".btn");

  btn.forEach((val, idx, arr) => {
    val.addEventListener("click", (e) => {
      let userChosenColor = e.target.id;

      if (e.target.id === userChosenColor) {
        animatePress(val);
        userClickPattern.push(userChosenColor);
        playSound(userChosenColor);
        checkAnswer(userChosenColor);
      }
    });
  });
};

const startGame = () => {
  if (!started) {
    document.addEventListener("keypress", (e) => {
      if (e.code === "KeyA") {
        newSequence();
      }
    });
    started = false;
  }
  btnHandler();
};

const checkAnswer = (currLevel) => {
  if (gamePattern[currLevel] === userClickPattern[currLevel]) {
    console.log("Success!");
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(() => {
        newSequence();
      }, 1000);
    } else {
      console.log("Wrong");
      reset("Wrong Answer");
    }
  }
};

console.log(userClickPattern);
console.log(gamePattern);

startGame();
