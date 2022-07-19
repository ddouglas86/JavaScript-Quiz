var startButton = document.getElementById("start-btn");
var questionsCard = document.getElementById("questions");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-button");
var startPage = document.getElementById("start-page");
var instructionsElement = document.getElementById("instructions");

startButton.addEventListener("click", startQuiz);

var questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "Terminal/Bash", correct: false},
            {text: "For Loops", correct: false},
            {text: "console.log", correct: true}
        ]
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false}
        ]
    },
    {
        question: "To store groups of data in a single vaiable we use:",
        answers: [
            {text: "names", correct: false},
            {text: "a condition", correct: false},
            {text: "stings", correct: false},
            {text: "arrays", correct: true}
        ]
    },
    {
        question: "The condition in an if/then statement is enclosed in:",
        answers: [
            {text: "parenthesis", correct: true},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: false},
            {text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}
        ]
    }
];



function startQuiz() {
    console.log("Started");
    randomQuestions = questions.sort(() => Math.random() - .5);
    startPage.classList.add("hidden");
    instructionsElement.classList.add("hidden");
    startButton.classList.add("hidden");
    questionsCard.classList.remove("hidden");
    showQuestion();
};

function showQuestion(question) {
    questionElement.innerText = question.question;
};

function selectedAnswer() {

};