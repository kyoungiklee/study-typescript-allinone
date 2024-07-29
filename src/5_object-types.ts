
interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name: string;
//     age: number;
// }

function greet(person: Person) {
    return ("Hello, " + person.name);
}

const result = greet({name: "Thor", age: 1000});
console.log(result);


/**
 * Property Modifiers
 */

/*Optional Properties*/
import {Square, Circle, Triangle, Shape} from "./3_narrowing";

interface PaintOptions{
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape({shape, xPos = 0, yPos = 0}: PaintOptions) {
    console.log("x coordination at ", xPos);
    console.log("y coordination at ", yPos);
}



function getShape()  {

    const square:Square = {kind: "square", sideLength: 10}
    const circle: Circle = {kind: "circle", radius: 10}
    const triangle: Triangle = {kind: "triangle", base: 10, height: 10}

    const value = Math.random();
    if(value < 0.3)
        return square;
    if (value < 0.6)
        return circle
    return triangle;
}

const shape = getShape();
paintShape({shape});
paintShape({shape, xPos: 100})
paintShape({shape, yPos: 100})
paintShape({shape, xPos: 100, yPos: 100})

/*readOnly Property*/
interface SomeType {
    readonly prop: string;
}

function doSomething(obj: SomeType) {
    console.log(`prop has the value ${obj.prop}`);

    // TS2540: Cannot assign to prop because it is a read-only property.
    // obj.prop = "hello";
}


interface Home {
    readonly resident: { name: string; age: number; };
}

function visitForBirthday(home: Home) {
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}

function evict(home: Home) {
    // TS2540: Cannot assign to resident because it is a read-only property.
}    // home.resident = {
//     name: "Victor the Evictor",
//     age: 42,
// }


interface Person {
    name: string;
    age: number;
}

interface ReadOnlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person Mcpersonface",
    age: 42,
}

let readOnlyPerson: ReadOnlyPerson = writablePerson;
console.log(readOnlyPerson.age);
writablePerson.age++;
console.log(readOnlyPerson.age);

/*Indexing Signatures */
const indexingSignatures = () => {

    interface StringArray {
        [index: number]: string
    }

    const myArray: StringArray = {1: "Thor", 2: "Captain", 3: "Hulk"}
    const secondId = myArray[1];



    interface NumberDictionary{
        [index: number]: string;
        length: number;
        name: string;
    }
    const numberDictionary: NumberDictionary = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        name: "Thor",
        length: 120,
    }

    const myNumberId = numberDictionary[4];
    console.log(myNumberId);

    // .entry()로 반복하기
    const tag = "indexing_signatures";
    interface User {
        [index: number]: number;
        name: string;
        age: number;
    }

    let user: User = {
        name: "Hulk",
        age: 42,
    };

    // 객체의 키값 순회하기
    for (const userKey in user) {
        console.log(tag, userKey, user[userKey]);
    }
    //Object.entiries() 사용
    for (const [key, value] of Object.entries(user)) {
        console.log(tag, `${key}:${value}`);
    }

}
indexingSignatures();

/**
 * Excess Property Checks
 */
const excess_property_check = () => {

    interface SquareConfig{
        width?: number;
        color?: string;
    }

    function createSquare(config: SquareConfig) {
        return {
            color: config.color || "red",
            area: config.width ? config.width * config.width : 20,

        }
    }

    // TS2561: Object literal may only specify known properties,
    // but colour does not exist in type SquareConfig. Did you mean to write color?
    let mySquare = createSquare({colour: "red", width: 100} as SquareConfig)

    console.log(mySquare.color);

    // One final way to get around these checks, which might be a bit surprising,
    // is to assign the object to another variable: Since assigning squareOptions won’t
    // undergo excess property checks, the compiler won’t give you an error:
    let squareOptions = { colour: "red", width: 100}
    createSquare(squareOptions);
}

const have_any_number_of_properties = () => {

    // If SquareConfig can have color and width properties with the above types,
    // but could also have any number of other properties, then we could define it like so:

    interface SquareConfig{
        width?: number;
        color?: string;
        [props: string]: any;
    }

    function createSquare(config: SquareConfig) {
        return {
            color: config.color,
            area: config.width ? config.width * config.width : 20,

        }
    }
    let squareOptions: SquareConfig = {colour: "red", width: 100}
    createSquare(squareOptions);

    let circleOptions ={colour: "blue"}
    let myCircle = createSquare(circleOptions);
}
/**
 * Extending Types
 */
