// Tests calculator functions 

// Imports 
const { sum, sub } = require("./calculator");

// Addition
test('Sums two given numbers', () => {
    expect(sum(1, 2)).toBe(3);
});


// subtraction
test('Subtracts two given numbers', () => {
    expect(sub(1, 1)).toBe(0);
});