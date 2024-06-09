import { checkingInfo } from "./validation-num.js";

const generateButton = document.querySelector("#button-generate");
const resetButton = document.querySelector("#button-reset");

// ---------- ALGORITMA NUMBER --------------
export const algorithmNumber = () => {
  const digit1 = document.querySelector("#num1");
  const digit2 = document.querySelector("#num2");
  const digit3 = document.querySelector("#num3");

  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let index = 0;
  const start = new Date().getTime();

  const timeRandom1 = Math.random() * 10;
  const timeRandom2 = Math.random() * 10;
  const timeRandom3 = Math.random() * 10;

  const timeStop1 = Math.round(timeRandom1) * 800;
  const timeStop2 = Math.round(timeRandom2) * 900;
  const timeStop3 = Math.round(timeRandom3) * 1000;

  const timeAll = [timeStop1, timeStop2, timeStop3];
  const timeMax = Math.max(...timeAll);

  setInterval(() => {
    if (new Date().getTime() - start > timeStop1) {
      clearInterval;
      return;
    }
    digit1.innerHTML = num[index++];
    if (index === num.length) index = 0;
  }, 100);

  setInterval(() => {
    if (new Date().getTime() - start > timeStop2) {
      clearInterval;
      return;
    }
    digit2.innerHTML = num[index++];
    if (index === num.length) index = 0;
  }, 100);

  setInterval(() => {
    if (new Date().getTime() - start > timeStop3) {
      clearInterval;
      return;
    }
    digit3.innerHTML = num[index++];
    if (index === num.length) index = 0;
  }, 100);

  setTimeout(() => {
    const resultDigit1 = digit1.innerHTML;
    const resultDigit2 = digit2.innerHTML;
    const resultDigit3 = digit3.innerHTML;
    checkingInfo(resultDigit1, resultDigit2, resultDigit3);

    generateButton.style.display = "block";
    resetButton.style.display = "block";
  }, timeMax);
};

// random jackpot number
export const jackpotNumber = (digit1, digit2, digit3) => {
  if (digit1 === digit3) {
    return `${digit2}${digit3}${digit1}`;
  } else {
    return [digit1, digit2, digit3].reverse().join("");
  }
};
