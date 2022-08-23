var myobj;
var userOject = {};
console.log(userOject);
function printName(firstname, lastname) {
    return firstname.label + (lastname === null || lastname === void 0 ? void 0 : lastname.label);
}
var result = printName("anurag", "verma");
console.log(result);
