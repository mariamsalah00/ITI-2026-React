class Shape {
    #color = "";

    constructor(color) {
           if (this.constructor.name === "Shape") {
            throw new Error("Shape is an abstract class.");
           }
        this.Color = color;
    }

    set Color(value) {
        this.#color = value;
    }

    get Color() {
        return this.#color;
    }

    DrawShape() {
        console.log("Shape Color:", this.#color);
    }
}

export default Shape;
