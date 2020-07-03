export class Point
{
    private _x: number;
    private _y: number;

    constructor(_x:number, _y:number)
    {
        this._x = _x;
        this._y = _y;
    }

    get x()
    {
        return this._x;
    }

    set x(newx:number) 
    {
        this._x = newx;
    }
    get y()
    {
        return this._x;
    }

    set y(newy:number) 
    {
        this._y = newy;
    }

    draw = () => 
    {
        console.log("x : " + this._x + " y : " + this._y );
    }

};
 