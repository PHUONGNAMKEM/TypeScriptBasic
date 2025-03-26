// Aliases
type myNam = number | string | boolean | object
function addNumberOrString(a: myNam, b: number | string | boolean) {
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
  
  
