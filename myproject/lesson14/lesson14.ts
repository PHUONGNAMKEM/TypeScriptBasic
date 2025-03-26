// Nếu khai báo như vầy thì enum sẽ có giá trị là number
// enum API_STATUS {
//     PENDING, 
//     FULFILLED, 
//     REJECTED
// }

// Nhưng nếu khai báo như vầy thì enum sẽ có giá trị là string
enum API_STATUS {
    PENDING = "PENDING", 
    FULFILLED = "FULFILLED", 
    REJECTED = "REJECTED"
}


let a = API_STATUS.PENDING;
let a1 = API_STATUS.FULFILLED;
let a2 = API_STATUS.REJECTED;

console.log(`>>> check a1: ${a}, check a2: ${a1}, check a3: ${a2}`);


enum myFruit {
    APPLE = "APPLE",
    BANANA = "BANANA",
    ORANGE = "ORANGE"
}

function getFruit(fruit : string) : myFruit | undefined {
    return Object.values(myFruit).includes(fruit as myFruit) ? (fruit as myFruit) : undefined;
}

console.log(getFruit("APPLE"));