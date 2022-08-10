// Software entities should be open for extension, but closed for modification.

/**
 * @anit-pattern
 */

class Rectangle {
  public width: number;
  public height: number;
}

class Circle {
  public radius: number;
}

//difference berween instanceof and typeof
function getArea(shapes: (Rectangle | Circle)[]) {
  return shapes.reduce((previous, current) => {
    if (current instanceof Rectangle) {
      return current.width * current.height;
    } else if (current instanceof Circle) {
      return current.radius * current.radius * Math.PI;
    } else {
      throw new Error("Unknown shape!");
    }
  }, 0);
}

//using the OC principle

export interface Shape {
  area(): number;
}

export class PRectangle extends Rectangle implements Shape {
  area(): number {
    return this.height * this.width;
  }
}

export class PCircle extends Circle implements Shape {
  area(): number {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}


function _getArea(shape: Shape[]) {
  return shape.reduce((prev, curr) => prev + curr.area(), 0);
}
//now open for extension but close for modification
