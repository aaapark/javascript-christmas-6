import Discount from '../src/Discount.js'

describe("디데이 할인 테스트", () => {
    const dayList = []
    for (let i = 1; i < 31; i++) {
        dayList.push(i)
    }
  
    test.each(dayList)("디데이 할인 혜택금액", (day) => {
      const discount = Discount.chirstmasDdayDiscount(day)
      let expectedDiscount = getExpectedDiscount(day)
      expect(discount).toBe(expectedDiscount)
    })
    
    function getExpectedDiscount(day) {
      let expectedValue = ""
      if (day <= 25) {
        expectedValue = day * 100 + 900
        return expectedValue
      }
      expectedValue = 0
      return expectedValue 
    }
  });