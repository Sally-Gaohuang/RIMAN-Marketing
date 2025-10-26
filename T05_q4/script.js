// Toggle between light and dark modes
const button = document.getElementById('toggleTheme');
button.addEventListener('click', () => {
 document.body.classList.toggle('dark');
 button.textContent = document.body.classList.contains('dark') 
  ? '☀️ Light Mode' 
  : '🌙 Dark Mode';
});

// Apply dark theme styles
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
