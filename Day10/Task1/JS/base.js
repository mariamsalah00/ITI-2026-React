import { Rectangle, Square } from "./SquaresModule.js";
import Circle from "./CircleModule.js";

// Rectangle

let rect = new Rectangle(10, 20, "Red");

rect.getArea();

console.log("----------------");

// Square

let square = new Square(15, "Blue");

square.getArea();

console.log("----------------");

// Circle

let circle = new Circle(7, 100, 150, "Green");

circle.getArea();
