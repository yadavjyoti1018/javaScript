//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,2,23)
let myCreateDate = new Date(2023,2,23, 5,3)
console.log(myCreatedDate.toLocaleString());
console.log(myCreateDate.toLocaleString());


let myTimestamp = Date.now()
console.log(myTimestamp.toLocaleString());
console.log(myTimestamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let toDate = new Date()
console.log(toDate);
console.log(toDate.getMonth() +1);   // Months are started from zero 
console.log(toDate.getDay());

`${toDate.getDay()} and the time  is :`

toDate.toLocaleDateString('default' , {
    weekday: "long",
})


