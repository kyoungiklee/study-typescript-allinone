const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: true = true;


const first = () => {

    function sum(x:number, y:number): number {
        return x + y;
    }

    type Add = (x: number, y: number) => number;
    const add: Add  = (x, y) => x + y;
}


const second = () => {
    interface Add {
        (x: number, y:number): number
    }

    const add: Add = (x, y) => x + y;
}

const third = () => {
    // 객체 변수 타이핑
    const obj: {lat: number; lon: number} = {lat: 37.5, lon: 127.5}
    //배열 변수 타이핑
    const arr1: string[] = ['123', '456'];
    const arr2: Array<number> = [123, 456];
    //튜플 변수 타이핑
    const arr3: [number, number, string] = [123, 456, '123'];

}

const forth = () => {

    try {
        const array: string[] = [];
        array.push("hello");
    } catch (e) {

    }
}

const fifth = () => {
    const head: Element = document.querySelector('#head') as HTMLElement;
    if(head) {
        head.innerHTML = "hello"
    }
}

const sixth = () => {
    type World = "haven" | "hell";

    const a: World = "haven";
    const b = `hello ${a}`;

    console.log(b);

    type Greeting = `hello ${World}`;
    const hello: Greeting = 'hello haven';

}

sixth();


const seventh = () => {
    let arr1: string[] = [];
    let arr2: Array<string> = [];

    function rest (...args: string[]) {
        console.log(args);
    }

    rest("1", "2", "3");
}

seventh();

const eighth = () => {
    enum EDirection {
        Up ="up",
        Down = "down",
        Left = "left",
        Right = "Right",
    }



    const ODirection = {
        Up: "up",
        Down: "down",
        Left: "left",
        Right: "right",
    }

    // Using the enum as a parameter
    // enum은 직접 쓸수 있다
    function walk(dir: EDirection) {
        return dir;

    }
    console.log(walk(EDirection.Up));
    console.log(walk(EDirection.Left));

    type Direction = typeof ODirection[keyof typeof ODirection];

    function run(dir: Direction) {

    }

    run(ODirection.Down);

    //typeof 사용 예시

    type Point = { x: number; y: number };
    type P = keyof Point;

    type Arrayish = { [n: number]: unknown };
    type A = keyof Arrayish;

    type Mapish = { [k: string]: boolean };
    type M = keyof Mapish;

    const obj = {a: '123', b:"hello", c: "world"} as const
    type Key = typeof obj[keyof typeof obj];

    //typeof 사용 예시
    function logMessage(text: string | number) {
        if (typeof text === "string") {
            console.log(text);
        }
        if (typeof text === "number") {
            console.log(text);
        }
    }

    logMessage("hello");
    logMessage(123);
    // logMessage(true);

}
eighth();

const ninth = () => {
    const tag = "ninth: "
    type A = { a: string; };
    const a: A = {a: "hello"}

    const b: B = {b: "world"}
    interface B {
        b: string;
    }
    console.log(tag, a);
    console.log(tag, b);
};
ninth();

// "|", "&" 사용법
const tenth = () => {
    const tag = "tenth: "
    // TS2365: Operator + cannot be applied to types string | number and string | number
    // function add(x:string | number, y: string | number): string | number { return x + y}

    type A = { a: string & number}; // a: never
    // TS2322: Type string is not assignable to type never
    // const a: A = { a: "hi"}

    type B = {a: string} & {b: string};
    // TS2322: Type { a: string; } is not assignable to type B
    // Property b is missing in type { a: string; } but required in type { b: strin
    // const b: B = {a: "hello"}
    const b: B = {a: "hello", b: "world"}

    type C = {a: string} | {b: string}
    const c:C = {a: "hello"}
    const d:C = {b: "world"}
    const e:C = {a: "hello", b: "world"}

    type Animal = { move: boolean; };
    type Mammal = {cry: boolean} & Animal;
    type Primate = {think: boolean} & Mammal

    const human: Primate = {move: true, cry: true, think: true}

    // interface 에서 type도 확장할 수 있다.
    interface Product { id: number, price: number, name: string }
    interface Electric extends Product {volt: string}

    const refrigerator: Electric = {id: 1234, price: 300000, name: "냉장고", volt: "220v"}

    interface D {
        talk: () => void;
    }

    interface D {
        eat: () => void;
    }

    interface D {
        shit: () => void
    }
    // TS2451: Cannot redeclare block-scoped variable d
    const f: D = {talk() {console.log("Hello")}, shit() {}, eat() {}, sleep() {}}

    // 추가 확장
    interface D {
        sleep: () => void
    }


}
tenth();

