window.onload=function(){
    let menuIcon = document.querySelector(".menu-icon");
    let topBar = document.querySelector(".top-bar");
    let midBar = document.querySelector(".middle-bar");
    let bottomBar = document.querySelector(".bottom-bar");
    let nav = document.querySelector("nav");
    let navContainer = document.querySelector(".nav-container");

    // nav.classList.add("no-display");

    menuIcon.addEventListener("click", function(){
        topBar.classList.toggle("top-active");
        midBar.classList.toggle("middle-active");
        bottomBar.classList.toggle("bottom-active");
        navContainer.classList.toggle("onScreen");
        nav.classList.toggle("nav-remove-border");
        // nav.classList.toggle("fade-anim");
    })
}