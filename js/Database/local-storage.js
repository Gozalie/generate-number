import { balance } from "../Config/blnc/balance-config.js";

// ---------- LOCAL STORAGE --------------
export const saveToLocalStorage = (data) => {
  if (localStorage.getItem("dataBalance") === null) {
    localStorage.setItem("dataBalance", JSON.stringify(data));
  } else {
    const dataAdd = JSON.parse(localStorage.getItem("dataBalance"));
    const sumDataStorage = +dataAdd + +data;
    localStorage.setItem("dataBalance", JSON.stringify(String(sumDataStorage)));
    balance.innerHTML = `$${String(sumDataStorage)}`;
  }
};

export const loadDataLocalStorage = () => {
  if (localStorage.getItem("dataBalance") === null) {
    balance.innerHTML = `$${0}`;
  } else {
    const dataLocalStorage = JSON.parse(localStorage.getItem("dataBalance"));
    balance.innerHTML = `$${dataLocalStorage}`;
  }
};
document.addEventListener("DOMContentLoaded", loadDataLocalStorage);
