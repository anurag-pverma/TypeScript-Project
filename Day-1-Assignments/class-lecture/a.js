// const a:number = 3;
// const b:String="5";
// console.log(a+b)
//array of number
var arr = [1, 2, 3, 45];
//string array
var arrB = ['1', '2', '3', '45'];
//array
var arrC = ['1', '2', '3', 45];
var arrOfNumBool = [1, 2, 4, true];
var arrBoolean = [true, true, false];
var a = null;
a = 5;
var b;
b = 5;
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
var Country;
(function (Country) {
    Country[Country["India"] = 0] = "India";
    Country[Country["U.S.A"] = 1] = "U.S.A";
    Country[Country["Russia"] = 2] = "Russia";
    Country[Country["Japan"] = 3] = "Japan";
})(Country || (Country = {}));
