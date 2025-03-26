// lesson 40
interface IPerson {
  readonly firstName: string;
  lastName?: string;
  address: string;
}

type Person41 = {
  firstName: string;
  lastName: string;
};

// nó tương đối giống nhau chỉ khác 1 cái là interface thì khi định nghĩa 2 interface cùng tên nó sẽ merging lại thành 1 thôi

function getFullName(person: IPerson) {
  // person.firstName = "hehe"; -> ở đây sẽ báo lỗi vì nó là readonly
  return `${person.firstName} ${person.lastName}`;
}

let person40 = { firstName: "Eric", lastName: "Hoi Dan IT", address: "TPHCM" }; // ở đây định nghĩa thêm 1 thuộc tính nữa nhưng

console.log(getFullName(person40)); // Eric Hoi Dan IT

// ==============================================================

// lesson 39
abstract class Employee39 {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number; //abstract method

  //normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

// abstract ko thể tạo mới đối tượng
// const e1 = new Employee39("eric", "hoi dan it");

class FullTimeEmployee extends Employee39 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName); // ở đây super kế thừa lại từ lớp cha
  }

  getSalary(): number {
    // logic code here
    return this.salary;
  }
}
class Contractor extends Employee39 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName); // ở đây super kế thừa lại từ lớp cha
  }

  getSalary(): number {
    // logic code here
    return this.rate * this.hours;
  }
}

const test1 = new FullTimeEmployee("eric", "hoi dan it", 1000);
const test2 = new Contractor("eric", "hoi dan it", 0.5, 50);
console.log(">>> check test1: ", test1.getSalary());
console.log(">>> check test1: ", test2.getSalary());

// =======================================================

// lesson 38
class Circle {
  static pi: number = 3.14;
  public test: number = 69;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}

let circleChild = new Circle();
console.log(">>> check pi: ", circleChild.test); // ở đây phải dùng 1 biến và tạo đối tượng với từ khóa new thì ms được
// và một đối tượng mới thì cũng ko thể truy cập vào thuộc tính static của class đó được ví dụ circleChild.pi -> lỗi
console.log(">>> check pi: ", Circle.pi); // ở đây truy cập trực tiếp tới pi được vì nó là static

// tóm lại thì muốn truy cập vào static thì chỉ cần thông qua tên class là được

// ===============================================================

// lesson 37
class Person3 {
  private _firstName: string;
  private _lastName: string;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public getLastName() {
    return this._lastName;
  }
  public set lastName(lastName2: string) {
    if (!lastName2) {
      throw new Error("Invalid lastName");
    }
    this._lastName = lastName2;
  }
  getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
  describe(): string {
    return `This is ${this._firstName} ${this._lastName}.`;
  }
}

//để kế thừa 1 class, chúng ta sử dụng keyword extends

class Employee1 extends Person3 {
  private jobTitle;
  constructor(firstName: string, lastName: string, jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  public getDescribe(lastName: string) {
    return `Describe about ${lastName}: ${this.jobTitle}`;
  }
  // override
  describe(): string {
    return `${super.describe()} from parent - have info is: ${this.jobTitle}`;
  }
}

// let employee = new Employee('John','Doe','Front-end Developer');

//Employee kết thừa lại person => dùng đc method của parent

let employee = new Employee1("Hoi Dan IT", "Eric", "Web Developer");

console.log(employee.getFullName());
console.log(employee.describe());
// console.log(employee.getDescribe("Eric"));

// ========================================================

// lesson 36
class Person2 {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // getter
  get age() {
    return this._age;
  }
  // setter
  set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw Error("Invalid age");
    }
    this._age = age2;
  }
}

let person2 = new Person2(26, "Hoi Dan IT", "Eric");
let checkAge = person2.age; // getter

person2.age = 30; // setter
// person2.setAge(30); setter - giống với các ngôn ngữ khác
// console.log(">>> check age: ", person2.getAge()); // getter - ghi vầy thì giống với các ngôn ngữ khác rồi
console.log(">>> check age: ", person2.age); // getter

