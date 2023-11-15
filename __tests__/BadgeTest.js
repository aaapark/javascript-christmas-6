import Control from "../src/Control.js";

describe("뱃지 테스트", () => {
    const discountAmountList = []
    for (let i = 0; i < 210; i++) {
      discountAmountList.push(i * 100)
    }
    // 5000: "별",
    // 10000: '트리',
    // 20000: '산타',
  
    test.each(discountAmountList)("혜택금액별 뱃지", (discountAmount) => {
      const badge = Control.getBadge(discountAmount)
      let expectedValue = getExpectedBadge(discountAmount)
      const lastBadge = Control.getBadge(discountAmount)
      expect(lastBadge).toBe(expectedValue)
    })
    function getExpectedBadge(discountAmount) {
      let expectedValue = ""
      if (discountAmount < 5000) {
        expectedValue = "없음"
        return expectedValue
      } else if (discountAmount < 10000) {
        expectedValue = "별"
        return expectedValue
      } else if (discountAmount < 20000) {
        expectedValue = "트리"
        return expectedValue
      }
      expectedValue = "산타"
      return expectedValue
    }
  
  });