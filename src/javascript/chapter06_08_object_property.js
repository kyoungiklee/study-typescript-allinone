const item01 = () => {
  const tag = "item01";
  let user = {
    name: "John",
  }

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(JSON.stringify(descriptor, null, 2));

};
item01();

// efineProperty를 사용해 프로퍼티를 만든 경우, descriptor에 플래그 값을 명시하지 않으면 플래그 값이 자동으로 false가 됩니다.
// 플래그 값을 true로 설정하려면 descriptor에 true라고 명시해 주어야 합니다.
const item02 = () => {
  const tag = "item02";
  let user = {};

  Object.defineProperty(user, 'name', {
    value: 'John',
  });

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  const userProperties = JSON.stringify(descriptor, null, 2);
  console.log(tag, userProperties);
  console.log(tag, user.name);
};
item02();

// defineProperty를 사용해 writable 플래그를 true로 변경하지 않는 한 그 누구도 객체의 이름을 변경할 수 없게 되었습니다.
const item03 = () => {
  "use strict"
  const tag = "item03";
  let user = {
    name: 'John',
  }

  Object.defineProperty(user, 'name', {
    writable: false,
  });

  //
  // user.name = 'Peter';
  console.log(tag, user.name)
};
item03();

// defineProperty 메서드를 사용해 프로퍼티를 밑바닥부터 만들어 보았습니다.
const item04 = () => {
  "use strict"
  const tag = "item04";

  let user = {}
  Object.defineProperty(user, 'name', {
    value: 'John',
    enumerable: true,
    configurable: true,
  })

  console.log(tag, user.name);
  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  // user.name = "Peter";

};
item04();

//  객체 내장 메서드 toString은 열거가 불가능(non-enumerable)하기 때문에 for..in 사용시 나타나지 않습니다.
//  하지만 커스텀 toString을 추가하면 아래와 같이 for..in에 toString이 나타납니다.
const item05 = () => {
  const tag = "item05";
  let user = {
    name: "John",
    toString() {
      return this.name;
    }
  };

  // 특정 프로퍼티의 enumerable 플래그 값을 false로 설정하면 for..in 반복문에 나타나지 않게 할 수 있습니다.
  // 커스텀 toString도 열거가 불가능하게 할 수 있습니다.
  Object.defineProperty(user, 'toString', {
    enumerable: false,
  })
  for (const userKey in user) {
    console.log(tag, userKey);
  }

  // 열거가 불가능한 프로퍼티는 Object.keys에도 배제됩니다.
  console.log(tag, Object.keys(user));
};
item05();

const item06 = () => {
  "use strict"
  const tag = "item06";

  let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

  console.log(JSON.stringify(descriptor, null, 2));

  // configurable:false가 만들어내는 구체적인 제약사항은 아래와 같습니다.
  //
  // configurable 플래그를 수정할 수 없음
  // enumerable 플래그를 수정할 수 없음.
  // writable: false의 값을 true로 바꿀 수 없음(true를 false로 변경하는 것은 가능함).
  // 접근자 프로퍼티 get/set을 변경할 수 없음(새롭게 만드는 것은 가능함).

  // 이런 특징을 이용하면 아래와 같이 “영원히 변경할 수 없는” 프로퍼티(user.name)를 만들 수 있습니다
  // configurable 플래그가 false이더라도 writable 플래그가 true이면 프로퍼티 값을 변경할 수 있습니다.

  let user = {};
  Object.defineProperty(user, 'name', {
    value: 'John',
    writable: false,
    configurable: false,
  });
  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  // user.name = "Peter";

  // TypeError: Cannot delete property 'name' of #<Object>
  // delete user.name;

  // TypeError: Cannot redefine property: name
  // Object.defineProperty(user, 'name', {value: "Peter"});

  //TypeError: Cannot redefine property: name
  // Object.defineProperty(user, "name", {writable: true});

};
item06();

// Object.defineProperties(obj, descriptors) 메서드를 사용하면 프로퍼티 여러 개를 한 번에 정의할 수 있습니다.
const item07 = () => {
  const tag = "item07";
  let user = {};

  Object.defineProperties(user, {
    firstName: {value: 'John', writable: false, enumerable: true},
    lastName: {value: 'Smith', writable: false, enumerable: true},
    // ...
  });

  // Object.defineProperties()로 생성되는 객체의 property는 writable: false, enumerable: false, configurable: false로
  // 설정된다.

  let clone = {}
  for (const key in user) {
    clone[key] = user[key];
  }

  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(clone, "firstName");
  console.log(JSON.stringify(ownPropertyDescriptor));


  // Object.getOwnPropertyDescriptors는 심볼형 프로퍼티를 포함한 프로퍼티 설명자 전체를 반환합니다.
  clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
  const ownPropertyDescriptors = Object.getOwnPropertyDescriptors(clone);

  for (const descriptorKey in ownPropertyDescriptors) {
    const descriptor = Object.getOwnPropertyDescriptor(clone, descriptorKey);
    console.log(JSON.stringify(descriptor, null, 2));
  }


};
item07();

const item08 = () => {
  const tag = "item08";

};
item08();


