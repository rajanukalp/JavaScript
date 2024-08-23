// singleton declaration

const tinderUser = new Object() 

tinderUser.id = "123asd"
tinderUser.username =  "Anukalp"
tinderUser.email = "raajanukalp@gmail.com"

console.log(tinderUser)

const regularUser = {
    id: 14321,
    userDetail: {
        username: {
            firstName: "Anukalp",
            lastName: "Raj"
        },
        userEmail: "raajanukalp@gmail.com"


    }
}

console.log(regularUser.userDetail.username.lastName)

const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3, 
    d: 4
}

// const obj3 = Object.assign({}, obj1, obj2);  // less used

const obj3 = {...obj1,...obj2}

console.log(obj3)

const user = [
    {
        username: "Anukalp",
        email: "raajanukalp@gmail.com"
    },
    {
        username: "Abhinav",
        email: "abhinav@gmail.com"
    },
    {
        username: "Raj",
        email: "raj@gmail.com"
    },
]

console.log(user[0].username);

console.log(Object.keys(tinderUser));

console.log(tinderUser.hasOwnProperty('username'))