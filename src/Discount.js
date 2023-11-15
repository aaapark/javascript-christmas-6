import { MENU_LIST, DAYS } from "./const.js"

const Discount = {

    checkValidDiscountEvent(date,menuList,price) {
        let discountList = []
        if(price >= 10000) {
            discountList.push(this.chirstmasDdayDiscount(date));
            discountList.push(this.weekdayDiscount(date,menuList));
            discountList.push(this.weekendDiscount(date,menuList));
            discountList.push(this.specialDayDiscount(date));
            discountList.push(this.complimentaryEvent(price)[1]);
        }
        return discountList;
    },

    chirstmasDdayDiscount(date) {
        let christmasDdayDiscountAmount = 0
        if(date < 26) {
            christmasDdayDiscountAmount = 900 + (date * 100)
        }
        return christmasDdayDiscountAmount;
    },

    weekdayDiscount(date, menuList) {
        const WEEKDAYS = DAYS.makeWeekdays() 
        const validWeekdayEvent = menuList.map((menu) => {
            if(WEEKDAYS.includes(date) && Object.keys(MENU_LIST.MENU_DESSERT).includes(menu.name)) {
                return Number(menu.amount)
            }
        });
        let newValidWeekdayEvent = validWeekdayEvent.filter((element) => element !== undefined);
        const sumOfWeekdayEventDiscount = newValidWeekdayEvent.reduce((sum,curVal) => {
            return sum + curVal
        }, 0);
        return 2023 * sumOfWeekdayEventDiscount
    },

    weekendDiscount(date, menuList) {
        const WEEKENDDAYS = DAYS.makeWeekendDays()
        const validWeeknedDayEvent = menuList.map((menu) => {
            if(WEEKENDDAYS.includes(date) && Object.keys(MENU_LIST.MENU_MAIN).includes(menu.name)) {
                return Number(menu.amount)
            }
        });
        let newValidWeekendDayEvent = validWeeknedDayEvent.filter((element) => element !== undefined);
        const sumOfWeekendDayEventDiscount = newValidWeekendDayEvent.reduce((sum,curVal) => {
            return sum + curVal
        }, 0);
        return 2023 * sumOfWeekendDayEventDiscount
    },
    
    specialDayDiscount(date) {
        const STARDAYS = DAYS.makeStarDays()
        if(STARDAYS.includes(date)) {
            return 1000;
        };
    },

    complimentaryEvent(price) {
        let complimentary = ["없음", 0]
        if(price >= 120000) {
            complimentary = [`샴페인 1개`, 25000]
        } return complimentary;
    },

}
export default Discount;