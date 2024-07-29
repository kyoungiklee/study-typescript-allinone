function padLeft(padding: number | string, input: string): string {
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

function printAllOne(strs: string | string[] | null) {
    //TS18047: strs is possibly null (typeof null === "object") // true
    if (Array.isArray(strs)) {
        for (const str of strs) {
            console.log(str);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}

printAllOne(null);


// 0, "", NaN, null, On, undefined : false

if (0) console.log("true");
else console.log("false");

if ("") console.log("true");
else console.log("false");

if (null) console.log("true");
else console.log("false");

if (NaN) console.log("true");
else console.log("false");

//if(0n) console.log("true");
//else console.log("false");

if (undefined) console.log("true");
else console.log("false");

function printAllTwo(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

printAllTwo(null);


function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

console.log(multiplyAll([3, 3], 2));


/**
 * Equality narrowing
 * @param x
 * @param y
 */
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
        console.log(x, y)
    } else {
        console.log(x);
        console.log(y);
    }
}

example("Thor", "Thor");

interface Container {
    value: number | null | undefined;
}

// checking whether something == null actually not only checks whether
// it is specifically the value null - it also checks whether it’s potentially undefined.
function multiplyValue(container: Container, factor: number) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
        console.log(container.value);

    }
}

multiplyValue({value: 10}, 2);

/**
 * The in operator narrowing
 */

type Fish = { swim: () => void, name: string }
type Bird = { fly: () => void, name: string }
type Human = { swim?: () => void, fly?: () => void, name: string }

function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        if (animal.swim) animal.swim();
    } else if ("fly" in animal) {
        if (animal.fly) animal.fly();
    } else {
        console.log("nothing~~~")
    }
}

const fish: Fish = {
    swim: () => {
        console.log("swim across the sea~~~")
    },
    name: "Hulk"
}
const bird: Bird = {
    fly: () => {
        console.log("fly to the sky~~~~")
    },
    name: "Thor",
}
const human: Human = {name: "Captain"};
move(fish);
move(bird);
move(human);

/**
 * instance of narrowing
 */
class Data {

    data: string;

    constructor(data: string) {
        this.data = data
    }

    method() {
        console.log(this.data);
    }
}

function logValue(x: Data | string) {
    if (x instanceof Data) {
        x.method()
    } else {
        console.log(x);
    }
}

logValue(new Data("Hello world"));


/**
 * Assignment
 */
const assignment = () => {

    let x = Math.random() > 0.5 ? 10 : "hello world";
    x = 1
    console.log(x);
    x = "goodbye!";
    console.log(x);
    // TS2322: Type boolean is not assignable to type string | number
    // x = true;
}


/**
 * Control flow analysis
 */

/**
 * Using type predicates
 */
const type_predicates = () => {

    function isFish(pet: Fish | Bird) : pet is Fish {
        return (pet as Fish).swim != undefined;
    }

    let pet: Fish | Bird = {swim: () => "swim across the sea~~~", name: "Hulk"}

    function move(pet: Bird | Fish) {
        if (isFish(pet)) {
            pet.swim();
        } else {
            pet.fly();
        }
    }


    function getSmallPet(): Bird | Fish {
        if(Math.random() > 0.5) {
            return {swim: () => console.log("swim across the sea"), name: "Thor"};
        } else {
            return {fly: () => console.log("fly to the sky"), name: "Hulk"}
        }
    }

    const zoo: (Bird | Fish)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
    const underWater1: Fish[] = zoo.filter(isFish);
    const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
    const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
        if(pet.name === "IronMan") return false
        return isFish(pet);

    })

}

/**
 * Discriminated unions
 */

export interface Circle {
    kind: "circle";
    radius: number;
}
export interface Square {
    kind: "square";
    sideLength: number;
}
export interface Triangle {
    kind: "triangle";
    base: number;
    height: number;
}

export type Shape =  Circle | Square | Triangle


function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return shape.base * shape.height / 2
        default:
            //TS2322: Type Triangle is not assignable to type never
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}