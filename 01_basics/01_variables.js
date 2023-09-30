const accountId = 144553    // Value cannot be changed
let accountEmail = "jyoti@google.com"
var accountPassword = "123456"

/* Prefer not to use var because of issue of issue in block scope and functional scope*/

accountCity = "Jaipur"
let accountState;

// accountId = 2
console.log(accountId);

accountEmail = "yadav@yj.com"
accountPassword = "121212"
accountCity = "Pune"
console.log(accountId);

console.table([accountId , accountEmail, accountCity, accountPassword, accountState])
