"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(_x, _y) {
        this.draw = () => {
            console.log("x : " + this._x + " y : " + this._y);
        };
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(newx) {
        this._x = newx;
    }
    get y() {
        return this._x;
    }
    set y(newy) {
        this._y = newy;
    }
}
exports.Point = Point;
;
