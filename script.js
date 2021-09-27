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
    console.log("These are my question!" + myQuestions[i]);
}



//declare variables for elements
var startButton = document.querySelector("#start-button");
var buttonInitiator = document.querySelector(".button-initiator");
var quizResult = document.querySelector(".quiz-results");
var resetQuiz = document.querySelector(".reset-button");
var quizTimer = document.querySelector(".reset-button");
var timeText = document.querySelector(".timer-text");
var timeCount = document.querySelector(".timer-count");
var checkScore = document.querySelector(".score-button");

var timerCount;

//set the timer off when beggining quiz
function beginQuiz() {
    console.log("hello");
    return;
}
//var headerButton = document.getElementById("button-initiator");
//headerButton.setAttribute()
    //timerCount = 180;


//}
//adding the click event listener to to begin quiz button

// when the user clicks on the startButton element, the beginQuiz function will run
startButton.addEventListener("click", beginQuiz);