class PersonFully {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }

  public set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw new Error("Invalid age");
    }
    this._age = age2;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(firstName2: string) {
    if (!firstName2) {
      throw new Error("Invalid firstName");
    }
  }
  public get lastName() {
    return this._firstName;
  }

  public set lastName(lastName2: string) {
    if (!lastName2) {
      throw new Error("Invalid lastName");
    }
  }

  public getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

// ========================================================

//lesson 35
class Person1 {
  // readonly birthDate: Date;
  public birthDate: Date;
  // const - chỉ dùng khi muốn khai thác, sử dụng biến - thao tác với variable
  // readonly là thao tác với lập trình hướng đối tượng - thao tác với thuộc tính của class hay dùng với interface

  // const áp dụng cho biến - readonly áp dụng cho class/interface

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person = new Person1(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error

// ========================================================

//lesson 34
class Employee {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee extends Employee {
  private department: string;

  constructor(name: string, code: number, department: string) {
    super(name, code);
    this.department = department;
  }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; //Compiler Error

// ========================================================

// lesson 33
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `calling method here with value is: ${this.firstName} ${this.lastName}`;
  }
}

let nam = new Person("123", "iFanIT", "Nam");
console.log(">>> check class = ", nam.getFullName());

// ========================================================

//lesson 32

function addNumbers(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}

// 2 functions làm nhiệm vụ tương tự nhau => có thể gồm thành 1 với union type function add(a: number | string, b: number | string): number | string {
function add111(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;

  if (typeof a === "string" && typeof b === "string") return a + b;
}

// overloading - khác với mấy thằng khác là ts nó chỉ có 1 thân hàm (implementation) thôi nên yêu cầu các tham số đầu vào phải có cùng số lượng với lại hàm chính có thân hàm
// có thể giải quyết bằng nhiều cách như dùng default parameter, optional, rest, union type
function addNew(a: number, b: number): number;

function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
  return a + b;
}

// console.log(">>> check add new: ", addNew(6, 9), addNew("6", "9"));

class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      return values;
    }
    return ++this.current;
  }
}

let counter111 = new Counter();

console.log(counter111.count()); // return a number
console.log(counter111.count(20)); // return an array

// ========================================================

// lesson 31
const funcSum = (...number: number[]): number => {
  return number.reduce((a, b) => a + b, 0);
};

// console.log(funcSum(1, 2, 3));

// ========================================================

function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  // [10, 20].forEach((num) => (total += num));
  // [].forEach((num) => (total += num));
  return total;
}

// console.log(getTotal()); // 0
// console.log(getTotal(10, 20)); // 30
// console.log(getTotal(10, 20, 30)); // 60

// ========================================================
// lưu ý toán tử ... điền ở cuối cùng - để đầu ko được đou
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'test31' gets value [10, 20, 30, 40]
const test31 = multiply(10, 1, 2, 3, 4);
// console.log(">>> check test31 = ", test31);

// ========================================================
// lưu ý 2: trong 1 function chỉ có thể sử dụng 1 toán tử rest thôi
function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

let checkGreet = Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!" Greet("Hello");// returns "Hello !"
console.log(">>> check greet = ", checkGreet);

// ========================================================

// lesson 30
let sum7 = (x: number, y: number, z = false) => {
  if (z === false) return x + y;
  if (z) {
    return x - y;
  }
};

// ở đây thì z = false là default parameter
// không cần thiết phải định nghĩa optional ở đây vì optional có nghĩa là chúng ta điền dấu ?
// tức là giá trị có thể có hoặc UNDEFINED - và đương nhiên ta phải xử lý logic thêm trg hợp ko có giá trị optional đó
// còn default parameter thì giá trị mặc định là giá trị được gán từ trước nếu không truyền vào
console.log(">>> check sum7 = ", sum7(1, 2), sum7(1, 2, true));

// =========================================

// lesson 29 : optional parameters
let sum4 = (x: number, y?: number, z?: number) => {
  if (z) {
    return x + z;
  }
  if (y) {
    return x + y;
  }
  if (z && y) return x + y + z;
  return x;
};

