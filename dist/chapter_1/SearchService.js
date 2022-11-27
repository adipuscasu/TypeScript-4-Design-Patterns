"use strict";
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
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder() {
    }
    return QueryBuilder;
}());
var EmptyQueryBuilder = /** @class */ (function (_super) {
    __extends(EmptyQueryBuilder, _super);
    function EmptyQueryBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmptyQueryBuilder;
}(QueryBuilder));
var SearchService = /** @class */ (function () {
    function SearchService(_a) {
        var _b = _a.qb, qb = _b === void 0 ? EmptyQueryBuilder : _b, path = _a.path;
        this.queryBuilder = qb;
        this.path = path;
    }
    return SearchService;
}());
//# sourceMappingURL=SearchService.js.map