import {Singleton} from "./singleton";

test("singleton is a Singleton", () => {
    expect(Singleton.getInstance())
    .toBe(Singleton.getInstance())
});