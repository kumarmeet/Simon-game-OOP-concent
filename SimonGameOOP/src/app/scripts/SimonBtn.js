export class Simon_Button {
  static gamePattern = [];
  static userClickPattern = [];
  static level = 0;

  constructor() {
    this.btnColors = ["red", "blue", "green", "yellow"];
  }

  playSound(name) {
    return new Audio(`./src/sounds/${name}.mp3`);
  }

  animatePress(currentColor) {
    document.getElementById(currentColor).classList.add("pressed");
    setTimeout(() => {
      document.getElementById(currentColor).classList.remove("pressed");
    }, 60);
  }
}
