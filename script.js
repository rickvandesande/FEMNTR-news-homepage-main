const primaryNav = document.querySelector(".primary-navigation");
const navBackground = document.querySelector(".mobile-nav-bg-overlay");
const navToggle = document.querySelector(".mobile-nav-toggle");
navToggle.addEventListener("click", () => {
    const visible = primaryNav.getAttribute("data-visible");
    
    if (visible === "false") {
        primaryNav.setAttribute("data-visible", true);
        navBackground.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navBackground.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }
});