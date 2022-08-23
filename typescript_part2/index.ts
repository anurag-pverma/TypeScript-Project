const  name1: string = "Mr. India";
const age : number = 35;
const isFetching : boolean = true

const array :number[]= [1, 4, 5,6, 6, 8]

// touple 
let ourTuple: [number, boolean, string, number[]];

// initialize correctly
ourTuple = [5, false, 'Coding God was here', [1, 3, 5, 6, 90]];

enum info{
User="SuperUser",
Admin= "SuperAdmin"
}


// declaring function 
function product(x:number, y:number):number{
    return x*y
}

let result = product(3, 5);
console.log(result);


function divide(x:number, y:number):number{
    return x/y;
}

let division = divide(100, 10);
console.log(division);


function myname(name: string){
    console.log(name);
}

myname("anurag verma");




