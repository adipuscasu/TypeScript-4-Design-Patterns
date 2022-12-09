"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParametricSingleton = void 0;
class ParametricSingleton {
    // Prevents creation of new instances
    constructor(param) {
        this.param = param;
    }
    // Method to retrieve instance 
    static getInstance(param) {
        if (!ParametricSingleton.instances.has(param)) {
            ParametricSingleton.instances.set(param, new ParametricSingleton(param));
        }
        return ParametricSingleton.instances.get(param);
    }
}
exports.ParametricSingleton = ParametricSingleton;
//# sourceMappingURL=ParametricSingleton.js.map