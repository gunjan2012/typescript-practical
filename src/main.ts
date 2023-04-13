import { memoryOperation } from "./modules/memory.js";
import {
  calcInput,
  eularButtons,
  numericValues,
  plusMinus,
  equalBtn,
  ceilFloor,
  powerButtons,
  deleteBtn,
  clearBtn,
  btnDeg,
  secondBtn,
  factorialBtn,
  secondPannelButtons,
} from "./modules/utils.js";

// display the value of button when clicked
eularButtons.forEach((btn:HTMLButtonElement):void => {
  btn.addEventListener("click", (e:MouseEvent) => {
    let eularSign:string = (e.target as HTMLInputElement).innerText;
    switch (eularSign) {
      case "π":
        calcInput.value = Math.PI.toFixed(2);
        break;
      case "e":
        calcInput.value = Math.E.toFixed(4);
        break;
      case "exp":
        calcInput.value += (e.target as HTMLButtonElement).value;
        break;
      case "mod":
        calcInput.value += (e.target as HTMLButtonElement).value;
        break;
      case "F-E":
        calcInput.value = Number(calcInput.value).toExponential();
        break;
      default:
        calcInput.value += eularSign;
    }
  });
});

// All number values
numericValues.forEach((btn:HTMLButtonElement):void => {
  btn.addEventListener("click", (e:MouseEvent) => {
    let num:string = (e.target as HTMLInputElement).innerHTML;
    calcInput.value += num;
  });
});

// plus minus button
plusMinus.addEventListener("click", ():void => {
  calcInput.value = (Number(calcInput.value) * -1).toString();
});

// // solve the equation and display the answer
let solveEq = ():void => {
  let valueByuser:string = calcInput.value;
  let numInput:string = valueByuser.slice(3);
  let angle:number = Number(((Number(numInput) * Math.PI) / 180).toFixed(4));
  let trignoFunc:string = valueByuser.slice(0, 3);
  let otherFunc:string = valueByuser.slice(0, 2);
  let numericVal:number = Number(valueByuser.slice(2));
  let regexNum:string = valueByuser.replace(/^0+/,"");

  if (valueByuser.slice(0, 1) == "√") {
    calcInput.value = Math.sqrt(Number(valueByuser.slice(1))).toString();
  } else if (otherFunc == "3√") {
    calcInput.value = (numericVal ** (1 / 3)).toFixed(4);
  } else if (otherFunc == "ln") {
    calcInput.value = Math.log(numericVal).toFixed(4);
  } else if (otherFunc == "e^") {
    calcInput.value = (Math.E ** numericVal).toFixed(4);
  } else if (otherFunc == "2^") {
    calcInput.value = (2 ** numericVal).toFixed(4);
  } else if (trignoFunc == "sin") {
    calcInput.value = Math.sin(angle).toFixed(4);
  } else if (trignoFunc == "cos") {
    calcInput.value = Math.cos(angle).toFixed(4);
  } else if (trignoFunc == "tan") {
    calcInput.value = Math.tan(angle).toFixed(4);
  } else if (trignoFunc == "log") {
    calcInput.value = (Math.log(Number(numInput))/Math.log(10)).toFixed(4);
  } else if(valueByuser == ""){
    calcInput.value = "";
  } else {
    calcInput.value = eval(regexNum);
  }
};
equalBtn.addEventListener("click", solveEq);

// ceil-floor button
ceilFloor.forEach((btn):void => {
  btn.addEventListener("click", (e:MouseEvent):void => {
    if ((e.target as HTMLButtonElement).value == "ceil") {
      calcInput.value = Math.ceil(Number(calcInput.value)).toString();
    } else {
      calcInput.value = Math.floor(Number(calcInput.value)).toString();
    }
  });
});

// buttons functionality
powerButtons.forEach((btn:HTMLButtonElement):void => {
  btn.addEventListener("click", (e:MouseEvent):void => {
    let insVal:string = (e.target as HTMLButtonElement).value; 
    let disVal:number = Number(calcInput.value);
    switch (insVal) {
      case "oneByx":
        calcInput.value += "1/";
        break;
      case "abs":
        calcInput.value = Math.abs(disVal).toString();
        break;
      case "squareVal":
        calcInput.value += "**2";
        break;
      case "cubeVal":
        calcInput.value += "**3";
        break;
      case "squareRoot":
        calcInput.value += "√";
        break;
      case "cubeRoot":
        calcInput.value += "3√";
        break;
      case "twoPowerX":
        calcInput.value += "2^";
        break;
      case "tenPowerX":
        calcInput.value += "10**";
        break;
      case "ePowerx":
        calcInput.value += "e^";
        break;
      case "xByTen":
        calcInput.value += "/10";
        break;
      case "xPowery":
        calcInput.value += "**";
        break;
      case "baseTwo":
        calcInput.value = (Math.log(disVal) / Math.log(2)).toFixed(4);
        break;
      default:
        calcInput.value += insVal;
    }
  });
});

// clear the calculator display
clearBtn.addEventListener("click", ():string => calcInput.value = "" );

// backspace - delete the one value
deleteBtn.addEventListener("click",():string => calcInput.value = calcInput.value.slice(0, calcInput.value.length - 1));

// factorial function
let factEval = ():void => {
  let n:number = Number(calcInput.value);
  let answer:number = 1;
  if (n == 0 || n == 1) {
    calcInput.value = answer.toString();
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    calcInput.value = answer.toString();
  } else {
    calcInput.value = "Error";
  }
};
factorialBtn.addEventListener("click", factEval);

// degree to radian and radian to degree
let degTorad = ():void => {
  if (btnDeg.innerHTML == "DEG") {
    calcInput.value = ((Number(calcInput.value) * Math.PI) / 180).toFixed(3);
    btnDeg.innerHTML = "RAD";
  } else {
    btnDeg.innerHTML = "DEG";
    calcInput.value = ((Number(calcInput.value) * 180) / Math.PI).toFixed(3);
  }
};
btnDeg.addEventListener("click", degTorad);

// Second button pannel
let secondFunc = ():void => {
  for (let i = 0; i < secondPannelButtons.length; i++) {
    const singleBtn:HTMLButtonElement = secondPannelButtons[i]!;
    if (singleBtn.classList.contains("btn-hide")) {
      singleBtn.classList.add("btn-show");
      singleBtn.classList.remove("btn-hide");
    } else {
      singleBtn.classList.add("btn-hide");
      singleBtn.classList.remove("btn-show");
    }
  }
};
secondBtn.addEventListener("click", secondFunc);

memoryOperation();