// Tests reversing a string

const reverseString = require("./reverseString");

test('Reverses a given string', () => {
    expect(reverseString("hello")).toBe("olleh");
});