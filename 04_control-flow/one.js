// <, >, ==, <=, >=, ===, !=, !==


const number = 11

if(number < 10){
    console.log("number is Less 10" );
}
  
  else{
    console.log("number is gretter then 10" );
  }


// ++++++++++++++++++ Multiple Condition Check+++++++++++++++++

  const num1 = 10

  if(num1 < 5){
    console.log("Number is Less than 5");
  } else if(num1 < 7){
    console.log("Number is Less than 7");
  } else if(num1 < 9){
    console.log("Number is Less than 9");
  } else { 
    console.log("Number is Gretter than 10")
  }


  // +++++++++ Multiple Variable Check++++++++++++++++++++++++++=

  const username = true
  const email = true

  const gmail = false
  const outlook = true

  if(username && email){                   // sara variable true hoga to run kra ga
    console.log("You Can Login");
  }

  if(gmail || outlook){                      // koi yak v variable true hoga to run kra ga
    console.log("You Can Login From Gamil & Outlook");
  }