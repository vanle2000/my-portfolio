(function () {
  'use strict';

  /* ── Aurora scroll fade ────────────────────────────────── */
  var aurora = document.getElementById('aurora');
  if (aurora) {
    var ticking = false;
    function updateAurora() {
      var scrollY = window.scrollY || window.pageYOffset;
      var opacity = Math.max(0, 1 - scrollY / 500);
      aurora.style.opacity = opacity;
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateAurora);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Sidebar TOC builder ────────────────────────────────── */
  var content = document.getElementById('detail-content');
  var tocNav = document.getElementById('toc-nav');
  if (content && tocNav) {
    var headings = content.querySelectorAll('h2, h3');
    headings.forEach(function (h, i) {
      if (!h.id) {
        h.id = 'toc-' + i + '-' + h.textContent.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      if (h.tagName === 'H3') a.style.paddingLeft = 'calc(var(--space-sm) + 0.75rem)';
      tocNav.appendChild(a);
    });

    /* active link on scroll */
    var links = tocNav.querySelectorAll('a');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('is-active'); });
          var active = tocNav.querySelector('[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('is-active');
        }
      });
    }, { rootMargin: '0px 0px -70% 0px' });

    headings.forEach(function (h) { observer.observe(h); });
  }
})();
