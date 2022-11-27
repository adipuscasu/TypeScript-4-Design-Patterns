"use strict";
var SitesApiClient = /** @class */ (function () {
    function SitesApiClient() {
    }
    SitesApiClient.prototype.getAll = function () {
        var res = [{ name: "website1" }];
        return Promise.resolve(res);
    };
    SitesApiClient.prototype.getOne = function (id) {
        return Promise.resolve({ name: "website1" });
    };
    return SitesApiClient;
}());
//# sourceMappingURL=Abstraction.js.map