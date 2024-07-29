var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var seventeen = function () {
    var a = { a: "hello", b: "world" };
    var allString2 = { a: "Hulk", b: "Thor", c: "captain", d: "IronMan" };
    var allNumber = { a: 1, b: 2, c: 3 };
    var keysItem = { Animal: 1, Mammal: 2, Human: 3 };
    var itemNew = { Human: "Human", Mammal: "Mammal", Animal: "Animal" };
};
// 클래스의 새로운 기능들
var eighteen = function () {
    var A = /** @class */ (function () {
        function A(name, age) {
            if (age === void 0) { age = 0; }
            this.name = name;
            this.age = age;
        }
        A.prototype.method = function () {
        };
        return A;
    }());
    var a = new A("Thor", 2000);
    var C = /** @class */ (function () {
        function C(name, age, address) {
            if (address === void 0) { address = ""; }
            this.name = name;
            this.age = age;
            this.address = address;
        }
        C.prototype.method = function () {
            console.log(this.name);
            console.log(this.age);
            console.log(this.address);
        };
        return C;
    }());
    var D = /** @class */ (function (_super) {
        __extends(D, _super);
        function D() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        D.prototype.anotherMethod = function () {
            //TS2341: Property name is private and only accessible within class C
            // console.log(this.name);
            console.log(this.age);
            console.log(this.address);
        };
        return D;
    }(C));
    console.log(new C("Hulk", 30, "Seoul").address);
    // TS2341: Property name is private and only accessible within class C
    // console.log(new C("Hulk", 30, "Seoul").name);
};
var nineteen = function () {
    var tag = "nineteen: ";
    function getItem(id, name, price) {
        console.log(tag, id, name, price, "검색 중...");
    }
    getItem(12345);
};
nineteen();
var twenty = function () {
};
