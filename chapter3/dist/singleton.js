"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    // Prevent creation of new instance
    constructor() { }
    // Method to retrieve instance
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
exports.Singleton = Singleton;
//# sourceMappingURL=singleton.js.map