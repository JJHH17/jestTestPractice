// Tests calculator functions 

// Imports 
const { sum, sub, div } = require("./calculator");

// Addition
test('Sums two given numbers', () => {
    expect(sum(1, 2)).toBe(3);
});


// subtraction
test('Subtracts two given numbers', () => {
    expect(sub(1, 1)).toBe(0);
});

// Division 
test('Divide two given numbers', () => {
    expect(div(4, 2)).toBe(2);
});