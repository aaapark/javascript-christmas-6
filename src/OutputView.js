import { MissionUtils } from "@woowacourse/mission-utils";
import { EVENTNAME } from './const.js'

const OutputView = {
    printGreeting() {
        MissionUtils.Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    },

    printPreviewMent(date) {
        MissionUtils.Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
    },

    printMenuList(menuList) {
        MissionUtils.Console.print('<주문 메뉴>');
        menuList.forEach((menu) => {
            MissionUtils.Console.print(`${menu.name} ${menu.amount}개`);
        });
    },

    printTotalPriceBeforeDiscount(price) {
        MissionUtils.Console.print(`\n<할인 전 총주문 금액>\n${price.toLocaleString()}원`);
    },

    printComplimentary(complimentary) {
        MissionUtils.Console.print(`\n<증정 메뉴>\n${complimentary[0]}`);
    },

    printDiscoutListName() {
        MissionUtils.Console.print(`\n<혜택 내역>`)
    },

    printDiscoutList(discountList) {
        discountList.forEach((e) => {
            if(e !== 0 && e !== undefined) {
                MissionUtils.Console.print(`${EVENTNAME[discountList.indexOf(e)]} -${e.toLocaleString()}원`)
            };
        })
    },
}
export default OutputView;