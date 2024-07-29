const the_basic = () => {

    console.log("Hello world!");

    function greet(person: string, date: Date) {
        console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`)
    }

    greet("Hulk", new Date())
    // ECMAScript 2015(a.k.a. ECMAScript 6, ES2015, ES6, 등.
    // a.k.a.란 "also known as"(~로도 알려진)의 약자로, 동시에 작가 혹은 가수 등이 자신의 예명을 본명과 함께 표기할 때,
    // 혹은 예명이 두 가지 이상인 경우 비중이 덜 큰 예명을 주로 쓰는 예명과 함께 표기할 때 쓰이는 약어이다.
    let msg = "Hello World!";
}
