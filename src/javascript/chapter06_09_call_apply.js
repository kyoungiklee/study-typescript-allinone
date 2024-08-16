// 함수 간에 호출을 어떻게 포워딩(forwarding) 하는지, 함수를 어떻게 데코레이팅(decorating) 하는지에 대해 알아보겠습니다.



// 지연을 시뮬레이션하기 위해 Promise를 사용하여 처리
const item01 = () => {
  const tag = "item01";

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms))
  }

  function slow(x, callback) {
    //CPU집약적인 연산 작업
    sleep(1000)
      .then(()=> console.log(`slow(${x})를 호출함`))
      .then(() => callback(x))
  }

   slow(3, (value) => console.log(tag, value));
};
// item01();

// slow(x)가 자주 호출된다면, 결과를 어딘가에 저장(캐싱)해 재연산에 걸리는 시간을 줄이고 싶을 겁니다.
// 데코레이터는 함수를 감싸는 래퍼로 함수의 행동을 변화시킵니다. 주요 작업은 여전히 함수에서 처리합니다.
const item02 = () => {
  const tag = "item02";

  function slow(x) {
    //CPU 집약적 작업
    console.log(`slow(${x})를 호출함`);
    return x;
  }

  // 함수를 감싸는 데코레이터(캐싱기능을 제공한다.)
  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func(x);
      cache.set(x, result);
      return result;
    };
  }

  // 데코레이터에 시간이 많이 걸리는 함수를 인자로 호출한다.
  // 데코레이터는 시간이 많이 걸리는 함수의 결과를 캐싱하는 기능을 추가한 함수를 리턴한다.
  slow = cachingDecorator(slow);
  console.log(tag, slow(1));
  // 같은 인자로 호출하는 경우 캐싱된 값을 리턴한다.
  console.log(tag, "다시호출: ", slow(1));
  console.log(tag, slow(2));
  console.log(tag, "다시호출:", slow(2));

};
// item02();

// func.call’를 사용해 컨텍스트 지정하기
const item03 = () => {
  const tag = "item03";

  let worker = {
    someMethod() {
      return 1;
    },
    slow(x) {
      // CPU 집약적인 작업
      console.log(`slow(${x}를 호출함`);
      return x * this.someMethod();
    }
  }

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      // 객체를 고정하기 위해 worker.slow()에 worker를 전달하여 this를 고정함
      let result = func.call(this, x);
      cache.set(x, result);
      return result;
    };
  }

  console.log(tag, worker.slow(1));
  worker.slow = cachingDecorator(worker.slow);

  // 데코레이터를 적용한 후에 worker.slow는 래퍼 function (x) { ... }가 됩니다.
  // worker.slow(2)를 실행하면 래퍼는 2를 인수로 받고, this=worker가 됩니다(점 앞의 객체).
  // 결과가 캐시되지 않은 상황이라면 func.call(this, x)에서 현재 this (=worker)와 인수(=2)를 원본 메서드에 전달합니다.
  console.log(tag, worker.slow(2));


  // 함수 호출 시 객체 고정 예시
  function sayHi() {
    console.log(tag, this.name);
  }

  let user = {name: "John"}
  let admin = {name: "Admin"}

  sayHi.call(user);
  sayHi.call(admin);

  function say(phrase) {
    console.log(`${this.name}, ${phrase}`);
  }

  say.call(user, "Hello");
};
// item03();

// 여러인수 전달하기
const item04 = () => {
  const tag = "item04";
  let worker = {
    slow(min, max) {
      console.log(`slow(${min}, ${max})을 호출함`);
      return min + max;
    }
  }

  // map의 키값을 생성할 수 있는 hash함수를 받아서 여러개의 인수를 하나의 키값으로 생성함
  function cachingDecoration(func, hash) {
    let cache = new Map();
    return function () {
      console.log(tag, arguments);
      console.log(tag, ...arguments);
      let key = hash(arguments);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = func.call(this, ...arguments);
      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + ',' + args[1];
  }

  worker.slow = cachingDecoration(worker.slow, hash);
  console.log(tag, worker.slow(2, 3));
  console.log(tag, "다시호출:", worker.slow(2, 3));


};
// item04();

// func.apply
// call과 apply의 문법적 차이는 call이 복수 인수를 따로따로 받는 대신 apply는 인수를 유사 배열 객체로 받는다는 점뿐입니다.
// 인수가 이터러블 형태라면 call을, 유사 배열 형태라면 apply를 사용하면 됩니다.
// 컨텍스트와 함께 인수 전체를 다른 함수에 전달하는 것을 콜 포워딩(call forwarding) 이라고 합니다.



// 과제
// Spy decorator
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

const item05 = () => {
  const tag = "item05";

  function work(a, b) {
    console.log(tag,  a + b);
  }

  function spy(func) {
    // return a wrapper that saves all calls to function in its calls property
    function wrapper (...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
    wrapper.calls = []; // function에 property 초기화
    return wrapper;
  }

  work = spy(work);
  work(1, 2);
  work(2, 3);


  for (const args of work.calls) {
    console.log(`call: ${args.join()}`);
  }
};
// item05();

// 과제
// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

const item06 = () => {
  const tag = "item06";

  function f(...args) {
    for (const arg of args) {

      console.log(arg);
    }
  }

  // in other words, delay(f, ms) returns a "delayed by ms" variant of f.
  function delay(f, ms) {
    return function (...args) {
      console.log(args);
      setTimeout(() => f.apply(this, args ), ms)
    };
  }

  // create wrapper
  let f1000 = delay(f, 1000);
  let f2000 = delay(f, 2000);

  f1000("test", "test"); // shows "test" after 1000ms
  f2000("test"); // shows "test" after 2000ms
};
// item06();

// 과제
// Debounce decorator

const item07 = () => {
  const tag = "item07";

  function func(...args) {
    for (const key in args) {
      console.log(tag, args[key]);
    }
  }

  function debounce(func, ms) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), ms);
    }
  }

  let f = debounce(func, 1000)

  f("test1");
  f("test2");
  f("test3");
  f("test4", "test5"); // test 4만 출력됨

};
item07();

// 과제
// Throttle decorator
const item08 = () => {
  const tag = "item08";
};
item08();


