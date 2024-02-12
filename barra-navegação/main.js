let sidebar = document.querySelector(".sidebar_menu");
let icon = document.querySelector("#car");
let closeBtn = document.querySelector("#Button");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    icon.style.display = 'block';
    closeBtn.classList.replace("fi-rr-menu-burger", "fi-rr-arrow-small-left");
  } else {
    icon.style.display = 'none';
    closeBtn.classList.replace("fi-rr-arrow-small-left", "fi-rr-menu-burger");
  }
}
