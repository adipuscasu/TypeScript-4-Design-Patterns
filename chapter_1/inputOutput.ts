const stream = process.stdin;
const setImediate = function() {
    stream.push(null);
}
