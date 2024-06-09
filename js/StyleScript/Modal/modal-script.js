const openModal = document.querySelector("[data-open-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const innerModal = document.querySelector(".inner-modal");

export const modalStyle = () => {
  openModal.addEventListener("click", () => {
    modal.showModal();
  });

  closeModal.addEventListener("click", () => {
    resetModal();
    modal.close();
  });

  document.addEventListener("click", (e) => {
    if (!innerModal.contains(e.target) && !openModal.contains(e.target)) {
      resetModal();
      modal.close();
    }
  });

  const resetModal = () => {
    document.getElementById("input-balance").value = 0;
    document.querySelector(".modal-message-error").innerHTML = "";
  };
};
