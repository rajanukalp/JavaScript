// if(true){
//     let a = 1
//     const b = 2
//     // var c = 3
// }

// console.log(a)
// console.log(b)
// console.log(c)

// c got printed .. so for this case we didnot use var because var come got from the scope.


function one(){
    const username = "Anukalp"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    two()

}
one()


if (true){
    username = "Anukalp"
    if (username === "Anukalp"){
        email = "  raajanukalp@gmail.com"
        console.log(username + email)
    }
}

console.log(addone(5))          // here function we execute because we didnot declare any variable before the function

function addone(num){
    return num + 1

}

let addtwo = function(num){
    return num + 2
}

console.log(addtwo(7))    // here we have to print the function after the declaration of the varible. if we want to print before varible declaration it will give an error.


