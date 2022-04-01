interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  // circle.radius 조회 가능
  constructor(public radius: number) {}

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // rectangle.radius 조회 불가능
  constructor(private width: number, private height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
