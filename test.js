const math = require("./math");

test("if provided parameter is even return true", () => {
  const result = math.isEven(54);
  expect(result).toBe(true);
});

test("if provided parameter is odd number return false", () => {
  const result = math.isEven(3);
  expect(result).toBe(false);
});

test("if provided parameter is string return false", () => {
  const result = math.isEven("str");
  expect(result).toBe(false);
});

test("if provided parameter is a string representing even number return true", () => {
  const result = math.isEven("24");
  expect(result).toBe(true);
});

// test("if provided parameter")