let num:  number;
num = 3;
let str: string = String(num);

let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

let arr3: (string | number | boolean)[] = [1, 2, 3,'1', true];
let arr4: [number, string, boolean] = [1,'1', true]; // 더 업격하게 

let str1 = 'hello' as const;// Tuple //수정 못한다.
let arr = [true, 2, '3'] as const; // Tuple //수정 못한다.
const obj = {a: 'b'} as const; // Tuple 

const obj1: object = { a:'b'} //오브젝트엔 이렇게 잘 안씀
const obj2: {a: string, b?: number} = { a: 'b', b: 3}
obj2.a = '3';

enum Color { Red, Green, Blue }
let c: Color.Green


Color[0] === 'Red';
Color['Red'] === 0;


const n1 = null;
const n2 = undefined;

// 함수를 적어주는 방법
function f(a: number, b: number) : string | number{
    return a + b
}
// 함수에 리턴이 없을때 && return undefined 일때
function add1(a: number,b: number) :void {
    console.log(a, b)
}

// 고차함수 : 함수 자체를 타입으로 쓸때 (매개변수 리턴함수)
function add2(a: number, b: number): (c: string )=> number {
    return (c: string) => {
        return 3;
    }
}

const obj5 : { a: (b: number, c?: string)=> string} = {
    a(b:  number, c?: string) {
        return 'hello'
    }
}








 

// 중복되기때문에 interface로 사용
