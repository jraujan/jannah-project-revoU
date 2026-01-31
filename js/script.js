welcomeMessage();

function welcomeMessage(){
    let userResponse = prompt("welcome to jannah company!what is your name?");

    if(userResponse===null || userResponse.trim()===""){
        userResponse="guest";
 
    }
    

document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Jannah Company.`;}


  