const share_container = document.querySelector(".share-container");
const share_btns = [document.querySelector(".share-icon"), document.querySelector(".share-icon-active")];
share_btns.forEach((btn) => {
    btn.addEventListener("click", () => share_container.classList.toggle("active"));
});