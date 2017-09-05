import expect from "expect";
import {authorsFormattedForDropDown} from "./selectors";

describe("Authors Selectors", () => {
  it("should return author data formatted in dropdown.", () => {
    const authors = [
      {id: "kenzo", firstName: "Ken", lastName: "Ryu"},
      {id: "snuffykl", firstName: "Adrian", lastName: "snuffykl"}
    ];

    const expected = [
      {value: "kenzo", text: "Ken Ryu"},
      {value: "snuffykl", text: "Adrian snuffykl"}
    ];

    expect(authorsFormattedForDropDown(authors)).toEqual(expected);
  });
});
