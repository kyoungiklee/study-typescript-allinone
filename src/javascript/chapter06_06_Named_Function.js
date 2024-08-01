// 객체로서의 함수와 기명 함수 표현식
// 자바스크립트에서 함수는 값으로 취급됩니다.
// 모든 값은 자료형을 가지고 있는데 함수의 자료형은 객체입니다.
// 함수는 호출가능한 '행동객체'라고 이해할 수 있습니다.
// 함수는 호출할 수 있을 뿐아니라 객체처럼 함수에 프로퍼티를 추가, 제거하거나 참조를 통해 전달 할수 있습니다.

// name 프로퍼티
const item01 = () => {
  const tag = "item01";

  function sayHi() {
    console.log(tag, 'Hi');
  }

  console.log(tag, sayHi.name);

  let sayHi1 = function () {
    console.log(tag, 'Hi');
  };
  console.log(tag, sayHi1.name);

  function f(sayHi = function () {
  }) {
    console.log(tag, sayHi.name);
  }

  f();

  let user = {
    sayHi() {
      //...
    },
    sayBye: function () {
      //...
    },
  }
  console.log(tag, user.sayHi.name);
  console.log(tag, user.sayBye.name);

  // 적절한 이름을 추론하는 게 불가능한 상황이 있는데, 이때 name 프로퍼티엔 빈 문자열이 저장됩니다.
  let arr = [function () {
  }];
  console.log(tag, arr[0].name);

};
item01();

// length 프로퍼티
const item02 = () => {
  const tag = "item02";

  function f1(a) {
  }

  function f2(a, b) {
  }

  function many(a, b, ...more) {
  }

  console.log(tag, f1.length);
  console.log(tag, f2.length);
  console.log(tag, many.length);

  const readline = require('readline');
  const {stdin: input, stdout: output} = require('process');

  function ask(question, handlers) {

    // createInterface() 메소드를 이용해 객체를 만들고, rl이라는 변수에 저장
    const rl = readline.createInterface({input, output});

    rl.question(question, (answer) => {
      let isYes = answer;
      for (const handler of handlers) {
        if (handler.length === 0) {
          if (isYes) {
            handler();
          }
        } else {
          handler(isYes);
        }
      }
      rl.close();
    });
  }

  function choiceHandler() {
    console.log(tag, "Good choice");
  }

  function isYesHandler(isYes) {
    console.log(tag, "Your choice is " + isYes);
  }

  let handlers = [choiceHandler, isYesHandler];
  //ask('Do you study javascript: ', handlers);

};
item02();

// 커스텀 프로퍼티
// 함수에 자체적으로 만든 프로퍼티를 추가 할 수 있습니다.

const item03 = () => {
  const tag = "item03";

  function sayHi() {
    console.log(tag, "Hi");

    sayHi.counter++;
  }
  sayHi.counter = 0;

  sayHi();
  sayHi();

  console.log(tag, sayHi.counter);


  function makeCounter() {

    let counter = 0;

    return function () {
      return counter++
    };
  }

  let counter = makeCounter();
  console.log(tag, counter());
  console.log(tag, counter());
  console.log(tag, counter());


  function makeCounter1() {
    function counter() {
      return counter.count++
    }

    counter.count = 0;

    return counter;
  }

  let counter1 = makeCounter1();
  console.log(tag, counter1());
  console.log(tag, counter1());
  console.log(tag, counter1());


  function makeCounter2() {
    function counter() {
      return counter.count++;
    }
    counter.count = 0;
    return counter;
  }

  let counter2 = makeCounter2();
  counter2.count = 10;
  console.log(tag, counter2());
}
item03();


// 기명 함수 표현식
// 기명 함수 표현식(Named Function Expression, NFE)은 이름이 있는 함수 표현식을 나타내는 용어입니다.
const item04 = () => {
  const tag = "item04";
  let sayHi = function func(who) {
    console.log(tag, `Hello, ${who}`);
  };

  sayHi("John");

  // func과 같은 이름을 붙이면 두 가지가 변화가 생깁니다. 이 두 변화 때문에 기명 함수 표현식을 사용하는 것입니다.
  // 1. 이름을 사용해 함수 표현식 내부에서 자기 자신을 참조할 수 있습니다.
  // 2. 기명 함수 표현식 외부에선 그 이름을 사용할 수 없습니다

  // 함수 sayHi1은 who에 값이 없는 경우, 인수 "Guest"를 받고 자기 자신을 호출합니다.
  sayHi = function func(who) {
    if (who) {
      console.log(tag, `Hello, ${who}`);
    } else {
      func("Guest"); // func를 이용해서 자기 자신을 호출합니다.
    }
  };
  sayHi();
  // func(); // 기명 함수 표현식 밖에서는 그 이름에 접근할 수 업습니다.

  let welcome = sayHi;
  sayHi = null;
  welcome();
};
item04();

// 과제
// 숫자 설정과 감수가 가능한 카운터 만들기

// counter()는 다음 숫자를 반환해야 합니다.
// counter.set(value)는 counter를 value로 설정해야 합니다.
// counter.decrease()는 counter를 1 감소시켜야 합니다.
const item05 = () => {
  const tag = "item05";

  function makeCounter() {

    function counter() {
      return counter.count;
    }
    counter.count = 0;
    counter.set = (value) => {
      counter.count = value;
    }
    counter.decrease = () => {
      counter.count--;
    }
    return counter;
  }

  let counter = makeCounter();
  counter.set(10);
  counter.decrease()
  console.log(tag, counter());


  function makeCounter1() {
    let count = 0;

    function counter() {
      return count;
    }

    counter.set = (value) => count = value;
    counter.decrease = () => count--;
    return counter;

  }

  let counter1 = makeCounter1();
  counter1.set(10);
  counter1.decrease();
  console.log(tag, counter1());
};
item05();

// 과제
// 임의의 수많큼 있는 괄호를 이용해 합계구하기
// 다음과 같이 작동하는 함수 sum을 만들어보세요.

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

const item06 = () => {
  const tag = "item06";


  function sum(a) {

    let currentSum = a;

    function f(b) {
      currentSum += b;
      return f;
    }

    f.toString = function() {
      return currentSum;
    };

    return f;
  }
  console.log(tag, sum(1)(2).toString());
  console.log(tag, sum(5)(-1)(2).toString());
  console.log(tag, sum(6)(-1)(-2)(-3).toString());
  console.log(tag, sum(1)(2)(3)(4)(5).toString());

};
item06();