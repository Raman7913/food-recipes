const menu = document.querySelector("#menu");
const menuContent = document.querySelector("#menu-content");
menu.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
});
