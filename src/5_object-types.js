"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Person = {
//     name: string;
//     age: number;
// }
function greet(person) {
    return ("Hello, " + person.name);
}
var result = greet({ name: "Thor", age: 1000 });
console.log(result);
function paintShape(_a) {
    var shape = _a.shape, _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    console.log("x coordination at ", xPos);
    console.log("y coordination at ", yPos);
}
function getShape() {
    var square = { kind: "square", sideLength: 10 };
    var circle = { kind: "circle", radius: 10 };
    var triangle = { kind: "triangle", base: 10, height: 10 };
    var value = Math.random();
    if (value < 0.3)
        return square;
    if (value < 0.6)
        return circle;
    return triangle;
}
var shape = getShape();
paintShape({ shape: shape });
paintShape({ shape: shape, xPos: 100 });
paintShape({ shape: shape, yPos: 100 });
paintShape({ shape: shape, xPos: 100, yPos: 100 });
function doSomething(obj) {
    console.log("prop has the value ".concat(obj.prop));
    // TS2540: Cannot assign to prop because it is a read-only property.
    // obj.prop = "hello";
}
function visitForBirthday(home) {
    console.log("Happy birthday ".concat(home.resident.name, "!"));
    home.resident.age++;
}
function evict(home) {
    // TS2540: Cannot assign to resident because it is a read-only property.
} // home.resident = {
var writablePerson = {
    name: "Person Mcpersonface",
    age: 42,
};
var readOnlyPerson = writablePerson;
console.log(readOnlyPerson.age);
writablePerson.age++;
console.log(readOnlyPerson.age);
/*Indexing Signatures */
var indexingSignatures = function () {
    var myArray = { 1: "Thor", 2: "Captain", 3: "Hulk" };
    var secondId = myArray[1];
};
var numberDictionary = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    name: "Thor",
    length: 120,
};
var myNumberId = numberDictionary[4];
console.log(myNumberId);
/**
 * Excess Property Checks
 */
var excess_property_check = function () {
    function createSquare(config) {
        return {
            color: config.color || "red",
            area: config.width ? config.width * config.width : 20,
        };
    }
    // TS2561: Object literal may only specify known properties,
    // but colour does not exist in type SquareConfig. Did you mean to write color?
    var mySquare = createSquare({ colour: "red", width: 100 });
    console.log(mySquare.color);
    // One final way to get around these checks, which might be a bit surprising,
    // is to assign the object to another variable: Since assigning squareOptions won’t
    // undergo excess property checks, the compiler won’t give you an error:
    var squareOptions = { colour: "red", width: 100 };
    createSquare(squareOptions);
};
var have_any_number_of_properties = function () {
    // If SquareConfig can have color and width properties with the above types,
    // but could also have any number of other properties, then we could define it like so:
    function createSquare(config) {
        return {
            color: config.color,
            area: config.width ? config.width * config.width : 20,
        };
    }
    var squareOptions = { colour: "red", width: 100 };
    createSquare(squareOptions);
    var circleOptions = { colour: "blue" };
    var myCircle = createSquare(circleOptions);
};
/**
 * Extending Types
 */
var extending_types = function () {
    var cc = { color: "red", radius: 10 };
};
/**
 * Intersection Types
 */
var intersection_types = function () {
    function draw(circle) {
        console.log("color was ".concat(circle.color));
        console.log("radius was ".concat(circle.radius));
    }
    //OK
    draw({ color: "red", radius: 20 });
};
var box = {
    contents: "hello world",
};
if (typeof box.contents === "string") {
    console.log(box.contents.toUpperCase());
}
// or we could use a type assertion
console.log(box.contents.toUpperCase());
function setContents(box, newContents) {
    box.contents = newContents;
}
var generic = function () {
    var box;
    var boxA = { contents: "hello" };
    boxA.contents;
    var boxB = { contents: "world" };
    boxB.contents;
    function setContents(box, newContents) {
        return box.contents = newContents;
    }
    var result = setContents(boxB, "world");
    console.log(result);
};
generic();
/**
 * The Array Type
 */
var the_array_type = function () {
    function doSomething(values) {
        //...
    }
    var myArray = ["hello", "world"];
    doSomething(myArray);
    doSomething(new Array("hello", "world"));
};
the_array_type();
/**
 * The ReadonlyArray Type
 */
var the_readonlyarray_type = function () {
    function doStuff(values) {
        // We can read from 'values'....
        var copy = values.slice();
        // But we can't mutate 'values'.
        // values.push("hello");
    }
    // ReadonryArry
    var roArray = ["red", "blue", "green"];
};
/**
 * Tuple Types
 */
var tuple_types = function () {
    function doSomething(pair) {
        var a = pair[0];
        var b = pair[1];
    }
    doSomething(["Hulk", 42]);
    // We can also destructure tuples using JavaScript’s array destructuring.
    var destructure_tuple = function (stringHash) {
        var inputString = stringHash[0], hash = stringHash[1];
        console.log(inputString); //const inputString: string
        console.log(hash); //const hash: number
    };
    var version_of_array = function () {
    };
    var a = ["hello", 1];
    var b = ["beautiful", 2, true];
    var c = ["world", 3, true, true, false, true];
    console.log(c[4]);
    function doRestElement(word) {
        console.log(word[0]);
        console.log(word[1]);
        console.log(word[2]);
    }
    doRestElement(c);
};
tuple_types();
