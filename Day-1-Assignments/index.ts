type User  ={
    id: number,
    name:string,
    age: number,
    salary:number,
}
type Subject = {
    Chemistry:boolean,
    Physics:boolean,
    Math:boolean,
}
type Teachers={
    id:number,
    name:string,
    noOfStudents:number;
    subject?:Subject;
}
const user1: User ={
id:1,
age:22,
name:"Debobrota",
salary:159782,
}
const user2: User ={
id:2,
age:23,
name:"Aditya",
salary:777782,
}
const user3: User ={
id:3,
age:25,
name:"varun",
salary:775582,
}
const teacher1: Teachers={
    id:2,
    name:"Debu",
    noOfStudents:115,
    subject:{
        Chemistry:true,
        Math:true,
        Physics:false,
        }
}

let arr:User[] = [user1, user2, user3];

function sort(arr:User[],b:string):User[]{
const size= arr.length;
for(let i=0;i<size;i++){
    for(let j=i+1;j<size;j++){
if(arr[i][b]>arr[j][b]){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
    }
}
return arr;

}

let ans= sort(arr, "name")
console.log(ans);

