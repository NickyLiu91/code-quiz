//questions array with questions
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



for (var i = 0; i < myQuestions.length; i++) {
    console.log("These are my questions!" + myQuestions[i]);
}






//declare variables for elements
var scoreButton = document.querySelector("#score-button");
var quizQuestions = document.querySelector(".quiz-questions");
var introText = document.querySelector(".intro-text");
var quizTimerBox = document.querySelector(".quiz-timerbox");
var quizTimer = document.querySelector(".quiz-timer");
var timerText = document.querySelector(".timer-text");
var timerCount = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");
var answerButton1 = document.querySelector("#answer-button1");
var answerButton2 = document.querySelector("#answer-button2");
var answerButton3 = document.querySelector("#answer-button3");
var answerButton4 = document.querySelector("#answer-button4");
var questionTitle = document.querySelector("#question-title");
var question = document.querySelector(".question");


//var noWin = false;
var timer;
var score = 0;
var questionNumber = 0;
var secondsLeft = 60;
var IncorrectPenalty = 5;


//press the begin button to begin the quiz
function beginButton() {
    // hide the introText
    introText.setAttribute('hidden', true)
    startButton.setAttribute('hidden', true)
    showQuestions()
    startTimer()
}

//game is over when timer reaches 0
function finishQuiz() {
    introText.textContent = "Quiz is over";
    wrongAnwsers++
    startButton.disabled = false;


}

//set timer

function startTimer() {
    timer = setInterval(function () {
        secondsLeft--;
        timerCount.textContent = secondsLeft;
        // if (secondsLeft >= 0) {

        //     if (noWin && secondsLeft > 0) {
        //         clearInterval(timer);

        //     }
        // }
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function showQuestions() {
    // show the firstQuestion
    question.removeAttribute("hidden")
    questionTitle.textContent = myQuestions[questionNumber].question
    answerButton1.textContent = myQuestions[questionNumber].answers.a
    answerButton2.textContent = myQuestions[questionNumber].answers.b
    answerButton3.textContent = myQuestions[questionNumber].answers.c
    answerButton4.textContent = myQuestions[questionNumber].answers.d

    questionNumber++

}

//}
//adding the click event listener to to begin quiz button

// when the user clicks on the startButton element, the beginQuiz function will run
startButton.addEventListener("click", beginButton);
answerButton1.addEventListener("click", showQuestions);
answerButton2.addEventListener
answerButton3
answerButton4
