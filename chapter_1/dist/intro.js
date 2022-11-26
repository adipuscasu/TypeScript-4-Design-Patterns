"use strict";
var one = "one";
var two = false;
var three = 3;
var four = null;
var five = 5;
var six = 6;
// const seven: unique symbol = Symbol("seven");
var eight; // note that const eight: never cannot happen as we cannot instantiate a never
var Keys;
(function (Keys) {
    Keys[Keys["Up"] = 0] = "Up";
    Keys[Keys["Down"] = 1] = "Down";
    Keys[Keys["Left"] = 2] = "Left";
    Keys[Keys["Right"] = 3] = "Right";
})(Keys || (Keys = {}));
var up = Keys.Up;
var truth = 0 /* Bool.True */;
var arr = [1, 2, 3]; // arary of numbers of any size
var tup = [1]; // tuple with one element of type number
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user = new User("Theo");
console.log(user.getName()); // prints "Theo"
var appConfig = {
    paths: {
        base: '/',
    }
};
var e = {
    name: "Theo",
    age: 20
};
var point1 = [1, 2];
var point2 = [1, 2, 3];
var point3 = ["Point: (1,2)", 1, 2];
var deck = "Ace of Spade";
//# sourceMappingURL=intro.js.map