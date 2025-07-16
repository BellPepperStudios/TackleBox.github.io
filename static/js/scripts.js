const inputelem = document.getElementById("username");
const outputelem = document.getElementById("output");
const errorelem = document.getElementById("error");
const stringbean = "troutmate";
const eu = "U2FsdGVkX1/CqPn+f/wUqIHEhnep8VOn0rSZRXk4u/M="; 
const ep = "U2FsdGVkX1+f4bFBPTla9AZQG+tJCs1a4lcbDWrJZ3nNgQ/9Zf+7R3AX3r8FcBHb"; 
const w = "U2FsdGVkX19OqXOyU0yKC1yrFU7TN0ExI2omFT9bOGGYzhgjvDx8kvHGeaN1kH/m";

window.onload = function() {
    inputelem.value = "";
    outputelem.textContent = "";
};

inputelem.addEventListener("input", function() {
    outputelem.textContent = inputelem.value;
});

function login() {
    const inputUser = document.getElementById("username").value;
    const inputPass = document.getElementById("password").value;

    const du = CryptoJS.AES.decrypt(eu, stringbean).toString(CryptoJS.enc.Utf8);
    const dp = CryptoJS.AES.decrypt(ep, stringbean).toString(CryptoJS.enc.Utf8);
    const wd = CryptoJS.AES.decrypt(w, stringbean).toString(CryptoJS.enc.Utf8);

    if (inputUser === du && inputPass === dp) {
        window.location.href = wd; // redirect to home
    } else {
        console.log("Incorrect credentials.");
        errorelem.textContent = "Incorrect username or password.";
    }
}