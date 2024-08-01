// 전역객체
// 전역 객체를 사용하면 어디서나 사용 가능한 변수나 함수를 만들 수 있습니다.
// 전역 객체는 언어 자체나 호스트 환경에 기본 내장되어 있는 경우가 많습니다.

// 브라우저 환경에선 전역 객체를 window, Node.js 환경에선 global라고 부르는데, 각 호스트 환경마다 부르는 이름은 다릅니다.

const item01 = () => {
  const tag = "item01";

  console.log("Hello");

  global.console.log("Hello");

  // let이나 const가 아닌 var로 선언한 전역 함수나 전역 변수는 전역 객체의 프로퍼티가 됩니다.
  var gVar = 5;
  console.log(globalThis.gVar);

  global.currentUser = {
    name: "John",
  }
  console.log(currentUser.name);
  console.log(global.currentUser.name);

  if (!global.Promise) {
    console.log("구식 자바스크립트 엔진을 사용하시는 군요!");
  } else{
    console.log("최신 자바스크립트 엔진을 사용하시는 군요!");
  }
};
item01();