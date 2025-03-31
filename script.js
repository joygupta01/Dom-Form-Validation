

function validate(e){
    e.preventDefault()
    const email =
    document.getElementById("email").value;
    const pass =
    document.getElementById("password").value;
    const age =
    document.getElementById("age").value;
    const msgbox =
    document.getElementById("message");

let message= ""
if (email === ""){
    message="Enter your email"
    msgbox.style.color="red"
}
else if (pass === ""){
    message="Enter your Password"
    msgbox.style.color="blue"
}
else if (age === ""){
    message="Enter your age"
    msgbox.style.color="yellow"
}
else{
    message="Login Successful"
    msgbox.style.color="green"

}
msgbox.innerText=message
}