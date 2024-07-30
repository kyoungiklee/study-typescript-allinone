//요약
// 요소를 더하거나 지우기
const item01 = () => {
  const tag = "item16";

  // push(...items) – 맨 끝에 요소 추가하고 배열의 새로운 길이를 반환합니다.
  let animals = ["pigs", "goats", "sheep"];

  const count = animals.push("cows");
  console.log(tag, count);
  console.log(tag, animals);

  const newAnimals = ["chickens", "cats", "dogs"];
  animals.push(...newAnimals);
  console.log(tag, count);
  console.log(tag, animals);


  // pop() – 맨 끝 요소 추출하기 빈 배열에서 pop()을 호출하면 undefined를 반환합니다.
  const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
  console.log(tag, plants.pop());
  console.log(tag, plants);
  plants.pop();
  console.log(tag, plants);
  //this의 값을 그대로 유지하면서 마지막 요소가 제거된 새 배열을 반환하고 싶다면 대신 arr.slice(0, -1)을 사용할 수 있습니다.
  const strings = plants.slice(0, -1);
  console.log(tag, strings, plants);

  //객체에 pop 적용 시
  arrayLike = {
    length: 3,
    unrelated: "foo",
    2: "Hello world",
  };
  console.log(tag, Array.prototype.pop.call(arrayLike)); // 객체 마지막 속성 값 반환
  // 4
  console.log(tag, arrayLike);
  // { length: 2, unrelated: 'foo' }

  const plainObj = {};
  // length 속성이 없으므로, length는 0입니다
  Array.prototype.pop.call(plainObj);
  console.log(tag, plainObj);
  // { length: 0 }

  const collection = {
    length: 0,
    addElements(...elements) {
      // obj.length는 요소가 추가될 때마다
      // 자동적으로 증가합니다.

      // push가 반환한 값인
      // 길이 속성의 새 값을 반환합니다.
      return [].push.call(this, ...elements);
    },
    removeElement() {
      // obj.length은 요소가 제거될 때마다
      // 자동으로 감소합니다.

      // pop이 반환한 값인
      // 삭제된 요소를 반환합니다.
      return [].pop.call(this);
    },
  };

  collection.addElements(10, 20, 30);
  console.log(tag, collection, collection.length); // 3
  collection.removeElement();
  console.log(tag, collection, collection.length); // 2


  // shift() – 첫 요소 추출하기 빈 배열의 경우 undefined 를 반환합니다.
  array1 = [1, 2, 3];
  const firstElement = array1.shift();

  console.log(tag, array1);


  const names = ["Andrew", "Edward", "Paul", "Chris", "John"];
  while ((i = names.shift()) !== undefined) {
    console.log(tag, i);
  }
  console.log(tag, names);


  // unshift(...items) – 맨 앞에 요소 추가하기
  // unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다
  let array2 = [1, 2, 3,];
  console.log(tag, array2.unshift(4, 5));
  console.log(tag, array2);


  // splice(pos, deleteCount, ...items) – pos부터 deleteCount개의 요소를 지우고, items 추가하기
  // 반환값 제거한 요소를 담은 배열. 하나의 요소만 제거한 경우 길이가 1인 배열을 반환합니다.
  // 아무 값도 제거하지 않았으면 빈 배열을 반환합니다.
  let myFish = ["angel", "clown", "mandarin", "surgeon"]
  const strings1 = myFish.splice(myFish.length, 0, "drum");
  console.log(tag, strings1, myFish);

  //하나도 제거하지 않고 2번 인덱스에 "drum", "guitar" 추가
  myFish = ["angel", "clown", "mandarin", "surgeon"];
  myFish.splice(2, 0, "drum", "guitar")
  console.log(tag, myFish);
  console.log(tag, ...myFish);

  // 3번 인텍스에서 한개 요소 제거
  myFish = ["angel", "clown", "mandarin", "surgeon"];
  myFish.splice(3, 1);
  console.log(tag, myFish);

  // 0번 인덱스에서 두 개 요소 제거하고 "parrot", "anemone", "blue" 추가
  myFish = ["angel", "clown", "mandarin", "surgeon"];
  const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
  console.log(tag, myFish);
  console.log(tag, removed);

  // 2번 인덱스에서 두개요소 제거
  myFish = ["angel", "clown", "mandarin", "surgeon"];
  const removed2 = myFish.splice(2, 2);
  console.log(tag, myFish);
  console.log(tag, removed2);

  // -2번 인텍스에서 한개요소 제거
  myFish = ["angel", "clown", "mandarin", "surgeon"];

  const removed3 = myFish.splice(-2, 1);
  console.log(tag, myFish);
  console.log(tag, removed3);

  //2번 인덱스를 포함해서 이후의 모든 요소 제거
  myFish = ["angel", "clown", "mandarin", "surgeon"];
  const removed4 = myFish.splice(2);
  console.log(tag, myFish);
  console.log(tag, removed4);

  // slice(start, end) – start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦
  // slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합letanimals = ["ant", "bison", "camel", "duck", "elephant"];
  animals = ['and', 'bison', 'camel', 'duck', 'elephant'];
  console.log(tag, animals.slice(2));
  console.log(tag, animals.slice(2, 4));
  console.log(tag, animals.slice(1, 5));
  console.log(tag, animals.slice(-2));
  console.log(tag, animals.slice(2, -1));
  console.log(tag, animals.slice());

  // concat(...items) – 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
  // Array 인스턴스의 concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용됩니다.
  // 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환합니다
  array1 = ['a', 'b', 'c'];
  array2 = ['d', 'e', 'f'];
  let array3 = array1.concat(array2);
  console.log(tag, array3);


  let num1 = [1, 2, 3];
  let num2 = [4, 5, 6];
  let num3 = [7, 8, 9];

  let numbers = num1.concat(num2, num3);

  console.log(tag, numbers);

  let letters = ["a", "b", "c"];

  let alphaNumeric = letters.concat(1, [2, 3]);

  console.log(tag, alphaNumeric);

  num1 = [[1, 2]];
  num2 = [3, [4], [5, 6]];

  numbers = num1.concat(num2);
  console.log(tag, numbers);
  //num1의 첫번째 요소를 수정합니다.
  num1[0].push(4);
  console.log(tag, numbers);
  //Symbol.isConcatSpreadable을 이용하여 유사 배열 객체 연결
  const obj1 = {0: 0, 1: 1, 2: 2, length: 3}
  const obj2 = {0: 1, 1: 1, 2: 2, length: 3, [Symbol.isConcatSpreadable]: true};

  console.log(tag, [0].concat(obj1, obj2));
  // 희소 배열에 concat() 사용
  console.log([1, , 3].concat([4, 5]));

  arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // length가 2이므로 concat()에서 무시됨
  };
  console.log(tag, Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
}
item01();



