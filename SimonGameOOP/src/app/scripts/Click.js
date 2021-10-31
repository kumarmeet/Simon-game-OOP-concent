/* eslint-disable no-unused-vars */
import { CheckGame } from "./CheckGame";
import { NewSequence } from "./NewSequence";
import { Simon_Button } from "./SimonBtn";

export class ClickBtn {
  constructor() {
    this.simonBtn = new Simon_Button();
    this.newSeq = new NewSequence();
    this.cg = new CheckGame();

    this.btn = document.querySelectorAll(".btn");
    this.userChosenColor = null;
  }

  click() {
    this.btn.forEach((val, idx, arr) => {
      val.addEventListener("click", (e) => {
        this.userChosenColor = e.target.id;
        if (e.target.id === this.userChosenColor) {
          this.simonBtn.animatePress(val.id);
          Simon_Button.userClickPattern.push(this.userChosenColor);
          this.cg.checkAnswer(Simon_Button.userClickPattern.length - 1);
          this.newSeq.playAudio(val.id);
        }
      });
    });
  }
}
