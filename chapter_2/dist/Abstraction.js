"use strict";
class SitesApiClient {
    getAll() {
        const res = [{ name: "website1" }];
        return Promise.resolve(res);
    }
    getOne(id) {
        return Promise.resolve({ name: "website1" });
    }
}
//# sourceMappingURL=Abstraction.js.map