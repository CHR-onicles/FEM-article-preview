const share_icon = document.querySelector(".share-icon");
const share_icon_active = document.querySelector(".share-icon-active");
const share_container = document.querySelector(".share-container");

share_icon.addEventListener("click", () => {
    share_container.classList.toggle("active");
});
share_icon_active.addEventListener("click", () => {
    share_container.classList.toggle("active");
});