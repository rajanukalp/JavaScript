//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++ Stack & Heap ++++++++++++++++++

// Stack (primitive)&   Heap(Non-primitive)


let useremail1 = "raajanukalp@gmail.com"
let useremail2 = useremail1
useremail2 = "anukalp2809@gmail.com"

console.log(useremail1)
console.log(useremail2)

// in stack we get the copy, so if we have declare useremail2 = useremail1 we get the copy of useremail1 after we have declare useremail2 then we got the useremail2 output because main data of useremail1 didnot change.

// Heap

let user1 = {
    email: "raajanukalp@gmail.com",
    username1: "anukalpraj"

}

let user2 = user1

user2.email = "rajanukalp2002@gmail.com"

console.log(user1.email)
console.log(user2.email)


//+++++++ in heap we get the direct reference , so if we change change the value it will directly change to main data