// 순서가 있는 컬렉션을 저장할 때 쓰는 자료구조인 배열을 사용할 수 있다.


// 배열선언
const item01 = () => {
  const tag = "item01";
  let arr1 = new Array();
  let arr2 = [];


  let fruits = ["오렌지", "사과", "자두"];

  // 배열 수정
  fruits[2] = "배";

  // 배열 추가
  fruits[fruits.length] = "레몬";
  for (const fruit of fruits) {
    console.log(tag, fruit);
  }

  for (const fruitsKey in fruits) {
    console.log(tag, fruits[fruitsKey]);
  }

  for (let i = 0; i < fruits.length; i++) {
    console.log(tag, fruits[i]);
  }

  fruits.forEach(fruit => console.log(tag, fruit));

  fruits.map(fruit => console.log(tag, fruit));

  // 배열요소의 자료형에는 제약이 없음
  let arr3 = [
    "사과",
    {name: "Thor", age: 1200},
    () => "Hello world",
  ];

  console.log(tag, arr3[0]);
  console.log(tag, arr3[1].name);
  console.log(tag, arr3[2]());
}; item01()


// shift, unshift, pop, push
const item02 = () => {
  const tag = "item02";
  let fruits = ["사과", "오렌지", "배"];

  // 배열의 끝 요소를 제고하고 제거한 요소를 반환한다.
  console.log(tag, fruits.pop());
  console.log(tag, fruits);

  // 배열의 끝에 요소를 추가한다.
  console.log(tag, fruits.push("배"));
  console.log(tag, fruits);

  // 배열의 앞요소를 제거하고 제거한 요소를 반환한다.
  console.log(tag, fruits.shift());
  console.log(tag, fruits);

  // 배열앞에 요소를 추가한다.
  console.log(tag, fruits.unshift("사과"));
  console.log(tag, fruits);

  fruits = ["사과"];
  console.log(tag, fruits.push("오렌지", "배"));
  console.log(tag, fruits.unshift("파인애플", "레몬"));
  console.log(fruits);

}; item02()

// 배열의 내부 동작 원리

const item03 = () => {
  const tag = "item03";
  let fruits = ["사과"];
  let arr = fruits;

  console.log(tag, arr === fruits);

  arr.push("배");
  console.log(fruits);
};item03();

// for..in 반복문은 배열이 아니라 객체와 함께 사용할 때 최적화되어 있어서
// 배열에 사용하면 객체에 사용하는 것 대비 10~100배 정도 느립니다.

const item04 = () => {
  const tag = "item04";

  let item = [];
  let num = 0;
  for (let i = 0; i < 1000000;i++) {
    item[i] = ++num;
  }
  console.log(tag, item);

  let startTime = Date.now();
  let sum = 0;
  for (let i = 0; i <= item.length ; i++) {
    sum += i;
  }
  let endTime = Date.now();

  console.log(tag, `${endTime - startTime}ms`, sum);


  startTime = Date.now();
  sum = 0;
  for (const itemNum of item) {
    sum += itemNum;
  }
  endTime = Date.now();

  console.log(tag, `${endTime - startTime}ms`, sum);

  startTime = Date.now();
  sum = 0;
  for (const key in item) {
    sum += item[key];
  }
  endTime = Date.now()
  console.log(tag, `${endTime - startTime}ms`, sum);

  //[]은 빈문자열 반환
  console.log(tag, [] + 1);
  console.log(tag, [1] + 1);
  console.log(tag, [1, 2] + 1);
};
item04();

// 과제
// 배열과 관련된 다섯가지 연산
// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.}}
const item05 = () => {
  const tag = "item05";

  // 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
  let styles = ["Jazz", "Blues"];

  // "Rock-n-Roll"을 배열 끝에 추가합니다.
  styles.push("Rock-in-Roll");
  console.log(tag, styles);

  //배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
  let center = Math.floor(styles.length / 2)
  styles[center] = "Classics"
  console.log(tag, styles);

  // 배열의 첫번째 요소를 꺼내서 출력
  styles.shift()
  console.log(tag, styles);

  // "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
  styles.unshift("Rap", "Reggae");
  console.log(tag, styles);
};
item05();

// 과제
// 최대합 부분배열
const item06 = () => {
  const tag = "item06";

  function getMaxSubSum(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum +=  arr[j];

        if(max < sum) max = sum;
        //console.log(tag, sum, max)
      }
    }
    return max;
  }

  const maxSubSum = getMaxSubSum([-1, 2, 3,-9]);
  console.log(tag, maxSubSum);

  const maxSubSum1 = getMaxSubSum([2, -1, 2, 3, -9]);
  console.log(tag, maxSubSum1);

  const maxSubSum2 = getMaxSubSum([-1, 2, 3, -9, 11]);
  console.log(tag, maxSubSum2);

}
item06()

const item07 = () => {
  const tag = "item07";

  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (const item of arr) {
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);
      if(partialSum < 0) partialSum =0;
    }
    return maxSum;
  }

  const maxSubSum = getMaxSubSum([-1, 2, 3,-9]);
  console.log(tag, maxSubSum);

  const maxSubSum1 = getMaxSubSum([2, -1, 2, 3, -9]);
  console.log(tag, maxSubSum1);

  const maxSubSum2 = getMaxSubSum([-1, 2, 3, -9, 11]);
  console.log(tag, maxSubSum2);
}
item07();
