import { calcInput, calcMemory, mStore, mMinus, mPlus, mRecall, mClear, } from "./utils.js";
const memoryOperation = () => {
    //Show values that are in memory
    window.addEventListener("load", () => {
        calcMemory.innerText = localStorage.getItem("memoryKey");
    });
    // Memory operations
    // Clear the memory
    mClear.addEventListener("click", () => {
        localStorage.removeItem("memoryKey");
        calcMemory.innerText = localStorage.getItem("memoryKey");
    });
    // Recall the Memory : close browser and again start and when click MR it will take back ur value
    mRecall.addEventListener("click", () => {
        calcInput.value += localStorage.getItem("memoryKey");
    });
    // Addtion to Memory
    mPlus.addEventListener("click", () => {
        let localItem = localStorage.getItem("memoryKey");
        let disVal = calcInput.value;
        let ans = Number(localItem) + Number(disVal);
        localStorage.setItem("memoryKey", ans.toString());
        calcMemory.innerText = localStorage.getItem("memoryKey");
    });
    // Subtraction to Memory
    mMinus.addEventListener("click", () => {
        let localItem = localStorage.getItem("memoryKey");
        let disVal = calcInput.value;
        let ans = Number(localItem) - Number(disVal);
        localStorage.setItem("memoryKey", ans.toString());
        calcMemory.innerText = localStorage.getItem("memoryKey");
    });
    // Store value to Memory
    mStore.addEventListener("click", () => {
        let disVal = calcInput.value;
        localStorage.setItem("memoryKey", eval(disVal));
        calcMemory.innerText = localStorage.getItem("memoryKey");
    });
};
export { memoryOperation };
