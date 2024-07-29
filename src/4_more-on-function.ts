/**
 * Function Type Expressions
 */

type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
    fn("Hello world");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);



/**
 * Call Signatures
 */
type DescribableFunction = {
    (somArgs: number): boolean;
    description: string;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6))
}

function myFunc(someArg: number) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);


type SomeConstructor = {
    new (s: string): object;
}

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

/**
 * Generic Functions
 */
// function firstElement(arr: any[]) {
//     return arr[0];
// }
//
// console.log(firstElement([1, 2, 3, 4,]));
// console.log(firstElement(["Thor", "Captain", "Hulk"]));

function firstElement<Type>(arr: Type[]): Type | undefined{
    return arr[0];

}

const s = firstElement(["Thor", "Captain", "Hulk"]);
console.log(s?.toUpperCase())
const num = firstElement([1, 2, 3, 4]);
console.log(num?.toFixed())
const u = firstElement([]);

/**
 * Inference (추론)
 */

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);


/**
 * Constraints (타입 제한 조건)
 */

// 우리가 Type을 { length: number }로 제한했기에,
// 우리는 a와 b 매개변수에 대해서 .length 프로퍼티에 접근할 수 있었습니다.
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if(a.length >= b.length) {
        return a;
    }
    return b;
}

const longerArray = longest([1, 2], [1, 2, 3]);
console.log(longerArray);
const longerString = longest(["1", "2"], ["1", "2", "3"]);
console.log(longerString);

// 결국 우리가 원하는 대로 longest(10,100)은 number타입이 .length 프로퍼티를 가지고 있지 않았기 때문에
// 호출이 거부된 것을 볼 수 있습니다.
// TS2345: Argument of type number is not assignable to parameter of type { length: number; }
// const notOK = longest(10, 100);

/**
 * Working with Constrained Values
 */

//TS2322: Type { length: number; } is not assignable to type T
function minimumLength<T extends {length: number}>(obj: T, minimum: number) : T | number{
    if (obj.length >= minimum) {
        return obj;
    }
    // return {length: minimum};
    return 0;

}

/**
 * Specifying Type Arguments
 */
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
// TS2322: Type string is not assignable to type number
// const arr = combine([1, 2, 3], ["hello"]);

const arr = combine<string | number>([1, 2, 3], ["hello"]);
console.log(arr);

/**
 * Guidelines for Writing Good Generic Functions
 */


// 타입 매개변수를 누르기
// 규칙: 가능하다면, 타입 매개변수를 제약하기보다는 타입 매개변수 그 자체를 사용하십시오.
function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

const arr1 = firstElement1([1, 2, 3]);
// const arr2: any
const arr2 = firstElement2([1, 2, 3]);

//더 적은 타입 매개변수를 사용하기
//규칙: 항상 가능하다면 타입 매개변수를 최소로 사용하십시오

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>( arr: Type[], func: Func): Type[] {
    return arr.filter(func);
}

// 타입 매개변수는 두 번 나타나야 합니다.
// 규칙: 만약 타입 매개변수가 한 곳에서만 나온다면, 정말로 필요한 건지 다시 생각해 보십시오.


//가끔 우리는 함수가 제네릭이 필요 없을 수 있다는 사실을 간과합니다.
function greet<Str extends string>(s: Str) {
    console.log("Hello, " + s);
}
greet("world");

/**
 * Optional Parameters
 */

//  TypeScript by marking the parameter as optional with ?:
function f2(x?: number) {
    //...
}
f2();
f2(10);

// 콜백 함수에서의 선택적 매개변수

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));


/**
 * 함수 오버로드
 */

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !==  undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// TS2575: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// const d3 = makeDate(1, 3);

// 오버로드 시그니처와 구현 시그니처
// 다시 한번 강조하지만, 함수 본문을 작성하기 위해 사용된 시그니처는 외부에서 “보이지 않습니다”.
// function fn(x: string): void;
// function fn() {
//     // ...
// }
// 0개의 인자로 호출하기를 예상했음
// fn();

function len(x: any[] | string) {
    return x.length;
}

len(""); // OK
len([0]); // OK
// ypeScript는 하나의 오버로드를 통해서만 함수를 해석하기에,
// 우리는 이 함수를 문자열 또는 배열이 될 수 있는 값을 통해서 호출할 수 없습니다.
len(Math.random() > 0.5 ? "hello" : [0]);

// 함수 내에서 this 선언하기

const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};

/**
 * 알아야 할 다른 타입
 */


// void는 값을 반환하지 않는 함수의 반환 값을 의미합니다.
// 함수에 return문이 없거나, 명시적으로 값을 반환하지 않을 때, 추론되는 타입입니다.
function noop() {
    return;
}

// unknown 타입은 모든 값을 나타냅니다. any 타입과 유사합니다만,
// unknown 타입에 어떤 것을 대입하는 것이 유효하지 않기 때문에 더 안전합니다.
function f1(a: any) {
    a.b(); // OK
}
function f3(a: unknown) {
    // TS18046: a is of type unknown
    // a.b();
}

// never 타입은 결코 관측될 수 없는 값을 의미합니다
function fail(msg: string): never {
    throw new Error(msg);
}
// never은 TypeScript가 유니온에 아무것도 남아있지 않다고 판단했을 때 또한 나타납니다.
function fn4(x: string | number) {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {
        x; // 'never' 타입이 됨!
    }
}

function doSomething1(f: Function) {
    return f(1, 2, 3);
}

/**
 * 나머지 매개변수와 인수
 */

// 나머지 매개변수(Rest Parameter)
// 정해지지 않은 수의 인수를 받아들이는 함수를 나머지 매개변수를 이용하여 정의할 수 있습니다.
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a1 = multiply(10, 1, 2, 3, 4);


// 우리는 전개 구문을 사용하여 배열에서 제공되는 인수의 개수를 제공할 수 있습니다.
// 예를 들어, 배열의 push 메서드는 인수를 몇 개든 받을 수 있습니다.
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
arr4.push(...arr5);

/**
 * 매개변수 구조 분해(Parameter Destructing)
 */


type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
    console.log(a + b + c);
}

/**
 * 함수의 할당가능성
 */

type voidFunc = () => void;

const f5: voidFunc = () => {
    return true;
};

const f6: voidFunc = () => true;

const f7: voidFunc = function () {
    return true;
};

const v1 = f5();

const v2 = f6();

const v3 = f7();

