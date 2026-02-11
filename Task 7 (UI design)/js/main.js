const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const hamburger = document.getElementById("hamburger");

navItems.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("show");
});
