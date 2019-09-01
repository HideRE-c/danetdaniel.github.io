          // Menu function
let menuIcon = document.querySelector(".menu-btn");
let topBar = document.querySelector(".top-bar");
let midBar = document.querySelector(".middle-bar");
let bottomBar = document.querySelector(".bottom-bar");
let nav = document.querySelector(".nav-links");

// nav.classList.add("no-display");

menuIcon.addEventListener("click", function(){
    topBar.classList.toggle("top-active");
    midBar.classList.toggle("middle-active");
    bottomBar.classList.toggle("bottom-active");
    nav.classList.toggle("visible");
    // nav.classList.toggle("fade-anim");
})

          // Timer functions
document.getElementById('timer').innerHTML =
  05 + ":" + 00;

// startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

// const startBtn = document.getElementsByClassName("startTimer");
startBtn.addEventListener("click", startTimer());