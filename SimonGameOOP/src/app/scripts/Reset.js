/* eslint-disable function-call-argument-newline */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
// eslint-disable-next-line quotes
import { Simon_Button } from "./SimonBtn";

export class Reset extends Simon_Button {
  constructor() {
    super();
    this.title = null;
  }

  titleReset(id) {
    this.title = document.getElementById(id);
    this.title.textContent = "Press A Key To Start";
  }

  bodyReset(cls) {
    document.body.classList.add(cls);

    setTimeout(() => {
      document.body.classList.remove(cls);
      // eslint-disable-next-line no-magic-numbers
    }, 40);
  }

  allReset(id, cls) {
    Simon_Button.level = 0;
    Simon_Button.userClickPattern = [];
    Simon_Button.gamePattern = [];
    this.titleReset(id);
    this.bodyReset(cls);
  }
}
