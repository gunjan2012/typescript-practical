const calcInput:HTMLInputElement = document.querySelector("#screen")!;
const calcMemory:HTMLSpanElement = document.querySelector("#memory")!;
const plusMinus:HTMLButtonElement = document.querySelector(".plus-minus")!;
const equalBtn:HTMLButtonElement = document.querySelector(".calculator-equal")!;
const deleteBtn:HTMLButtonElement = document.querySelector(".del-btn")!;
const clearBtn:HTMLButtonElement = document.querySelector(".clr-btn")!;
const factorialBtn:HTMLButtonElement = document.querySelector(".fact-btn")!;
const btnDeg:HTMLButtonElement = document.querySelector("#deg")!;
const secondBtn:HTMLButtonElement = document.querySelector("#secondPannel")!;
const mStore:HTMLButtonElement = document.querySelector("#mStore")!;
const mMinus:HTMLButtonElement = document.querySelector("#mMinus")!;
const mPlus:HTMLButtonElement = document.querySelector("#mPlus")!;
const mRecall:HTMLButtonElement = document.querySelector("#mRecall")!;
const mClear:HTMLButtonElement = document.querySelector("#mClear")!;
const eularButtons:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".eular-value");
const numericValues:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".calculator-number");
const ceilFloor:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".ceil-floor");
const powerButtons:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".power");
const secondPannelButtons:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-change");

export {
  calcInput,
  calcMemory,
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
  mStore,
  mMinus,
  mPlus,
  mRecall,
  mClear,
  factorialBtn,
  secondPannelButtons,
};
