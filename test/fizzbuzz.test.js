const fizzBuzz = require("../src/fizzbuzz")

test('n divisible par 3, renvoie Fizz', () => {
    let n = 6;
    expect(fizzBuzz(n)).toBe("Fizz");
})
test('n divisible par 5, renvoie Buzz', () => {
    let n = 10;
    expect(fizzBuzz(n)).toBe("Buzz");
})
test('n divisible par 3 et 5, renvoie FizzBuzz', () => {
    let n = 15;
    expect(fizzBuzz(n)).toBe("FizzBuzz");
})
test('n NON divisible par 3 et 5, renvoie string vide', () => {
    let n = 2;
    expect(fizzBuzz(n)).toBe("");
})


test('n est 0, renvoie FizzBuzz', () => {
    let n = 0;
    expect(fizzBuzz(n)).toBe("FizzBuzz");
})
test('n est négatif et divisible par 3, renvoie Fizz', () => {
    let n = -3;
    expect(fizzBuzz(n)).toBe("Fizz");
})