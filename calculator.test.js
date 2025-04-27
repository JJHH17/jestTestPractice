// Tests calculator functions 

const sum = require("./calculator");

test('Sums two given numbers', () => {
    expect(sum(1, 2)).toBe(3);
});

