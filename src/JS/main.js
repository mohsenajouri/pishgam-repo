function toggleHeader() {
  const headerMobile = document.querySelector(".headerMobile");
  const headerDesktop = document.querySelector(".headerDesktop");

  if (window.innerWidth <= 1000) {
    headerMobile.style.display = "flex";
    headerDesktop.style.display = "none";
  } else {
    headerMobile.style.display = "none";
    headerDesktop.style.display = "block";
  }
}

window.addEventListener("resize", toggleHeader);

window.addEventListener("DOMContentLoaded", toggleHeader);

const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeMenuHandler();
});

document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenuHandler();
  }
});

function closeMenuHandler() {
  mobileMenu.classList.remove("open");
  closeMenu.style.display = "none";
  menuToggle.style.display = "block";
}

function toggleSubmenu(button) {
  const submenu = button.nextElementSibling;
  if (submenu) {
    submenu.classList.toggle("open");
  }
}
