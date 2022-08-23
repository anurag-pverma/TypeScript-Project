interface obj{
    title:string;
    status: boolean;
    id:number;

}

var myobj:obj

const userOject={} as obj;

console.log(userOject);
// second 
interface userstype {
    firstname: string;
    lastname?: string;
  }
   
  function printName(firstname: userstype, lastname:userstype) {
    return firstname +" " +lastname.lastname
  }
let result = printName("anurag" ,"verma");
console.log(result);

// 3

 interface Address{
     houseNumber: string;
     street:string| number;
     city:Number;
     state: string;
     postalCode:number
     country: string
     
    }
  
   interface PersonalDetails{
    Prefix?: string;
    phones:number[];
    address: Address[];
    email?:string;
    firstname:string;
    lastname: string;
    middlename?: string;
   }


//    fifth 
let personalDetaail: { id: number, name: string }[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];

function phonebook(personalDetaail){
    return personalDetaail;

}


