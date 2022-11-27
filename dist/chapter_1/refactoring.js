"use strict";
function find(arr, predicate) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item_1 = arr_1[_i];
        if (predicate(item_1)) {
            return item_1;
        }
    }
    return undefined;
}
//# sourceMappingURL=refactoring.js.map