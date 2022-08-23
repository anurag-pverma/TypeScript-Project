// const a:number = 3;
// const b:String="5";

// console.log(a+b)

//array of number
let arr:number[]=[1,2,3,45]
//string array
let arrB:String[]=['1','2','3','45']
//array
let arrC:Array<String | number>=['1','2','3',45]


let arrOfNumBool: Array<number | boolean>=[1,2,4, true]
let arrBoolean:boolean[] =[true,true, false]

let a: null | number = null
a=5
let b: undefined | number;
b=5




// function sum(a:number, b:number):number{
//     return a+b
// }
// let c=sum(1, 2)


// function sum(a:number, b?:number):String{
//     if(!b){
//         return a.toString();
//     }
//     return (a+b).toString()

// let c=sum(1, 2)
// let d=sum(1)

// function sums( c:number, b?:number=0):void{
//     if(!b){
//         return c
//     }
//     return 
// }

// let x=sums(1,4)





// type User = {
//     name: string,
//     age:number,
//     place : "India" | "U.S.A" | "Russia" | "Japan",
//     number: number,
//     isMarried?: boolean
// }


// type Student={
//     rollNo: number;
//     batch : String;
// }

// // & 'and' operator , | 'or' operator
// let u:User | Student= {
//     name: 'Debu',
//     age: 100,
//     place: 'India',
//     number : 11121212,
//     rollNo:123,
//     batch:'ft_web16'
// }





enum Country {
    "India" , "U.S.A" , "Russia" , "Japan",
}
interface User {
    name: string,
        age:number,
        place : Country,
        number: number,
        isMarried?: boolean
}
interface Student{
    rollNo: number;
    batch : String;
}
