// toggle active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar area sidebar untuk menghilangkan nav
const menu = document.querySelector("#hamburger-menu");

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});