const eleventh = () => {
    type A = { name: string; };
    type B = { age: number; };

    type AB = A | B
    type C = A & B

    let a:A = {name: "hello"}
    let ab: AB = {name: "hello", age: 12}
    // TS2322: Type AB is not assignable to type A
    // Property name is missing in type B but required in type A
    //a = ab;v // 대입 불가능

    ab = a; // 대입가능

    let c: C = {name: "hello", age: 12}
    // TS2353: Object literal may only specify known properties, and married does not exist in type C
    // c = {name: "world", age: 14, married: true};

    const obj = {name: "world", age: 14, married: true};
    c = obj;
};


const twelve = () => {
    function a() : void  {
        // TS2322: Type number is not assignable to type void
        // return 3;
        // return null;
        // 가능
        // return undefined;
        return;
    }

    a();

    // 콜백함수의 void의 경우 return 사용이 가능(여기서의 void는 return값이 없다는 의미)
    function b(callback: () => void)  {
        return;
    }

    b(() => {
        return false;
    })

    // 인터페이스 void의 경우 return 사용이 가능(여기서의 void는 return값이 없다는 의미)
    interface Human {
        talk: () => void;
    }

    const human: Human = {
        talk() {
            return "hello"; // 리턴겂이 있더라도 타입의 리턴값을 void로 정의하였으므 return값이 void가 됨
        }
    }
    const result = human.talk(); // result는 void 임
}


declare function forEach(arr: number[], callback: (item: number) => void): void;
const thirteen = () => {
    let target:number[];
    forEach([1, 2, 3], e1 => target.push(e1) )
    forEach([1, 2, 3], e1 => {target.push(e1)} )

}

const fourteen = () => {
    const tag = "fourteen: ";

    interface A {
        talk: () => number
    }

    const a: A = {
        talk() {
            return 3;
        }
    }

    const b: unknown = a.talk();
    console.log(tag, b);
    // (b as A).talk();

    function c(): void {
        return undefined;
        // return null;
    }

}
fourteen();

const fifteen = () => {
    function numOrStr(a: number | string) {
        (a as number).toFixed(); // 사용하지 않는 것을 좋음
        // if (typeof a === "string") {
        //     a.split("");
        // }else {
        //     a.toFixed(1);
        // }
    }

    numOrStr('123');
    numOrStr(1);

    function numOrNumArray(a: number | number[]) {
        if (Array.isArray(a)) {
            // array

        } else {
            // number
        }
    }

    numOrNumArray(123);
    numOrNumArray([1, 2, 3]);

    class A {
        aaa() {
        }
    }

    class B {
        bbb() {

        }
    }
    function aOrb(param: A | B) {
        if (param instanceof A) {
            // class A
        } else {
            // class B
        }

    }
    aOrb(new A);

    type C = { type: "c", ccc: string; };
    type D = { type: "d", ddd: string; };
    type E = { type: "e", eee: string; };

    function typeCheckA(a: C | D | E) {
        if(a.type === "c") {
            // type C
        } else if (a.type === "d") {
            // type D
        } else {
            // type E
        }
    }

    function typeCheckB(a: C | D | E) {
        if("ccc" in a) {
            a.ccc = "ccc"
        } else if ("ddd" in a) {
            a.ddd = "ddd"
        } else {
            a.eee = "eee"
        }
    }
}

const sixteen = () => {

    interface Cat {
        meow: string
    }

    interface Dog {
        bow: string
    }

    // 커스텀 타입가드 example 1
    function isDog(value: Dog | Cat): value is Dog {
        if( (value as Cat).meow) return false;
        return true;
    }

    function pet(value: Dog | Cat) {
        if(isDog(value)) {
            value.bow = "Bow! Bow";
        }else {
            value.meow = "meow~~ meow~~";
        }
    }
    // 커스텀 타입가드 example 2
    interface Person {
        name: string;
        age: number;
    }

    interface Developer {
        name: string;
        skill: string;
    }

    function typeCheck1(value: Person | Developer) {
        if ("skill" in value) {
            console.log(value);
        } else {
            console.log(value);
        }
    }

    const developer: Developer = {name: "Tony", skill: "react"}
    typeCheck1(developer);

    function isDeveloper(value: Person | Developer): value is Developer {
        return (value as Developer).skill !== undefined
    }

    function typeCheck2(value: Person | Developer) {
        function doSomething(str: string) {
            console.log(str,"...do something else")
        }

        if (isDeveloper(value)) {
            doSomething("developer");
            console.log(value);
        } else console.log(value);

    }
    const person:Person = {name: "Hulk", age: 25}

    typeCheck2(person);


}

sixteen();

