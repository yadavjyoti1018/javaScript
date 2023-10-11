const User = new Object()   //--> singleton object

const mediaUser = {}   // non-singleton object
mediaUser.id = "123abc"
mediaUser.name = "Sammy"
mediaUser.isLoggedIn = false
console.log(mediaUser);

const regularUser = {
    email: "soma@gmail.com",
    fullname: {
        userfullname:{
            firstname: "jyoti",
            lastname: "yadav"
        }
    }
}

console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a" , 4:"c"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)
const obj5={...obj1, ...obj2}

console.log(obj3);
console.log(obj4);
console.log(obj5);


const users=[
    {
        id: 1,
        email: "123bc",
    },
    {},
    {}
    
]
users[1].email

console.log(mediaUser);
console.log(Object.keys(mediaUser));
console.log(Object.values(mediaUser));
console.log(mediaUser.hasOwnProperty('id'));

const course = {
    coursename : "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course

console.log(courseInstructor);
console.log(instructor);

const navbar = (comapany) =>{

}

navbar(comapany = "jyotii")

// {
//     "coursename" : "javascript",
//    ""price": "999",
//     "courseInstructor": "hitesh"
// }

[
    {},
    {},
    {}
]