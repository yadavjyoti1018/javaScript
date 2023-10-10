const a = [1,2,3,4]
const b= [5,6,7,8]

 console.log(a);
 console.log(b);
 console.log(a.concat(b));

 const c=[...a, ...b] // Spread operator

 const d=[1,2,[3,4,[5,6]],7,8,9,10]
 console.log(d.flat(1));
