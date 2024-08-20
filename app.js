const questions = [
    {
        question: "Which is Largest animal in the world?",
        answere: [
            {text: "shark",correct:false},
            {text: "Whale",correct:true},
            {text: "Lion",correct:false},
            {text: "turtle",correct:false}
        ]
    },
    {
        question: "Which is Largest animal in the world?",
        answere: [
            {text: "shark",correct:false},
            {text: "Whale",correct:true},
            {text: "Lion",correct:false},
            {text: "turtle",correct:false}
        ]
    },
    {
        question: "Which is Largest animal in the world?",
        answere: [
            {text: "shark",correct:false},
            {text: "Whale",correct:true},
            {text: "Lion",correct:false},
            {text: "turtle",correct:false}
        ]
    },
    {
        question: "Which is Largest animal in the world?",
        answere: [
            {text: "shark",correct:false},
            {text: "Whale",correct:true},
            {text: "Lion",correct:false},
            {text: "turtle",correct:false}
        ]
    },
];

const questionElement = document.getElementById("question");
const answereButton = document.getElementById("answere-buttons");
const nextButton = document.getElementById("next-btn");


let currQuesIndex = 0;
let score = 0;

function startQuizz(){
    currQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
};


function showQuestion(){
    resetState();
    let currQues = questions[currQuesIndex];
    let QuesNo = currQuesIndex +1;
    questionElement.innerHTML = `${QuesNo} . ${currQues.question}`;
    currQues.answere.forEach(answere =>{ 
        const button = document.createElement("button");
        button.innerHTML = answere.text;
        button.classList.add("btn");
        answereButtons.appendChild(button);
        if (answere.correct){
            button.dataset.correct =answere.correct;
        }
        button.addEventListener("click",selectAnswere)
    })

}

function resetState(){
    nextButton.style.display = "none";
    while(answereButtons.firstChild){
        answereButtons.removeChild(answereButtons.firstChild);
    }
}


function selectAnswere(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }   
    Array.from(answereButtons.childeren).forEach(button => {
        if (button.dataset.correct === 'true'){
            button.classList.add("correct");
        }bi=utton.disabled = true;
    });
    nextButton.style.display = "block";   
}


nextButton.addEventListener("click",() =>{
    if (currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuizz();
    }
})


function handleNextButton(){
    currQuesIndex++;
    if (currQuesIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scor ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}