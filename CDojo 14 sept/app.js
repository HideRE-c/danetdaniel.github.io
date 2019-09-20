//pentru login
const loginModal = document.querySelector(".login-modal");
const mainScreenLogBtn = document.querySelector(".main-login");
const loginModalExitBtn = document.querySelector(".exit-btn-login");

const username = "daneci";
const pass = "bemti123";

const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", ()=>{
    const emailLogForm = document.querySelector("#username-login").value;
    const passLoginForm = document.querySelector("#password-login").value;
    
    if (emailLogForm === username && passLoginForm === pass) {
        alert("Bine ba");
    } else {
        alert("Tzapa");
    }
    console.log(passLoginForm);
})

mainScreenLogBtn.addEventListener("click", ()=>{
    loginModal.classList.remove("moveOut");
})

loginModalExitBtn.addEventListener("click", ()=>{
    loginModal.classList.add("moveOut");
})

//pentru signup
const signupModal = document.querySelector(".signup-modal");
const mainscreenSignUpBtn = document.querySelector(".main-signup");
const signupExitBtn = document.querySelector(".exit-btn-signup");

mainscreenSignUpBtn.addEventListener("click", ()=>{
    signupModal.classList.remove("moveOut");
})

signupExitBtn.addEventListener("click", ()=>{
    signupModal.classList.add("moveOut");
})
