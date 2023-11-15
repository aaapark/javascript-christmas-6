import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import Validation from './Validate.js'
import Control from "./Control.js";
import Discount from "./Discount.js";

class App {
  async run() {
    OutputView.printGreeting();
    const userVisitDay = await this.readUserVisitDate();
    const userOrderMenu = await this.readUserOrderMenuList();
    OutputView.printPreviewMent(userVisitDay);
    OutputView.printMenuList(userOrderMenu);

    const totalPrice = Control.calculateTotalPriceBeforeDiscount(userOrderMenu);
    OutputView.printTotalPriceBeforeDiscount(totalPrice);

    const complimentary = Discount.complimentaryEvent(totalPrice);
    OutputView.printComplimentary(complimentary);

    OutputView.printDiscoutListName();
    const discoutList = Validation.checkValidArrayElement(Control.calculateDiscount(Number(userVisitDay),userOrderMenu,totalPrice));
    OutputView.printDiscoutList(discoutList);
  };


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

  async readUserOrderMenuList() {
    try {
      const inputMenu = await InputView.readMenu()
      let newInputMenu = inputMenu.split(',')
      const userMenuList = Control.getUserMenuList(newInputMenu)
      Validation.checkUserMenuList(userMenuList)
      return userMenuList      
    }catch(e) {
      MissionUtils.Console.print(e.message);
      return await this.readUserOrderMenuList();
    }
  };


};
export default App;
