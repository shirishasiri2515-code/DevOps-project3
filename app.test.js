const { add, greet } = require("../app");

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("greet returns a welcome message", () => {
  expect(greet("Claude")).toBe(
    "Hello, Claude! Welcome to the DevOps CI/CD demo."
  );
});
