"use strict";
/*
Inheritance is a way to extend or augument existing objects for specific purpose
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EventAction = /** @class */ (function () {
    function EventAction() {
    }
    EventAction.prototype.trigger = function (delay) {
        if (delay === void 0) { delay = 0; }
        console.log("Event triggered in ".concat(delay, "s."));
    };
    return EventAction;
}());
var NotificationEvent = /** @class */ (function (_super) {
    __extends(NotificationEvent, _super);
    function NotificationEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationEvent.prototype.sendEmail = function () {
        console.log("Sending Email");
    };
    return NotificationEvent;
}(EventAction));
var ev = new NotificationEvent();
ev.trigger();
ev.sendEmail();
ev.trigger(10);
var A_Ch2 = /** @class */ (function () {
    function A_Ch2() {
        this.subClassCheck();
    }
    A_Ch2.prototype.subClassCheck = function () {
        if (Object.getPrototypeOf(this) !== AbortController.prototype) {
            throw new Error("Cannot extend this class.");
        }
    };
    return A_Ch2;
}());
var B_Ch2 = /** @class */ (function (_super) {
    __extends(B_Ch2, _super);
    function B_Ch2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B_Ch2;
}(A_Ch2));
;
var a = new A_Ch2(); // OK
var b = new B_Ch2(); //fail
//# sourceMappingURL=Inheritance.js.map