import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

describe("주문예외 테스트(추가)", () => {

  test("메뉴판에 없는 메뉴 입력시 예외 발생", async () => {
    // given
    const INPUTS_TO_END = ["타파스-2"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "스테이크-1", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("메뉴 개수가 1개 이상이 아닌 경우 예외 발생", async () => {
    // given
    const INPUTS_TO_END = ["타파스-2"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "바비큐립-0", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("메뉴 형식이 예시와 다르면 예외가 발생", async() => {
    // given
    const INPUTS_TO_END = ["바비큐립-1"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "1-시저샐러드,양송이수프2", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("중복 메뉴 입력시 예외가 발생", async() => {
    // given
    const INPUTS_TO_END = ["바비큐립-1"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "바비큐립-1,바비큐립-2", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("총 메뉴 개수가 20개 초과하는 경우 예외 발생", async() => {
    const INPUTS_TO_END = ["양송이수프-1"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "바비큐립-10,제로콜라-10,티본스테이크-1", ...INPUTS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("음료 메뉴만 주문시 예외 발생", async() => {
    const INPUTS_TO_END = ["양송이수프-1"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "샴페인-1,제로콜라-1", ...INPUTS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });


});