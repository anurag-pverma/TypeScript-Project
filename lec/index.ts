console.log("hello world");
const x: number = 4;
const  y : string = "3";

let decimal : number = 6;
let hex : number = 0xf00d;
let arr : Array<number> = [1, 3, 34,4 ]
let newarr : Array<number | string> = [1, 3, 34,4, "shjs", "shj" ]

var arr1 : Array<number | boolean> = [1, true, false , true]

var  arr2 : Array<number | string> = [1, "ksa", 2, "hkhkh"]

var arr3 : boolean[] = [false, true, false, false , true]

var  a: null | number = null
a = 5;

var c : undefined |number;
c = 10;


function sum (a: number, b: number,):string{
    return (a+b).toString();
}

let d  = sum(1, 2)


function  sub(a:number, b:number=0):string{
    if(!b){
        return a.toString()
    }
    return (a+b).toString();
}
// avoide using any
function  mul(a:number, b:number=0):any{
    if(!b){
        return a+b;
    }
    return (a+b).toString();
}


// constom type 

type User = {
    name: string;
    age:number;
    place:string;
    number: number;
}


let u:User = {
    name: "ritesh",
    age:100,
    place:"india",
    number: 111111111,
}