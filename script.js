




//declare variables
var clickingTimer = document.querySelector(".timer-count");
var buttonInitiator = document.querySelector(".button-initiator");

var timerCount;

//set the timer off when beggining quiz
function beginQuiz() {
timerCount = 180;


}

buttonInitiator.addEventListener("click", beginQuiz);
