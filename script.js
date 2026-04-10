document.addEventListener("DOMContentLoaded", () => {

  // Load header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      // THEN initialize hamburger menu
      initMenu();
    });

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

});

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".header-right");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    // toggle icon
    toggle.textContent = toggle.textContent === "☰" ? "✕" : "☰";
  });
}
