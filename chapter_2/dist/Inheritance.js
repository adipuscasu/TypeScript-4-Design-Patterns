"use strict";
/*
Inheritance is a way to extend or augument existing objects for specific purpose
*/
class EventAction {
    trigger(delay = 0) {
        console.log(`Event triggered in ${delay}s.`);
    }
}
class NotificationEvent extends EventAction {
    sendEmail() {
        console.log("Sending Email");
    }
}
const ev = new NotificationEvent();
ev.trigger();
ev.sendEmail();
ev.trigger(10);
class A_Ch2 {
    subClassCheck() {
        if (Object.getPrototypeOf(this) !== AbortController.prototype) {
            throw new Error("Cannot extend this class.");
        }
    }
    constructor() {
        this.subClassCheck();
    }
}
class B_Ch2 extends A_Ch2 {
}
;
let a = new A_Ch2(); // OK
let b = new B_Ch2(); //fail
//# sourceMappingURL=Inheritance.js.map