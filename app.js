import { algorithmNumber } from "./js/Config/algorithm-num.js";
import { messageError } from "./js/Message/MessageError/msg-error.js";
import { modalStyle } from "./js/StyleScript/Modal/modal-script.js";
import { reset, resetAll } from "./js/StyleScript/Reset/reset.js";

const generateButton = document.querySelector("#button-generate");
const resetButton = document.querySelector("#button-reset");

// ---------- MAIN --------------
const generateNumber = () => {
  algorithmNumber();
  generateButton.style.display = "none";
  resetButton.style.display = "none";
  document.querySelector(".info").innerHTML = "";
};

generateButton.addEventListener("click", () => {
  if (localStorage.getItem("dataBalance") === null || localStorage.getItem("dataBalance") < 500) {
    return messageError("red", "balance must be at least $500");
  } else {
    generateNumber();
  }
});

reset();
resetAll();
modalStyle();
