const Discount = {

    checkValidDiscountEvent(date,menuList,price) {
        let discountList = []
        if(price >= 10000) {
            discountList.push(this.chirstmasDdayDiscount(date));
            discountList.push(this.complimentaryEvent(price)[1]);
        }
        return discountList;
    },

    chirstmasDdayDiscount(date) {
        let christmasDdayDiscoutAmount = 0
        if(date < 26) {
            christmasDdayDiscoutAmount = 900 + (date * 100)
        }
        return christmasDdayDiscoutAmount;
    },

    complimentaryEvent(price) {
        let complimentary = ["없음", 0]
        if(price >= 120000) {
            complimentary = [`샴페인 1개`, 25000]
        } return complimentary;
    },

}
export default Discount;