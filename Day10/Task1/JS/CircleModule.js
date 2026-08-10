import Shape from "./ShapeModule.js";

class Circle extends Shape {
    constructor(radius, x, y, color) {
        super(color);

        this.Radius = radius;
        this.X = x;
        this.Y = y;
    }

    getArea() {
        this.DrawShape();

        let area = Math.PI * this.Radius * this.Radius;

        console.log("Circle Area =", area);

        return area;
    }
}

export default Circle;
