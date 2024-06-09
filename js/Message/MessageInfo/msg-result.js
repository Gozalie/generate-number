const info = document.querySelector(".info");

// message result
export const messageResult = (color, message) => {
  const spanElement = document.createElement("span");
  const spanMessage = document.createTextNode(message);
  spanElement.style.color = `${color}`;
  spanElement.appendChild(spanMessage);
  info.appendChild(spanElement);
};
