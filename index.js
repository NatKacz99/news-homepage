const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");
const overlay = document.getElementById("overlay");

openMenu.addEventListener("click", function() {
  navbar.classList.add("open");
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
})

closeMenu.addEventListener("click", function() {
  navbar.classList.remove("open");
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
})
