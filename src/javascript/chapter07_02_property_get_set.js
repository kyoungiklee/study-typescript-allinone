const item01 = () => {
  const tag = "item01";
  let user = {
    firstName: "John",
    lastName: "Smith",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
      [this.firstName, this.lastName] = value.split(" ");
    }
  };
  console.log(tag, user.fullName);

  user.fullName = "Alice Cooper";
  console.log(tag, user.fullName);

};
item01();

// 접근자 프로퍼티는 다음과 같은 설명자를 갖습니다.
//
// get – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
// set – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
// enumerable – 데이터 프로퍼티와 동일함
// configurable – 데이터 프로퍼티와 동일함

const item02 = () => {
  const tag = "item02";

  let user = {
    firstName: "John",
    lastName: "Smith",
  }
  Object.defineProperty(user, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(value) {
      [this.firstName, this.lastName] = value.split(" ");
    }
  });

  console.log(tag, user.fullName);
  for (const key in user) {
    console.log(tag, key);
  }
};
item02();

// getter와 setter를 ‘실제’ 프로퍼티 값을 감싸는 래퍼(wrapper)처럼 사용하면, 프로퍼티 값을 원하는 대로 통제할 수 있습니다.
const item03 = () => {
  const tag = "item03";

  let user = {
    get name() {
      return this._name;
    },
    set name(value) {
      if (value.length < 4) {
        console.log("Input value is too shot, Please enter at least 4 characters")
        return;
      }
      this._name = value;
    }
  }

  user.name = "Peter";
  console.log(tag, user.name);

  user.name = "";
};
item03();

const item04 = () => {
  const tag = "item04";

  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age는 현재 날짜와 생일을 기준으로 계산됩니다.
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear()
      }
    });
  }

  let john = new User("John", new Date(1971, 2, 20));
  console.log(tag, john.birthday);
  console.log(tag, john.age);
};
item04();
