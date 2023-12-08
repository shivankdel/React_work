function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        // Check if the number is a multiple of both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            // Check if the number is a multiple of 3
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            // Check if the number is a multiple of 5
            console.log("Buzz");
        }
        else {
            // Log the number for other cases
            console.log(i);
        }
    }
}
var n = 15;
fizzBuzz(n);
// -------------------------------------------------------------------
// Currying
function greeter(greeting) {
    return function (name) {
        console.log(greeting + ", " + name + "!");
    };
}
greeter("Hello")("Candidate");
// -----------------------------------------------------------------
function sumArray(arr) {
    var sum = arr.reduce(function (acc, curr) { return acc + curr; }, 0);
    return sum;
}
var array = [3, 6, 9, 15, 18];
var result = sumArray(array);
console.log(result);
