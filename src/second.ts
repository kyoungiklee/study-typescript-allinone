

const seventeen = () => {

    interface A {
        readonly a: string;
        b: string
    }

    const a : A = {a: "hello", b: "world"}
    // TS2540: Cannot assign to a because it is a read-only propert
    // a.a = "work";

    // 인덱스 시그니쳐
    type AllString = { a: string, b: string, c: string, d:string}
    type AllString2 = { [key: string]: string; };

    const allString2: AllString2 = { a: "Hulk", b: "Thor", c: "captain", d: "IronMan"}

    type AllNumber = { [key: string]: number; };
    const allNumber: AllNumber = {a: 1, b: 2, c: 3}

    // key가 정의된 값 중에 하나였으면 좋겠을 때 사용
    type Keys = "Animal" | "Mammal" | "Human";
    type Items = { [key in Keys]: number };

    const keysItem: Items = { Animal: 1, Mammal: 2, Human: 3}

    // 맵드 타입스
    type ItemNew = { [key in Keys]: Keys };
    const itemNew: ItemNew = {Human: "Human", Mammal: "Mammal", Animal: "Animal"}

}

// 클래스의 새로운 기능들
const eighteen = () => {
    class A {
        name: string;
        age: number | undefined;
        constructor(name: string, age: number = 0) {
            this.name = name;
            this.age = age;
        }

        method() {

        }
    }

    const a = new A("Thor", 2000);

    interface B {
        readonly name: string;
        age: number;
    }

    class C {
        private readonly name: string;
        protected age: number;
        address: string

        constructor(name: string, age: number, address: string = "") {
            this.name = name;
            this.age = age;
            this.address = address
        }

        private method() {
            console.log(this.name);
            console.log(this.age);
            console.log(this.address);
        }

    }

    class D extends C {
        anotherMethod() {
            // TS2341: Property name is private and only accessible within class C
            // console.log(this.name);
            console.log(this.age);
            console.log(this.address);
        }
    }

    console.log(new C("Hulk", 30, "Seoul").address);
    // TS2341: Property name is private and only accessible within class C
    // console.log(new C("Hulk", 30, "Seoul").name);


};

// 제네릭 사용법
const nineteen = () => {
    const tag = "nineteen: "
    function getItem(id: number, name?: string, price?: number) {
        console.log(tag, id, name, price, "검색 중...");
    }

    getItem(12345);
    getItem(12345, "cloth");
    getItem(12345, "cloth", 2000);

    let obj: {id:number, name?: string, price?: number;} = {id: 12345, name:"cloth"}
    obj = {id: 67890}

    // 잘못된 사용법
    // function sum(x: string | number, y: string | number): string | number {
    //     return x + y;
    // }

    function add<T> (x:T, y:T): T {
        return x;
    }

    const result = add<number>(1, 2);





}
nineteen();

const twenty = () => {

}