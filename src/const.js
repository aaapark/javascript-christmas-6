export const MENU_LIST = {
    'MENU_APPETIZER': {
         '양송이수프': 6000,
         '타파스': 5500,
         '시저샐러드': 8000,
     },
 
     'MENU_MAIN': {
         '티본스테이크': 55000,
         '바비큐립': 54000,
         '해산물파스타': 35000, 
         '크리스마스파스타': 25000,
     },
 
     'MENU_DESSERT': {
         '초코케이크': 15000,
         '아이스크림': 5000, 
     },
 
     'MENU_BEVERAGE': {
         '제로콜라': 3000,
         '레드와인': 60000,
         '샴페인': 25000,
     },
 };
 
export const ALL_MENU_LIST = Object.assign(
    {},
    MENU_LIST.MENU_APPETIZER,
    MENU_LIST.MENU_MAIN,
    MENU_LIST.MENU_DESSERT,
    MENU_LIST.MENU_BEVERAGE
    )

export const DAYS = {
     makeWeekdays() {
         let WEEKDAY = [3,4,5,6,7]
         let WEEKDAYS = []
         for(let i = 0 ; i < 4 ; i++) {
             WEEKDAY.map((e) => {WEEKDAYS.push(e+7*(i))})
         };
         WEEKDAYS.push(31);
         return WEEKDAYS;
     },
 
     makeWeekendDays() {
         let WEEKEND = [1,2]
         let WEEKENDDAYS = []
         for(let i = 0 ; i < 5; i++) {
             WEEKEND.map((e) => {WEEKENDDAYS.push(e+(7*i))})
         } return WEEKENDDAYS;
     },
     
     makeStarDays() {
         let STARDAY = [3]
         let STARDAYS = []
         for(let i = 0 ; i < 5; i++) {
             STARDAY.map((e) => {STARDAYS.push(e+(7*i)) })
         };
         STARDAYS.push(25);
         return STARDAYS;
     },
}; 

export const EVENTNAME = [
    '크리스마스 디데이 할인:',
    '평일 할인:',
    '주말 할인:',
    '특별 할인:',
    '증정 이벤트:',
]

export const BADGE = {
    5000: "별",
    10000: '트리',
    20000: '산타',
};