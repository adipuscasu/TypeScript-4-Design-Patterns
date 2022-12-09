"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
test("singleton is a Singleton", () => {
    expect(singleton_1.Singleton.getInstance())
        .toBe(singleton_1.Singleton.getInstance());
});
//# sourceMappingURL=singleton.test.js.map