// setTimeout과 setInterval을 이용한 호출 스케줄링

// func|code
// 실행하고자 하는 코드로, 함수 또는 문자열 형태입니다. 대개는 이 자리에 함수가 들어갑니다.
// 하위 호환성을 위해 문자열도 받을 수 있게 해놓았지만 추천하진 않습니다.

// delay
// 실행 전 대기 시간으로, 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0입니다.

// arg1, arg2…
// 함수에 전달할 인수들로, IE9 이하에선 지원하지 않습니다.

const item01 = () => {

  function sayHi() {
    console.log("Hello world");
  }

  setTimeout(sayHi, 1000);

};
// item01();

// setTimeout callback함수에 인수 넘겨주기
const item02 = () => {
  const tag = "item02";

  function sayHi(who, phrase) {
    console.log(`${who}, ${phrase}`);
  }

  setTimeout(sayHi, 1000, "Peter", "welcome to new world");
};
// item02();

// clearTimeout으로 스케줄링 취소하기
const item03 = () => {
  const tag = "item03";
  let timerId = setTimeout(() => console.log("Hello world"), 1000);
  console.log(timerId);

  clearTimeout(timerId);

  console.log(timerId);
};
// item03();

// setTimeout이 함수를 단 한 번만 실행하는 것과 달리 setInterval은 함수를 주기적으로 실행하게 만듭니다.
const item04 = () => {
  const tag = "item04";

  // 2초 간격으로 메세지 보여줌
  let timerId = setInterval(() => console.log("tick"), 2000);

  // 5초 후에 정지
  setTimeout(() => clearInterval(timerId), 5000);

};
// item04();

// 중첩 setTimeout

const item05 = () => {
  const tag = "item05";
  let timerId = setTimeout(function tick() {
    console.log("tick");
    timerId = setTimeout(tick, 2000);
  }, 2000);

  setTimeout(() => clearTimeout(timerId), 10 * 1000);
};
// item05();


// 과제
// 일초 간격으로 숫자 출력하기
// setInterval을 이용한 방법
const item06 = () => {
  const tag = "item06";

  // from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 함수 printNumbers(from, to)를 만들어보세요.
  // 숫자는 일 초 간격으로 출력되어야 합니다

  function printNumbers(from, to) {
    function printNumber() {
      console.log(tag, from++)
      if(from > to) clearInterval(timerId)
    }
    const timerId = setInterval(printNumber, 1000);
  }

  printNumbers(10, 15);

};
// item06();

// 중첩 setTimeout을 이용한 방법
const item07 = () => {
  const tag = "item07";

  function printNumbers(from, to) {
    let timerId = setTimeout(function tick() {
      console.log(from++);
      if (from <= to) {
        timerId = setTimeout(tick, 1000);
      }
    }, 1000);
  }

  printNumbers(10, 15);
};
item07();