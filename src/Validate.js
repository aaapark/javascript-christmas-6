import {MENU_LIST, ALL_MENU_LIST} from "./const.js"

const Validation = {
    //입력 날짜 확인
    checkDate(date) {
        let inputBeNumber = Number(date);
        this.checkDateRange(inputBeNumber);
        this.checkInputDateIsInteger(inputBeNumber);
    },

    checkDateRange(date) {
        if(date <= 0 || date >= 32) {
            throw new Error ('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.')
        } 
        return true;
    },

    checkInputDateIsInteger(date) {
        if(!Number.isInteger(date)) {
            throw new Error ('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.')
        }
        return true;
    },

    checkUserMenuList(menuList) {
        const nameList = menuList.map((menu) => menu.name)
        const amountList = menuList.map((menu) => menu.amount)
        let inputAmountBeNumber = amountList.map(Number)
        this.checkOrderMenuIsValid(nameList);
        this.checkOrderManuDuplication(nameList);
        this.checkOrderAmountIsVliad(inputAmountBeNumber);
        this.checkOrderAmountIsInteger(inputAmountBeNumber);
        this.checkTotalOrderAmount(inputAmountBeNumber);
        this.checkAllOrderAreBeverage(nameList);    
    },

    checkOrderMenuIsValid(input) { 
        const allMenuList = Object.keys(ALL_MENU_LIST)
        if(input.some((i) => !allMenuList.includes(i))) {
            throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.')
        }
        return true;
    },

    checkOrderManuDuplication(input) {
        let set = new Set(input)
        if(set.size != input.length) {
            throw new Error ('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.')
        }
        return true;
    },

    checkAllOrderAreBeverage(input) {
        const menuBeverageList = Object.keys(MENU_LIST.MENU_BEVERAGE)
        if(input.every((i) => menuBeverageList.includes(i))) {
            throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.')
        }
        return true;
    },

    checkOrderAmountIsInteger(input) {
        if(input.some((i) => !Number.isInteger(i))) {
            throw new Error ('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요..')
        }
        return true;
    },

    checkOrderAmountIsVliad(input) {
        if(input.some((i) => i <= 0)) {
            throw new Error ('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.')
        }
        return true;
    },

    checkTotalOrderAmount(input) {
        const totalAmount = input.reduce((sum,currVal) => {
            return sum + currVal
        }, 0)
        if (totalAmount >= 21) {
            throw new Error ('[ERROR] 최대 20개까지만 주문 가능합니다.')
        }
        return true;
    },
};
export default Validation;