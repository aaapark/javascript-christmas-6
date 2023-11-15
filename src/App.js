import OutputView from "./OutputView.js";
import InputView from "./InputView.js";

class App {
  async run() {
    OutputView.printGreeting();
    const userVisitDay = await InputView.readDate();

  }
}

export default App;
