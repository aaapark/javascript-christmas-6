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
};
export default Validation;