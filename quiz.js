const questions =[ {

    question : "who is the highest runs in cricket history ?",
    answer:[

        { text:"Ms Dhoni", correct:false},
        { text:"Sachin Tendulkar", correct:true},
        { text:"Jacques Kallis", correct:false},
        { text:"Kumar Sangakkara", correct:false}
    
    
    ]

  },
    {
        question:"who is the highest wicket taker in cricket history ?",
        answer:[
            {text : "Anil Kumble",correct:false},
            {text : "Muttiah Muralitharan",correct:true},
            {text : "James Anderson",correct:false},
            {text : "Shane Warne",correct:false},
        ]

    },

    {
        question:"who has the most 100 in odi history ?",
        answer:[
            {text : "Sachin Tendulkar",correct:false},
            {text : "Virat Kohli",correct:true},
            {text : "Ricky Ponting",correct:false},
            {text : "Rohit Sharma",correct:false}
        ]

    },

    {

        question:"which captain won all three icc trophies?",
        answer:[
            {text : "Ricky Ponting",correct:false},
            {text : "Pat Cummins",correct:false},
            {text : "Ms Dhoni",correct:true},
            {text : "Daren Sammy",correct:false}
        ]

    }






]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() 
{
    resetState();
    let curentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + "."+curentQuestion.question;

     curentQuestion.answer.forEach(answer => {

     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButtons.appendChild(button)
     if(answer.correct)
     {
         button.dataset.correct = answer.correct;
     }
     button.addEventListener("click", selectAnswer);

     });




}


function  resetState()
{
    nextButton.style.display ="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);

    }

}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect)
    {
        selectedBtn.classList.add("correct");
        score++;

    }

    else 
    {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {

        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display ="block";



}


function showScore() 
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton() 
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }

    else
    {
        showScore();
    }
}

nextButton.addEventListener("click",() => {

    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }

    else 
    {
        startQuiz();

    }
})


startQuiz();
