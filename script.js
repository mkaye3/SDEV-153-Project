document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".header-right");

  // Safety check (important because header is loaded via fetch)
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {

    // toggle menu visibility
    nav.classList.toggle("active");

    // toggle icon ☰ ↔ ✕
    if (toggle.textContent === "☰") {
      toggle.textContent = "✕";
    } else {
      toggle.textContent = "☰";
    }

  }, 50);

});
