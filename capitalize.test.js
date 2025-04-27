// Here, we'll write our tests

const capitalize = require("./capitalize");

test('Capitalize first letter of string', () => {
    expect(capitalize("hello")).toBe("Hello");
});