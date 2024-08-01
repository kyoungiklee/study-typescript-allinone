// 나머지 매개변수
// 마침표 세 개 ...는 "남아있는 매개변수들을 한데 모아 배열에 집어넣어라."는 것을 의미합니다.
const item01 = () => {
  const tag = "item01";

  function sumAll(...args) {
    let sum = 0;
    for (const num of args) {
      sum += num;
    }
    return sum;
  }

  const sum = sumAll(1, 2, 3, 4, 5,);
  console.log(tag, sum);

  function showName(firstName, lastName, ...titles) {
    console.log(tag, titles[0]);
    console.log(tag, titles[1]);
    console.log(tag, titles.length);
    return `Hi ${firstName} ${lastName}`;
  }


  const name = showName('Sun', 'Lee', 'Software Engineer', 'Research');
  console.log(tag, name);

  // arguments는 유사 배열 객체이면서 이터러블(반복 가능한) 객체입니다.
  // 배열 메서드를 사용하거나 인수 일부만 사용할 때는 나머지 매개변수를 사용하는게 좋습니다.
  function showArguments() {
    console.log(tag, arguments.length);
    for (const argument of arguments) {
      console.log(`Parameters is ${argument}`);
    }

  }

  showArguments('Sun', 'Lee');
  showArguments('Sun', 'Lee', 'Software Engineer');
  showArguments('Sun');
};
item01();

// 스프레드 문법
const item02 = () => {
  const tag = "item02";
  console.log(tag, Math.max(1, 5, 3));

  // Math.max는 배열이 아닌 숫자 목록을 인수로 받는다.
  let arr = [1, 5, 3];
  // Argument type number[] is not assignable to parameter type number
  // console.log(tag, Math.max(arr))
  console.log(tag, Math.max(...arr));

  // 스프레드 문법을 평범한 값과 혼합해 사용하는 것도 가능합니다.
  let arr1 = [1, -2, 3, 4];
  let arr2 = [8, 3, -8, 1];

  console.log(tag, Math.max(...arr1, ...arr2));
  console.log(tag, Math.max(1, ...arr1, ...arr2, 25));

  // 전개 구문은 배열을 합칠 때도 활용할 수 있습니다.
  console.log(tag, [0, ...arr1, 20, ...arr2])

  // 스프레드 문법을 사용해 문자열을 문자 배열로 변환 시킬 수 있습니다.
  let str = 'Hello';
  console.log(tag, [...str]);

  // 메서드 Array.from은 이터러블 객체인 문자열을 배열로 바꿔주기 때문에 Array.from을 사용해도 동일한 작업을 할 수 있습니다.
  // 무언가를 배열로 바꿀 때는 전개 구문보다 Array.from이 보편적으로 사용됩니다
  console.log(tag, Array.from(str));

};
item02();

// 배열과 객체의 복사본 만들기
const item03 = () => {
  const tag = "item03";
  // 배열 복사
  let arr = [1, 2, 3];
  let arrCopy = [...arr];

  let isTrue = (JSON.stringify(arr) === JSON.stringify(arrCopy));
  console.log(tag, isTrue);

  let isFalse = (arr === arrCopy); // 참조가 다름
  console.log(tag, isFalse);

  arr.push(4);
  console.log(tag, arr, arrCopy);

  // 객체 복사
  let obj = {a:1, b:2, c: 3}
  let objCopy = {...obj}

  isTrue = (JSON.stringify(obj) === JSON.stringify(objCopy));
  console.log(tag, isTrue);

  isFalse = (obj === objCopy);
  console.log(tag, isFalse);

  obj.d = 4;
  console.log(tag, obj, objCopy);

};
item03()

// 요약
// "..."은 나머지 매개변수나 스프레드 문법으로 사용할 수 있습니다.
// "..."가 함수 매개변수 끝에 있으면 인수 목록의 나머지를 모아주는 "나머지 매개변수"입니다.
// "..."가 함수 호출 시 사용되거나 기타의 경우엔 배열을 목록으로 확장해 주는 스프레드 문법입니다.


