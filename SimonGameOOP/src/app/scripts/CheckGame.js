import { Simon_Button } from "./SimonBtn";
import { NewSequence } from "./NewSequence";
import { Reset } from "./Reset";

export class CheckGame {
  constructor() {
    this.sb = new Simon_Button(red, blue, green, yellow);
    this.ns = new NewSequence();
  }

  checkAnswer(currentLevel) {
    if (
      Simon_Button.gamePattern[currentLevel] ===
      Simon_Button.userClickPattern[currentLevel]
    ) {
      if (
        Simon_Button.userClickPattern.length === Simon_Button.gamePattern.length
      ) {
        setTimeout(() => {
          this.ns.randomColorGenerator();
        }, 1000);
      }
    } else {
      this.reset = new Reset();
      this.reset.allReset("level-title", "game-over");
      this.sb.playSound("wrong").play();
    }
  }
}
