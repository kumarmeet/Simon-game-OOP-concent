class Simon_Button {
  gamePattern = [];
  userClickPattern = [];
  static level = 0;
  started = false;

  constructor(red, blue, green, yellow) {
    this.btnColors = [red, blue, green, yellow];
    this.level = 0;
    this.started = false;
  }

  playSound(name) {
    return new Audio(`sounds/${name}.mp3`);
  }

  animatePress(currentColor) {
    document.getElementById(currentColor).classList.add("pressed");
    setTimeout(() => {
      document.getElementById(currentColor).classList.remove("pressed");
    }, 60);
  }
}

class Reset extends Simon_Button {
  constructor() {
    super(red, blue, green, yellow);
    this.title = null;
    this.allReset();
  }

  allReset() {
    super.level = 0;
    super.started = false;
    super.userClickPattern = [];
    super.gamePattern = [];
  }

  titleReset() {
    this.title = document.getElementById("level-title");
    this.title.textContent = "Press A Key To Start";
  }

  bodyReset() {
    document.body.classList.add("game-over");

    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 40);
  }
}

class NewSequence {
  simonBtn = new Simon_Button(red, blue, green, yellow);
  constructor() {
    this.simonBtn.userClickPattern = [];
    this.randomNumber = null;
    this.randomChosenColor = null;
    this.playMp3 = null;
    this.title = null;
  }

  randomColorGenerator() {
    this.randomNumber = Math.floor(Math.random() * 4 + 1);
    this.randomChosenColor = this.simonBtn.btnColors[this.randomNumber - 1];
    this.simonBtn.gamePattern.push(this.randomChosenColor.id);
    Simon_Button.level++;
    this.titleLevel(Simon_Button.level);
    this.playAudio(this.randomChosenColor.id);
  }

  playAudio(mp3) {
    this.playMp3 = this.simonBtn.playSound(mp3);
    console.log(this.playMp3);
    this.playMp3.play();
  }

  titleLevel(level) {
    this.title = document.getElementById("level-title");
    this.title.textContent = `Level ${level}`;
  }
}

class ClickBtn {
  simonBtn = new Simon_Button(red, green, blue, yellow);
  newSeq = new NewSequence();
  cg = new CheckGame();
  constructor() {
    this.btn = document.querySelectorAll(".btn");
  }

  click() {
    this.btn.forEach((val, idx, arr) => {
      val.addEventListener("click", (e) => {
        let userChosenColor = e.target.id;

        if (e.target.id === userChosenColor) {
          this.simonBtn.animatePress(val.id);
          this.simonBtn.userClickPattern.push(userChosenColor);
          this.newSeq.randomColorGenerator();
          this.cg.checkAnswer(Simon_Button.level);
        }
      });
    });
  }
}

class StartGame {
  constructor() {
    this.newSeq = new NewSequence();
    this.btnClick = new ClickBtn();
  }

  gameOn() {
    document.addEventListener("keypress", (e) => {
      if (e.code === "KeyA") {
        this.newSeq.randomColorGenerator();
      }
    });
    this.btnClick.click();
  }
}

class CheckGame {
  constructor() {
    this.sb = new Simon_Button(red, blue, green, yellow);
    this.ns = new NewSequence();
  }

  checkAnswer(currentLevel) {
    // console.log(this.sb.gamePattern, currentLevel);
    // console.log(this.sb.userClickPattern, currentLevel);
    if (
      this.sb.gamePattern[currentLevel] ===
      this.sb.userClickPattern[currentLevel]
    ) {
      console.log("success");
      if (this.sb.userClickPattern.length === this.sb.gamePattern.length) {
        setTimeout(() => {
          this.ns.randomColorGenerator();
        }, 1000);
      } else {
        console.log("wrong");
      }
    }
  }
}

class App {
  constructor() {
    this.newSeq = new NewSequence();
    this.start = new StartGame();
    // this.cg = new CheckGame();
  }

  init() {
    this.newSeq.randomColorGenerator();
    this.start.gameOn();
    // this.cg.checkAnswer();
  }
}

const app = new App();
app.init();
