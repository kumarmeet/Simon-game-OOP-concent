import { Simon_Button } from "./SimonBtn";

export class NewSequence {
  constructor() {
    this.simonBtn = new Simon_Button();
    this.randomNumber = null;
    this.randomChosenColor = null;
    this.playMp3 = null;
    this.title = null;
  }

  randomColorGenerator() {
    Simon_Button.userClickPattern = [];
    this.randomNumber = Math.floor(Math.random() * 4 + 1);
    this.randomChosenColor = this.simonBtn.btnColors[this.randomNumber - 1];
    Simon_Button.gamePattern.push(this.randomChosenColor);
    Simon_Button.level++;
    this.titleLevel(Simon_Button.level);
    this.simonBtn.animatePress(this.randomChosenColor);
    this.playAudio(this.randomChosenColor);
  }

  playAudio(mp3) {
    this.playMp3 = this.simonBtn.playSound(mp3);
    this.playMp3.play();
  }

  titleLevel(level) {
    this.title = document.getElementById("level-title");
    this.title.textContent = `Level ${level}`;
  }
}
