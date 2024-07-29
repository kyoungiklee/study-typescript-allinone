// splice
//  이 메서드를 사용하면 요소 추가, 삭제, 교체가 모두 가능합니다.
const item01 = () => {
  const tag = "item01";
  // arr.splice(index[, deleteCount, elem1, ..., elemN])
  // 첫번째 매개변수는 조작을 가할 첫 번째 요소를 가르키는 인덱스입니다.
  // 두번째 매개변수는 제거하고자하는 요소의 개수입니다.
  // elem1, ..., elemN 배열에 추가할 요소를 나타냅니다.

  let arr = ["I", "study", "javascript"];
  arr.splice(1, 1);
  console.log(tag, arr);

  // 배열에서 원한는 요소많큼 삭제
  arr = ["I", "study", "javascript", "right", "now"];
  arr.splice(0, 3, "Let's", "dance");
  console.log(tag, arr);

  // 삭제한 배열 값 반환
  arr = ["I", "study", "javascript", "right", "now"];
  const removed = arr.splice(0, 2);
  console.log(tag, removed);

  // deleteCount가 0인 경우 삭제없이 배열 추가
  arr = ["I", "study", "javascript", "right", "now"];
  arr.splice(2, 0, "complex", "language");
  console.log(arr);

  // 음수를 사용하여 배열끝에서 배열값 추가
  arr = [1, 2, 5];
  arr.splice(-1, 0, 3, 4);
  console.log(tag, arr);
}
item01();

// slice
const item02 = () => {
  const tag = "item02";
  let arr = [1, 2, 3, 4, 5];
  const numbers = arr.slice(1, 3); // 2,3,4
  console.log(tag, numbers);

  const numbers1 = arr.slice(2, 10);
  console.log(tag, numbers1);

  const numbers2 = arr.slice(-2);
  console.log(tag, numbers2);

  const numbers3 = arr.slice();
  console.log(tag, numbers3);


};
item02();

// concat
const item03 = () => {
  const tag = "item03";
  let arr = [1, 2];
  const numbers = arr.concat(3, 4);
  console.log(tag, numbers);

  arr = [1, 2];
  const numbers1 = arr.concat(3, 4, [5, 6]);
  console.log(tag, numbers1);

  arr = [1, 2];
  const numbers2 = arr.concat([3, 4], [5, 6]);
  console.log(tag, numbers2);

  arr = [1, 2];
  const numbers3 = arr.concat([3, 4], 5, 6);
  console.log(tag, numbers3);


  arr = [1, 2];
  let arrayLike = {
    0: "something",
    length: 1,
  }
  const numbers4 = arr.concat(arrayLike);
  console.log(tag, numbers4);

  arr = [1, 2];
  arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  }

  const numbers5 = arr.concat(arrayLike);
  console.log(tag, numbers5);
}
item03();

// forEach
const item04 = () => {
  const tag = "item04";
  let arr = ["Bilbo", "Gandalf", "Nazgul"];
  arr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });
}
item04();

// 배열 탐색하기
const item05 = () => {
  const tag = "item05";
  //indexOf, lastIndexOf, includes

  // arr.indexOf(item, from)는 인덱스 from부터 시작해 item(요소)을 찾습니다.
  // 요소를 발견하면 해당 요소의 인덱스를 반환하고, 발견하지 못했으면 -1을 반환합니다.

  let arr = [1, false,0];
  console.log(tag, arr.indexOf(0));

  // arr.lastIndexOf(item, from)는 위 메서드와 동일한 기능을 하는데, 검색을 끝에서부터 시작한다는 점만 다릅니다.
  console.log(tag, arr.lastIndexOf(0));

  // arr.includes(item, from)는 인덱스 from부터 시작해 item이 있는지를 검색하는데, 해당하는 요소를 발견하면 true를 반환합니다.
  console.log(tag, arr.includes(0));

  arr = [1, true, 0, false, NaN];
  console.log(tag, arr.indexOf(NaN));
  console.log(tag, arr.includes(NaN));

}
item05();

// find, findIndex
const item06 = () => {
  const tag = "item06";

  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  // 실무에서 객체로 구성된 배열을 다뤄야 할 일이 잦기 때문에 find 메서드 활용법을 알아두면 좋습니다.
  let user = users.find(item => item.id === 1);
  console.log(tag, user);

};
item06();

// filter
const item07 = () => {
  const tag = "item07";

  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  const filter = users.filter(item => item.id < 3);
  console.log(tag, filter);

};
item07();

// 배열을 변형하는 메소드
// map
const item08 = () => {
  const tag = "item08";
  let actors = [
    "Bilbo",
    "Gandalf",
    "Nazgul",
  ];

  const map = actors.map(item => item.length);
  console.log(tag, map);
};
item08();

//sort
const item09 = () => {
  const tag = "item09";
  let arr = [1, 2, 15];
  const numbers = arr.sort((a,b) => {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
  });
  console.log(tag, numbers);

  let countries = ['Österreich', 'Andorra', 'Vietnam'];
  const strings = countries.sort((a, b) => {
    return a.localeCompare(b)
  });
  console.log(tag, strings);
}
item09()

//reverse
const item10 = () => {
  const tag = "item10";

  let arr = [1, 2, 3, 4, 5,];
  const numbers = arr.reverse();
  console.log(tag, numbers);

};
item10();

//split, join
const item11 = () => {
  const tag = "item11";
  let names = 'Bilbo, Gandalf, Nazgul';
  let arr = names.split(",");
  console.log(tag, arr);
};
item11();