const extending_types = () => {
    interface BasicAddress {
        name?: string,
        street: string,
        city: string,
        country: string,
        postalCode: string,
    }

    // interface AddressWithUnit {
    //     name?: string,
    //     unit: string,
    //     street: string,
    //     city: string,
    //     country: string,
    //     postalCode: string,
    //
    // }

    interface AddressWithUnit extends BasicAddress {
        unit: string
    }

    // interfaces can also extend from multiple types.
    interface Colorful {
        color: string;
    }

    interface Circle {
        radius: number;
    }

    interface ColorfulCircle extends Colorful, Circle {

    }

    const cc: ColorfulCircle = {color: "red", radius: 10}


};

/**
 * Intersection Types
 */

const intersection_types = () => {

    interface Colorful {
        color: string
    }

    interface Circle {
        radius: number
    }

    type ColorfulCircle = Colorful & Circle

    function draw(circle: ColorfulCircle) {
        console.log(`color was ${circle.color}`)
        console.log(`radius was ${circle.radius}`)
    }

    //OK
    draw({color: "red", radius: 20})

}

/**
 * Interfaces vs. Intersections
 */

// the following code will throw an error because the properties are incompatible:

interface Person {
    name: string
}
// TS2717: Subsequent property declarations must have the same type.
// Property name must be of type string, but here has type number
// interface Person {
//     name: number
// }

interface Person1 {
    name: string;
}

interface Person2 {
    name: number;
}

type Staff = Person1 & Person2

// declare const staffer: Staff;
// staffer.name;

/**
 * Generic Object Types
 */

interface Box {
    contents: unknown;
}

let box: Box = {
    contents: "hello world",
};

if (typeof box.contents === "string") {
    console.log(box.contents.toUpperCase());
}

// or we could use a type assertion
console.log((box.contents as string).toUpperCase());

// One type safe approach would be to instead scaffold out different Box types for every type of contents.

interface NumberBox {
    contents: number;
}

interface StringBox {
    contents: string
}

interface BooleanBox {
    contents: boolean
}


function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: any, newContents: any) {
   box.contents = newContents;
}

const generic = () => {
    interface Box<T> {
        contents: T;
    }

    let box: Box<string>;

    interface StringBox {
        contents: string
    }

    let boxA: Box<string> = {contents: "hello"}
    boxA.contents

    let boxB: StringBox = {contents: "world"}
    boxB.contents

    function setContents<T>(box: Box<T>, newContents: T) {
        return box.contents = newContents
    }

    const result = setContents<string>(boxB, "world");
    console.log(result);
}
generic();

type OrNull<T> = T | null;

type OneOrMany<T> = T | T[];

type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>;

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

/**
 * The Array Type
 */
const the_array_type = () => {

    function doSomething(values: Array<string>) {
        //...
    }

    let myArray: string[] = ["hello", "world"];

    doSomething(myArray);
    doSomething(new Array("hello", "world"));
}
the_array_type();

/**
 * The ReadonlyArray Type
 */
const the_readonlyarray_type = () => {

    function doStuff(values: ReadonlyArray<string>) {
        // We can read from 'values'....
        const copy = values.slice();
        // But we can't mutate 'values'.
        // values.push("hello");
    }

    // ReadonryArry
    const roArray: ReadonlyArray<string> = ["red", "blue", "green"]

}

/**
 * Tuple Types
 */

const tuple_types = () => {
    type StringNumberPair = [string, number];

    function doSomething(pair: [string, number]) {
        const a = pair[0];
        const b = pair[1]
    }

    doSomething(["Hulk", 42]);

    // We can also destructure tuples using JavaScript’s array destructuring.
    const destructure_tuple = (stringHash: [string, number]) => {
        const [inputString, hash] = stringHash;
        console.log(inputString); //const inputString: string
        console.log(hash); //const hash: number

    };

    const version_of_array = () => {
        interface StringNumberPair {
            length: 2;
            0: string;
            1: number;
        }

    }

    //Tuples can also have rest elements, which have to be an array/tuple type.
    type StringNumberBooleans = [string, number, ...boolean[]];

    const a: StringNumberBooleans = ["hello", 1];
    const b: StringNumberBooleans = ["beautiful", 2, true];
    const c: StringNumberBooleans = ["world", 3, true, true, false, true];
    console.log(c[4])

    function doRestElement(word: StringNumberBooleans) {
        console.log(word[0]);
        console.log(word[1]);
        console.log(word[2]);
    }

    doRestElement(c);
}
tuple_types();



