var num;
num = 3;
var str = String(num);
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3, '1', true];
var arr4 = [1, '1', true]; // 더 업격하게 
var str1 = 'hello'; // Tuple //수정 못한다.
var arr = [true, 2, '3']; // Tuple //수정 못한다.
var obj = { a: 'b' }; // Tuple 
var obj1 = { a: 'b' }; //오브젝트엔 이렇게 잘 안씀
var obj2 = { a: 'b', b: 3 };
obj2.a = '3';
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c;
Color[0] === 'Red';
Color['Red'] === 0;
var n1 = null;
var n2 = undefined;
// 함수를 적어주는 방법
function f(a, b) {
    return a + b;
}
// 함수에 리턴이 없을때 && return undefined 일때
function add1(a, b) {
    console.log(a, b);
}
// 고차함수 : 함수 자체를 타입으로 쓸때 (매개변수 리턴함수)
function add2(a, b) {
    return function (c) {
        return 3;
    };
}
var obj5 = {
    a: function (b, c) {
        return 'hello';
    }
};
// never 에러로 만남
// 배열을 잘못 만든 경우 
var arr6 = [];
// arr6.push(3)
// (method) Array<never>.push(...items: never[]): number
// any = javascript
// 어쩔수없는경우에만 사용할것,
var hi = [];
//d.ts
// const hello: number;
// (<string><unknown> hello).substr(1,2);
// (hello as unknown as string).substr(1,2);
var div = document.createElement('div');
var a2 = div;
var a3 = div;
// 중복되기때문에 interface로 사용
