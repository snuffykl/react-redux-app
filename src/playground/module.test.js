import expect from "expect";
import Rename, {foo, bar} from "./module";
const calculator = require("./calculator"); // ES5 import

describe("Module test", () => {
  it("bar should return true", () => {
    expect(bar()).toEqual(true);
  });

  it("foo should return true", () => {
    expect(foo()).toEqual(true);
  });

  it("Class Module.execute should return true", () => {
    const module = new Rename();
    expect(module.execute()).toEqual(true);
    expect(module.sayHi(true)).toEqual(true);
  });

  it("Class Calculator.multiply with CommonJs should return true", () => {
    let calculate = new calculator();
    let result = calculate.multiply(1, 3);
    expect(result).toEqual(3);
  });
});
