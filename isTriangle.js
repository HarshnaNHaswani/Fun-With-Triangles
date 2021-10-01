let inputAngle1 = document.querySelector("#angle1");
let inputAngle2 = document.querySelector("#angle2");
let inputAngle3 = document.querySelector("#angle3");
let btnIsTriangle = document.querySelector("#is-triangle");
let outputH2 = document.querySelector("#out-put");

function calculateSumOfAngles(angle1, angle2, angle3){
    sum = angle1 + angle2 + angle3;
    return sum;
}
function isTriangle(){
    let angle1 = Number(inputAngle1.value);
    let angle2 = Number(inputAngle2.value);
    let angle3 = Number(inputAngle3.value);
    console.log(angle1);
    if(inputAngle1.value === "" || inputAngle2.value === "" || inputAngle3.value === "" ){
        outputH2.innerText="Please enter all fields";
    }
    else if((angle1 < 0 || angle2 < 0 || angle3 < 0 )){
        outputH2.innerText="Please enter positive value";
    }
        
    else{
        let sum= calculateSumOfAngles(angle1, angle2, angle3);
        if(sum === 180) outputH2.innerText=  "It forms a triangle";
        else outputH2.innerText="It does not form a triangle";
    }
}

btnIsTriangle.addEventListener("click", isTriangle);
