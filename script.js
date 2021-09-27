//create my questions using gandalf
var myQuestions = [
    {
        question: "What is Javascript?",
        answers: {
            a: "Website",
            b: "Computer",
            c: "Markup Language",
            d: "Programming Language",
        },
        correctAnswer: 'd'
    },
    {
        question: "How do you write comments in Javascript?",
        answers: {
            a: "//",
            b: "<!-- -->",
            c: "/* */",
            d: "none",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which of the following is used for javascript loops?",
        answers: {
            a: "for",
            b: "do not for",
            c: "condition",
            d: "if",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which of the following is a value of the javascript boolean datatype?",
        answers: {
            a: "right",
            b: "correct",
            c: "false",
            d: "return",
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of the following is NOT a comparison operator?",
        answers: {
            a: "===",
            b: "!=",
            c: ">",
            d: "!@+",
        },
        correctAnswer: 'd'
    },

]
console.log(myQuestions.length);
console.log(myQuestions[0]);
console.log(myQuestions[1]);
console.log(myQuestions[2]);
console.log(myQuestions[3]);
console.log(myQuestions[4]);
console.log(myQuestions[5]);


for (var i = 0; i < myQuestions.length; i++) {
    console.log("These are my questions!" + myQuestions[i]);
}



//declare variables for elements
var checkScore = document.querySelector("#score-button");
var leftContainer = document.querySelector(".quiz-questions");
var textGone = document.querySelector(".hide-text");
var rightContainer = document.querySelector(".quiz-timerbox");
var timerSection = document.querySelector(".quiz-timer");
var secondsField = document.querySelector(".timer-text");
var beginTime = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");



var timerCount;
var noWin = false;
var timer;
var timercount;
var rightAnwsers = 0;
var wrongAnwsers = 0;

//press the begin button to begin the quiz
function beginButton() {
    noWin = false;
    timerCount = 800;
    //prevent begin button from being clicked on when timer is clicking
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

//game is over when timer reaches 0
function finishQuiz() {
    textGone.textContent = "Quiz is over";
    wrongAnwsers++
    startButton.disabled = false;


}

//set timer

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timeCount.textContent = timerCount;
        if (timerCount >= 0) {

            if (noWin && timerCount > 0) {
                clearInterval(timer);

            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}



//}
//adding the click event listener to to begin quiz button

// when the user clicks on the startButton element, the beginQuiz function will run
startButton.addEventListener("click", beginButton);
