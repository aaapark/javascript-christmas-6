const Discount = {
    complimentaryEvent(price) {
        let complimentary = "없음"
        if(price >= 120000) {
            complimentary = `샴페인 1개`
        } return complimentary;
    },
}
export default Discount;