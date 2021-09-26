//declare variables for elements
var clickBegin = document.querySelector(".header-button");
var buttonInitiator = document.querySelector(".button-initiator");
var quizResult = document.querySelector(".quiz-results");
var scoreCard = document.querySelector(".corect-incorect-section");
var ScoreCor = document.querySelector(".correct");
var ScoreIncor= document.querySelector("incorrect");
var resetQuiz = document.querySelector(".reset-button");
var quizTimer = document.querySelector(".reset-button");
var timeText = document.querySelector(".timer-text");
var timeCount = document.querySelector(".timer-count");
var checkScore = document.querySelector(".score-button");

var timerCount;

//set the timer off when beggining quiz
function beginQuiz() {
var headerButton = document.getElementById("button-initiator");
headerButton.setAttribute()
    timerCount = 180;


}
//adding the click event listener to to begin quiz button
buttonInitiator.addEventListener("click", beginQuiz);
