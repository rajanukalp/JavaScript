
//  Immediately Invoked Function Expression


// Named iife

(function user(){
    console.log(`Anukalp`)
})();



// unnamed iife

(() =>{
    console.log(`Raj`);
})();

// Parameter pass in iife

((user) => {
    console.log(`Welcome ${user}`)
})(`Anukalp`)