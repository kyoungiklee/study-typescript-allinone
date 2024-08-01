// 변수의 유호범위와 클로저
// 자바스크립트는 함수 지향언어입니다. 함수를 동적으로 생성할 수 있고, 생성한 함수를 다른 함수에 인수로 넘길수 있으며,
// 생성된 곳이 아닌 다른곳에서 함수를 호출할 수 있습니다.

//  매개변수를 통해 함수를 넘기고 이 함수를 저 멀리 떨어진 코드에서 호출할 땐 어떤 일이 발생할까요?
//  함수는 호출되는 곳을 기준으로 외부 변수에 접근할까요?
const item01 = () => {
  const tag = "item01";
  // 코드 블록 안에서 선언한 변수는 코드 블록 안에서 사용할 수 있다.
  {
    let message = "Hello world";
    console.log(tag, message);
  }

  // Unresolved variable or type message
  // console.log(tag, message);

  {
    let message = "Hello, Hulk";
    console.log(tag, message);
  }

  let message = "Hello Ironman";
  console.log(tag, message);

};
item01();

const item02 = () => {
  const tag = "item02"
  // 중첩함수
  // 함수내부에 선언한 함수는 "중첩(nested) 함수" 라고 부릅니다.
  {
    const hello = function sayHello(firstName, lastName) {

      console.log("Hello " + getFullName());
      console.log("Bye " + getFullName());

      // 헬퍼(Helper) 중첩함수
      function getFullName() {
        return `${firstName} ${lastName}`
      }
    }

    hello("Sun", "Lee");
  }

  // 렉시컬 환경
  // 행 중인 함수, 코드 블록 {...}, 스크립트 전체는 렉시컬 환경(Lexical Environment) 이라 불리는
  // 내부 숨김 연관 객체(internal hidden associated object)를 갖습니다
  // 환경 레코드(Environment Record) – 모든 지역 변수를 프로퍼티로 저장하고 있는 객체입니다.
  // 외부 렉시컬 환경(Outer Lexical Environment) 에 대한 참조 – 외부 코드와 연관됨

  // 모든 함수는 함수가 생성된 곳의 렉시컬 환경을 기억한다는 점입니다.
  // 함수는 [[Environment]]라 불리는 숨김 프로퍼티를 갖는데, 여기에 함수가 만들어진 곳의 렉시컬 환경에 대한 참조가 저장됩니다.
  {
    function makeCounter() {
      let count = 0;
      return function () {
        // 변숫값 갱신은 변수가 저장된 렉시컬 환경에서 이뤄집니다.
        return count++;
      }
    }

    // 따라서 counter.[[Environment]]엔 {count: 0}이 있는 렉시컬 환경에 대한 참조가 저장됩니다.
    // 호출 장소와 상관없이 함수가 자신이 태어난 곳을 기억할 수 있는 건 바로 이 [[Environment]] 프로퍼티 덕분입니다.
    // [[Environment]]는 함수가 생성될 때 딱 한 번 값이 세팅되고 영원히 변하지 않습니다.
    let counter = makeCounter();

    // counter()를 호출하면 각 호출마다 새로운 렉시컬 환경이 생성됩니다.
    //  이 렉시컬 환경은 counter.[[Environment]]에 저장된 렉시컬 환경을 외부 렉시컬 환경으로서 참조합니다.
    console.log(tag, counter());
    console.log(tag, counter());
    console.log(tag, counter());

    // 요점을 정리해봅시다.
    // 자바스크립트의 함수는 숨김 프로퍼티인 [[Environment]]를 이용해 자신이 어디서 만들어졌는지를 기억합니다.
    // 함수 본문에선 [[Environment]]를 사용해 외부 변수에 접근합니다.

  }
}
item02()

// 과제
// 함수가 최신 변경사항을 반영할까요
const item03 = () => {
  const tag = "item03";
  let name = "Sum";

  function sayHi() {
    console.log("Hi " + name);
  }

  name = "Lee";
  sayHi();

  let x = 1;

  function func() {
    // ReferenceError: Cannot access 'x' before initialization
    // console.log(tag, x);
    let x = 2;
  }

  func();
}
item03();

