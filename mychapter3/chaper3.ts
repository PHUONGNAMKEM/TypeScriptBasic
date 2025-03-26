// // lesson 40
// interface IPerson {
//   readonly firstName: string;
//   lastName?: string;
//   address: string;
// }

// type Person41 = {
//   firstName: string;
//   lastName: string;
// };

// // nó tương đối giống nhau chỉ khác 1 cái là interface thì khi định nghĩa 2 interface cùng tên nó sẽ merging lại thành 1 thôi

// function getFullName(person: IPerson) {
//   // person.firstName = "hehe"; -> ở đây sẽ báo lỗi vì nó là readonly
//   return `${person.firstName} ${person.lastName}`;
// }

// let person40 = { firstName: "Eric", lastName: "Hoi Dan IT", address: "TPHCM" }; // ở đây định nghĩa thêm 1 thuộc tính nữa nhưng

// console.log(getFullName(person40)); // Eric Hoi Dan IT
