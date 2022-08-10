//Many client-specific interfaces are better than one general-purpose interface.

import { PCircle, Shape } from "./open-or-close";


// lets say at some point in our code we need to serialise our class, we can update the `Shape` interface as follows

interface IShape extends Shape {
    serialise(): string
}

class ICircle extends PCircle implements IShape {
    serialise(): string {
        return JSON.stringify(this)
    }
}

//similar for `IRectangle` but the problem is that at the domain layer or some point in our application we dont need the serialise method but is needed at some other point in our app.

// The way to get this done is using the `IS` principle.

interface XRectangle {
    width:number
    height:number
}

interface XCircle {
    radius: number
}

interface XShape {
    area(): number
}

interface ISerialisable {
    serialise(): string
}

/**
 * @DomainLayer 
 * @description (somePoint A in our app)
 */

class CRectangle implements XRectangle, Shape {
    public width: number;
    public height: number;

    constructor() {}

    area(): number {
        return this.width * this.height
    }
}

/**
 * @InfrastureLayer 
 * @description (somePoint B in our app)
 */

class RectangleDto implements XRectangle, ISerialisable {
    public width: number;
    public height: number;
    constructor() {}

    serialise(): string {
        return JSON.stringify(this)
    }
}

//hence RectangleDto & CRectangle dont violate the SR princile of SoC princinple


