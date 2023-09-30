let score ="77abc"  // null // undefined // boolean

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" =>33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let a = 33
let string = String(a)
console.log(string)
console.log(typeof string);

/************************* OPERATIONS *****************************/

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(3 + 1 + "2");    //42

console.log(+true);
// console.log(true+);
console.log(+"");