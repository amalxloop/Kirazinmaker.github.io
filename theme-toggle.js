// script.js

// Theme toggle
document.querySelector('.toggle-theme')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Fade transition
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");
});

document.querySelectorAll("a[href]").forEach(link => {
  if (link.href.includes(location.hostname) && !link.href.includes("#") && !link.target) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.href;
      document.body.classList.add("fade-out");
      setTimeout(() => window.location.href = href, 400);
    });
  }
});

// Mobile nav toggle
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
});
