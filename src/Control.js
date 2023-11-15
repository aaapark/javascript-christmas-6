import Menu from './Menu.js'
import { ALL_MENU_LIST,BADGE } from "./const.js";
import Discount from "./Discount.js";

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

    calculateDiscount(date,menuList,price) {
        return Discount.checkValidDiscountEvent(date,menuList,price)
    },

    calculateAllDisount(discountList) {
        let allDiscount = discountList.filter((item) => item !== undefined);
        const sumOfDiscount = allDiscount.reduce((sum,curVal) => {
          return sum + curVal
        }, 0)
        return sumOfDiscount
    },

    calculateFinalPrice(price,allDiscount,menu) {
      const newMenuList = []
      const menuNameList = menu.map((i) => {
        newMenuList.push(i.name)
      })
      let orderChampagne = 25000
      if(newMenuList.includes("샴페인") && price >= 120000) {
        orderChampagne = 0
      }
      return price - allDiscount + orderChampagne
    },

    getBadge(discount) {
        let badge = ['없음']
        for(let i=0 ; i < 3 ; i++) {
            if(discount >= (Object.keys(BADGE)[i])) {
                badge.push((Object.values(BADGE)[i]))
            }
        } return badge.reverse().shift();
    },

}
export default Control;