
const userdata = {
    username: "Anukalp",
    email: "raajanukalp@gmail.com",

    welcomemessage: function()
    {console.log(`${this.username}, Welcome`)
      }
}

userdata.welcomemessage()
userdata.username = "Ritik"
userdata.welcomemessage()

function chai(){
    usernames: "Anukalp Raj"
    console.log(this.usernames)
}

chai()                        // function ke andar this keyword use nhi hota

const two = function(){

    fullusername: "Anukalp Raj"
    console.log(this.fullusername)
}

two()


// Arrow Function

const arrowfunctionthis = () =>{

    fullusername: "Anukalp Raj"
    console.log(this.fullusername)
}

arrowfunctionthis()


// Explicit Return

const addtwonumber = (num1, num2) => {
    return num1 + num2
}

console.log(addtwonumber(4, 10))

// Implicit Return

const subtwonumber = (number1, number2) => number1 - number2  // here we can use (number1 - number2) 

console.log(subtwonumber(300, 200));


// if we want print a object

const user = () => ({usernamess: "Anukalp"})

console.log(user())

