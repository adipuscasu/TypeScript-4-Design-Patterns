"use strict";
// type is actionPayloadKeys = 'key' | 'value'
function distance1(first, second) {
    return Math.sqrt(Math.pow(first.x - second.x, 2)
        + Math.pow(first.y - second.y, 2));
}
var result = distance1({ x: 1, y: 2 }, { x: 3, y: 4 });
console.log('result: ', result);
//# sourceMappingURL=unique.branded.types.js.map