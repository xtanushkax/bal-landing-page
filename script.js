// ========================================
// BREAKTHROUGH AUTHOR LIVE — JS
// ========================================

(function () {
  // --- Theme Toggle ---
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  const STORAGE_KEY = 'bal-theme';

  // Load saved preference
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') {
    body.classList.replace('dark-mode', 'light-mode');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem(STORAGE_KEY, 'light');
      } else {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem(STORAGE_KEY, 'dark');
      }
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function (i) { i.classList.remove('open'); });
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
})();
