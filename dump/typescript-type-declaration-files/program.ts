// const getPersonName: common.GetFullName = (p: common.Person) => {
//     return `${p.firstName} ${p.lastName}`;
// };

// const ross: common.Person = {
//     firstName: "Ross",
//     lastName: "Geller",
//     age: 29,
// };

// console.log(getPersonName(ross));

// console.log(version);

// declare global {
//     interface Person {
//         email: string;
//     }

//     interface Number {
//         isEven(): boolean;
//     }
// }

// const ross: Person = {
//     firstName: "Ross",
//     lastName: "Geller",
//     age: 29,
//     email: "ross@geller.com",
// };
// const isAgeEven = ross.age.isEven();
// console.log("isAgeEven", isAgeEven);

// export {};

import * as _ from "lodash";
console.log(_.toUpper(true));
