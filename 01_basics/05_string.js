const name = "jyoti"
const lname = "yadav"

console.log(`Hello my first name is ${name} and my last name is ${lname}`);

const gameName = new String(`sphinx`)

console.log((gameName[0]));
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(1, -2)
console.log(anotherString);


const n = " karan    "
console.log(n);
console.log(n.trim());


