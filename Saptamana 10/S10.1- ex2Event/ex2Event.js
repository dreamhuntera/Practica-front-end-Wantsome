//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

const sqrt = (x) => {
    return Math.sqrt(x);
};

const halfNum = (x) => {
    return Math.divide(x, 2);
}

const percentage = (percentFor, percentOf) => {
    return Math.floor(percentFor/percentOf * 100);
}
const circleArea = (radius) => {
    return Math.PI * (radius * radius);
};

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei
const sqrtInput = document.getElementById('square');
const halfNumInput = document.getElementById('half');
const percentageInput = document.getElementById('percent1');
const percentageInput2 = document.getElementById('percent2');
const circleAreaInput = document.getElementById('area');

const eventHandlerSqrt = () => {
    const sqrtInputValue = sqrtInput.value;
    const sqrtResultValue = sqrt(sqrtInputValue);

    const displayResult = document.getElementById('sol');
    displayResult.innerText = `Asadar, patratul numarului :  ${sqrtInputValue} este =  ${sqrtResultValue}`;
    
};

const buttonToBePressed = document.getElementById('sqr-btn');
buttonToBePressed.addEventListener('click', eventHandlerSqrt);
///====Math divide is not a function
const eventHandlerHalfNum = () => {
    const halfNumInputValue = halfNumInput.value;
    const halfNumResultValue = halfNum(halfNumInputValue);

    const displayResult = document.getElementById('sol');
    displayResult.innerText = `Asadar, jumatatea numarului :  ${halfNumInputValue} este =  ${halfNumResultValue}`;
    
};
const buttonForHalfNum = document.getElementById('half-btn');
buttonForHalfNum.addEventListener('click', eventHandlerHalfNum);
//---PROCENTAJ
const eventHandlerPerc = () => {
    const percInputValue = percentageInput.value;
    const percInputValue2 = percentageInput2.value;
    const percResultValue = percentage(percInputValue, percInputValue2);
    
    const displayResult = document.getElementById('sol');
    displayResult.innerText = `Asadar, procentul ${percInputValue} din ${percInputValue2} este =  ${percResultValue}`;
    
};
const buttonForPerc = document.getElementById('prc-btn');
buttonForPerc.addEventListener('click', eventHandlerPerc);

///=== aria cercului
const eventHandlerCircleArea = () => {
    const circleAreaInputValue = circleAreaInput.value;
    const circleAreaResultValue = circleArea(circleAreaInputValue);

    const displayResult = document.getElementById('sol');
    displayResult.innerText = `Asadar, aria cercului cu raza ${circleAreaInputValue} este =  ${circleAreaResultValue}`
};

const buttonforCircleArea = document.getElementById('area-btn');
buttonforCircleArea.addEventListener('click', eventHandlerCircleArea);
circleAreaInput.addEventListener('keypress', eventHandlerCircleArea); //==KEYPRESS pentru circle areas


sqrtInput.addEventListener('keydown', () => {
    console.log('afisez');
  });

//3
// Bonus: faceti sa functioneze si la key press pe langa click
