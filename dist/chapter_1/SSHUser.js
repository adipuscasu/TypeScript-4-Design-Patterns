"use strict";
var SSHUser = /** @class */ (function () {
    function SSHUser(prvKey, pubKey) {
        this.privateKey = prvKey;
        this.publicKey = pubKey;
    }
    SSHUser.prototype.getBase64 = function () {
        return Buffer.from(this.publicKey).toString("base64");
    };
    return SSHUser;
}());
//# sourceMappingURL=SSHUser.js.map