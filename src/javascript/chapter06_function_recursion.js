const item01 = () => {
  const tag = "item01";
  function pow(x, n) {
    let result =1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }

  console.log(tag, pow(2, 4));
}
item01();

const item02 = () => {
  const tag = "item02";

  function pow(x, n) {
    if(n === 1) return x;
    return x * pow(x, n - 1);
  }
  console.log(tag, pow(2, 4));
  // pow(2, 4) = 2 * pow(2, 3) 16
  // pow(2, 3) = 2 * pow(2, 2) 8
  // pow(2, 2) = 2 * pow(2, 1) 4
  // pow(2, 1) = 2
}
item02()

const item03 = () => {
  const tag = "item03";
  let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],

    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],

      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

  // 급여함계를 구해주는 함수
  function sumSalaries(department) {
    if (Array.isArray(department)) {
      return department.reduce((prev, current) => prev + current.salary, 0)
    } else {
      let sum = 0;
      for (let subDepartment of Object.values(department)) {
        // [
        //   [ { name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 } ],
        //   { sites: [ [Object], [Object] ], internals: [ [Object] ] }
        // ]
        sum += sumSalaries(subDepartment);
      }
      return sum;
    }
  }

  console.log(tag, sumSalaries(company));

  console.log(Object.values(company));
  console.log(Array.isArray(company));
  console.log(Array.isArray(company.sales));
  console.log(Array.isArray(company.development));
}
item03();

// 과제
// 주어진 숫자까지의 모든 숫자 더하기
// 숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

const item04 = () => {
  const tag = "item04";

  // for 반복문 사용하기
  function sumToUsingLoop(n) {
    if(n === 1) return 1;
    let sum = 0
    for (let i  = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(tag, sumToUsingLoop(100));

  function sumToUsingRecursion(n) {
    if(n === 1) {
      return 1;
    } else {
      return n + sumToUsingRecursion(n - 1);
    }
  }
  console.log(tag, sumToUsingRecursion(100))

  function sumTo(n) {
    return n * (n + 1) / 2;
  }

  console.log(tag, sumTo(100));
}
item04();

// 과제 - 팩토리얼 계산하기
// 팩토리얼(factorial)은 n이 자연수일 때, 1부터 n까지의 모든 자연수의 곱을 의미합니다. n 팩토리얼은 n!으로 표시합니다.
// n! = n * (n - 1) * (n - 2) * ...*1
// 4! = 4 * (4 -1) * (4 -2) * (4 -3)
// 4! = 4 * 3 * 2 * 1

// 재귀를 사용하여 n!을 계산하는 함수, factorial(n)을 만들어보세요.

const item05 = () => {
  const tag = "item05";

  function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
  }

  console.log(tag, factorial(5));
}
item05();


// 과제 - 피보나치 수 계산하기
// 피보나치 수는 첫째와 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열로,
// Fn = Fn-1 + Fn-2라는 공식으로 표현할 수 있습니다.
// 처음 두 항은 1이고, 그다음 항들은 2(1+1),3(1+2),5(2+3)이므로 전체 수열은 1, 1, 2, 3, 5 , 8, 13, 21 ... 형태를 띱니다.
//
// 피보나치 수는 황금 비율 등 우리 주변을 둘러싼 수많은 자연 현상과 관련이 있습니다.

// n 번째 피보나치 수를 반환하는 함수 fib(n)을 작성해보세요.
const item06 = () => {
  const tag = "item06";


  function fib(n) {
    if(n <= 2) return 1
    return fib(n -1) + fib(n-2)
  }

  console.log(tag, 3, fib(3));
  console.log(tag, 4, fib(4));
  console.log(tag, 5, fib(5));
  console.log(tag, 6, fib(6));
  console.log(tag, 7, fib(7));
  console.log(tag, 8, fib(8));
};
item06();

// 반복문을 사용하여 피보나치 수열 구하기
const item07 = () => {
  const tag = "item07";

  function fib(n) {
    let a = 1, b = 1
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  console.log(tag, fib(5));
  console.log(tag, 9, fib(77));
}
item07();

// 과제 - 단일 연결 리스트 출력하기
// 스트 내 항목을 차례대로 하나씩 출력해주는 함수 printList(list)를 만들어보세요.
const item08 = () => {
  const tag = "item08";

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  // 반복문과 재귀를 사용한 답안을 각각 만들어봅시다.
  function printList(list) {
    let temp = list;

    while (temp) {
      console.log(tag, temp.value);
      temp = temp.next;
    }
  }
  printList(list);

  // 재귀
  function printList2(list) {
    if (list) {
      console.log(tag, list.value);
      printList2(list.next);
    }
  }

  printList2(list);
};
item08();

// 과제 - 단일 연결 리스트를 역순으로 출력하기

const item09 = () => {
  const tag = "item09";

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  // 재귀
  function reversePrintList(list) {
    if (list) {
      reversePrintList(list.next);
      console.log(tag, list.value);
    }
  }
  reversePrintList(list);

  // 반복
  function reversePrintList2(list) {
    let tempArr = [];
    let temp = list;

    while(temp) {
      tempArr.push(temp.value);
      temp = temp.next;
    }

    for (let i = tempArr.length -1; i >= 0 ; i--) {
      console.log(tag, tempArr[i]);
    }
  }
  reversePrintList2(list);
};
item09();
