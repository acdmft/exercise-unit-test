const math = require("./math");

test("if provided number is even return true", () => {
  const result = math.isEven(54);
  expect(result).toBe(true);
});
