// lesson30
let sum6 = (x, y, z = false) => {
    if (z === false) return x + y;
    return x - y;
}

console.log(">>> check sum6 = ", sum6(1, 2), sum6(1, 2, 3));


// // lesson 29
// let sum4 = (x, y, z) => {
//     if (z) {
//         return x + y + z;
//     }
//     return x + y;
// }

// console.log(">>> check sum4 = ", sum4(1, 2));
// // thì tham số z ở đây được gọi là optional