/* eslint-disable function-call-argument-newline */
import { ClickBtn } from "./Click";
import { NewSequence } from "./NewSequence";

export class StartGame {
  constructor() {
    this.newSeq = new NewSequence();
    this.btnClick = new ClickBtn();
  }

  gameOn(key) {
    document.addEventListener("keypress", (event) => {
      this.started = false;
      if (event.code === key && !this.started) {
        this.newSeq.randomColorGenerator();
        this.started = true;
      }
    });
    this.btnClick.click();
  }
}
