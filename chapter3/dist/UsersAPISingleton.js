"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAPISingleton = void 0;
class UsersAPISingleton {
    constructor() { }
    static getInstance() {
        if (!UsersAPISingleton.instance) {
            UsersAPISingleton.instance = new UsersAPISingleton();
        }
        return UsersAPISingleton.instance;
    }
    getUsers() {
        return Promise.resolve(["Alex", "John", "Sarah"]);
    }
}
exports.UsersAPISingleton = UsersAPISingleton;
const usersPromise = UsersAPISingleton.getInstance().getUsers();
usersPromise.then((res) => {
    console.log(res);
});
//# sourceMappingURL=UsersAPISingleton.js.map