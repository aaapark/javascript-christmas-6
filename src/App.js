import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "./OutputView.js";
import InputView from "./InputView.js";
import Validation from './Validate.js'
import Control from "./Control.js";
import Discount from './Discount.js'


class App {
  async run() {
    OutputView.printGreeting();
    const userVisitDay = await this.readUserVisitDate();
    const userOrderMenu = await this.readUserOrderMenuList();

    this.printOrderList(userVisitDay,userOrderMenu);
    const beforePrice = this.printTotalPriceBeforeDiscount(userOrderMenu);
    const discountLists = this.printEventList(userVisitDay,userOrderMenu,beforePrice);
    this.printResultOfDiscount(discountLists,beforePrice);
  };

  printOrderList(date,order) {
    OutputView.printPreviewMent(date);
    OutputView.printMenuList(order);
  };

  printTotalPriceBeforeDiscount(order) {
    const totalPrice = Control.calculateTotalPriceBeforeDiscount(order);
    OutputView.printTotalPriceBeforeDiscount(totalPrice);
    return totalPrice;  
  };

  printEventList(date,order,price) {
    const complimentary = Discount.complimentaryEvent(price);
    OutputView.printComplimentary(complimentary);

    OutputView.printDiscoutListName();
    const discoutList = Validation.checkValidArrayElement(Control.calculateDiscount(Number(date),order,price));
    OutputView.printDiscoutList(discoutList);
    return discoutList;
  };

  printResultOfDiscount(list,price) {
    const allDiscount = Control.calculateAllDisount(list);
    OutputView.printSumOfDiscount(allDiscount);

    const finalPrice = price - allDiscount;
    OutputView.printFinalPrice(finalPrice);

    const badge = Control.getBadge(allDiscount);
    OutputView.printEventBadge(badge);
  };

  async readUserVisitDate() {
    try {
      let inputDate = await InputView.readDate()
      Validation.checkDate(inputDate)
      return inputDate;
    }catch(e) {
      MissionUtils.Console.print(e.message);
      return await this.readUserVisitDate();
    };
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

}
export default App;