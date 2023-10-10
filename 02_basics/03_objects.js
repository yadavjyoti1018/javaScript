// singleton
// object.create


// object literals

const mySymbl = Symbol("key1")
const User = {
    name : "Jyoti",
    "lname" : "Yadav",
    [mySymbl]:"mykey1",
    age: 26,
    location: "Jaipur",
    email:"yadavjyoti@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(User.email);
console.log(User["email"]);
console.log(User["lname"]);
console.log(User[mySymbl]);

User.email = "yadav@gmail.com"
//Object.freeze(User)
User.email = "jyoti@yahoo.in"
console.log(User);

User.greeting =  function(){
    console.log("Hello js user");
}


User.greeting2 =  function(){
    console.log(`Hello js user, ${this.name}`);  // String interpolation
}

console.log(User.greeting);
console.log(User.greeting());
console.log(User.greeting2());
