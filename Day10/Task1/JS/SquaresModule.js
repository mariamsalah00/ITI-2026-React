import Shape from "./ShapeModule.js";

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);

        this.Width = width;
        this.Height = height;
    }

    getArea() {
        this.DrawShape();

        let area = this.Width * this.Height;

        console.log("Rectangle Area =", area);

        return area;
    }
}

class Square extends Rectangle {
    constructor(side, color) {
        super(side, side, color);
    }
}

export { Rectangle, Square };
