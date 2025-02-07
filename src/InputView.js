import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
    async readDate() {
        return await MissionUtils.Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");
    },
    async readMenu () {
        return await MissionUtils.Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n")
    },
}

export default InputView;
