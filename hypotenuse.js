let inputSides = document.querySelectorAll(".sides");
let btnCalculateHypo = document.querySelector("#calculate-hypotenuse");
let outputHypotenuse = document.querySelector("#output-hypotenuse");

function calculateHypotenuse(){
    if(inputSides[0].value === "" || inputSides[1].value === ""){
        outputHypotenuse.innerText="Please enter the value of both sides";
    }
    else if((Number(inputSides[0].value) < 0 || Number(inputSides[1].value) < 0 )){
        outputHypotenuse.innerText="Please enter positive value";
    }
    else{
        let hypotenuse = Math.sqrt((inputSides[0].value **2) + (inputSides[1].value **2));
        outputHypotenuse.innerText = `Hypotenuse: ${hypotenuse.toFixed(3)}`;
    }
    
}

btnCalculateHypo.addEventListener("click", calculateHypotenuse);