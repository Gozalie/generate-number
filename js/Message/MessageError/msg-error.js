const info = document.querySelector(".info");
export const messageModalError = document.querySelector(".modal-message-error");

// message error
export const messageError = (color, message) => {
  if (info.innerHTML === "") {
    const spanElement = document.createElement("span");
    const spanMessage = document.createTextNode(message);
    spanElement.className = "message-error";
    spanElement.style.backgroundColor = `${color}`;
    spanElement.appendChild(spanMessage);

    info.appendChild(spanElement);
  } else {
    return;
  }
};

// message error modal
export const messageErrorModal = (color, message) => {
  const warnEmpty = document.createTextNode(message);
  const smallElement = document.createElement("small");
  if (messageModalError.innerHTML === "") {
    smallElement.appendChild(warnEmpty);
    messageModalError.appendChild(smallElement);
    messageModalError.style.color = `${color}`;
  } else {
    return;
  }
};
