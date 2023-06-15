const Car = require("./car");

describe("The Car class", () => {// The test suite
  let car = new Car();
  test("has four wheels", () => {// A test / spec
    expect(car.wheels).toBe(4);// An assertion / expectation
  });

  test('foo', () => {
    expect(car.wheels).toEqual(4);
  });
});
