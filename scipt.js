// Typing effect
const text = "Web Developer";
let i = 0;
const speed = 100;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
window.onload = typeEffect;

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Ricorda preferenza
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const theme = body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);
  toggleBtn.textContent = theme === "light" ? "☀️" : "🌙";
});
