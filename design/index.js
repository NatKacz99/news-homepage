const toggleNavigation = document.getElementByClass("toggle-navigation");

toggleNavigation.addEventListener("click", function() {
    const navMenu = document.querySelector("nav ul");

    this.classList.toggle("active");

    navMenu.classList.toggle("active");
});

