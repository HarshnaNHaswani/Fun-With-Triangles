let formQuiz = document.querySelector("#triangles-quiz");
let btnSubmit = document.querySelector("#submit");
let output = document.querySelector("#output");

const correctAnswers = ['90°', 'right-angled']; 

function calculateScore(){
    let score = 0, index = 0;
    const userAnswers = new FormData(formQuiz);
    for (const value of userAnswers.values()) { 
        console.log(value, correctAnswers[index])       
        if(value === correctAnswers[index]) score = score + 1;
        index = index + 1;
    }
    output.innerText =`Your Score is ${score}`;
}

btnSubmit.addEventListener("click", calculateScore)