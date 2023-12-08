function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Check if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // Check if the number is a multiple of 3
      console.log("Fizz");
    } else if (i % 5 === 0) {
      // Check if the number is a multiple of 5
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const n = 15;
fizzBuzz(n);

// -------------------------------------------------------------------

// Currying

function greeter(greeting: string) {
  return function (name: string) {
    console.log(`${greeting}, ${name}!`);
  };
}

greeter("Hello")("Candidate");

// -----------------------------------------------------------------

function sumArray(arr: number[]): number {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

const array = [3, 6, 9, 15, 18];
const result = sumArray(array);
console.log(result);