// 과제
// 어떤 변수를 사용할까요
const item04 = () => {
  const tag = "item04";

  function makeWorker() {
    let name = "Peter";

    return function () {
      console.log(tag, name);
    };
  }

  let name = "John";
  let work = makeWorker();
  work();
};
item04()

// 과제
// counter는 독립적일까요
const item05 = () => {
  const tag = "item05";

  function makeCounter() {
    let counter = 0;
    return function () {
      return counter++;
    };
  }

  let counter1 = makeCounter();
  let counter2 = makeCounter();

  // 함수 counter1와 counter2는 각각 다른 makeCounter 호출에 의해 만들어졌습니다.
  // 두 함수는 독립적인 렉시컬 환경을 갖게 되므로 각 함수는 자신만의 count를 갖게 됩니다.
  console.log(tag, counter1());
  console.log(tag, counter1());

  console.log(tag, counter2());
  console.log(tag, counter2());
};
item05();

// 과제
// counter 객체
const item06 = () => {
  const tag = "item06";


  class Counter {
    constructor() {

      let count = 0;

      this.up = function () {
        return ++count;
      };

      this.down = function () {
        return --count;
      };
    }
  }

  let counter = new Counter();
  console.log(counter.up());
  console.log(counter.up());
  console.log(counter.down());

};
item06()

// 과제
// if문 안의 함수
const item07 = () => {
  const tag = "item07";
  let phrase = "Hello";

  if (true) {
    let user = "John";

    function sayHi() {
      console.log(`${phrase}, ${user}`);
    }
  }

  sayHi();
};
item07();

// 과제
// 클로저를 이용하여 합 구하기
// sum(a)(b) = a+b와 같은 연산을 해주는 함수 sum을 만들어보세요
const item08 = () => {
  const tag = "item08";

  function sum(a) {
    return function (b) {
      console.log(tag, `${a + b}`);
    };
  }

  sum(3)(4);
  sum(5)(-1);
};
item08();

// 과제
// 함수를 이용하여 원하는 값만 걸러내기
const item09 = () => {
  const tag = "item09";

  /* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/

  //inBetween(a, b) – a 이상 b 이하
  function inBetween(a, b) {
    // 3,4,5,6
    // 모든 함수는 함수가 생성된 곳의 렉시컬 환경을 기억한다는 점입니다.
    // 함수는 [[Environment]]라 불리는 숨김 프로퍼티를 갖는데, 여기에 함수가 만들어진 곳의 렉시컬 환경에 대한 참조가 저장됩니다.
    // [[Environment]]는 함수가 생성될 때 딱 한 번 값이 세팅되고 영원히 변하지 않습니다.
    // 함수를 호출하면 각 호출마다 새로운 렉시컬 환경이 생성됩니다.
    // 그리고 이 렉시컬 환경은 함수의 [[Environment]]에 저장된 렉시컬 환경을 외부 렉시컬 환경으로서 참조합니다.
    return function (num) {
      return num <= b && num >= a
    }
  }

  // inArray([...]) – 배열 안에 있는 값인가
  function inArray(arr) {

    return function (num) {
      return arr.includes(num);
    }
  }

  let arr = [1, 2, 3, 4, 5, 6, 7];

  const numbers = arr.filter(inBetween(3, 6));
  console.log(numbers);

  const result2 = arr.filter(inArray([1, 2, 10]));
  console.log(result2);
};
item09();


// 과제
// 필드를 기준으로 정렬하기

const item10 = () => {
  const tag = "item10";

  let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
  ];


  function byField(fieldName) {
    return function (a, b) {
      return a[fieldName] > b[fieldName] ? 1 : -1
    };
  }

  console.log(tag, users.sort(byField('name')));
  console.log(tag, users.sort(byField('age')));
}
item10();

// 과제
// 함수를 사용해 군대 만들기
const item11 = () => {
  const tag = "item11";

  function makeArmy() {
    let shooters = [];
    /*let i = 0;
    while (i < 10) {
      let shooter = function () {
        console.log(tag, i);
      };
      shooters.push(shooter);
      ++i;
    }*/
    for (let i = 0; i < 10; i++) {
      let shooter = function () {
        console.log(tag, i);
      };
      shooters.push(shooter);
    }
    return shooters;
  }

  let army = makeArmy();

  army[0]();
  army[5]();

};
item11();
