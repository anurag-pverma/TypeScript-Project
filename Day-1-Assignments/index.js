var user1 = {
    id: 1,
    age: 22,
    name: "Debobrota",
    salary: 159782
};
var user2 = {
    id: 2,
    age: 23,
    name: "Aditya",
    salary: 777782
};
var user3 = {
    id: 3,
    age: 25,
    name: "varun",
    salary: 775582
};
var teacher1 = {
    id: 2,
    name: "Debu",
    noOfStudents: 115,
    subject: {
        Chemistry: true,
        Math: true,
        Physics: false
    }
};
var arr = [user1, user2, user3];
function sort(arr, b) {
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        for (var j = i + 1; j < size; j++) {
            if (arr[i][b] > arr[j][b]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var ans = sort(arr, "name");
console.log(ans);
