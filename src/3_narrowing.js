"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".concat(padding.toString()) + input;
    }
    return padding + input;
}
console.log(typeof null);
/**
 * Truthiness narrowing
 * @param strs
 */
function printAllOne(strs) {
    //TS18047: strs is possibly null (typeof null === "object") // true
    if (Array.isArray(strs)) {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var str = strs_1[_i];
            console.log(str);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
printAllOne(null);
// 0, "", NaN, null, On, undefined : false
if (0)
    console.log("true");
else
    console.log("false");
if ("")
    console.log("true");
else
    console.log("false");
if (null)
    console.log("true");
else
    console.log("false");
if (NaN)
    console.log("true");
else
    console.log("false");
//if(0n) console.log("true");
//else console.log("false");
if (undefined)
    console.log("true");
else
    console.log("false");
function printAllTwo(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
            var s = strs_2[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAllTwo(null);
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
console.log(multiplyAll([3, 3], 2));
/**
 * Equality narrowing
 * @param x
 * @param y
 */
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
        console.log(x, y);
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example("Thor", "Thor");
// checking whether something == null actually not only checks whether
// it is specifically the value null - it also checks whether it’s potentially undefined.
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
        console.log(container.value);
    }
}
multiplyValue({ value: 10 }, 2);
function move(animal) {
    if ("swim" in animal) {
        if (animal.swim)
            animal.swim();
    }
    else if ("fly" in animal) {
        if (animal.fly)
            animal.fly();
    }
    else {
        console.log("nothing~~~");
    }
}
var fish = {
    swim: function () {
        console.log("swim across the sea~~~");
    },
    name: "Hulk"
};
var bird = {
    fly: function () {
        console.log("fly to the sky~~~~");
    },
    name: "Thor",
};
var human = { name: "Captain" };
move(fish);
move(bird);
move(human);
/**
 * instance of narrowing
 */
var Data = /** @class */ (function () {
    function Data(data) {
        this.data = data;
    }
    Data.prototype.method = function () {
        console.log(this.data);
    };
    return Data;
}());
function logValue(x) {
    if (x instanceof Data) {
        x.method();
    }
    else {
        console.log(x);
    }
}
logValue(new Data("Hello world"));
/**
 * Assignment
 */
var assignment = function () {
    var x = Math.random() > 0.5 ? 10 : "hello world";
    x = 1;
    console.log(x);
    x = "goodbye!";
    console.log(x);
    // TS2322: Type boolean is not assignable to type string | number
    // x = true;
};
/**
 * Control flow analysis
 */
/**
 * Using type predicates
 */
var type_predicates = function () {
    function isFish(pet) {
        return pet.swim != undefined;
    }
    var pet = { swim: function () { return "swim across the sea~~~"; }, name: "Hulk" };
    function move(pet) {
        if (isFish(pet)) {
            pet.swim();
        }
        else {
            pet.fly();
        }
    }
    function getSmallPet() {
        if (Math.random() > 0.5) {
            return { swim: function () { return console.log("swim across the sea"); }, name: "Thor" };
        }
        else {
            return { fly: function () { return console.log("fly to the sky"); }, name: "Hulk" };
        }
    }
    var zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
    var underWater1 = zoo.filter(isFish);
    var underWater2 = zoo.filter(isFish);
    var underWater3 = zoo.filter(function (pet) {
        if (pet.name === "IronMan")
            return false;
        return isFish(pet);
    });
};
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "triangle":
            return shape.base * shape.height / 2;
        default:
            //TS2322: Type Triangle is not assignable to type never
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
