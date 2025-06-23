// script.js

// Fade-in on page load
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");
});

// Fade-out on navigation
document.querySelectorAll("a[href]").forEach(link => {
  if (
    link.href.includes(location.hostname) &&
    !link.href.includes("#") &&
    !link.target
  ) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.href;
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 400); // Match this with the CSS transition duration
    });
  }
});
