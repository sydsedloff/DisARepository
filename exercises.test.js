import { flattening } from "./exercises";
//const flattening = require("./exercises")

test("flattens array", () => {
    expect(flattening([[1, 2, 3], [4, 5], [6]])).toBe([1, 2, 3, 4, 5, 6])
})