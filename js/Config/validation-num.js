import { jackpotNumber } from "./algorithm-num.js";
import { messageResult } from "../Message/MessageInfo/msg-result.js";
import { balanceConfig } from "./blnc/balance-config.js";

// ---------- CHECKING NUMBER --------------
export const checkingInfo = (digit1, digit2, digit3) => {
  const jackpot = jackpotNumber(digit1, digit2, digit3);

  if (digit1 + digit2 + digit3 === jackpot) {
    messageResult("yellow", "JACKPOT !!!");
    balanceConfig("jackpot");
  } else if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    messageResult("green", "Congratulations!");
    balanceConfig("win");
  } else {
    messageResult("red", "You lose");
    balanceConfig("lose");
  }
};
