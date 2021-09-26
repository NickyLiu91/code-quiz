//create my questions
var myQuestions = [
{
question: "What is Javascript?",
answers:{
a: "Website",
b: "Computer",
c: "Markup Language",
d: "Programming Language",
},
correctAnswer: 'd'    
},
{
    question: "How do you write comments in Javascript?",
    answers:{
    a: "//",
    b: "<!-- -->",
    c: "/* */",
    d: "none",
    },
    correctAnswer: 'a'    
    },
    {
        question: "Which of the following is used for javascript loops?",
        answers:{
        a: "for",
        b: "do not for",
        c: "condition",
        d: "if",
        },
        correctAnswer: 'a'    
        },
        {
            question: "Which of the following is a value of the javascript boolean datatype?",
            answers:{
            a: "right",
            b: "correct",
            c: "false",
            d: "return",
            },
            correctAnswer: 'c'    
            },
            {
                question: "Which of the following is NOT a comparison operator?",
                answers:{
                a: "===",
                b: "!=",
                c: ">",
                d: "!@+",
                },
                correctAnswer: 'd'    
                },

]








//declare variables for elements
var clickBegin = document.querySelector(".header-button");
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
var headerButton = document.getElementById("button-initiator");
headerButton.setAttribute()
    timerCount = 180;


}
//adding the click event listener to to begin quiz button
buttonInitiator.addEventListener("click", beginQuiz);
