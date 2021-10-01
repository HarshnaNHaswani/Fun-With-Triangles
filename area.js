let inputVal= document.querySelectorAll(".input");
let btnCalculateArea = document.querySelector("#calculate-area");
let outputArea = document.querySelector("#output-area");

function calculateArea(){
    if(inputVal[0].value === "" || inputVal[1].value === ""){
        outputArea.innerText="Please enter the value of all fields";
    }
    else if((Number(inputVal[0].value) < 0 || Number(inputVal[1].value) < 0 )){
        outputArea.innerText="Please enter positive value";
    }
    else{
        let area = 0.5 * Number(inputVal[0].value) * Number(inputVal[1].value);
        outputArea.innerText = `Area: ${area}`;
    }
    
}

btnCalculateArea.addEventListener("click", calculateArea);