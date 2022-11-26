"use strict";
function computeFrequency(input) {
    var freqTable = new Map();
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var ch = input_1[_i];
        if (!freqTable.has(ch)) {
            freqTable.set(ch, 1);
        }
        else {
            freqTable.set(ch, freqTable.get(ch) + 1);
        }
    }
    return freqTable;
}
console.log(computeFrequency("12345"));
//# sourceMappingURL=computeFrequency.js.map