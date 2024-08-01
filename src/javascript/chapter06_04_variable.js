// var는 블록 스코프가 없습니다

const item01 = () => {
  const tag = "item01";
  if (true) {
    var test = "Hello";
  }
  // var로 선언한 변수는 전역변수로 블록 밖에서 호출이 가능하다.
  console.log(tag, test);

  // let으로 선언한 변순는 지역변수로 블록 밖에서 호출이 불가능하다.
  if (true) {
    let hello = "World";
  }
  // ReferenceError: hello is not defined
  // console.log(hello);

  var sum = 0;
  for (var i = 0; i < 10; i++) {
    sum += i;
  }
  console.log(tag, i, sum); // 함수가 종료되었음에도 변수 i에 접근이 가능하다. i는 전역변수이다.

  function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
    console.log(tag, phrase);
  }

  sayHi();
  // 코드 블록이 함수안에 있다면, var는 함수레벨 변수가 된다.
  // console.log(tag, phrase);

}
item01();

// var는 변수의 중복 선언을 허용합니다.
const item02 = () => {
  const tag = "item02";

  var user = "John";
  var user = "Peter";

  console.log(tag, user);
};
item02();

// 선언하기전에 사용할 수 있는 var
const item03 = () => {
  const tag = "item03";


  // 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부릅니다.
  // var로 선언한 모든 변수는 함수의 최상위로 ‘끌어 올려지기(hoisted)’ 때문입니다
  function sayHi() {
    phrase = "Hello";
    console.log(tag, phrase);
    var phrase;
  }

  sayHi();

  function sayHi2() {
    phrase = "world";

    if (false) {
      var phrase;
    }

    console.log(tag, phrase);
  }

  sayHi2();

  // 선언은 호이스팅 되지만 할당은 호이스팅되지 않습니다.
  function sayHi3() {
    console.log(tag, phrase); // undefined
    var phrase = "Hello";
  }

  sayHi3();
  // ==>
  function sayHi4() {
    var phrase; // 선언은 함수 시작시 처리됩니다.
    console.log(phrase);
    phrase = "Hello"; // 할당은 실행흐름이 해당 코드에 도달했 때 처리됩니다.
  }

  sayHi4();
}
item03();

// 즉시 실행함수 표현식
// 발자들은 var도 블록 레벨 스코프를 가질 수 있게 여러가지 방안을 고려하게 됩니다.
// 이때 만들어진 것이 '즉시 실행 함수 표현식(immediately-invoked function expressions)'입니다.
// 즉시 실행 함수 표현식은 IIFE라고 부르기도 합니다.
const item04 = () => {
  const tag = "item04";

  (function () {
    let message = "Hello";
    console.log(tag, message)
  })();

  //IIFE 만드는 방법
  (function() {
    console.log(tag, "함수를 괄호로 둘러싸기");
  })();

  (function () {
    console.log(tag, "전체를 괄호로 둘러싸기");
  }())

  !function() {
    console.log(tag, "표현식 앞에 비트 NOT 연산자 붙이기");
  }();

  +function() {
    console.log(tag, "표현식 앞에 단항 덧셈 연산자 붙이기");
  }();
};
item04();
