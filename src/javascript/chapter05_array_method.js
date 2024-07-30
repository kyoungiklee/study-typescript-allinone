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
    0: "something", length: 1,
  }
  const numbers4 = arr.concat(arrayLike);
  console.log(tag, numbers4);

  arr = [1, 2];
  arrayLike = {
    0: "something", 1: "else", [Symbol.isConcatSpreadable]: true, length: 2,
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

  let arr = [1, false, 0];
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

  let users = [{id: 1, name: "John"}, {id: 2, name: "Pete"}, {id: 3, name: "Mary"}];

  // 실무에서 객체로 구성된 배열을 다뤄야 할 일이 잦기 때문에 find 메서드 활용법을 알아두면 좋습니다.
  let user = users.find(item => item.id === 1);
  console.log(tag, user);

};
item06();

// filter
const item07 = () => {
  const tag = "item07";

  let users = [{id: 1, name: "John"}, {id: 2, name: "Pete"}, {id: 3, name: "Mary"}];

  const filter = users.filter(item => item.id < 3);
  console.log(tag, filter);

};
item07();

// 배열을 변형하는 메소드
// map
const item08 = () => {
  const tag = "item08";
  let actors = ["Bilbo", "Gandalf", "Nazgul",];

  const map = actors.map(item => item.length);
  console.log(tag, map);
};
item08();

//sort
const item09 = () => {
  const tag = "item09";
  let arr = [1, 2, 15];
  const numbers = arr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
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

  arr = names.split(",", 2);
  console.log(tag, arr);

  arr = names.split(",");
  const arrJoin = arr.join(";");
  console.log(tag, arrJoin);
  const strings = arrJoin.split(";");
  console.log(tag, strings);
};
item11();

// reduce, reduceRight
// reduce와 reduceRight는 배열을 기반으로 값 하나를 도출할 때 사용됩니다
// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);
const item12 = () => {
  const tag = "item12";

  let arr = [1, 2, 3, 4, 5,];
  let result = arr.reduce((sum, current) => {
    return sum + current
  }, 0);
  console.log(tag, result);

  //초깃값을 없애도 결과는 동일하네요. 초깃값이 없으면 reduce는 배열의 첫 번째 요소를 초깃값으로 사용하고
  // 두 번째 요소부터 함수를 호출하기 때문입니다.
  result = arr.reduce((sum, current) => {
    return sum + current;
  })
  console.log(tag, result);

};
item12();

// Array.isArray로 배열여부 알아내기
const item13 = () => {
  const tag = "item13";

  console.log(tag, Array.isArray({}));
  console.log(tag, Array.isArray([]));
}
item13();

// 배열 메서드와 thisArgs
const item14 = () => {
  const tag = "item14";
  let army = {
    minAge: 18, maxAge: 27, canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };

  let users = [{age: 16}, {age: 20}, {age: 23}, {age: 30}];

  let soldiers = users.filter(army.canJoin, army);
  console.log(tag, soldiers);


};
item14();

// some, evey, fill copyWithin
const item15 = () => {
  const tag = "item15";
  let arr = [1, 2, 3, 4, 5,];
  let users = [{age: 16}, {age: 20}, {age: 23}, {age: 30}];
  // some은 함수의 반환 값을 true로 만드는 요소가 하나라도 있는지 여부를 확인하고
  // every는 모든 요소가 함수의 반환 값을 true로 만드는지 여부를 확인합니다.
  console.log(tag, users.every(user => user.age > 15));
  console.log(tag, users.some(user => user.age >= 30));

  // arr.fill(value, start, end)은 start부터 end까지 value를 채워 넣습니다
  arr.fill(10000, 0, arr.length);
  console.log(tag, arr);

  let array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
  console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
  console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

}
item15();


