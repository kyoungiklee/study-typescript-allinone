
// 객체나 배열을 변수로 '분해’할 수 있게 해주는 특별한 문법인
// 구조 분해 할당(destructuring assignment) 을 사용할 수 있습니다.
// 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에서 구조 분해(destructuring)는 그 진가를 발휘합니다.
const item01 = () => {
  const tag = "item01"
  let arr = ["Thor", "Hulk"];
  // 배열을 변수로 '분해' 하기
  let [thor, hulk] = arr;

  console.log(tag, thor);
  console.log(tag, hulk);

}
item01();

// 배열 구조분해 우측엔 모든 이터러블이 올 수 있습니다.
const item02 = () => {
  const tag = "item02";
  let [firstName, surname] = "kyoungik lee".split(" ");
  console.log(tag, firstName);
  console.log(tag, surname);
};
item02();

// 쉼표를 사용하여 요소 무시하기
const item03 = () => {
  const tag = "item03";
  let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  let [firstName, , title] = arr;
  console.log(tag, title);
}
item03();

// 활당연산자 우측엔 모든 이터러블이 올 수 있습니다.
const item04 = () => {
  const tag = "item04";
  let [a, b, c] = "abc";
  console.log(tag, a, b, c);
  let [one, two, three] = new Set([1, 2, 3]);
  console.log(tag, one, two, three);
};
item04();

// 할당연산자 좌측엔 뭐든지 올수 있습니다.
const item05 = () => {
  const tag = "item05";
  let user = {};
  [user.name, user.age] = ["Thor", 42];
  console.log(tag, user.name, user.age);
};
item05();

// .entry()로 반복하기
const item06 = () => {
  const tag = "item06";

  let user = {
    name: "Hulk",
    age: 42,
    address: "seoul"
  };

  // 객체의 키값 순회하기
  for (const [key, value] of Object.entries(user)) {
    console.log(tag, `${key}:${value}`);
  }

  for (const userKey in user) {
    console.log(tag, user[userKey]);
  }

  //Map 사용
  let users = new Map();
  users.set("name", "Thor");
  users.set("age", 1200);

  for (const [key, value] of users) {
    console.log(tag, `${key}:${value}`);
  }
};
item06();

const item07 = () => {
  const tag = "item07";
  let guest = "Jain";
  let admin = "Pete";
  // 변수 guest엔 Peter가 변수 admin엔 Jain이 저장되도록 값을 교환함
  [guest, admin] = [admin, guest];
  console.log(tag, `${guest}: ${admin}`);

}
item07();

// '...'로 나머지 요소 가져오기
const item08 = () => {
  const tag = "item08"
  let [name, surname, age, ...rest] = ["Julius", "Caesar", 50, "Consul", "of the Roman Republic"];
  [name, surname, ...rest] = ["Julius", "Caesar", 50, "Consul", "of the Roman Republic"];
  console.log(tag, name);
  console.log(tag, surname);
  console.log(tag, age);
  console.log(tag, ...rest);

}
item08();

// '='를 이용하여 기본값 설정하기
const item09 = () => {
  const tag = "item09";
  let [name = "Guest", role = "Anonymous"] = ["Hulk"];
  console.log(tag, `${name}:${role}`);
}
item09()

// 복잡한 표현식이나 함수호출도 기본값이 될 수 있습니다. 할당한 값이 없을 때 표현식이 평가되거나 함수가 호출 됩니다.
const item10 = () => {
  let [name = console.log("이름을 입력하세요"), age = console.log("나이를 입력하세요")] = ["Hulk"];
}
item10();

// 객체 분해하기
const item11 = () => {
  const tag = "item11";
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }

  let {title, width, height} = options;
  console.log(tag, title, width, height);
}
item11();

// 객체 분해 할당에서 변수명 변경하기
const item12 = () => {
  const tag = "item12";
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }

  let {title: content, width: w, height: h} = options
  console.log(tag, content, w, h);
}
item12();

// 객체 분해 할당에 기본값으로 표현식이나 함수 호출을 할당 할 수 있다.
// 콜론과 할당 연산자를 동시에 사용할 수 있다.
const item13 = () => {
  const tag = "item13";
  let options = {
    title: "Menu",
  }
  function getDefaultHeight() {
    return 200;
  }

  let {title, width: w = 100, height: h = getDefaultHeight()} = options;
  console.log(tag, title, w, h);
}
item13();

// 프로퍼티가 많은 객체에서 원하는 프로퍼티만 뽑아올수 있다.

const item14 = () => {
  const tag = "item14";
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }
  let {title} = options;
  console.log(tag, title)
};
item14();

// 나머지 패턴 '...'
const item15 = () => {
  const tag = "item15"
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }

  let {title, ...rest} = options

  console.log(tag, title, rest.width, rest.height);
}
item15();

// 할당문을 괄호로 감싸서 코드블록이 아닌 표현식으로 해석하기
const item16 = () => {
  const tag = "item16";
  let title, width, height;

  ({title, width, height} = {title: "Menu", width: 100, height: 100} )

  console.log(tag, title, width, height);
}
item16();

// 중첩구조분해(nested desructuring)
const item17 = () => {
  const tag = "item17";
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true
  }

  let {
    size: {width, height},
    items: [item1, item2],
    extra,
    title = "Menu"
  } = options;

  console.log(tag, title, extra, item1, item2, width, height);

}
item17();

// 똑똑한 함수 매개변수
const item18 = () => {
  const tag = "item18";
  let options = {
    items: ["Cake", "Donut"],
    extra: true
  }

  function showMenu({
                      title = "Untitled",
                      width: w = 100,
                      height: h = 200,
                      items:[item1, item2],
                      extra = false
                    }) {
    console.log(tag, title, w, h, item1, item2, extra);
  }

  showMenu(options);
}
item18();

// 과제
const item19 = () => {
  const tag = "item19";

  let user = {
    name: "John",
    years: 30,
  }

  let {name, years, isAdmin = false} = user;

  console.log(tag, name, years, isAdmin);

}
item19();

//과제
// 가장 급여를 많이 받는 사람의 이름을 반환해주는 함수 topSalary(salaries) 작성
const item20 = () => {
  const tag = "item20"
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Brawn": 400,
    "Tom": 400,
  }

  function topSalaries(salaries) {
    let name = "";
    let salary = 0;
    for (const [key, value] of Object.entries(salaries)) {
      if(salary <= value) {
        name = key;
        salary = value;
      }
    }
    return name;
  }

  const name = topSalaries(salaries);
  console.log(tag, "Top salaries: " + name);
}
item20();