console.log(">>> check sum4 = ", sum4(1, 2, 3), sum4(9), sum4(2, 3));
// thì tham số z ở đây được gọi là optional

// =========================================

// lesson28

// WITH TS
// arrow function
const sum3 = (a: number, b: number): number => {
  return a + b;
};

// traditional function
// function sum4(a: number, b: number): number {
//   return a + b;
// }

console.log(">>> check sum3: ", sum3(1, 2));

// =========================================

// lesson27

// WITH TS
function sum(a: number, b: number): number {
  return a + b;
}

let myFunc = function (a: number, b: number): number {
  return a + b;
};

let myFunc2 = (a: number, b: number): number => {
  return a + b;
};

console.log(myFunc2(6, 9));

// WITH JS
// // declaration function
// function myFunc(a: number, b: number) {
//   return a + b;
// }

// //expression function
// const myFunc2 = function (a: number, b: number) {
//   return a + b;
// };

// // arrow function
// const myFunc3 = (a: number, b: number) => {
//   return a + b;
// };

// =================================================

// lesson26
for (let index = 0; index < 9; index++) {
  // if index is odd, skip it if (index % 2)
  continue;

  // the following code will be skipped for odd numbers
  // console.log(index);
}
// =========
// let index = -1;
// while (index < 9) {
//   index = index + 1;
//   if (index % 2) continue;
//   console.log(index);
// }

// nếu ko +1 lên trước khi đi vào if - continue thì khi index (-1) % 2 = -1 -> truthy -> continue được chạy và nó sẽ bắt đầu vòng lặp mới mà không tăng i++ lên -> vòng lặp bị vô hạn
// while (index < 9) {
//   if (index % 2) continue;
//   console.log(index);
//   index++;
// }

// =================================================
let index = 9;
let count = 0;

do {
  index += 1;

  if (index % 2) continue;
  count += 1;
} while (index < 99);
console.log(count); // 45

// ==================================================

// lesson25
let products = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];

let discount1 = 0;
let product = products[1];
switch (product.name) {
  case "phone":
    discount1 = 5;
    break;
  case "tablet":
    discount1 = 10;
    break;
  case "laptop":
    discount1 = 15;
    break;
  default:
    discount1 = 100;
}
console.log(`There is a ${discount1}% on ${product.name}.`);

// ==================================================

// lesson24
let counter2 = 6;

// do while khác với while là nó sẽ chạy tối thiểu 1 lần (vì phải vào do trước á mà)

do {
  console.log("counter = ", counter2);
  if (counter2 % 2 === 1) break;
  counter2++;
} while (counter2 < 5);

// ==================================================

// lesson23
let counter = 0;

// còn khi sử dụng while thì không cần quan tâm tới số lần lặp
// mà chỉ cần quan tâm đến điều kiện dừng thôi - khi nào ko muốn nó lặp nữa
while (counter < 5) {
  console.log("counter = ", counter);
  if (counter % 2 === 1) break;
  counter++;
}

// ở vòng for dưới đây thì chúng ta cần quan tâm tới việc là loop lặp bn lần?
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ==================================================

// lesson22
for (let i = 0; i < 10; i++) {
  console.log(" >>> i: ", i);
}

// khuyết phần đầu
let i1 = 0;
for (; 1 < 10; i1++) {
  console.log(1);
}

// khuyết condition
for (let i1 = 0; ; i1++) {
  console.log(1);
  if (i1 > 9) break; // cần có if/break để không khiến vòng lặp chạy vô hạn
}

// nothing
let i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 9) break;
}

// ==================================================

// lesson 21
const age: number = 21;
switch (age) {
  case 25:
    console.log("Đã đi thực tập");
    break;
  case 20:
  case 19:
    console.log("Đã là sinh viên");
    break;
  default:
    console.log(">>> run default");
  // break;
}

// ==================================================

// lesson 20
let name123: string = "";

if (name123) {
  console.log("Your age enough");
} else console.log("Not enough");

// ========================================================
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else if (itemCount > 10 && itemCount <= 15) {
  discount = 15; // 15% discount
} else {
  discount = 20; // 20%
}
