function addNumberOrString(a: number | string | boolean | object, b: number | string | boolean) {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Parameters have to one of string or number!");
}

console.log(">>> check: ", addNumberOrString("nam", "iFanIT"));
console.log(">>> check: ", addNumberOrString(2, 1));


console.log(">>> check: ", addNumberOrString(2, true)); 
// Lỗi khi running: function addNumberOrString(a: any, b: any) - nếu gán là boolean thì khi chạy nó ms báo lỗi
// lỗi khi compile (dịch code) -> function addNumberOrString(a: number | string, b: number | string) - còn nếu làm vầy thì tường minh hơn nên sẽ báo lỗi trước khi chạy

// => cái này gọi là UNION Type nha