import { messageErrorModal, messageModalError } from "../../Message/MessageError/msg-error.js";
import { saveToLocalStorage } from "../../Database/local-storage.js";

// ---------- MODALBOX --------------
const addButton = document.getElementById("add-button");
export const balance = document.getElementById("balance");

export const addBalance = () => {
  const inputBalance = document.getElementById("input-balance");
  const modal = document.querySelector("[data-modal]");

  if (inputBalance.value === "") {
    return messageErrorModal("red", `Balance must be can't empty`);
  } else {
    balance.innerHTML = inputBalance.value;
    saveToLocalStorage(balance.innerHTML);
    inputBalance.value = 0;
    messageModalError.innerHTML = "";
    modal.close();
  }
};
addButton.addEventListener("click", addBalance);

// ---------- BALANCE CONFIG --------------

export const balanceConfig = (condition) => {
  let balanceResult;
  const dataLocalStorage = JSON.parse(localStorage.getItem("dataBalance"));

  if (condition === "jackpot") {
    balanceResult = dataLocalStorage + 10000;
  } else if (condition === "win") {
    balanceResult = dataLocalStorage + 250;
  } else {
    balanceResult = dataLocalStorage - 500;
  }

  balance.innerHTML = `$${balanceResult}`;
  localStorage.setItem("dataBalance", JSON.stringify(balanceResult));
};
