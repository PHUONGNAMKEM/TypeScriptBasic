let skills: (string | number)[] = ["hello Typescript", "with iFanIT", 21];
skills.push('love coding');
skills.push(99);

// tuple: dataType/size/order
let skills2: [string, number] = ["iFanIT", 25];

// đôi khi muốn có tham số đó hoặc không thì gọi là Optional -> thêm dấu ? - và tham số Optional? phải đặt cuối cùng
let skills3: [boolean, string, number?];
let skills4: [boolean, string, string?];

skills3 = [true, "mystring", 12];
skills4 = [true, "string1"]
skills4 = [true, "string1", "string2"];