// 원하는 요소 찾기
const item02 = () => {
  const tag = "item02";

  //
  // indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
  let array = [2, 9, 9];
  console.log(tag, array.indexOf(2));
  console.log(tag, array.indexOf(7));
  console.log(tag, array.indexOf(9, 2));
  console.log(tag, array.indexOf(2, -1));
  console.log(tag, array.indexOf(2, -3));

  // 요소가 나타난 모든 위치 찾기
  array = ["a", "b", "a", "c", "a", "d"];
  const element = 'a';

  // for 문 사용
  let indices = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] === element)
      indices.push(array.indexOf(element, i));
  }
  console.log(tag, indices);

  // while 문 사용
  indices = [];
  let idx = array.indexOf(element);
  while(idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(tag, indices);

  // 배열에 요소가 있는지 확인하고 배열 업데이트하기
  function updateVegetableCollection(veggies, veggie) {
    if(veggies.indexOf(veggie) === -1){
      veggies.push(veggie);
      return veggies;
    } else {
      return veggies
    }
  }
  const veggies = ["potato", "tomato", "chillies", "green-pepper"];
  const collection1 = updateVegetableCollection(veggies, "spinach");
  console.log(tag, collection1)
  const collection2 = updateVegetableCollection(veggies, "spinach");
  console.log(tag, collection2);


  // 배열이 아닌 객체에서 indexOf() 호출하기
  // indexOf() 메서드는 this의 length 속성을 읽은 다음 키가 length보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.
  let arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // length가 3이므로 indexOf()에서 무시됩니다.
  };

  console.log(tag, Array.prototype.indexOf.call(arrayLike, 2));
  console.log(tag, Array.prototype.indexOf.call(arrayLike, 5));

  // includes(value) – 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
  // formIndex가 배열 길이보다 크거나 같은 경우
  // fromIndex가 배열의 길이보다 크거나 같으면 false가 반환됩니다. 배열은 검색되지 않습니다.
  let arr = ['a', 'b', 'c'];
  console.log(tag, arr.includes('a', 3));
  console.log(tag, arr.includes('a', 5));

  // 0보다 작은 인덱스 검색
  // 계산된 인덱스가 0보다 작거나 같으면 전체 배열에서 검색됩니다.
  console.log(tag, arr.includes('a', -100));
  console.log(tag, arr.includes('b', -100));
  console.log(tag, arr.includes('a', -2));

  //희소배열에서 includes() 사용
  console.log(tag, [1, , 3].includes(undefined));

  // 배열이 아닌 객체에서 includes() 호출하기
  // includes() 메서드는 this의 length 속성을 읽은 다음 키가 length보다 작은 음수가 아닌 정수인 각 속성에 접근합니다
  console.log(tag, Array.prototype.includes.call(arrayLike, 2));
  console.log(tag, Array.prototype.includes.call(arrayLike, 1));

  // find/filter(func) – fu]의 반환 값을 true로 만드는 첫 번째/전체 요소를 반환함
  // 반환값: 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소입니다. 테스트 함수를 만족하는 요소가 없으면, undefined가 반환됩니다.
  //배열에서 속성 중 하나로 객체 찾기
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  function isCherries(fruit) {
    return fruit.name === "cherries";
  }

  console.log(tag, inventory.find(isCherries));

  // 조건을 만족하는 첫번째 값을 반환함
  console.log(tag, inventory.find(fruit => {
    return fruit.quantity >= 2
  }));

  // 화살표 함수 및 구조분해사용
  console.log(tag, inventory.find(({name}) => name === "cherries"));

  // 배열에서 소수 찾기

  console.log(tag, inventory.filter(fruit => fruit.quantity >= 2));

  // findIndex는 find와 유사함. 다만 요소 대신 인덱스를 반환함

}
item02();
  // 배열 전체 순회하기
  //
  // forEach(func) – 모든 요소에 func을 호출함. 결과는 반환되지 않음

  // 배열 변형하기
  //
  // map(func) – 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
  // sort(func) – 배열을 정렬하고 정렬된 배열을 반환함
  // reverse() – 배열을 뒤집어 반환함
  // split/join – 문자열을 배열로, 배열을 문자열로 변환함
  // reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨

  // 기타
  //
  // Array.isArray(arr) – arr이 배열인지 여부를 판단
