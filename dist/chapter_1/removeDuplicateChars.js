"use strict";
function removeDuplicateChars(input) {
    // const result: string[] = [];
    var result = ["a"];
    var seen = new Set();
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var c = input_1[_i];
        if (!seen.has(c)) {
            seen.add(c);
            result.push(c);
        }
    }
}
console.log(removeDuplicateChars("aarfqwevzxcddd"));
//# sourceMappingURL=removeDuplicateChars.js.map