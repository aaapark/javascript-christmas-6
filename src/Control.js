import Menu from './Menu.js'
import { ALL_MENU_LIST } from "./const.js";


const Control = {

    getUserMenuList(splittedOrder) {
        return splittedOrder.map(order => {
          return new Menu(order.split('-')[0], order.split('-')[1])
        });
      },

    calculateTotalPriceBeforeDiscount(menuList) {
        const orderMenuPrice = menuList.map((menu) => ALL_MENU_LIST[menu.name]*menu.amount)
        const sumOfOrderMenuPrice = orderMenuPrice.reduce((sum,curVal) => {
          return sum + curVal
        }, 0)
        return sumOfOrderMenuPrice
    },

}
export default Control;