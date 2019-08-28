window.onload=function(){
    let darkToggler = document.querySelector(".darkModeButton");
    let body = document.querySelector("nav");
    
    body.classList.add(".normal");

    darkToggler.addEventListener("click", function() {
        darkToggler.classList.toggle(".darkModeActive");
        body.classList.toggle(".darkModeActive");
    })
}