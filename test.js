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

test("change date format from yyyy-mm-dd to dd/mm/yyyy", () => {
  const result = math.formDate("2022-04-01");
  expect(result).toBe("01/04/2022");
});

test("if format of the parameter is not date return null", () => {
  const result = math.formDate("455551111111111");
  expect(result).toBe(null);
});