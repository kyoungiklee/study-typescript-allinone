let obj = { x: 0 };
// obj.foo();
obj.bar = 100;
obj = "hello";
const n = obj;
// 변수에 대한 타입표기
let myName = "Alice"; // 이는 선책사항이다.
// 매개변수 타입 표기
function greet(name) {
    console.log("Hello " + name.toUpperCase() + "!!");
    name.toLowerCase();
}
greet("Hulk");
// 반환타입 표기
// 변수의 타입 표기와 마찬가지로, 반환 타입은 표기하지 않아도 되는 것이 일반적입니다.
function getFavoriteNumber() {
    return 26;
}
// Functions which return Promis
// async function getFavoriteFruit(): Promise<string> {
//     return "apple" ;
// }
// 익명함수
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toLowerCase());
});
names.forEach(s => {
    console.log(s.toUpperCase());
});
// 객체 타입
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 37.5, y: 127.5 });
// 옵셔널 프로퍼티
// 객체 타입은 일부 또는 모든 프로퍼티의 타입을 선택적인 타입, 즉 옵셔널로 지정할 수 있습니다.
// 프로퍼티 이름 뒤에 ?를 붙이면 됩니다.
function printName(obj) {
    if (obj.middle !== undefined) {
        console.log(obj.middle.toUpperCase());
    }
}
// 둘다 OK
printName({ first: "Jone", last: "Kenedy" });
printName({ first: "Jone", middle: "F", last: "kenedy" });
/**
 * Union Types
 * @param id number | string
 */
function printId(id) {
    if (typeof id === "string") {
        console.log("Your ID is: " + id.toUpperCase());
    }
    else {
        console.log("Your ID is: " + id);
    }
    // string | number라는 유니언 타입의 경우, string 타입에만 유효한 메서드는 사용할 수 없습니다.
    // console.log(id.toUpperCase())
}
printId("12345");
printId(12345);
function welcomePeople(param) {
    if (Array.isArray(param)) {
        console.log("Hello " + param.join(" and "));
    }
    else {
        console.log("Hello " + param);
    }
}
welcomePeople(["Thor", "Hulk", "Captain"]);
function getFirstThree(param) {
    return param.slice(0, 3);
}
console.log(getFirstThree("hello world"));
function printCoordination(pt) {
    console.log("The coordination's x value is: " + pt.x);
    console.log("The coordination's x value is: " + pt.x);
}
printCoordination({ x: 35.5, y: 127.5 });
/**
 * 인터페이스
 * 인터페이스 선언은 객체 타입을 만드는 또 따른 방법입니다.
 */
const useInterface = () => {
    function printCoordination(pt) {
        console.log("The coordination's x value is: " + pt.x);
        console.log("The coordination's y value is: " + pt.y);
    }
    printCoordination({ x: 35.5, y: 127.5 });
    const extendsInterface = () => {
        const bear = { name: "Thor", honey: true };
        bear.name;
        bear.honey;
    };
    const extendsType = () => {
        const bear = { name: "Tazan", honey: false };
    };
};
/**
 * Type Assertions
 * Sometimes you will have information about the type of a value that TypeScript can’t know about.
 * you can use a type assertion to specify a more specific type:
 */
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//
// const yourCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
/**
 * Literal Types
 */
let changingString = "Hello world";
changingString = "Ola Mundo";
changingString; //let changingString: string
const constantString = "Hello world";
constantString; //const constantString: "Hello world"
// 리터럴 타입은 그 자체만으로는 그다지 유의미하지 않습니다.
let x = "hello";
x = "hello";
// TS2322: Type "hwody" is not assignable to type "hello"
//x = "hwody";
// 리터럴을 유니언과 함께 사용하면, 보다 유용한 개념들을 표현할 수 있게 됩니다. 예를 들어,
// 특정 종류의 값들만을 인자로 받을 수 있는 함수를 정의하는 경우가 있습니다.
function printText(s, alignment) {
    //...
}
printText("Hello world", "left");
// 숫자 리터럴 타입 또한 같은 방식으로 사용할 수 있습니다.
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("Hulk", "Thor"));
function configure(x) {
    //...
}
configure({ width: 100 });
configure("auto");
// as const를 사용하여 객체 전체를 리터럴 타입으로 변환할 수 있습니다.
const req = { url: "https://example.com", method: "GET" };
console.log(req.method);
/**
 * null과 undefined
 */
function doSomething(x) {
    // TS18048: x is possibly undefined
    // console.log(x.toUpperCase());
    if (typeof x === "undefined") {
        //...
    }
    else {
        console.log(x.toUpperCase());
    }
}
// TypeScript에서는 명시적인 검사를 하지 않고도 타입에서 null과 undefined를 제거할 수 있는 특별한 구문을 제공합니다.
// 표현식 뒤에 !를 작성하면 해당 값이 null 또는 undefined가 아니라고 타입 단언하는 것입니다
function liveDangerously(x) {
    //! 연산자는 반드시 해당 값이 null 또는 undefined가 아닌 경우에만 사용해야 합니다.
    console.log(x.toFixed());
}
liveDangerously(); //파라미터 없이 호출 가능하며 호출 시 런타임 오류 발생함
/**
 * 열거형
 */
// 자주 사용되지 않는 원시형 타입
// ES2020 이후, 아주 큰 정수를 다루기 위한 원시 타입이 JavaScript에 추가되었습니다. 바로 bigint입니다.
const oneHundred = BigInt(100);
const anotherHundred = 100n;
