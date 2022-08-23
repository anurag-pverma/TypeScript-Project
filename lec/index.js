console.log("hello world");
var x = 4;
var y = "3";
var decimal = 6;
var hex = 0xf00d;
var arr = [1, 3, 34, 4];
var newarr = [1, 3, 34, 4, "shjs", "shj"];
var arr1 = [1, true, false, true];
var arr2 = [1, "ksa", 2, "hkhkh"];
var arr3 = [false, true, false, false, true];
var a = null;
a = 5;
var c;
c = 10;
function sum(a, b) {
    return (a + b).toString();
}
var d = sum(1, 2);
function sub(a, b) {
    if (b === void 0) { b = 0; }
    if (!b) {
        return a.toString();
    }
    return (a + b).toString();
}
// avoide using any
function mul(a, b) {
    if (b === void 0) { b = 0; }
    if (!b) {
        return a + b;
    }
    return (a + b).toString();
}
var u = {
    name: "ritesh",
    age: 100,
    place: "india",
    number: 111111111
};
