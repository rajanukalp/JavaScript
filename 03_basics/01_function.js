// function

function print() {

    console.log("A")
    console.log("N")
    console.log("U")
    console.log("K")
    console.log("A")
    console.log("L")
    console.log("P")
}

print()

function addtwonumber(number1, number2){
    console.log(number1 + number2)
}                                             // here we didnot store the result in any variable, if we want to store it will give undifined error

addtwonumber(4, 5)

function addtwonumbers(nmbr1, nmbr2) {
    // let result = nmbr1 + nmbr2              // 1
    // return result
    return nmbr1 + nmbr2                       // 2
}
const result = addtwonumbers(9, 6)
console.log(result)

function userloginmessage(username) {
    if(username === undefined){
        console.log("Please Enter username")  
        return
    }

    return `${username} Just Login`
}

console.log(userloginmessage("Anukalp"))

