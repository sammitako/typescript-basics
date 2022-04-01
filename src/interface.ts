// 클래스
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

// 객체
interface Person {
  name: string;
  age?: number; // age가 있을 수도 있고 없을 수도 있다.
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "Sean",
  age: 33,
};

const expert: Developer = {
  name: "Sam",
  skills: ["javascript", "react", "nextjs", "typescript"],
};

// Type Alias
type Human = {
  name: string;
  age?: number;
};

type Professional = Human & {
  skills: string[];
};

const human: Human = {
  name: "Sean",
  age: 33,
};

const pro: Professional = {
  name: "Sam",
  skills: ["javascript", "react", "nextjs", "typescript"],
};
