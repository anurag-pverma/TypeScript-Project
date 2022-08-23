var name1 = "Mr. India";
var age = 35;
var isFetching = true;
var array = [1, 4, 5, 6, 6, 8];
// touple 
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here', [1, 3, 5, 6, 90]];
var info;
(function (info) {
    info["User"] = "SuperUser";
    info["Admin"] = "SuperAdmin";
})(info || (info = {}));
// declaring function 
function product(x, y) {
    return x * y;
}
var result = product(3, 5);
console.log(result);
function divide(x, y) {
    return x / y;
}
var division = divide(100, 10);
console.log(division);
function myname(name) {
    console.log(name);
}
myname("anurag verma");
