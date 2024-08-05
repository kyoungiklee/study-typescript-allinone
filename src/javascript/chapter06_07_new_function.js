const item01 = () => {
  const tag = "item01";
  let sum = new Function('a', 'b', "return a + b");
  const result = sum(1, 2);
  console.log(result);

  let sayHi = new Function("console.log('Hello')");
  console.log(sayHi());

  let str = "console.log('world')";
  let sayHi2 = new Function(str);
  console.log(sayHi2());

  // 클러저 환경
  // new Function을 이용해 함수를 만들면 함수의 [[Environment]] 프로퍼티가
  // 현재 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조하게 됩니다.
  function getFunc() {
    let value = "test";

    // ReferenceError: value is not defined
    // let func = new Function("console.log(value)");
    // return func;
  }

  // getFunc()();

  function getFunc2() {
    let value = "test";
    let func = function() {
      console.log(value);
    }
    return func;
  }

  getFunc2()();
}
item01();