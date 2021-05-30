const modal = document.getElementById("bookclubrego");
const modal_background = document.getElementById("modal-background");
const btn = document.getElementById("registerModalBtn");

const openModal = () => {
  modal.style.visibility = "visible";
  modal_background.style.visibility = "visible";
  btn.style.transition = "all 0.2s";
  document.getElementById("givenName").focus();
};

const closeModal = () => {
  btn.style.transition = "all 0.01s";
  modal.style.visibility = "hidden";
  modal_background.style.visibility = "hidden";
  document.activeElement.blur();
};
