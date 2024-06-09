import { balance } from "../../Config/blnc/balance-config.js";

// reset number and message
export const reset = () => {
  document.querySelector("#button-reset").addEventListener("click", () => {
    const randomNumber = Math.round(Math.random() * 9);
    document.querySelector("#num1").innerHTML = randomNumber;
    document.querySelector("#num2").innerHTML = randomNumber;
    document.querySelector("#num3").innerHTML = randomNumber;
    document.querySelector(".info").innerHTML = "";
  });
};

// reset all
export const resetAll = () => {
  document.querySelector("#reset-all").addEventListener("click", () => {
    document.querySelector("#num1").innerHTML = 9;
    document.querySelector("#num2").innerHTML = 9;
    document.querySelector("#num3").innerHTML = 9;
    document.querySelector(".info").innerHTML = "";
    balance.innerHTML = `$${0}`;
    localStorage.removeItem("dataBalance");
  });
};
