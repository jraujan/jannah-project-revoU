welcomeMessage();

function welcomeMessage(){
    let userResponse = prompt("welcome to jannah company!what is your name?");

    if(userResponse===null || userResponse.trim()===""){
        userResponse="guest";
 
    }
    

document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Jannah Company.`;}


  document
    .getElementById("message-form")
    .addEventListener("submit", submitMessage);

function submitMessage(event) {
    event.preventDefault(); // mencegah reload halaman

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    // 🔥 tampil di console
    console.log("=== New Message Submitted ===");
    console.log("Name   :", name);
    console.log("Email  :", email);
    console.log("Message:", message);
    console.log("============================");

    alert("Message sent successfully!");

    document.getElementById("message-form").reset();
}