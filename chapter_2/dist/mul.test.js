"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mul_1 = __importDefault(require("./mul"));
test("multiplies 2 and 3 to give 6", function () {
    expect((0, mul_1.default)(2, 3)).toBe(6);
});
//# sourceMappingURL=mul.test.js.map