var a = '5';
var b = 5;
var c = true;
var d = undefined;
var e = null;
var f = true;
var first = function () {
    function sum(x, y) {
        return x + y;
    }
    var add = function (x, y) { return x + y; };
};
var second = function () {
    var add = function (x, y) { return x + y; };
};
var third = function () {
    // 객체 변수 타이핑
    var obj = { lat: 37.5, lon: 127.5 };
    //배열 변수 타이핑
    var arr1 = ['123', '456'];
    var arr2 = [123, 456];
    //튜플 변수 타이핑
    var arr3 = [123, 456, '123'];
};
var forth = function () {
    try {
        var array = [];
        array.push("hello");
    }
    catch (e) {
    }
};
var fifth = function () {
    var head = document.querySelector('#head');
    if (head) {
        head.innerHTML = "hello";
    }
};
var sixth = function () {
    var a = "haven";
    var b = "hello ".concat(a);
    console.log(b);
    var hello = 'hello haven';
};
sixth();
var seventh = function () {
    var arr1 = [];
    var arr2 = [];
    function rest() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
    }
    rest("1", "2", "3");
};
seventh();
var eighth = function () {
    var EDirection;
    (function (EDirection) {
        EDirection["Up"] = "up";
        EDirection["Down"] = "down";
        EDirection["Left"] = "left";
        EDirection["Right"] = "Right";
    })(EDirection || (EDirection = {}));
    var ODirection = {
        Up: "up",
        Down: "down",
        Left: "left",
        Right: "right",
    };
    // Using the enum as a parameter
    // enum은 직접 쓸수 있다
    function walk(dir) {
        return dir;
    }
    console.log(walk(EDirection.Up));
    console.log(walk(EDirection.Left));
    function run(dir) {
    }
    run(ODirection.Down);
    var obj = { a: '123', b: "hello", c: "world" };
    //typeof 사용 예시
    function logMessage(text) {
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
};
eighth();
var ninth = function () {
    var tag = "ninth: ";
    var a = { a: "hello" };
    var b = { b: "world" };
    console.log(tag, a);
    console.log(tag, b);
};
ninth();
// "|", "&" 사용법
var tenth = function () {
    var tag = "tenth: ";
    // TS2322: Type { a: string; } is not assignable to type B
    // Property b is missing in type { a: string; } but required in type { b: strin
    // const b: B = {a: "hello"}
    var b = { a: "hello", b: "world" };
    var c = { a: "hello" };
    var d = { b: "world" };
    var e = { a: "hello", b: "world" };
    var human = { move: true, cry: true, think: true };
    var refrigerator = { id: 1234, price: 300000, name: "냉장고", volt: "220v" };
    // TS2451: Cannot redeclare block-scoped variable d
    var f = { talk: function () { console.log("Hello"); }, shit: function () { }, eat: function () { }, sleep: function () { } };
};
tenth();
var eleventh = function () {
    var a = { name: "hello" };
    var ab = { name: "hello", age: 12 };
    // TS2322: Type AB is not assignable to type A
    // Property name is missing in type B but required in type A
    //a = ab;v // 대입 불가능
    ab = a; // 대입가능
    var c = { name: "hello", age: 12 };
    // TS2353: Object literal may only specify known properties, and married does not exist in type C
    // c = {name: "world", age: 14, married: true};
    var obj = { name: "world", age: 14, married: true };
    c = obj;
};
var twelve = function () {
    function a() {
        // TS2322: Type number is not assignable to type void
        // return 3;
        // return null;
        // 가능
        // return undefined;
        return;
    }
    a();
    // 콜백함수의 void의 경우 return 사용이 가능(여기서의 void는 return값이 없다는 의미)
    function b(callback) {
        return;
    }
    b(function () {
        return false;
    });
    var human = {
        talk: function () {
            return "hello"; // 리턴겂이 있더라도 타입의 리턴값을 void로 정의하였으므 return값이 void가 됨
        }
    };
    var result = human.talk(); // result는 void 임
};
var thirteen = function () {
    var target;
    forEach([1, 2, 3], function (e1) { return target.push(e1); });
    forEach([1, 2, 3], function (e1) { target.push(e1); });
};
var fourteen = function () {
    var tag = "fourteen: ";
    var a = {
        talk: function () {
            return 3;
        }
    };
    var b = a.talk();
    console.log(tag, b);
    // (b as A).talk();
    function c() {
        return undefined;
        // return null;
    }
};
fourteen();
var fifteen = function () {
    function numOrStr(a) {
        a.toFixed(); // 사용하지 않는 것을 좋음
        // if (typeof a === "string") {
        //     a.split("");
        // }else {
        //     a.toFixed(1);
        // }
    }
    numOrStr('123');
    numOrStr(1);
    function numOrNumArray(a) {
        if (Array.isArray(a)) {
            // array
        }
        else {
            // number
        }
    }
    numOrNumArray(123);
    numOrNumArray([1, 2, 3]);
    var A = /** @class */ (function () {
        function A() {
        }
        A.prototype.aaa = function () {
        };
        return A;
    }());
    var B = /** @class */ (function () {
        function B() {
        }
        B.prototype.bbb = function () {
        };
        return B;
    }());
    function aOrb(param) {
        if (param instanceof A) {
            // class A
        }
        else {
            // class B
        }
    }
    aOrb(new A);
    function typeCheckA(a) {
        if (a.type === "c") {
            // type C
        }
        else if (a.type === "d") {
            // type D
        }
        else {
            // type E
        }
    }
    function typeCheckB(a) {
        if ("ccc" in a) {
            a.ccc = "ccc";
        }
        else if ("ddd" in a) {
            a.ddd = "ddd";
        }
        else {
            a.eee = "eee";
        }
    }
};
var sixteen = function () {
    // 커스텀 타입가드 example 1
    function isDog(value) {
        if (value.meow)
            return false;
        return true;
    }
    function pet(value) {
        if (isDog(value)) {
            value.bow = "Bow! Bow";
        }
        else {
            value.meow = "meow~~ meow~~";
        }
    }
    function typeCheck1(value) {
        if ("skill" in value) {
            console.log(value);
        }
        else {
            console.log(value);
        }
    }
    var developer = { name: "Tony", skill: "react" };
    typeCheck1(developer);
    function isDeveloper(value) {
        return value.skill !== undefined;
    }
    function typeCheck2(value) {
        function doSomething(str) {
            console.log(str, "...do something else");
        }
        if (isDeveloper(value)) {
            doSomething("developer");
            console.log(value);
        }
        else
            console.log(value);
    }
    var person = { name: "Hulk", age: 25 };
    typeCheck2(person);
};
sixteen();
var seventeen = function () {
    var a = { a: "hello", b: "world" };
    // TS2540: Cannot assign to a because it is a read-only propert
    // a.a = "work";
};
var eighteen = function () {
};
var nineteen = function () {
};
var twenty = function () {
};
