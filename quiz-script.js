const questions = [
    {
        question: "What is the capital of France",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which programming language is used for Web Development?",
        answers: ["Python", "JavaScript", "C++", "Ruby"],
        correct: 1
    }
];
let index = 0;
let isCorrect = false;

const quizQuestion = document.getElementById("question-text");
const answerButton1 = document.getElementById("button-1");
const answerButton2 = document.getElementById("button-2");
const answerButton3 = document.getElementById("button-3");
const answerButton4 = document.getElementById("button-4");
const quizFeedback = document.getElementById("feedback");
const nextQButton = document.getElementById("next-question");

// display one question and the button choices
function displayQuestion(question, answers) {
    quizQuestion.textContent = question;

    answerButton1.textContent = answers[0];
    answerButton1.disabled = false;

    answerButton2.textContent = answers[1];
    answerButton2.disabled = false;

    answerButton3.textContent = answers[2];
    answerButton3.disabled = false;

    answerButton4.textContent = answers[3];
    answerButton4.disabled = false;

    quizFeedback.textContent = "";
    nextQButton.style.display = "none";

}

function handleAnswerSelection(event) {
    const selectButton = event.target;

    isCorrect = selectButton === questions[index].answers[questions.correct];

    // compare selection to each buttons correct factor
    if (selectButton === answerButton1) {
        // if selected one and is correct then isCorrect; if not then check next one
        isCorrect = questions[index].correct === 0;
    } else if (selectButton === answerButton2) {
        isCorrect = questions[index].correct === 1;
    } else if (selectButton === answerButton3) {
        isCorrect = questions[index].correct === 2;
    } else if (selectButton === answerButton4) {
        isCorrect = questions[index].correct === 3;
    }

    quizFeedback.textContent = isCorrect ? "Correct!" : "Wrong answer.";

    answerButton1.disabled = true;
    answerButton2.disabled = true;
    answerButton3.disabled = true;
    answerButton4.disabled = true;

    nextQButton.style.display = "block";
}

// if a button is clicked, nextquestion button is availble and when clicked should navigate to
//next question with displayQuestion()
function nextQuestion() {
    index++; // increase through questions array
    if (index < questions.length) { // if there are more questions
        displayQuestion(questions[index].question, questions[index].answers); // display next question
    } else { // no more questions
        quizQuestion.textContent = "Quiz completed!";
        // get rid of buttons
        answerButton1.style.display = "none";
        answerButton2.style.display = "none";
        answerButton3.style.display = "none";
        answerButton4.style.display = "none";
        nextQButton.style.display = "none";
    }
}

answerButton1.addEventListener("click", handleAnswerSelection);
answerButton2.addEventListener("click", handleAnswerSelection);
answerButton3.addEventListener("click", handleAnswerSelection);
answerButton4.addEventListener("click", handleAnswerSelection);

nextQButton.addEventListener("click", nextQuestion);

//add arguments
displayQuestion(questions[0].question, questions[0].answers);
