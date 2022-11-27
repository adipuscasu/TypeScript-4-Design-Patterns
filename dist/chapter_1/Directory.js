"use strict";
var Directory = /** @class */ (function () {
    function Directory(files, directories) {
        this.files = files;
        this.directories = directories;
    }
    Directory.prototype.addFile = function (file) {
        this.files.push(file);
    };
    Directory.prototype.addDir = function (directory) {
        this.directories.push(directory);
    };
    return Directory;
}());
//# sourceMappingURL=Directory.js.map