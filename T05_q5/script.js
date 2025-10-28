// ============================================================
// 💎 RIMAN 招商引流前端互动脚本 (script.js)
// ------------------------------------------------------------
// Features included:
// 1️⃣ Light / Dark Mode Theme Toggle
// 2️⃣ Smooth Fade-in Animation for Advertisement
// 3️⃣ Dynamic “Coming Soon” Pop-up for Future Projects
// 4️⃣ Optional Language Switch (English ⇄ 中文)
// ============================================================


// ------------------------------------------------------------
// 1️⃣ DARK MODE TOGGLE LOGIC
// ------------------------------------------------------------
const themeButton = document.getElementById('toggleTheme');

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeButton.textContent = document.body.classList.contains('dark')
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
  });
}


// ------------------------------------------------------------
// 2️⃣ ADVERTISEMENT SECTION – SCROLL ANIMATION
// ------------------------------------------------------------
// When #advertisement scrolls into view, trigger fade-in animation.

const adSection = document.getElementById('advertisement');

if (adSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        adSection.style.opacity = '1';
        adSection.style.animation = 'fadeInUp 1.2s ease forwards';
        observer.unobserve(adSection);
      }
    });
  }, { threshold: 0.3 }); // trigger when 30% visible

  observer.observe(adSection);
}


// ------------------------------------------------------------
// 3️⃣ PROJECT PLACEHOLDER ALERT
// ------------------------------------------------------------
// Display “Under Construction” pop-up when user clicks unfinished project.
function showComingSoon(projectName) {
  alert(`🚧 ${projectName}\n正在建设中 / Under Construction...`);
}


// ------------------------------------------------------------
// 4️⃣ LANGUAGE TOGGLE BUTTON (可选)
// ------------------------------------------------------------
// Optional bilingual toggle between English & Chinese labels.
const languageToggle = document.getElementById('languageToggle');
let currentLang = 'en';

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    // Update button label accordingly
    languageToggle.textContent = currentLang === 'en' ? '🌐 中文' : '🌐 English';
  });
}


// ------------------------------------------------------------
// 5️⃣ OPTIONAL: DYNAMIC DIAMOND SPARKLE ANIMATION CREATION
// ------------------------------------------------------------
// Adds animated diamonds automatically inside #advertisement for shine effect.
// This makes sure your sparkle effect always loads correctly.
if (adSection) {
  const sparklePositions = [
    { top: '25px', left: '35px' },
    { top: '45px', right: '50px' },
    { bottom: '35px', left: '55px' },
    { bottom: '30px', right: '60px' }
  ];

  sparklePositions.forEach(pos => {
    const diamond = document.createElement('div');
    diamond.classList.add('diamond');
    Object.assign(diamond.style, pos);
    adSection.appendChild(diamond);
  });
}


// ------------------------------------------------------------
// 🧠 RECAP
// ------------------------------------------------------------
// - Theme toggle adds/removes `.dark` on <body>
// - Fade-in animation for Amanda’s marketing section triggers when visible
// - Diamonds auto-added dynamically for glowing aesthetic
// - "Under Construction" alert reused for portfolio items
// - Optional bilingual toggle remains compatible with HTML data attributes
//
// ✅ Result:
//   Smooth, elegant, and engaging interactive effects for RIMAN marketing.
// ============================================================
