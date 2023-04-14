import {
  calcInput,
  calcMemory,
  mStore,
  mMinus,
  mPlus,
  mRecall,
  mClear,
} from "./utils.js";

const memoryOperation = ():void => {
  //Show values that are in memory
  window.addEventListener("load", ():void => {
    calcMemory.innerText = localStorage.getItem("memoryKey")!;
  });

  // Memory operations
  // Clear the memory
  mClear.addEventListener("click",():void=>{
    localStorage.removeItem("memoryKey");
    calcMemory.innerText = localStorage.getItem("memoryKey")!;
  });

  // Recall the Memory : close browser and again start and when click MR it will take back ur value
  mRecall.addEventListener("click", ():void=>{
    calcInput.value += localStorage.getItem("memoryKey")!;
  });

  // Addtion to Memory
  mPlus.addEventListener("click", ():void=>{
    let localItem:string = localStorage.getItem("memoryKey")!;
    let disVal:string = calcInput.value!;
    let ans:number = Number(localItem) + Number(disVal) ;
    localStorage.setItem("memoryKey",ans.toString());
    calcMemory.innerText = localStorage.getItem("memoryKey")!;
  });

  // Subtraction to Memory
  mMinus.addEventListener("click", ():void=>{
    let localItem:string = localStorage.getItem("memoryKey")!;
    let disVal:string = calcInput.value!;
    let ans:number = Number(localItem) - Number(disVal) ;
    localStorage.setItem("memoryKey",ans.toString());
    calcMemory.innerText = localStorage.getItem("memoryKey")!;
  });

  // Store value to Memory
  mStore.addEventListener("click", ():void=> {
    let disVal:string = calcInput.value!;
    localStorage.setItem("memoryKey",eval(disVal));
    calcMemory.innerText = localStorage.getItem("memoryKey")!;
  });
};

export { memoryOperation };
