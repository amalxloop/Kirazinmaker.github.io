// Theme toggle
document.querySelector('.toggle-theme')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Page transition
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");
});

// Typing effect
const text = "whoami";
const typedText = document.getElementById("typed-text");
let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 120);
  } else {
    typedText.insertAdjacentHTML('afterend', `<p class="output">Recursive Architect | Amal Krishna</p>`);
  }
}

window.onload = () => {
  type();
};
