import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import Validation from './Validate.js'

class App {
  async run() {
    OutputView.printGreeting();
    const userVisitDay = await this.readUserVisitDate();
    const userOrderMenu = await InputView.readMenu();
  }


  async readUserVisitDate() {
    try {
      let inputDate = await InputView.readDate()
      Validation.checkDate(inputDate)
      return inputDate;
    }catch(e) {
      MissionUtils.Console.print(e.message);
      return await this.readUserVisitDate();
    }
  };
};
export default App;
