(() => {
  "use strict";
  class t {
    static gamePattern = [];
    static userClickPattern = [];
    static level = 0;
    constructor() {
      this.btnColors = ["red", "blue", "green", "yellow"];
    }
    playSound(t) {
      return new Audio(`./src/sounds/${t}.mp3`);
    }
    animatePress(t) {
      document.getElementById(t).classList.add("pressed"),
        setTimeout(() => {
          document.getElementById(t).classList.remove("pressed");
        }, 60);
    }
  }
  class e {
    constructor() {
      (this.simonBtn = new t()),
        (this.randomNumber = null),
        (this.randomChosenColor = null),
        (this.playMp3 = null),
        (this.title = null);
    }
    randomColorGenerator() {
      (t.userClickPattern = []),
        (this.randomNumber = Math.floor(4 * Math.random() + 1)),
        (this.randomChosenColor =
          this.simonBtn.btnColors[this.randomNumber - 1]),
        t.gamePattern.push(this.randomChosenColor),
        t.level++,
        this.titleLevel(t.level),
        this.simonBtn.animatePress(this.randomChosenColor),
        this.playAudio(this.randomChosenColor);
    }
    playAudio(t) {
      (this.playMp3 = this.simonBtn.playSound(t)), this.playMp3.play();
    }
    titleLevel(t) {
      (this.title = document.getElementById("level-title")),
        (this.title.textContent = `Level ${t}`);
    }
  }
  class s extends t {
    constructor() {
      super(), (this.title = null);
    }
    titleReset(t) {
      (this.title = document.getElementById(t)),
        (this.title.textContent = "Press A Key To Start");
    }
    bodyReset(t) {
      document.body.classList.add(t),
        setTimeout(() => {
          document.body.classList.remove(t);
        }, 40);
    }
    allReset(e, s) {
      (t.level = 0),
        (t.userClickPattern = []),
        (t.gamePattern = []),
        this.titleReset(e),
        this.bodyReset(s);
    }
  }
  class n {
    constructor() {
      (this.sb = new t(red, blue, green, yellow)), (this.ns = new e());
    }
    checkAnswer(e) {
      t.gamePattern[e] === t.userClickPattern[e]
        ? t.userClickPattern.length === t.gamePattern.length &&
          setTimeout(() => {
            this.ns.randomColorGenerator();
          }, 1e3)
        : ((this.reset = new s()),
          this.reset.allReset("level-title", "game-over"),
          this.sb.playSound("wrong").play());
    }
  }
  class i {
    constructor() {
      (this.simonBtn = new t()),
        (this.newSeq = new e()),
        (this.cg = new n()),
        (this.btn = document.querySelectorAll(".btn")),
        (this.userChosenColor = null);
    }
    click() {
      this.btn.forEach((e, s, n) => {
        e.addEventListener("click", (s) => {
          (this.userChosenColor = s.target.id),
            s.target.id === this.userChosenColor &&
              (this.simonBtn.animatePress(e.id),
              t.userClickPattern.push(this.userChosenColor),
              this.cg.checkAnswer(t.userClickPattern.length - 1),
              this.newSeq.playAudio(e.id));
        });
      });
    }
  }
  class r {
    constructor() {
      (this.newSeq = new e()), (this.btnClick = new i());
    }
    gameOn(t) {
      document.addEventListener("keypress", (e) => {
        (this.started = !1),
          e.code !== t ||
            this.started ||
            (this.newSeq.randomColorGenerator(), (this.started = !0));
      }),
        this.btnClick.click();
    }
  }
  new (class {
    constructor() {
      this.start = new r();
    }
    init() {
      this.start.gameOn("KeyA");
    }
  })().init();
})();
