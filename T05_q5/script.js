// ============================================================
// 🌙 FRONT-END INTERACTION SCRIPT (script.js)
// ============================================================
// This JavaScript file adds two interactive features:
// 1️⃣ Theme switching between Light ↔ Dark Mode
// 2️⃣ Fade-in animation trigger when the advertisement section enters view
// ============================================================


// ------------------------------------------------------------
// 1️⃣ DARK MODE TOGGLE LOGIC
// ------------------------------------------------------------

// Get the button element from HTML
const button = document.getElementById('toggleTheme');

// Add a click listener for theme switching
button.addEventListener('click', () => {
  // Toggle the 'dark' class on <body>
  document.body.classList.toggle('dark');

  // Change button text dynamically based on mode
  button.textContent = document.body.classList.contains('dark')
    ? '☀️ Light Mode'   // Dark mode is ON → show Light Mode label
    : '🌙 Dark Mode';    // Dark mode is OFF → show Dark Mode label
});


// ------------------------------------------------------------
// 2️⃣ OPTIONAL: Insert extra CSS via JavaScript (advanced demo)
// ------------------------------------------------------------
// Demonstrates how JS can dynamically create CSS if needed.
const style = document.createElement('style');
style.textContent = `
  .dark {
    background-color: #121212;
    color: #f0f0f0;
  }
  .dark header {
    background-color: #222;
    color: #fff;
  }
`;
document.head.appendChild(style);


// ------------------------------------------------------------
// 3️⃣ SCROLL-TRIGGERED ANIMATION (for RIMAN advertisement)
// ------------------------------------------------------------
// When the #advertisement section scrolls into view,
// it will fade in smoothly using the CSS @keyframes fadeInUp.

const ad = document.getElementById('advertisement');

if (ad) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger the CSS animation defined in style.css
        ad.style.opacity = '1';
        ad.style.animation = 'fadeInUp 1s ease forwards';
        // Stop observing once animation triggered
        observer.unobserve(ad);
      }
    });
  });
  observer.observe(ad);
}

// Show "Under Construction" message when a project is clicked
function showComingSoon(projectName) {
  alert(`🚧 ${projectName}\n正在建设中 / Under Construction...`);
}

// Language toggle
const langButton = document.getElementById('langToggle');
let currentLang = 'en';

langButton.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
});


// ------------------------------------------------------------
// 🧠 UNDERSTANDING NOTES
// ------------------------------------------------------------
// - getElementById(): connects JS to HTML elements
// - addEventListener(): reacts to user actions
// - classList.toggle(): adds/removes CSS class dynamically
// - textContent: updates visible text in the DOM
// - IntersectionObserver(): monitors if an element is visible in viewport
// - style.animation: triggers CSS animation programmatically
//
// ✅ KEY TAKEAWAY:
//   JS controls BEHAVIOR,
//   CSS controls APPEARANCE,
//   HTML provides STRUCTURE.
//   All three combine for full front-end integration.
// ============================================================
