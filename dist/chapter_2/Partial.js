"use strict";
var PRIORITY;
(function (PRIORITY) {
    PRIORITY[PRIORITY["DEFAULT"] = 0] = "DEFAULT";
    PRIORITY[PRIORITY["LOW"] = 1] = "LOW";
    PRIORITY[PRIORITY["HIGH"] = 2] = "HIGH";
})(PRIORITY || (PRIORITY = {}));
var TodoItem = /** @class */ (function () {
    function TodoItem(todoItemProps) {
        if (todoItemProps === void 0) { todoItemProps = {}; }
        this.title = "Default item title";
        this.priority = PRIORITY.DEFAULT;
        Object.assign(this, todoItemProps);
    }
    return TodoItem;
}());
var item = new TodoItem({ description: "Some description" });
console.debug(item.description); // prints Saome description"
console.debug(item.title); /* prints "Some "*/
//# sourceMappingURL=Partial.js.map