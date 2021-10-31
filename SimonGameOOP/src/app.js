import { StartGame } from "./app/scripts/StartGame";

class App {
  constructor() {
    this.start = new StartGame();
  }

  init() {
    this.start.gameOn("KeyA");
  }
}

const app = new App();
app.init();
