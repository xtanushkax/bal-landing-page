// ========================================
// BREAKTHROUGH AUTHOR LIVE — JS
// Optimized via UI/UX Pro Max
// ========================================

(function () {
  // --- Theme Toggle ---
  var toggle = document.getElementById('themeToggle');
  var body = document.body;
  var STORAGE_KEY = 'bal-theme';

  var saved = localStorage.getItem(STORAGE_KEY);
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
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        faqItems.forEach(function (i) { i.classList.remove('open'); });
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // --- Nav shrink on scroll ---
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Scroll Reveal (Intersection Observer) ---
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    var fadeEls = document.querySelectorAll('.fade-in-up');

    if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      fadeEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show all immediately
      fadeEls.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }
})();
