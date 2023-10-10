const arr=[1,2,3,4,5, true, "jyoti"]


// Arrays methods

console.log(arr);
arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(10)
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9));

const newArr = arr.join()
console.log(arr);
console.log( newArr);



// Slice , splice

console.log("A", arr);
const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B",arr);

const myn2 = arr.splice(1,3)
console.log("C", arr);
console.log(myn2);



