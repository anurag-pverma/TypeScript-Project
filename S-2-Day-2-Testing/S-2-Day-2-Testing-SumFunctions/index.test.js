

const sum= require("./sum_arguments")

const {test, expect, describe} = require("@jest/globals");


// ////1 unit test////
// test("should work on all positive func", function(){
//     // Asertions.
//     //left: your
//     // right expected

//     expect(1).toBe(1);
//     expect(sum(2, 2)).toBe(4);
//     expect(sum(-2, -2)).toBe(-4);
//     expect(sum(50, 50)).toBe(100);
  
// })



describe("test, sum function with numbers", function(){
    test("should work on all positive func", function(){
    // Asertions.
    //left: your
    // right expected

    expect(1).toBe(1);
    expect(sum(2, 2)).toBe(4);

    expect(sum(50, 50)).toBe(100);
  
});

test("should work all negative integer", function(){
    expect(sum(-4, -4)).toBe(-8);
    expect(sum(-2, -2)).toBe(-4);
});
test("should work all types of integer", function(){
    expect(sum(4, 4)).toBe(8);
    expect(sum(-4, -2)).toBe(-6);
});

})

describe("test sum function with characters", function(){
    test("test should add two character", function(){
        // expect(sum("a", "b")). toBeUndefined();
    });

})


