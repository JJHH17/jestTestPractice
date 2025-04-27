// File where we'll write functions to test
 
// Capitalize test
test('capitalize first letter of string', () => {
    expect(capitalize("hello")).toBe("Hello");
});

// Capitalize test criteria 
function capitalize(string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}

