// Theme toggle
document.querySelector('.toggle-theme')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Smooth transition
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");
});